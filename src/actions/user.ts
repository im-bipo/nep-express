"use server";

import prisma from "@/lib/db";

export const getUserData = async ({ id }: { id: string }) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};