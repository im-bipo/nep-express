import React from "react";

import DestinationCard from "../components/Destination_Card";
import DialogBtn from "./Dialog";

const App = () => {
  return (
    <div className="bg-[#F2F6FB] w-screen  ">
      <div className="flex items-center justify-between px-16">
        <h1 className="font-semibold py-10 text-center sm:text-left ">
          Our Popular Destinations
        </h1>

        <DialogBtn />
      </div>
      <DestinationCard />
    </div>
  );
};

export default App;
