import { getGuides, getUserData } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const page = async () => {
  const guides = await getGuides();

  return (
    <div className="container">
      <div className="w-full flex flex-row-reverse my-4">
        <AddNewPlace />
      </div>
      <div className="grid grid-cols-4">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="p-10 py-4 m-4 bg-slate-200 w-fit rounded-md flex flex-col gap-2"
          >
            <div>
              <img
                src='https://www.w3schools.com/w3images/avatar2.png'
                alt="guideimages"
                width={400}
                height={400}
                className="w-40 object-cover"
              />
            </div>
            {/* <div>{index + 1}</div> */}
            <h2 className="text-xl font-semibold">{guide.name}</h2>
            <p>{guide.email}</p>
            <div className="flex justify-start gap-10">
              <p className="text-xl font-semibold">$ 120</p>
              <button className="bg-green-600 px-2 py-1 w-fit rounded-md text-white">
                Book Now{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
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
