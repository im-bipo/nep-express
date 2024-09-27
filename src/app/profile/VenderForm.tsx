import { iamVendor } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const Vender = () => {
  const { user } = useKindeBrowserClient();
  return (
    <>
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4"> Vender Registration Form</h2>

        <form action={iamVendor}>
          <div className="mb-4">
            <input type="text" value={user?.id} name="id" hidden />
            <label htmlFor="PANNumber" className="block text-gray-700">
              Pan Number
            </label>
            <input
              type="text"
              name="PANNumber"
              id="PANNumber"
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your PAN Number "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="PANFile" className="block text-gray-700">
              PAN Documnets
            </label>
            <input
              type="file"
              name="PANFile"
              id="PANFile"
              className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your PAN File number "
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Vender;
