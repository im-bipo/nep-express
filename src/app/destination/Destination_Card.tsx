/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getPlaces } from "@/actions/place";

const Destination_Card = async () => {
  const destinations = await getPlaces();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center px-4">
      {destinations.map((destination, index) => (
        <Link
          key={index}
          href={`/destination/destinationCardDetails/${destination.name}`}
        >
          <div className="max-w-80 max-h-48 overflow-hidden bg-[#e7e7e7] shadow-xl relative mx-10 mb-4">
            <div>
              <img
                src={destination.thumbnail[0]}
                alt={destination.name}
                className="object-contain w-full rounded-md h-full"
              />
              ,
            </div>
            <div className="text-sm absolute bottom-5 text-white left-5 w-full border-l-4 pl-2 bg-black bg-opacity-45">
              {destination.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Destination_Card;
