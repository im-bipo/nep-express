import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const GET = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  console.log("GET");
  return redirect("/");
};
