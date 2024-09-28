'use server';

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export const GET = async () => {
  try {
    const session = await getKindeServerSession(); // Await the session retrieval
    const user = await session.getUser();

    if (!user || !user.id) {
      console.error('User not found or missing ID');
      return new Response(JSON.stringify({ error: 'User not authenticated' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check if the user exists in the database
    let user_data = await prisma.user.findUnique({
      where: { id: user.id },
    });

    // If user does not exist, create a new user and update `user_data`
    if (!user_data) {
      user_data = await createUser(user);
    }

    // Redirect to profile page
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/profile",
      },
    });
  } catch (error) {
    console.error('Error in GET /api/auth/create:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// Create a new user
const createUser = async (user: KindeUser<Record<string, unknown>>) => {
  try {
    const data = await prisma.user.create({
      data: {
        id: user.id,
        name: `${user.given_name || ''} ${user.family_name || ''}`.trim(),
        email: user.email || '',
        image: user.picture || `https://avatar.vercel.sh/${user.id}`
      },
    });
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
