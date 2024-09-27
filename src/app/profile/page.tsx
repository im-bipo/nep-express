import { getUserData } from "@/actions/user";
import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import Guest from "./Guest";
const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    console.log("User not found");
    return <div>You are not logged in.</div>;
  }
  // Check if the user exists in the database
  const userData = await getUserData({ id: user.id });

  
  if (userData?.role == "GUEST") return <Guest/>;

  if (userData?.role == "GUIDE") return <h1>guide profile</h1>;

  if (userData?.role == "TOURIST") return <h1>Tourist profile </h1>;

  if (userData?.role == "VENDOR") return <h1>Vendor Profile</h1>;

  return <><LogoutLink>lo</LogoutLink></>;
};

export default Profile;
