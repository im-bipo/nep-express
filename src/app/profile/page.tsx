import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <div>
        <h1>Profile</h1>
        <p>Name: {user.given_name}</p>
        <p>Email: {user.email}</p>
      </div>
      <LogoutLink>Logout</LogoutLink>
    </>
  );
};

export default Profile;
