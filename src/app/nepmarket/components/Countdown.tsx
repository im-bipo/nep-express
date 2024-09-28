import React from "react";
import Countdown from "react-countdown";

const Countdown = () => {
  const Completionist = () => <span>You are good to go!</span>;
  return (
    <div>
      <Countdown date={Date.now() + 5000}>
        <Completionist />
      </Countdown>
    </div>
  );
};

export default Countdown;
