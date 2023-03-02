import Head from "next/head";
import Card from "@/components/card";
import data from "@/data/home.json";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import ClientLayout from "@/layouts/clientLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ClientLayout
        space={space.space}
        spaceDetail={space.spaceDetail}
        bgColor={"#FFFFFF"}
      >
          <div className="text-2xl px-8 lg:px-2 py-4 lg:py-0">
            Good Morning, <span className="text-gray-600">John</span>
          </div>
          <div className="flex justify-center xl:justify-start flex-wrap">
            {data.map((value, key) => (
              <div className="mx-2 md:mx-6 lg:mx-1 my-2 mt-6 relative" key={key}>
                <button className="hidden md:block text-2xl absolute right-3 top-5 w-4 text-[#FFD233]">
                  <BsThreeDotsVertical size={20} />
                </button>
                <Card
                  source={value.source}
                  message={value.message}
                  isLiked={value.liked}
                  type="small"
                />
                <button
                  className="block md:hidden text-2xl absolute right-6 top-56 md:top-80 w-4 text-[#FFD233]"
                  style={{ marginTop: 7 }}
                >
                  <BsThreeDots size={20} />
                </button>
              </div>
            ))}
          </div>
      </ClientLayout>
    </>
  );
}

const space = {
  space: "Home Space",
  spaceDetail:
    "Get the latest additions of our ever-growing affirmation collection and like your favourite to shape your space.",
};
