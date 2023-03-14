import React from "react";

function SocialMedia() {
  return (
    <div className="mx-10 my-16">
      <div>
        <h1 className="text-2xl text-black-10 my-3 px-1 font-bold md:mx-28">
          Social Media Feeds
        </h1>
      </div>
      <div className="md:flex justify-between md:mx-16 px-8">
        <div className="p-4 my-8 border-2 border-gray-400 rounded-md mx-6">
          <img className="md:w-64" src="/sm1.png" alt="" />
          <div className="flex justify-center py-3">
            <img className="w-8" src="/sm11.png" alt="" />
          </div>
          <div className="flex justify-center pb-3">
            <p className="text-blue-10 font-semibold">
              @aurangabadrailwaypolice
            </p>
          </div>

          <p className="text-gray-10">
            asdas skdma asdkfma saklmfasmf ask saflja
          </p>
          <div className="flex justify-between mt-10">            
            <p className="text-gray-10 text-xs">12 hours ago</p>
            <img src="/Setting.svg" alt="" />
          </div>
        </div>
        <div className="p-4 my-8 border-2 border-gray-400 rounded-md mx-6">
          <img className="md:w-64" src="/sm2.png" alt="" />
          <div className="flex justify-center py-3">
            <img className="w-8" src="/sm22.png" alt="" />
          </div>
          <div className="flex justify-center pb-3">
            <p className="text-blue-400 font-semibold">
              @aurangabadrailwaypolice
            </p>
          </div>

          <p className="text-gray-10">
            asdas skdma asdkfma saklmfasmf ask saflja
          </p>
          <div className="flex justify-between mt-10">            
            <p className="text-gray-10 text-xs">12 hours ago</p>
            <img src="/Setting.svg" alt="" />
          </div>
        </div>
        <div className="p-4 my-8 border-2 border-gray-400 rounded-md mx-6">
          <img className="md:w-64" src="/sm3.png" alt="" />
          <div className="flex justify-center py-3">
            <img className="w-8" src="/sm33.png" alt="" />
          </div>
          <div className="flex justify-center pb-3">
            <p className="text-red-600 font-semibold">
              @aurangabadrailwaypolice
            </p>
          </div>

          <p className="text-gray-10">
            asdas skdma asdkfma saklmfasmf ask saflja
          </p>
          <div className="flex justify-between mt-10">            
            <p className="text-gray-10 text-xs">12 hours ago</p>
            <img src="/Setting.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
