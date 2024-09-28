import Image from "next/image";
import ghandruk from "@/app/assets/ghandruk.png";
import badimalika from "@/app/assets/badimalika.png";
import barun from "@/app/assets/barunvalley.png";
import Link from "next/link";

const destinations = [
  {
    title: "Ghandruk Village, Kaski",
    img: <Image src={ghandruk} alt="Ghandruk Village" />,
    slug: "ghandruk-village-kaski",
  },
  {
    title: "Badimalika, Bajhang",
    img: <Image src={badimalika} alt="Badimalika" />,
    slug: "badimalika-bajhang",
  },
  {
    title: "Barun Valley, Makalu",
    img: <Image src={barun} alt="Barun Valley" />,
    slug: "barun-valley-makalu",
  },
];

const Destination_Card = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center px-4">
      {destinations.map((destination, index) => (
        <Link
          key={index}
          href={`/destination/destinationCardDetails/${destination.slug}`}
        >
          <div className="max-w-80 max-h-48 overflow-hidden bg-[#e7e7e7] shadow-xl relative mx-10 mb-4">
            <div>{destination.img}</div>
            <div className="text-sm absolute bottom-5 text-white left-5 w-full border-l-4 pl-2 bg-black bg-opacity-45">
              {destination.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Destination_Card;
