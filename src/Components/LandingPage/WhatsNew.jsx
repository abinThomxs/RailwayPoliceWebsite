import React from 'react'

function WhatsNew() {
  return (
    <>
        <div className="mt-10">
          <div>
            <h1 className="text-2xl text-black-10 my-3 px-1 font-bold md:mx-28">
              What's New
            </h1>
          </div>
          <div className="md:flex justify-around md:mx-28 p-8">
            <div className="p-4 my-8 border-2 border-gray-400 rounded-md">
              <img className="md:w-64" src="/whatsNew1.png" alt="" />
              <img className="md:w-64" src="newText1.png" alt="" />
              <div className="flex justify-center">
                <p className="text-blue-10">Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div className="p-4 my-8 border-2 border-gray-400 rounded-md">
              <img className="md:w-64" src="/whatsNew2.png" alt="" />
              <img className="md:w-64" src="newText2.png" alt="" />
              <div className="flex justify-center mt-4">
                <p className="text-blue-10">Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div className="p-4 my-8 border-2 border-gray-400 rounded-md">
              <img className="md:w-64" src="/whatsNew3.png" alt="" />
              <img className="md:w-64" src="newText3.png" alt="" />
              <div className="flex justify-center">
                <p className="text-blue-10">Read More</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default WhatsNew