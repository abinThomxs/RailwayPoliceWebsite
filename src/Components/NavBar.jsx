import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";

const NavBar = () => {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const [menu, setmenu] = useState(false);
  return (
    <>
      {!menu && (
        <nav>
          {isMediumScreen ? (
            <div className="flex justify-around py-5 text-black-10">
              <div className="flex justify-around gap-2 md:gap-5">
                <div
                  onClick={() => {
                    setmenu(!menu);
                  }}
                >
                  <img className="w-6 h-5" src="/menu.png" alt="" />
                </div>

                <div>
                  <h1>Menu</h1>
                </div>
                <div className="md:w-64">
                  <select
                    id="policeStation"
                    className=" bg-white border border-gray-400 text-gray-10 text-sm rounded-lg  w-full py-1"
                  >
                    <option>Select Police Station</option>
                    <option value="1">Police Station 1</option>
                    <option value="2">Police Station 2</option>
                    <option value="3">Police Station 3</option>
                  </select>
                </div>
              </div>
              <div>
                <img className="h-32" src="/logo.png" alt="" />
              </div>
              <div className="flex justify-around text-blue-10 gap-4">
                <div>A-</div>
                <div>A</div>
                <div>A+</div>
                <div>
                  <img src="/navbarCircle.png" alt="" />
                </div>
                <div className="border-2 rounded-md px-3 h-8">
                  Skip to Main Content
                </div>
                <div>
                <button className="bg-blue-10 text-white px-2 rounded-md">Marathi</button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-around py-5 text-black-10">
                <div className="flex justify-around gap-2 md:gap-5">
                  <div onClick={() => {
                    setmenu(!menu);
                  }}>
                    <img className="w-6 h-5" src="/menu.png" alt="" />
                  </div>
                </div>

                <div className="flex justify-around text-blue-10 gap-4">
                  <div className="pl-1">A-</div>
                  <div>A</div>
                  <div>A+</div>
                  <div>
                    <img src="/navbarCircle.png" alt="" />
                  </div>
                  <div className="border-2 text-xs md:text-base pt-1 md:pt-0 rounded-md px-3 h-8">
                    Skip to Main Content
                  </div>
                  <div>
                    <button className="bg-blue-10 text-white px-2 rounded-md">Marathi</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img className="h-20 items-center" src="/logo.png" alt="" />
              </div>
              <div className="flex justify-center py-4">
                <div className="w-64">
                  <select
                    id="policeStation"
                    class=" bg-white border border-gray-400 text-gray-10 text-sm rounded-lg  w-full py-1"
                  >
                    <option selected>Select Police Station</option>
                    <option value="1">Police Station 1</option>
                    <option value="2">Police Station 2</option>
                    <option value="3">Police Station 3</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </nav>
      )}
      {menu ? (
        <div className="h-screen text-white bg-black-10">
          <div className="flex justify-end" onClick={() => setmenu(!menu)}>
            <div className="p-8 text-2xl">x</div>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="p-4">Home</div>
              <div className="p-4">Citizens Corner</div>
              <div className="p-4">Police Corner</div>
              <div className="p-4">Quick Links</div>
              <div className="p-4">Lost & Found</div>
              <div className="p-4">About Us</div>
              <div className="p-4">Contact Us</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
