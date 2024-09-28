import React from "react";
import {

  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {  FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import image1 from '/public/image 48.png'
import image2 from '/public/image 47 (2).png'

import Image from "next/image";

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
    <div className="grid grid-cols-2 py-16">
      <div className="flex flex-col gap-4">
<div className="flex justify-end ">
  <Image src={image1} alt="login photos" width={500} height={500} className="w-40 object-cover"/>
</div>

<div className="flex justify-center items-center">
  <h1 className="text-3xl font-semibold">Welcome To <span className="text-primary">Nep</span><span className="text-secondary">express</span></h1>
</div>

<div className="flex justify-between">
<Image src={image1} alt="login photos" width={500} height={500} className="w-40 object-contain "/>
<Image src={image2} alt="login photos" width={500} height={500} className="w-60 object-cover"/>


</div>


      </div>
    <div className="flex flex-col gap-5 w-[600px] py-5 shadow-xl px-28 pt-20">
      <div className="flex  items-center gap-3">
        <div className="w-32 bg-secondary h-[2px]"></div>
      <h1 className="text-xl text-secondary ">Sign in via</h1>
      <div className="w-28 bg-secondary h-[2px]"></div>
      </div>
      <div className="flex justify-center items-center border-2 border-black w-96 bg-transparent px-4  py-4 gap-6 rounded-xl ">
        <FaGoogle className="text-secondary"/>
              <RegisterLink
        postLoginRedirectURL="/api/auth/create"
        authUrlParams={{ connection_id: googleConnectinoId }}
      >
SIGN IN WITH GOOGLE
      </RegisterLink>
      </div>
<div className="flex justify-center items-center border-2 border-black w-96 bg-transparent px-4 py-4 gap-6 rounded-xl ">
  <FaGithub/>
        <RegisterLink
        postLoginRedirectURL="/api/auth/create"
        authUrlParams={{ connection_id: githubConnectinoId }}
      >
     SIGN I N WITH GITHUB
      </RegisterLink>
      </div>
<div className="flex justify-center items-center border-2 border-black w-96 bg-transparent px-4 py-4 gap-6 rounded-xl ">
  <FaFacebook/>
      <RegisterLink
        postLoginRedirectURL="/api/auth/create"
        authUrlParams={{ connection_id: discordConnectinoId }}
      >
    SIGN IN  WITH FACEBOOK
      </RegisterLink>
      </div>
  
    </div>
    </div>
  );
};

export default Login;
