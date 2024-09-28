import React from "react";
import Link from "next/link";

const restrictedPage = () => {
  return (
    <div className="flex justify-center items-center flex-col py-20">
      <div className="text-9xl font-semibold">Sorry!</div>
      <p className="my-10 font-semibold text-3xl ">You are not a Guide</p>
      <p className="pb-5">Login as a Guide to Acess this page. </p>
      <div className="flex gap-5">
        <Link href="/">
          <button className="  px-4 p-2 rounded-lg border-2 bg-primary text-white">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default restrictedPage;
