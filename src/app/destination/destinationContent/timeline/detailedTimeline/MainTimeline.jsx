'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MainTimeline() {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Fetch the data from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const data = JSON.parse(decodeURIComponent(urlParams.get("data")));

    // Set the timeline data from the fetched data
    setTimelineData(data);
  }, []);

  return (
    <div className="mx-10 py-10">
      <ol className="border-l border-neutral-300 dark:border-neutral-500 w-full">
        {timelineData.map((item, index) => (


          <li className="" key={index}>
            <div className="flex-start flex items-center pt-3 ">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500">
                <p className="w-20"></p>
              </div>
              <div className="bg-[#e4e4e4] flex w-full px-10">
                <div className="my-4 mx-5">
                  <Image
                    src="/path/to/placeholder-image.jpg" 
                    alt={item.name}
                    width={120}
                    height={120}
                    className="rounded"
                  />
                </div>
                <div className="ml-4 mt-2">
                  <h4 className="mb-1.5 text-lg font-semibold text-[#ff0000]">
                    {item.name}
                  </h4>
                  <p className="mb-3 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </li>


        ))}
      </ol>
    </div>
  );
}

const PlaceCard = () =>{
  
}
