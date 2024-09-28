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
