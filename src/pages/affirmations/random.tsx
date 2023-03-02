import React from "react";
import Head from "next/head";
import data from "@/data/home.json";
import ClientLayout from "@/layouts/clientLayout";
import Card from "@/components/card";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import { ICardProps } from "@/types/card";

const SelectedCard: React.FC<ICardProps> = ({
  source,
  message,
  isLiked,
  type,
}) => {
  const [random, setRandom] = React.useState(data[0]);

  React.useEffect(() => {
    setRandom(data[Math.floor(Math.random() * data.length)]);
  }, []);

  return (
    <>
      {source.length == 0 || message.length == 0 ? (
        <Card
          source={random.source}
          message={random.message}
          isLiked={random.liked}
          type={type}
        />
      ) : (
        <Card source={source} message={message} isLiked={isLiked} type={type} />
      )}
    </>
  );
};

const Random = () => {
  const [source, setSource] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [isLiked, setIsLiked] = React.useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Random</title>
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
          By the way, <span className="text-gray-600">John</span>
        </div>
        <div className="flex justify-center relative">
          <button className="hidden md:block text-2xl absolute right-72 top-5 w-4 text-[#FFD233]">
            <BsThreeDotsVertical size={20} />
          </button>
          <SelectedCard
            source={source}
            message={message}
            isLiked={isLiked}
            type="large"
          />
          <button className="block md:hidden absolute right-20 top-96 md:top-80 w-4 text-[#FFD233]"
            style={{marginTop:70}}
          >
            <BsThreeDots size={30} />
          </button>
        </div>
        <div>
          <div className="text-base font-semibold px-4 mt-20">
            More affirmation
          </div>
          <div className="flex mb-20 justify-center xl:justify-start flex-wrap">
            {data.map((value, key) => (
              <div
                className="mx-2 md:mx-4 lg:mx-1 mb-2  relative"
                key={key}
                onClick={() => {
                  setSource(value.source);
                  setMessage(value.message);
                  setIsLiked(value.liked);
                }}
              >
                <div
                  className="md:mx-6 lg:mx-0 my-2 mt-12 flex justify-end relative"
                  key={key}
                >
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
              </div>
            ))}
          </div>
        </div>
      </ClientLayout>
    </>
  );
};

const space = {
  space: "Random Space",
  spaceDetail:
    "Like trajectories, inspiration isn't linear.Use this space to discover your affirmation in an alternative way.",
};

export default Random;
