"use client";
import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const CurrentUrlComponent = () => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const getCurrentUrl = () => {
    return window.location.href;
  };

  const copyLink = async (e) => {
    e.preventDefault();
    const currentUrl = getCurrentUrl();

    try {
      await navigator.clipboard.writeText(currentUrl);
      setMessage("Link copied to clipboard!");
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setMessage("");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      setMessage("Failed to copy!");
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div onClick={copyLink} className="flex items-center cursor-pointer">
        <p className="text-secondary">
          <FaShareAlt />
        </p>
      </div>
      {visible && (
        <div className="fixed top-4 right-4 bg-secondary text-white p-3 rounded shadow-lg transition-opacity duration-300">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default CurrentUrlComponent;
