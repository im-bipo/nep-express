import React from "react";
import {
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Login = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    redirect("/profile");
  }

  const googleConnectinoId = process.env.KINDE_GOOGLE_CONNECTION_ID as string;
  const githubConnectinoId = process.env.KINDE_GITHUB_CONNECTION_ID as string;
  const discordConnectinoId = process.env.KINDE_DISCORD_CONNECTION_ID as string;
  return (
    <div className="flex flex-col">
      <RegisterLink
        postLoginRedirectURL="/api/auth/create"
        authUrlParams={{ connection_id: googleConnectinoId }}
      >
        google
      </RegisterLink>
      <RegisterLink
        postLoginRedirectURL="/api/auth/create"
        authUrlParams={{ connection_id: githubConnectinoId }}
      >
        github
      </RegisterLink>
      <RegisterLink
        postLoginRedirectURL="/api/auth/create"
        authUrlParams={{ connection_id: discordConnectinoId }}
      >
        discord
      </RegisterLink>
      <LogoutLink>Log out</LogoutLink>
    </div>
  );
};

export default Login;
