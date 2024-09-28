import React from "react";

const SubHeader = () => {
  return (
    <header className="bg-purple-100 h-16 flex px-14 items-center justify-between">
      <ul className="flex gap-8 ">
        <li>About Us</li>
        <li>FAQs</li>
        <li>Terms & Condition</li>
      </ul>
      <div className="flex gap-5">
        <p className="rounded-full">logo</p>
        <p>Logo</p>
      </div>
    </header>
  );
};

export default SubHeader;
