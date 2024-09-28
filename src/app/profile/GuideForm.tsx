import { iamGuide } from "@/actions/user";
import { Button } from "@/components/ui/button";
import {  useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const GuideForm = () => {
  const { user } = useKindeBrowserClient();
  return (
    <div className=" w-10/12 flex flex-col gap-4 mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Guide Registration Form</h2>

      <form action={iamGuide} className="flex flex-col gap-4">
        <div className="mb-4">
          <label htmlFor="citizenshipCard" className="block text-black text-xl font-medium">
            Citizenship Card
          </label>
          <input type="text" value={user?.id} name="id" hidden />
          <input
            type="file"
            name="citizenshipFile"
            id="citizenshipFile"
            className="mt-1 block w-full px-3 py-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your citizenship card "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="citizenshipNo" className="blocktext-black text-xl font-medium">
            Citizenship Card
          </label>
          <input
            type="text"
            name="citizenshipNo"
            id="citizenshipNo"
            className="mt-1 block w-full px-3 py-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your citizenship card number "
          />
        </div>
<div className="flex flex-col gap-4">
  <div className="flex justify-center">   
      
   <Button 
        className="w-fit px-4"
          type="submit"
        
        >
          Submit
        </Button>
        </div>
      
       
        </div>


      </form>
    </div>
  );
};

export default GuideForm;
