"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { v4 } from "uuid";

export const addNewPlace = async ({
  name,
  description,
  lat,
  long,
  userId,
}: {
  name: string;
  description: string;
  lat: number;
  long: number;
  userId: string;
}) => {
  const uuid = v4();
  await prisma.$executeRaw`
    INSERT INTO "Place" (id, name, description, geom, categories, "addedById")
    VALUES (
      ${uuid},
      ${name},
      ${description},
      ST_SetSRID(ST_MakePoint(${long}, ${lat}), 4326),
      'NORMAL',
      ${userId}
      
    );
  `;
  redirect(`/destination/place/${uuid}`);
};

export const getPlaces = async () => {
  const places = await prisma.place.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return places
};

// Define the types for the Place result
interface Place {
  id: string;
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

// Define the function to get the place by ID
export const getPlaceById = async (id: string): Promise<Place | null> => {
  const query = `
    SELECT ST_X(geom::geometry) AS lng, ST_Y(geom::geometry) AS lat, name, description
    FROM "Place"
    WHERE id = $1;
  `;

  try {
    // Use Prisma's raw query function with the id as parameter
    const place = await prisma.$queryRawUnsafe<Array<{ name: string; description: string; lat: number; lng: number }>>(query, id);

    if (place.length === 0) {
      return null;  // Return null if no place is found
    }

    // Format the result with type safety
    const formattedPlace: Place = {
      id,
      name: place[0].name,
      description: place[0].description,
      coordinates: {
        lat: place[0].lat,
        lng: place[0].lng,
      },
    };

    return formattedPlace;
  } catch (error) {
    throw new Error(`Failed to retrieve place: ${error instanceof Error ? error.message : "Unknown error"}`);
  }
};

