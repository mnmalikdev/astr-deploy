import React from "react";
import Image from "next/image";
import Head from "next/head";
import logo from "@/assets/imgs/ASTRLogo.png";
import dashboardImg from "@/assets/imgs/dashboard.png";
import { AiFillHeart, AiOutlineFund } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Slider from "react-slick";
import data from "@/data/home.json";
import Link from "next/link";
import user from "@/data/user.json";
import Badge from "@/components/badge";
import Card from "@/components/card";

const Dashboard = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [time, setTime] = React.useState(
    new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
  );

  const [formattedDate, setFormattedDate] = React.useState(
    new Date().toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      weekday: "long",
    })
  );

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setFormattedDate(
        new Date().toLocaleDateString("default", {
          month: "long",
          day: "numeric",
          weekday: "long",
        })
      );
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container py-4">
        <div className="grid grid-cols-3 gap-1 justify-evenly py-4">
          <div className="justify-center xl:mt-4 lg:block flex items-center justify-center">
            <Image src={logo} alt="astr-logo" />
          </div>
          <div className="text-center">
            <p
              className="text-xl  md:text-4xl font-semibold"
              suppressHydrationWarning
            >
              {time}
            </p>
            <div className="text-sm text-gray-600 mt-1">{formattedDate}</div>
          </div>
          <div className="flex items-center justify-end">
            <div className="md:bg-gray-200 w-20 h-10 flex gap-2 p-2 rounded-l-lg">
              <Link href="/affirmations/likes">
                <AiFillHeart color="#EFCA08" size={25} />
              </Link>{" "}
              <Link href="/affirmations/random">
                <FaRandom color="#EFCA08" size={25} />
              </Link>
            </div>
            <div className="md:bg-gray-200 w-12 h-10 p-2 md:border-l-2 border-gray-300 rounded-r-lg">
              <Link href="/account">
                <span
                  className={`text-white  bg-gradient-to-r from-[#2CB673] to-[#0AD3FF] px-2 py-1 rounded-3xl`}
                >
                  {user.initials}
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-2 gap-10 mt-10">
          <div>
            <div className="flex">
              <div className="hidden sm:block h-6 w-6 bg-[#EFCA08] rounded-md"></div>
              <div className="font-bold  md:px-2">A TOUCH OF HAPPINESS</div>
            </div>
            <div className="mt-4">
              <Image src={dashboardImg} alt="dashboard-img" />
            </div>
          </div>
          <div>
            <div className="flex mt-8 md:mt-0">
              <div className="hidden sm:block h-6 w-6 bg-[#EFCA08] rounded-md"></div>
              <div className="font-bold  md:px-2">MY ACCOUNT</div>
            </div>
            {/* My Account Card */}
            <div className="mt-4 max-w-sm h-auto overflow-hidden bg-[#F2F2F2] rounded-3xl">
              <div className="px-3 py-3 h-full w-full h-auto">
                <div className="flex items-center justify-center">
                  <div className="max-w-sm w-60 h-40 bg-white rounded-xl">
                    <div className="grid col-1 text-center p-4">
                      <p className="text-lg font-bold">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-sm text-gray-700">Admin</p>
                    </div>
                    <div className="grid grid-cols-2 text-center gap-1">
                      <div className="col-span-1">
                        <p className="text-gray-700">COLLECTIONS</p>
                        <p className="text-3xl font-semibold">1</p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-gray-700">AFFIRMATIONS</p>
                        <p className="text-3xl font-semibold">2</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-md font-bold">SUPPORT US</p>
                  <Badge
                    icon={AiOutlineFund}
                    value="Share a Space to Remember"
                  />
                </div>
                <div className="mt-8">
                  <p className="text-md font-bold">CONTACT US</p>
                  <Badge icon={MdEmail} value="Drop us an Email" />
                </div>
                <div className="mt-16 flex items-center justify-center">
                  <Link href="/" className="text-[#2CB673]">
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-8">
          <div className="flex mb-8">
            <div className="hidden sm:block h-6 w-6 bg-[#EFCA08] rounded-md"></div>
            <div className="font-bold  md:px-2">MY AFFIRMATIONS</div>
          </div>
          <div className="bg-gray-100 h:24 lg:h-90 p-3">
            <Slider {...settings}>
              {data.map((val, key) => (
                <div key={key}>
                  <div className="flex justify-end relative">
                    <button className="text-2xl absolute right-3 w-4 text-yellow-600">
                      x
                    </button>
                    <Card
                      type="slide"
                      source={val.source}
                      isLiked={val.liked}
                      message={val.message}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;