"use client";
import { useRouter } from "next/router";
import Image from "next/image";
import ghandruk from "../../../assets/ghandruk.png";
import badimalika from "../../../assets/badimalika.png";
import barun from "../../../assets/barunvalley.png";

const destinationDetails = {
  "ghandruk-village-kaski": {
    title: "Ghandruk Village, Kaski",
    description:
      "A beautiful village located in Kaski district, known for its stunning views.",
    img: ghandruk,
  },
  "badimalika-bajhang": {
    title: "Badimalika, Bajhang",
    description: "Famous for its natural beauty and pilgrimage site.",
    img: badimalika,
  },
  "barun-valley-makalu": {
    title: "Barun Valley, Makalu",
    description:
      "Known for its diverse flora and fauna, it's a perfect spot for trekking.",
    img: barun,
  },
};

const DestinationDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const destination = destinationDetails[slug as string];

  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className="px-10 py-5">
      <h1 className="text-2xl font-bold">{destination.title}</h1>
      <Image src={destination.img} alt={destination.title} />
      <p className="mt-4">{destination.description}</p>
      {/* Additional details or components can go here */}
    </div>
  );
};

export default DestinationDetailPage;
