"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MdDateRange } from "react-icons/md";
import { getPlaces } from "@/actions/place";

interface FormValues {
  startingPoint: string;
  finalDestination: string;
  durationOfTrip: string;
}

interface Place {
  id: string;
  name: string;
}

const PlanYourTripForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    startingPoint: "",
    finalDestination: "",
    durationOfTrip: "",
  });

  const [availablePlaces, setAvailablePlaces] = useState<Place[]>([]);

  useEffect(() => {
    (async () => {
      const res = await getPlaces();
      if (Array.isArray(res)) {
        setAvailablePlaces(res);
      }
    })();
  }, []);
console.log(availablePlaces)
  const router = useRouter();

  // Add type annotations for the event handler
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Type-safe form validation check
  const isFormValid = Object.values(formValues).every(
    (value) => value.trim() !== ""
  );

  // Add type annotation for the handleNext function
  const handleNext = (): void => {
    if (isFormValid) {
      router.push(
        `/destination/destinationContent?startingPoint=${formValues.startingPoint}&finalDestination=${formValues.finalDestination}&durationOfTrip=${formValues.durationOfTrip}`
      );
    }
  };

  return (
    <form className="bg-[#F2F6FB] flex flex-col justify-center">
      <div className="py-4 px-8 flex flex-col gap-2">
        <label htmlFor="startingPoint" className="font-semibold">
          Starting Point
        </label>
        <select
          name="startingPoint"
          value={formValues.startingPoint}
          onChange={handleChange}
          required
          className="bg-[unset] border-gray-800 border-b-2 focus:outline-none mt-1 mb-4 w-[80vw] max-w-[26rem] md:w-[75%]"
        >
          <option value="" disabled>
            Select Starting Point
          </option>
          {availablePlaces.map((place) => (

            <option key={place.id} value={place.id}>

              {place.name}
            </option>
          ))}
        </select>
      </div>

      <div className="py-4 px-8 flex flex-col gap-2">
        <label htmlFor="finalDestination" className="font-semibold">
          Final Destination
        </label>
        <select
          name="finalDestination"
          value={formValues.finalDestination}
          onChange={handleChange}
          required
          className="bg-[unset] border-gray-800 border-b-2 focus:outline-none mt-1 mb-4 w-[80vw] max-w-[26rem] md:w-[75%]"
        >
          <option value="" disabled>
            Select Final Destination
          </option>
          {availablePlaces.map((place) => (
            <option key={place.id} value={place.id}>

              {place.name}
            </option>
          ))}
        </select>
      </div>
      <div className="py-4 px-8">
        <label htmlFor="durationOfTrip" className="font-semibold">
          Number Of Trip Days
        </label>
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
