import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function CardPropertybuying() {
  const history = useNavigate();
  const BuyerScreen = (id) => {
    history(`/buyer`);
  };
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center lg:max-w-lg">
            <div className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Background Image"
                className="w-64 sm:w-80 lg:w-96 h-40 sm:h-52 lg:h-64 object-cover rounded-lg shadow-lg"
              />

              <img
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt="Overlapping Image"
                className="absolute w-44 sm:w-56 lg:w-96 h-28 sm:h-36 lg:h-44 object-cover rounded-lg shadow-lg transform translate-x-12 sm:translate-x-16 lg:translate-x-20 translate-y-16 sm:translate-y-24 lg:translate-y-32"
              />

              <div className="absolute bottom-2 sm:bottom-4 flex justify-center transform translate-x-28 sm:translate-x-36 lg:translate-x-48 -translate-y-16 sm:-translate-y-20 lg:-translate-y-28">
                <button className="bg-blue-600 text-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <div onClick={() => BuyerScreen()} className="flex items-center">
                <div className="my-2 mx-2 bg-orange-400 h-1 w-8 sm:w-10"></div>
                <a className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-deep-purple-800">
                  Property buying
                </a>
              </div>
              <h2 className="max-w-lg mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:leading-none">
                Efficient and Transparent Home Buying Solutions
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <a
                href="#"
                className="flex rounded-md bg-blue-200 px-4 py-2 text-sm sm:text-base font-semibold leading-6 text-blue-700 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 my-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                Find Property
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:items-end lg:justify-end md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-10 lg:mb-16">
              <div className="flex items-center">
                <div className="my-2 mx-2 bg-orange-400 h-1 w-10"></div>
                <a className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-deep-purple-800">
                  Property buying
                </a>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
                Efficient and Transparent Home Buying Solutions
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div
                onClick={() => BuyerScreen()}
                className="flex items-center justify-start gap-x-4 py-4 lg:py-6"
              >
                <a
                  href="#"
                  className="flex rounded-md bg-blue-200 px-4 py-2 text-sm lg:text-base font-semibold leading-6 text-blue-700 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 lg:size-5 mr-1.5 lg:mr-2 my-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  Find Property
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start -mx-4 lg:pl-8">
            <div className="relative h-72 sm:h-96 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Background Image"
                className="w-72 h-48 sm:w-96 sm:h-64 object-cover rounded-lg shadow-lg transform translate-x-0 translate-y-12 sm:translate-y-20"
              />

              <img
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt="Overlapping Image"
                className="absolute w-72 h-36 sm:w-96 sm:h-44 object-cover rounded-lg shadow-lg transform translate-x-12 sm:translate-x-20 -translate-y-6 sm:-translate-y-10"
              />

              <div className="absolute bottom-4 flex justify-center transform -translate-x-16 sm:-translate-x-28 -translate-y-36 sm:-translate-y-48">
                <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 lg:size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center lg:max-w-lg">
            <div className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Background Image"
                className="w-64 sm:w-80 lg:w-96 h-40 sm:h-52 lg:h-64 object-cover rounded-lg shadow-lg"
              />

              <img
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt="Overlapping Image"
                className="absolute w-44 sm:w-56 lg:w-96 h-28 sm:h-36 lg:h-44 object-cover rounded-lg shadow-lg transform translate-x-12 sm:translate-x-16 lg:translate-x-20 translate-y-16 sm:translate-y-24 lg:translate-y-32"
              />

              <div className="absolute bottom-2 sm:bottom-4 flex justify-center transform translate-x-28 sm:translate-x-36 lg:translate-x-48 -translate-y-16 sm:-translate-y-20 lg:-translate-y-28">
                <button className="bg-blue-600 text-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:bg-gray-300 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <div className="flex items-center">
                <div className="my-2 mx-2 bg-orange-400 h-1 w-8 sm:w-10"></div>
                <a className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-deep-purple-800">
                  Property buying
                </a>
              </div>
              <h2 className="max-w-lg mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:leading-none">
                Efficient and Transparent Home Buying Solutions
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div
              onClick={() => BuyerScreen()}
              className="flex items-center justify-start gap-x-4"
            >
              <a
                href="#"
                className="flex rounded-md bg-blue-200 px-4 py-2 text-sm sm:text-base font-semibold leading-6 text-blue-700 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 my-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                Find Property
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
