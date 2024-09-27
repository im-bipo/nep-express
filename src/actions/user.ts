"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export const getUserData = async ({ id }: { id: string }) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

//for guide
export const iamGuide = async (data: FormData) => {
  const user_id = data.get("id") as string;
  await prisma.user.update({
    data: {
      role: "GUIDE",
      Guide: {
        create: {
          id: user_id,
        },
      },
    },
    where: { id: user_id },
  });
  redirect("/profile");
};

//for tourist
export const iamTourist = async (data: FormData) => {
  const user_id = data.get("id") as string;
  const role = data.get("touristType");
  const isLocal = role === "local";
  await prisma.user.update({
    data: {
      role: "TOURIST",
      Tourist: {
        create: {
          id: user_id,
          local: isLocal,
        },
      },
    },
    where: { id: user_id },
  });
  redirect("/profile");
};


//for vendor
export const iamVendor = async (data: FormData) => {
  const user_id = data.get("id") as string;

  await prisma.user.update({
    data: {
      role: "VENDOR",
      Verndor: {
        create: {
          id: user_id,
        },
      },
    },
    where: { id: user_id },
  });
  redirect("/profile");
};
