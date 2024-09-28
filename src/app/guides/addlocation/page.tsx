"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { LatLngExpression } from "leaflet";

const MapWithNoSSR = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => <p>Loading map...</p>
});


import { useEffect } from "react";

import RestrictedPage from "./restrictedPage";
import Loader from "./loader";
import { getUserData } from "@/actions/user";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { addNewPlace } from "@/actions/place";


const Page: React.FC = () => {
  const [position, setPosition] = useState<LatLngExpression>([27.7172, 85.324]);
  const { user } = useKindeBrowserClient();
  const id = user?.id as string;
  const [validUser, setValidUser] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (user) {
      (async () => {
        const res = await getUserData({ id });
        setValidUser(res?.role === "GUIDE");
      })();
    }
  }, [id, user]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Form Validation
    if (!name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!description.trim()) {
      setError("Description is required.");
      return;
    }

    // Submit the new place
    await addNewPlace({
      userId: id,
      name,
      description,
      lat: (position as number[])[0],
      long: (position as number[])[1],
    });
  };

  // Loader while user validation is in progress
  if (validUser === undefined) {
    return <Loader />;
  }

  // Restrict access for non-guide users
  if (!validUser) {
    return <RestrictedPage />;
  }

  return (
    <main className="bg-[#F2F6FB] flex flex-col justify-center lg:items-center px-20 py-10">
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-600">{error}</p>}

        <div className="my-4 w-full lg:w-[50vw] border-b-2 border-[#d9d9d9]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="my-4 text-sm w-full placeholder:text-[#d9d9d9] text-[#a1a1a1] bg-transparent outline-none"
            placeholder="Enter Place Name"
          />
        </div>

        <div className="my-4 w-full lg:w-[50vw] border-b-2 border-[#d9d9d9]">
          <label htmlFor="description">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="my-4 text-sm w-full placeholder:text-[#d9d9d9] text-[#a1a1a1] bg-transparent outline-none"
            placeholder="Enter the Description"
          />
        </div>

        <MapWithNoSSR position={position} setPosition={setPosition} />

        <div className="my-4 w-full lg:w-[50vw] border-b-2 border-[#d9d9d9]">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            value={(position as number[])[0]}
            onChange={(e) => {
              const lat = parseFloat(e.target.value);
              setPosition([lat, (position as number[])[1]]);
            }}
            className="my-4 text-sm w-full placeholder:text-[#d9d9d9] text-[#a1a1a1] bg-transparent outline-none"
            placeholder="Enter latitude"
          />
        </div>

        <div className="my-4 w-full lg:w-[50vw] border-b-2 border-[#d9d9d9]">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            value={(position as number[])[1]}
            onChange={(e) => {
              const lng = parseFloat(e.target.value);
              setPosition([(position as number[])[0], lng]);
            }}
            className="my-4 text-sm w-full placeholder:text-[#d9d9d9] text-[#a1a1a1] bg-transparent outline-none"
            placeholder="Enter longitude"
          />
        </div>

        <div className="items-center flex justify-center">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded-lg my-3 hover:bg-red-600"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Page;
