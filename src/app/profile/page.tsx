import { getUserData } from "@/actions/user";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import Guest from "./Guest";
import GuideProfile from "./GuideProfile";
import TouristProfile from "./TouristProfile";
import VenderProfile from "./VenderProfile";
const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return <div>You are not logged in.</div>;
  }
  // Check if the user exists in the database
  const userData = await getUserData({ id: user.id });

  if (userData?.role == "GUEST") return <Guest />;

  if (userData?.role == "GUIDE") return <GuideProfile />;

  if (userData?.role == "TOURIST") return <TouristProfile />;

  if (userData?.role == "VENDOR") return <VenderProfile />;

  return (
    <>
      <LogoutLink>logout</LogoutLink>
    </>
  );
};

export default Profile;
