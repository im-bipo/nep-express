import Image from "next/image";

const dummyData = [
  {
    title: "Siddhababa, Palpa",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Bhoot Khola, Palpa",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean feugiat tellus nec interdum mollis.",
    image: "/path/to/image2.jpg",
  },
  {
    title: "Nuwakot",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "/path/to/image3.jpg",
  },
  {
    title: "Shreenagar",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "/path/to/image4.jpg",
  },
  {
    title: "Rani Mahal",
    content:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    image: "/path/to/image5.jpg",
  },
];

export default function MainTimeline() {
  return (
    <div className="mx-10 py-10">
      <ol className="border-l border-neutral-300 dark:border-neutral-500 w-full">
        {dummyData.map((item, index) => (
          <li className="" key={index}>
            <div className="flex-start flex items-center pt-3 ">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500">
                <p className="w-20"></p>
              </div>
              <div className="bg-[#e4e4e4] flex w-full px-10">
                <div className="my-4 mx-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="rounded"
                  />
                </div>
                <div className=" ml-4 mt-2 ">
                  <h4 className="mb-1.5 text-lg font-semibold text-[#ff0000]">
                    {item.title}
                  </h4>
                  <p className="mb-3 text-sm">{item.content}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
