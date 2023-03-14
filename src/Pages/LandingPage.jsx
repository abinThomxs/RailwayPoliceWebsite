import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import Betweeners from "../Components/LandingPage/Betweeners";
import NavBar from "../Components/NavBar";
import TabsSection from "../Components/LandingPage/Tabs";
import SpMessage from "../Components/LandingPage/SpMessage";
import WhatsNew from "../Components/LandingPage/WhatsNew";
import QuickLinks from "../Components/LandingPage/QuickLinks";
import SocialMedia from "../Components/LandingPage/SocialMedia";

const LandingPage = (props) => {
  const [enquiry, setenquiry] = useState(false);
  const bg = enquiry ? "bg-gray-20" : "";
  return (
    <div className={`${bg} z-50`}>
      <>
        <NavBar />
        <div className="md:hidden flex justify-center">
          <div className="policeWoman relative">
            <div className="blueBall1 rounded-full h-6 w-6 bg-blue-10"></div>
            <div className="greenBall1 rounded-full h-6 w-6 bg-green-700"></div>
            <div className="redBall3 rounded-full h-2 w-2 bg-red-500"></div>
            <div className="redBall4 rounded-full h-3 w-3 bg-red-500"></div>
            <div className="absolute h-96 inset-0 mt-16 rounded-full  bg-gray-300"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="/policeWoman.png"
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="enquiry flex justify-end bg-black-10 text-white h-20">
            <button className="-rotate-90" onClick={() => setenquiry(!enquiry)}>
              Enquiry
            </button>
          </div>
        </div>
        <div className="flex justify-around w-auto">
          <div className="flex justify-center my-auto ">
            <div className="w-10/12 md:w-full">
              <h1 className="text-4xl my-3 font-bold">{props.value.name}</h1>
              <h1 className="text-gray-10 my-3 w-8/12 md:w-full">
                {props.value.description}
              </h1>
              <button className="text-white my-3 bg-blue-10 p-2 rounded-md flex justify-center">
                <p className="px-2">View Website</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden md:flex policeWoman relative">
            <div className="blueBall1 rounded-full h-6 w-6 bg-blue-10"></div>
            <div className="greenBall1 rounded-full h-6 w-6 bg-green-700"></div>
            <div className="redBall1 rounded-full h-2 w-2 bg-red-500"></div>
            <div className="redBall2 rounded-full h-3 w-3 bg-red-500"></div>
            <div className="absolute h-96 inset-0 mt-16 rounded-full  bg-gray-300"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="/policeWoman.png"
                alt="Placeholder"
              />
            </div>
          </div>

          <div className="enquiry flex justify-end bg-black-10 text-white h-20">
            <button className="-rotate-90" onClick={() => setenquiry(!enquiry)}>
              Enquiry
            </button>
          </div>
        </div>
      </>

      {enquiry && (
        <div className="absolute md:inset-y-20 md:left-80 md:ml-32 inset-y-20 left-16 mt-0 md:w-80 p-6 md:h-full bg-white">
          <div
            onClick={() => setenquiry(!enquiry)}
            className="flex justify-end text-3xl"
          >
            x
          </div>
          <div>
            <div className="mt-3">
              <label className="text-black-10" htmlFor="name">
                Full Name
              </label>
            </div>
            <input
              className="bg-gray-20 w-full p-2"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <div className="mt-3">
              <label className="text-black-10" htmlFor="number">
                Contact Number
              </label>
            </div>
            <input
              type="number"
              className="bg-gray-20 w-full p-2"
              placeholder="+91 - 9876543210"
            />
          </div>
          <div>
            <div className="mt-3">
              <label className="text-black-10" htmlFor="address1">
                Address 1
              </label>
            </div>
            <input
              type="text"
              className="bg-gray-20 w-full p-2"
              placeholder="Door no & Building name"
            />
          </div>
          <div>
            <div className="mt-3">
              <label className="text-black-10 w-full p-2" htmlFor="address2">
                Address 2
              </label>
            </div>
            <input
              type="text"
              className="bg-gray-20 w-full p-2"
              placeholder="Road name, Area name & Location"
            />
          </div>
          <div>
            <div className="mt-3">
              <label className="text-black-10" htmlFor="message">
                Message
              </label>
            </div>
            <textarea
              className="h-28 bg-gray-20 w-full p-2"
              type="text"
              placeholder="Write your message here..."
            />
          </div>
          <div className="flex justify-center py-3">
            <button className="bg-blue-10 w-44 md:w-60 text-white">
              Submit
            </button>
          </div>
        </div>
      )}

      <TabsSection />
      <Betweeners />
      <SpMessage />
      <WhatsNew />
      <QuickLinks />
      <SocialMedia />
      <Betweeners />
    </div>
  );
};

export default LandingPage;
