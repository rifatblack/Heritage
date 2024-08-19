import React, { useState } from "react";
export default function CardHeritageJourney() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-32 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-end lg:justify-end md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-10 lg:mb-16">
            <div className="flex items-center">
              <div className="my-2 mx-2 bg-orange-400 h-1 w-10"></div>
              <a className="inline-flex items-center font-semibold transition-colors duration-200 text-orange-400 hover:text-deep-purple-800">
                Meet the Team For Book Consultation
              </a>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
              Meet the stewards of your heritage journey
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              each member an embodiment of expertise and warmth, dedicated to
              guiding you home, every step of the way.
            </p>
            <div className="flex items-center justify-start gap-x-4 py-4 lg:py-6">
              <a
                href="#"
                className="flex rounded-md bg-blue-600 px-4 py-2 text-sm lg:text-base font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Book Consultation Now
              </a>
            </div>
          </div>
        </div>
        <div className="flex  lg:justify-start -mx-4 lg:pl-28">
          <div className="relative ">
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Background Image"
              className="w-72 h-48 sm:w-96 sm:h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
