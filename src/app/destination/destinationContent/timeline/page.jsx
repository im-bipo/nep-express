"use client";
import React, { useState } from "react";
import "./index.css";
import { Button } from "@/components/ui/button";
import { addNewPlace } from "@/actions/place";

const Page = ({ searchParams }) => {
  const preTrip = JSON.parse(searchParams.data);
  console.log(preTrip);
  const initialTimelineData = preTrip;

  const [timelineData, setTimelineData] = useState(initialTimelineData); // Using timelineData state
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  const handleDelete = (index) => {
    setTimelineData((prevData) => prevData.filter((_, i) => i !== index)); // Deleting entry from state
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

  const newTrip = async () => {
    await addNewPlace(setTimelineData);
  };
  return (
    <>
      <div className="timeline">
        {timelineData.map(
          (
            entry,
            index // Using timelineData for rendering
          ) => (
            <div
              key={index}
              className={`timeline-container ${
                index % 2 === 0 ? "left" : "right"
              }`}
              onClick={() => handleSelect(index)}
            >
              <div className="content">
                <h2 className="font-semibold">{entry.name}</h2>
                <p className="text-sm text-[#7b7b7b]">{entry.description}</p>
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
          )
        )}

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Confirm Deletion</h3>
              <p className="my-4">
                Are you sure you want to delete this entry?
              </p>
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
      <div className="w-3/4 mx-20 flex flex-row-reverse">
        <Button onClick={newTrip}>Next</Button>
      </div>
    </>
  );
};

export default Page;
