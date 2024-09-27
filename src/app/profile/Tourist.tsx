import { useState } from "react";
import Image from "next/image";
// import image from "/public/nepexpress-01 1.png";
import image from '/public/Rectangle 96.png'



const Tourist = () => {
   const [touristType, setTouristType] = useState("");
  return (
    <div className="form-container w-11/12 mx-auto grid grid-cols-2 gap-6 justify-center items-center mb-32 mt-14">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={image}
          alt="signin logo"
          width={400}
          height={400}
          className="w-60 object-cover"
        />
        <p className="text-2xl font-medium">
          WELCOME TO <span className="text-mainColor">NEP</span>
          <span className="text-secondary">EXPRESS</span>
        </p>
      </div>

      <form
        
        className="flex flex-col gap-10 w-full bg-white text-black py-4 px-10 rounded-md border-2 shadow-md mt-9"
      >
        <h1 className="text-secondary font-semibold text-xl">
          Tourist Details Form
        </h1>

        <div className="flex flex-col gap-2">
          <label htmlFor="touristType">Tourist Type:</label>
          <select
            name="touristType"
            value={touristType}
            onChange={(e) => {
              setTouristType(e.target.value);
            }}
            className="px-4 py-4 border-2"
            required
          >
            <option>Select Tourist Type</option>
            <option value="local">Local</option>
            <option value="international">International</option>
          </select>
        </div>
        {touristType === "local" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="nationalIdentity">
              National Identity Number (NIN):
            </label>
            <input
              type="text"
              name="nationalIdentity"
              className="p-2 rounded-md bg-transparent focus:outline-none border-2"
              required
            />
            <div>
              <input
                type="file"
                name="NINFile"
                className="p-2 rounded-md bg-transparent focus:outline-none border-2"
                required
              />
            </div>
          </div>
        )}

        {touristType === "international" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="passport">Passport Number:</label>
            <input
              type="text"
              name="passportNumber"
              className="p-2 rounded-md bg-transparent focus:outline-none border-2"
              required
            />
            <input
              type="file"
              name="passportFile"
              className="p-2 rounded-md bg-transparent focus:outline-none border-2"
              required
            />
          </div>
        )}

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-mainColor w-fit px-6 py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Tourist;