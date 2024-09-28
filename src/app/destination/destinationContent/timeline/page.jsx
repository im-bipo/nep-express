"use client";
import React, { useEffect, useState } from "react";
import "./index.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = ({ searchParams }) => {
  const [timelineData, setTimelineData] = useState([]); // Initialize state with an empty array
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      // Decode the URL-encoded JSON string first
      const decodedData = decodeURIComponent(searchParams.data);

      // Parse the decoded string into JSON
      const preTrip = JSON.parse(decodedData);

      console.log(preTrip);

      // Set the parsed data to the state
      setTimelineData(preTrip);
    } catch (error) {
      console.error("Error parsing JSON data:", error);
    }
  }, [searchParams.data]);

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

  return (
    <>
      <div className="timeline">
        {timelineData.map((entry, index) => (
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
        ))}

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
        <Link
          href={`/destination/destinationContent/timeline/detailedTimeline?data=${JSON.stringify(
            timelineData
          )}`}
        >
          <Button>Next</Button>
        </Link>
      </div>
    </>
  );
};

export default Page;
