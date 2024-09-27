import Image from "next/image";
import ghandruk from "../assets/ghandruk.png";
import badimalika from "../assets/badimalika.png";
import barun from "../assets/barunvalley.png";

const destinations = [
  {
    title: "Ghandruk Village, Kaski",
    img: <Image src={ghandruk} alt="" />,
  },
  {
    title: "Badimalika, Bajhang",
    img: <Image src={badimalika} alt="" />,
  },
  {
    title: "Barun Valley, Makalu",
    img: <Image src={barun} alt="" />,
  },
];

const Destination_Card = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center px-4">
      {destinations.map((destination, index) => (
        <div
          key={index}
          className="max-w-80 max-h-48 overflow-hidden object-contain bg-[#e7e7e7] shadow-xl relative mx-10 mb-4"
        >
          <div>{destination.img}</div>
          <div className="text-sm absolute bottom-5 text-white left-5 w-full border-l-4 pl-2 bg-black bg-opacity-45">
            {destination.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destination_Card;
