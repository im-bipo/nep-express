import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { MdDateRange } from "react-icons/md";

const DestinationPage = ({
  searchParams,
}: {
  searchParams?: {
    startinPoint: string;
    finalDestination: string;
    durationOfTrip: string;
  };
}) => {
  const formData = [
    {
      title: "Starting Point",
      icons: <IoLocationSharp className="text-[#d9d9d9]" />,
      value: searchParams?.startinPoint,
    },
    {
      title: "Final Destination",
      icons: <IoLocationSharp className="text-[#d9d9d9]" />,
      value: searchParams?.finalDestination,
    },
    {
      title: "Duration of Trip",
      icons: <MdDateRange className="text-[#d9d9d9]" />,
      value: searchParams?.durationOfTrip,
    },
  ];

  return (
    <main className="bg-[#F2F6FB] flex flex-col justify-center items-center px-20 py-10">
      {formData.map((val, index) => (
        <div key={index} className="my-4 w-full border-b-2 ">
          <p className="font-semibold">{val.title}</p>
          <div className="flex gap-4 items-center my-4">
            {val.icons}
            <input
              type="text"
              className="text-sm w-full text-slate-700 bg-transparent outline-none"
              placeholder={`Enter Your ${val.title}`}
              value={val.value}
            />
          </div>
        </div>
      ))}

      <Link href="/destination/destinationContent/timeline">
        <Button>Next</Button>
      </Link>
    </main>
  );
};

export default DestinationPage;
