"use client";
import { useEffect, useState } from "react";
import Map from "./Map";
import RestrictedPage from "./restrictedPage";
import Loader from "./loader";
import { getUserData } from "@/actions/user";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { addNewPlace } from "@/actions/place";

const Page = () => {
  const { user } = useKindeBrowserClient();
  const id = user?.id as string;
  const [validUser, setValidUser] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    if (user) {
      (async () => {
        const res = await getUserData({ id: id });
        if (res?.role === "GUIDE") {
          setValidUser(true);
        } else {
          setValidUser(false);
        }
      })();
    }
  }, [id, user]);

  const [position, setPosition] = useState([27.700769, 85.30014]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
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
    addNewPlace({
      userId: id,
      name: name,
      description: description,
      lat: position[0],
      long: position[1],
    });
  };

  if (validUser == undefined) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (!validUser) {
    return (
      <div>
        <RestrictedPage />
      </div>
    );
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
            className="my-4 text-sm w-full placeholder:text-[#d9d9d9] text-[#a1a1a1] bg-transparent outline-none flex items-center"
            placeholder="Enter the Description"
          />
        </div>

        <Map position={position} setPosition={setPosition} />

        <div className="my-4 w-full lg:w-[50vw] border-b-2 border-[#d9d9d9]">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            value={position[0]}
            onChange={(e) => {
              const lat = parseFloat(e.target.value);
              setPosition([lat, position[1]]);
            }}
            className="my-4 text-sm w-full placeholder:text-[#d9d9d9] text-[#a1a1a1] bg-transparent outline-none"
            placeholder="Enter latitude"
          />
        </div>
        <div className="my-4 w-full lg:w-[50vw] border-b-2 border-[#d9d9d9]">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            value={position[1]}
            onChange={(e) => {
              const lng = parseFloat(e.target.value);
              setPosition([position[0], lng]);
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
