import React from "react";
import { useMediaQuery } from "@react-hook/media-query";

function SpMessage() {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isMediumScreen ? (
        <>
          <div className="bg-gray-20 py-20">
            <h1 className="text-2xl text-black-10 my-3 font-bold md:mx-28">
              SP's Message
            </h1>
            <div className="flex justify-evenly">
              <div className="w-4/12 flex justify-center">
                <img className="" src="/policeWoman2.png" alt="" />
              </div>
              <div className=" md:w-8/12">
                <div className="text-gray-10">
                  <p>
                    My aim is to make Railways Police Aurangabad (GRP) more
                    passenger friendly and active towards its responsibilities,
                    which is a difficult task without the conscious help and
                    cooperation of alert railway commuters.
                  </p>
                  <p className="mt-8">
                    We expect passengers to be aware of their surroundings and
                    to notify Railways Police Aurangabad (GRP) of any suspicious
                    activities be it persons or objects. Together with your
                    alertness and help, we can make a difference.
                  </p>
                </div>
                <div className="md:w-8/12 mt-6 text-black-10 font-semibold">
                  <p>
                    I wish you Bon Voyage on your future journeys! Remember, if
                    you see something, say something ...!!
                  </p>
                  <p className="mt-6">
                    Mokshada Patil(IPS) Superintendent of Police
                  </p>
                  <img className="mt-3" src="/hindi1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </>
      ) : (
        <>
          <div className="bg-gray-20 py-20">
            <h1 className="text-2xl text-black-10 my-3 px-2 font-bold md:mx-28">
              SP's Message
            </h1>
            <div className="flex justify-evenly">
              <div className="md:w-4/12 flex justify-center"></div>
              <div className=" md:w-8/12">
                <div className="text-gray-10">
                  <p className="flex items-center px-2">
                    <img
                      className="w-48 inline-block mx-2"
                      src="/policeWoman2.png"
                      alt=""
                    />
                    My aim is to make Railways Police Aurangabad (GRP) more
                    passenger friendly and active towards its responsibilities,
                    which is a difficult task without the conscious help and
                    cooperation of alert railway commuters.
                  </p>
                  <p className="mt-8 px-2">
                    We expect passengers to be aware of their surroundings and
                    to notify Railways Police Aurangabad (GRP) of any suspicious
                    activities be it persons or objects. Together with your
                    alertness and help, we can make a difference.
                  </p>
                </div>
                <div className="md:w-8/12 px-2 mt-6 text-black-10 font-semibold">
                  <p>
                    I wish you Bon Voyage on your future journeys! Remember, if
                    you see something, say something ...!!
                  </p>
                  <p className="mt-6">
                    Mokshada Patil(IPS) Superintendent of Police
                  </p>
                  <img className="mt-3" src="/hindi1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </>
      )}

      
    </>
  );
}

export default SpMessage;
