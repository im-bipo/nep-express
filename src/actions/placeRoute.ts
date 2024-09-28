"use server";

// import prisma from "@/lib/db";

export const getPathRoutes = async (
  initiaPlace: { lat: number; long: number },
  finalDestination: { lat: number; long: number }
) => {
  console.log(
    "--------------------------------------------------------------------------------------------------------------------------"
  );
  console.log("The data");
  console.log(
    "--------------------------------------------------------------------------------------------------------------------------"
  );
  const data = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${initiaPlace.long}%2C${initiaPlace.lat}%3B${finalDestination.long}%2C${initiaPlace.lat}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&notifications=none&access_token=${process.env.MAP_API}`
  );
  //   const json = await data.json();
  //   return json;
  if (!data.ok) {
    throw new Error(`HTTP error! status: ${data.status}`);
  }
  const json = await data.json();
  const locations = json.routes[0].geometry.coordinates.map(
    (item: number[]) => {
      return [item[1], item[0]];
    }
  );
  return locations;

  // const distance = 4000; // Distance in meters
  // const locationConditions = locations
  //   .map(
  //     ([lat, lng]: [lat: number, lng: number]) => `
  //             ST_DWithin(geom::geography, ST_SetSRID(ST_Point(${lng}, ${lat}), 4326), ${distance})`
  //   )
  //   .join(" OR ");

  // const query = `
  //           SELECT name, description, ST_AsText(geom::geometry) AS location
  //           FROM "Place"
  //           WHERE ${locationConditions};
  //         `;

  // const places = await prisma.$queryRawUnsafe(query);
  // return places;
};
