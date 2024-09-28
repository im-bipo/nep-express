import { iamGuide } from "@/actions/user";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const GuideForm = () => {
  const { user } = useKindeBrowserClient();
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Guide Registration Form</h2>

      <form action={iamGuide}>
        <div className="mb-4">
          <label htmlFor="citizenshipCard" className="block text-gray-700">
            Citizenship Card
          </label>
          <input type="text" value={user?.id} name="id" hidden />
          <input
            type="file"
            name="citizenshipFile"
            id="citizenshipFile"
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your citizenship card "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="citizenshipNo" className="block text-gray-700">
            Citizenship Card
          </label>
          <input
            type="text"
            name="citizenshipNo"
            id="citizenshipNo"
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your citizenship card number "
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GuideForm;
