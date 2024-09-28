"use client";
import React, { useState } from "react";
import "./index.css";

const initialTimelineData = [
  {
    title: "Bipin",
    subtitle: "Starting Point",
  },
  {
    title: "Lumbini",
    subtitle: "23 Km from {referenceTitle}",
  },
  {
    title: "Bhairahawa",
    subtitle: "72 Km from {referenceTitle}",
  },
  {
    title: "Sunauli",
    subtitle: "72 Km from {referenceTitle}",
  },
  {
    title: "2011",
    subtitle: "72 Km from {referenceTitle}",
  },
  {
    title: "2007",
    subtitle: "Final Destination",
    isEndpoint: true,
  },
];

const Page = ({searchParams}) => {
  const preTrip = JSON.parse(searchParams.data)
  console.log(preTrip)
  const referenceTitle = initialTimelineData[0].title;
  const [timelineData, setTimelineData] = useState(initialTimelineData);
  
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const handleDelete = (index) => {
    setTimelineData((prevData) => prevData.filter((_, i) => i !== index));
    setShowModal(false);
    setSelectedIndex(null);
  };

  const openModal = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedIndex(null);
  };

  return (
    <div className="timeline">
      {preTrip.map((entry, index) => (

        <div
          key={index}
          className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`}
          onClick={() => handleSelect(index)}
        >
          <div className="content">
            <h2 className="font-semibold">{entry.name}</h2>
            <p className="text-sm text-[#7b7b7b]">
              {entry.isEndpoint
                ? "Endpoint"
                : entry.description.replace("{referenceTitle}", referenceTitle)}

            </p>
            {selectedIndex === index && (
              <button
                className="bg-[#ff0000] hover:opacity-80 p-2 w-24 mt-4 rounded-lg text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(index);
                }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirm Deletion</h3>
            <p className="my-4">Are you sure you want to delete this entry?</p>
            <button
              className="bg-[#ff0000] hover:opacity-80 p-2 w-24 rounded-lg text-white"
              onClick={() => handleDelete(selectedIndex)}
            >
              Delete
            </button>
            <button
              className="hover:border-[#ff0000] border-2 p-2 w-24 rounded-lg text-[#d6d6d6] hover:text-[#ff0000]"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
