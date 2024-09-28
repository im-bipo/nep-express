"use server";

import prisma from "@/lib/db";

export const getPathRoutes = async (
  initiaPlace: { lat: number; long: number },
  finalDestination: { lat: number; long: number },
  durationOfTrip: number
) => {
  const data = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${initiaPlace.long}%2C${initiaPlace.lat}%3B${finalDestination.long}%2C${finalDestination.lat}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${process.env.MAP_API}`
  );

  if (!data.ok) {
    throw new Error(`HTTP error! status: ${data.status}`);
  }

  const json = await data.json();
  const locations = json.routes[0].geometry.coordinates.map(
    (item: number[]) => {
      return { lat: item[1], lng: item[0] };
    }
  );

  const distance = 1000 * durationOfTrip; // Distance in meters

  // Create the conditions for finding places near the route
  const locationConditions = locations
    .map(
      ({ lat, lng }:{lat:number , lng:number}) => `
        ST_DWithin(geom::geography, ST_SetSRID(ST_Point(${lng}, ${lat}), 4326), ${distance})
      `
    )
    .join(" OR ");

  // Create an ORDER BY clause based on the distance from the initial point and final destination
  const query = `
    SELECT name, description, ST_AsText(geom::geometry) AS location,
    ST_Distance(geom::geography, ST_SetSRID(ST_Point(${initiaPlace.long}, ${initiaPlace.lat}), 4326)) AS distance_from_start,
    ST_Distance(geom::geography, ST_SetSRID(ST_Point(${finalDestination.long}, ${finalDestination.lat}), 4326)) AS distance_from_end
    FROM "Place"
    WHERE ${locationConditions}
    ORDER BY distance_from_start ASC, distance_from_end DESC;
  `;

  const places = await prisma.$queryRawUnsafe(query);
  return places;
};
