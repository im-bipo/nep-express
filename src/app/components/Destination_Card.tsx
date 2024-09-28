/* eslint-disable @next/next/no-img-element */
import { getPlaces } from "@/actions/place";



const Destination_Card = async () => {
  const places = await getPlaces();
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center px-4">
      {places.map((destination, index) => (
        <div
          key={index}
          className="max-w-80 max-h-48 overflow-hidden object-contain bg-[#e7e7e7] shadow-xl relative mx-10 mb-4"
        >
          <img src={destination.thumbnail[0]} alt="image" />
          <div className="text-sm absolute bottom-5 text-white left-5 w-full border-l-4 pl-2 bg-black bg-opacity-45">
            {destination.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destination_Card;
