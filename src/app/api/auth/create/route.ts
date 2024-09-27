import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { redirect } from "next/navigation";

export const GET = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
  
    // Check if the user exists in the database
    let user_data = await prisma.user.findUnique({
      where: { id: user.id as string },
    });
  
    // If user does not exist, create a new user and update `user_data`
    if (!user_data) {
      user_data = await createUser(user);
    }
    return redirect("/profile");
  };
  
  // Create a new user
  const createUser = async (user: KindeUser<Record<string, unknown>>) => {
    const data = await prisma.user.create({
      data: {
        id: user.id,
        name: (user.given_name || "") + " " + (user.family_name || ""),
        email: user.email || "",
      },
    });
    return data;
  };
