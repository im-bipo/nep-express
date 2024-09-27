"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoLocationSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const PlanYourTripForm = () => {
  const [formValues, setFormValues] = useState({
    startingPoint: "",
    finalDestination: "",
    durationOfTrip: "",
  });

  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  const handleNext = () => {
    if (isFormValid) {
      router.push(
        `/destination/destinationContent?startinPoint=${formValues.startingPoint}&finalDestination=${formValues.finalDestination}&durationOfTrip=${formValues.durationOfTrip}`
      );
    }
  };

  return (
    <form className="bg-[#F2F6FB] flex flex-col justify-center">
      <div className="py-4 px-8">
        <label htmlFor="startingPoint">Starting Point</label>
        <div className="flex items-center justify-center my-4 border-b-2 pb-2 gap-4">
          <IoLocationSharp className="text-[#c0c0c0]" />
          <input
            type="text"
            name="startingPoint"
            value={formValues.startingPoint}
            onChange={handleChange}
            className="text-sm w-full placeholder:text-[#c0c0c0] bg-transparent outline-none"
            placeholder="Enter Your Starting Point"
          />
        </div>
      </div>

      <div className="py-4 px-8">
        <label htmlFor="finalDestination">Final Destination</label>
        <div className="flex items-center justify-center my-4 border-b-2 pb-2 gap-4">
          <IoLocationSharp className="text-[#c0c0c0]" />
          <input
            type="text"
            name="finalDestination"
            value={formValues.finalDestination}
            onChange={handleChange}
            className="text-sm w-full placeholder:text-[#c0c0c0] bg-transparent outline-none"
            placeholder="Enter Your Final Destination"
          />
        </div>
      </div>

      <div className="py-4 px-8">
        <label htmlFor="durationOfTrip">Number Of Trip Days</label>
        <div className="flex items-center justify-center my-4 border-b-2 pb-2 gap-4">
          <MdDateRange className="text-[#c0c0c0]" />
          <input
            type="number"
            name="durationOfTrip"
            value={formValues.durationOfTrip}
            onChange={handleChange}
            className="text-sm w-full placeholder:text-[#c0c0c0] bg-transparent outline-none"
            placeholder="Enter Number of Days"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button
          type="button"
          className={`flex justify-center items-center w-fit px-6 py-2 bg-primary text-white rounded-lg ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNext}
          disabled={!isFormValid}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default PlanYourTripForm;
