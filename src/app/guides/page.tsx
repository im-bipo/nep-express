import { getGuides, getUserData } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const page = async () => {
  const guides = await getGuides();
  console.log(guides);
  return (
    <div className="container">
      <div className="w-full flex flex-row-reverse my-4">
        <AddNewPlace />
      </div>
      {guides.map((guide, index) => (
        <div
          key={guide.id}
          className="p-10 py-4 m-4 bg-slate-200 w-fit rounded-md"
        >
          <div>{index + 1}</div>
          <h2>{guide.name}</h2>
          <p>{guide.email}</p>
          <Button>Book Now</Button>
        </div>
      ))}
    </div>
  );
};

export default page;

const AddNewPlace = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    const res = await getUserData({ id: user.id });
    return (
      res?.role === "GUIDE" && (
        <Link href="/guides/addlocation">
          <Button>Add Place</Button>
        </Link>
      )
    );
  }
};
