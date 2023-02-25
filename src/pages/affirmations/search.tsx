import React from "react";
import Head from "next/head";
import data from "@/data/home.json";
import ClientLayout from "@/layouts/clientLayout";
import { BsThreeDotsVertical, BsThreeDots } from "react-icons/bs";
import Card from "@/components/card";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ClientLayout
        space={space.space}
        spaceDetail={space.spaceDetail}
        bgColor={"#FFFFFF"}
      >
        <div className="container">
          <div className="text-2xl ml-auto mb-8">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-2 flex items-center pl-5 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="mx-4">
                <input
                  type="text"
                  className="bg-gray-50 border border-black lg:border-4 text-gray-900 text-sm rounded-2xl focus:ring-blue-500  block w-full pl-10 p-2.5"
                  placeholder="What keywords you are searching for?"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center xl:justify-start flex-wrap">
            {data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.source
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  val.message
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              })
              .map((value, key) => (
                <div
                  className="md:mx-6 lg:mx-1 my-2 mt-8 lg:mt-12 relative"
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
                    className="block md:hidden text-2xl absolute right-6 top-52 md:top-80 w-4 text-[#FFD233]"
                    style={{ marginTop: 10 }}
                  >
                    <BsThreeDots size={20} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </ClientLayout>
    </>
  );
};

const space = {
  space: "Search Space",
  spaceDetail:
    "Looking for particular affirmations? Use this space to filter through our ever-growing catalogue and find your affirmation(s)..",
};

export default Search;
