import React from "react";
import { MoonLoader } from "react-spinners";

const loader = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <MoonLoader color="#ff0000" size={90} speedMultiplier={1} />
    </div>
  );
};

export default loader;
