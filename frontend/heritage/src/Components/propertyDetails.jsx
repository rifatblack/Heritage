import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AxiosInstance from "../axiosinstance";

import { Range, getTrackBackground } from "react-range";
import Header from "./Section/Header/header";
import Footer from "./Section/Footer/footer";
import CardAmenities from "./Section/Cards/cardAmenities";
import CardOtherServices from "./Section/Cards/cardOtherServices";
import CardPropertyDetails from "./Section/Cards/cardPropertyDetails";

export default function PropertyDetails() {
  const [validation, setValidation] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { searchResults } = location.state || {};

  const [values, setValues] = useState([
    searchResults.highest_bid.amount,
    searchResults.minimum_bid,
  ]);
  const minRange = searchResults.highest_bid.amount;
  const maxRange = searchResults.minimum_bid;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), values[1] - 1);
    setValues([value, values[1]]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), values[0] + 1);
    setValues([values[0], value]);
  };

  const handleSetMin = () => {
    setValues([minRange, values[1]]);
  };

  const handleSetMax = () => {
    setValues([values[0], maxRange]);
  };

  const formatToK = (number) => {
    if (number >= 1000) {
      return Math.floor(number / 1000) + "K";
    }
    return number.toString();
  };

  const SubmitBids = async (property_id, amount) => {
    try {
      const response = await AxiosInstance.post(
        `heritage/properties/place_bid/${property_id}/`,
        {
          amount,
        }
      );
      setValidation(response.data.message);
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      setValidation(errorMessage);
    }
  };

  return (
    <div className="property-details">
      <Header />
      <div className="relative w-full py-4 sm:py-10 lg:mx-auto lg:max-w-7xl lg:px-32">
        <div className=" ">
          <div className="flex flex-initial space-x-4">
            <div className=" ">
              <h1 className="font-bold text-md my-2">{searchResults.name}</h1>
              <div className="flex space-x-2 ">
                {" "}
                <svg
                  class="w-5 h-5 text-gray-500  dark:text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      stroke="#ff8040"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                      stroke="#ff8040"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="text-sm">{searchResults.location}</p>
              </div>
            </div>
            <div className="grid  text-center space-y-2 my-2">
              <h1 className="font-bold text-2xl">
                ${formatToK(searchResults.highest_bid.amount)}
              </h1>
            </div>
          </div>
          <div className="border-b my-4 max-w-2xl"></div>
        </div>
      </div>
      <div className="relative w-full lg:mx-auto lg:max-w-7xl lg:px-32">
        <div>
          <div className="flex flex-col lg:flex-row items-start gap-4">
            <div className="flex-1 lg:basis-2/3 space-y-4">
              <img
                src={`${import.meta.env.VITE_API_URL}${
                  searchResults.images[0]?.image
                }`}
                className="w-full h-72 rounded-lg"
                alt="Main"
              />

              <div className="flex flex-col lg:flex-row items-start gap-4">
                <img
                  className="w-full h-48 lg:w-1/3 lg:h-44 rounded-lg object-cover"
                  src={`${import.meta.env.VITE_API_URL}${
                    searchResults.images[1]?.image
                  }`}
                  alt="Thumbnail None"
                />
                <img
                  className="w-full h-48 lg:w-1/3 lg:h-44 rounded-lg object-cover"
                  src={`${import.meta.env.VITE_API_URL}${
                    searchResults.images[2]?.image
                  }`}
                  alt="Thumbnail None"
                />
                <div className="w-full lg:w-1/3 flex flex-col items-center">
                  <div className="relative w-full h-48 lg:h-44 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>

                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={`${import.meta.env.VITE_API_URL}${
                        searchResults.images[3]?.image
                      }`}
                      alt="Thumbnail None"
                    />
                  </div>

                  <button className="text-white font-bold mt-2 text-center -translate-y-24">
                    View More
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:basis-1/3 bg-blue-50 p-4 rounded">
              <div className="grid ">
                <p className="text-sm">Property Value</p>
                <h1 className="my-1 text-xl font-bold">
                  $ {formatToK(values[0])}- $ {formatToK(values[1])}
                </h1>
                <p className="my-2 text-sm">
                  Your bid can not be than 10% of the property Minimum value.
                </p>
              </div>
              <div className="my-4">
                <div className="grid ">
                  <label htmlFor="min-input" className="text-sm text-gray-600">
                    Min:
                  </label>
                </div>
                <div class="my-2 relative">
                  <input
                    type="search"
                    id="default-search"
                    // value={`$ ${values[0]}k`}
                    value={`$  ${formatToK(values[0])}`}
                    onChange={handleMinChange}
                    className="block w-full h-10 p-2 ps-4 text-sm text-gray-900 border border-white rounded"
                  />
                </div>
                <div className="my-2 grid ">
                  <label htmlFor="min-input" className="text-sm text-gray-600">
                    Max:
                  </label>
                </div>
                <div class="relative">
                  <input
                    type="search"
                    id="default-search"
                    // value={`$ ${values[1]}k`}
                    value={`$  ${formatToK(values[1])}`}
                    onChange={handleMaxChange}
                    className="block w-full h-10 p-2 ps-4 text-sm text-gray-900 border border-white rounded"
                    // placeholder="Search Porperties"
                    // required
                  />
                </div>
              </div>
              <div className="relative mb-6">
                <div className="relative w-full">
                  <Range
                    step={1}
                    min={minRange}
                    max={maxRange}
                    values={values}
                    onChange={(values) => setValues(values)}
                    renderTrack={({ props, children }) => (
                      <div
                        ref={props.ref}
                        className="w-full h-3 bg-orange-100 rounded-lg dark:bg-gray-700"
                        {...props}
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props, index }) => (
                      <div
                        ref={props.ref}
                        className="w-5 h-5 bg-orange-500 rounded-full cursor-pointer "
                        {...props}
                      />
                    )}
                  />
                </div>

                <div className="absolute w-full flex justify-between mt-1">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    $ {formatToK(values[0])}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    $ {formatToK(values[1])}
                  </span>
                </div>

                <div
                  onClick={() => SubmitBids(searchResults.id, values[1])}
                  className=" w-full flex justify-center my-6"
                >
                  <button className="px-3 py-2 bg-blue-700 hover:bg-blue-300 text-white rounded text-md">
                    Bid Property
                  </button>
                </div>
                {validation && (
                  <div className="text-red-500 text-center text-sm">
                    {validation}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:mx-auto lg:max-w-7xl lg:px-32 ">
        <div className="flex flex-col lg:flex-row items-start gap-4  ">
          <div className="flex-1 lg:basis-2/3 space-y-4">
            <div className="border shadow-orange-50 p-4 lg:max-w-2xl bg-slate-100">
              <h1 className="text-xl text-black my-4">Overview</h1>
              <div className="flex flex-initial w-full border p-2 bg-white shadow-md space-x-16 justify-center">
                <div className="flex space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-500 my-1 dark:text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6 9L10 9"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M3 3V21M21 17V21M21 17H3M21 17V14C21 12.8954 20.1046 12 19 12H3"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p className="text-md">2 Beds</p>
                </div>
                <div className="flex space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-500 my-1 dark:text-gray-400"
                    fill="#000000"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xml:space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M478.609,225.48v-86.35c0-46.03-37.448-83.478-83.478-83.478H116.87c-46.03,0-83.478,37.448-83.478,83.478v86.35 C13.959,232.372,0,250.93,0,272.696c0,12.589,0,89.885,0,100.174c0,9.22,7.475,16.696,16.696,16.696h16.696v50.087 c0,9.22,7.475,16.696,16.696,16.696h66.783c9.22,0,16.696-7.475,16.696-16.696v-50.087h244.87v50.087 c0,9.22,7.475,16.696,16.696,16.696h66.783c9.22,0,16.696-7.475,16.696-16.696v-50.087h16.696c9.22,0,16.696-7.475,16.696-16.696 c0-9.493,0-86.461,0-100.174C512,250.93,498.041,232.372,478.609,225.48z M66.783,139.13c0-27.618,22.469-50.087,50.087-50.087 H395.13c27.618,0,50.087,22.469,50.087,50.087v83.478h-33.391v-16.696c0-27.618-22.469-50.087-50.087-50.087h-72.348 c-12.819,0-24.523,4.846-33.391,12.794c-8.869-7.948-20.572-12.794-33.391-12.794h-72.348c-27.618,0-50.087,22.469-50.087,50.087 v16.696H66.783V139.13z M378.435,205.913v16.696H272.696v-16.696c0-9.206,7.49-16.696,16.696-16.696h72.348 C370.945,189.217,378.435,196.707,378.435,205.913z M239.304,205.913v16.696H133.565v-16.696c0-9.206,7.49-16.696,16.696-16.696 h72.348C231.815,189.217,239.304,196.707,239.304,205.913z M100.174,422.957H66.783v-33.391h33.391V422.957z M445.217,422.957 h-33.391v-33.391h33.391V422.957z M478.609,356.174c-14.401,0-412.865,0-445.217,0v-33.391h445.217V356.174z M478.609,289.391 H33.391v-16.696c0-9.206,7.49-16.696,16.696-16.696c12.832,0,401.17,0,411.826,0c9.206,0,16.696,7.49,16.696,16.696V289.391z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p className="text-md">2 Beds</p>
                </div>
                <div className="flex space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-500 my-1 dark:text-gray-400"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <defs>
                      <style>
                        {`
            .cls-1 {
              fill: none;
              stroke: #020202;
              stroke-miterlimit: 10;
              stroke-width: 1.91px;
            }
          `}
                      </style>
                    </defs>
                    <rect
                      className="cls-1"
                      x="2.45"
                      y="13.91"
                      width="19.09"
                      height="8.59"
                    />
                    <line
                      className="cls-1"
                      x1="23.45"
                      y1="13.91"
                      x2="0.55"
                      y2="13.91"
                    />
                    <line
                      className="cls-1"
                      x1="7.23"
                      y1="13.91"
                      x2="7.23"
                      y2="22.5"
                    />
                    <line
                      className="cls-1"
                      x1="12"
                      y1="13.91"
                      x2="12"
                      y2="22.5"
                    />
                    <line
                      className="cls-1"
                      x1="16.77"
                      y1="13.91"
                      x2="16.77"
                      y2="22.5"
                    />
                    <path
                      className="cls-1"
                      d="M6.27,12V7.23A5.73,5.73,0,0,1,12,1.5h0a5.73,5.73,0,0,1,5.73,5.73V12"
                    />
                    <line
                      className="cls-1"
                      x1="6.27"
                      y1="8.18"
                      x2="18.68"
                      y2="8.18"
                    />
                    <line className="cls-1" x1="12" y1="1.5" x2="12" y2="12" />
                  </svg>{" "}
                  <p className="text-md">2 Balcony</p>
                </div>
                <div className="flex space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-500 my-1 dark:text-gray-400"
                    fill="#000000"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 54 54"
                    xml:space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M22.5,11h-11c-0.553,0-1,0.448-1,1v5c0,0.552,0.447,1,1,1h11c0.553,0,1-0.448,1-1v-5C23.5,11.447,23.052,11,22.5,11z M21.5,16h-9v-3h9V16z"></path>{" "}
                          <path d="M22.5,20h-11c-0.553,0-1,0.448-1,1v5c0,0.552,0.447,1,1,1h11c0.553,0,1-0.448,1-1v-5C23.5,20.447,23.052,20,22.5,20z M21.5,25h-9v-3h9V25z"></path>{" "}
                          <path d="M22.5,29h-11c-0.553,0-1,0.448-1,1v5c0,0.552,0.447,1,1,1h11c0.553,0,1-0.448,1-1v-5C23.5,29.447,23.052,29,22.5,29z M21.5,34h-9v-3h9V34z"></path>{" "}
                          <path d="M52.402,39.569l-4.772-10C47.463,29.221,47.113,29,46.727,29H31.5V1c0-0.319-0.152-0.619-0.41-0.807 c-0.256-0.188-0.59-0.242-0.892-0.146l-22,7C7.782,7.179,7.5,7.564,7.5,8v11h-4v-3h-2v3v2h2h4v7h-4v-3h-2v3v2h2h4v7h-4v-3h-2v3v2 h2h4v14c0,0.552,0.447,1,1,1h22h3h9h4c0.553,0,1-0.448,1-1V41h4c0.344,0,0.663-0.176,0.846-0.466 C52.529,40.243,52.55,39.878,52.402,39.569z M9.5,39v-2v-7v-2v-7v-2V8.731l20-6.364V30v10v12h-20V39z M34.5,52v-7h7v7H34.5z M45.5,52h-2v-8c0-0.552-0.447-1-1-1h-9c-0.553,0-1,0.448-1,1v8h-1V41h14V52z M46.5,39h-15v-8h14.597l3.818,8H46.5z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p className="text-md">Fully Furnished</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4">
                <div className="flex flex-col items-start p-2">
                  <p className="text-sm font-medium">Carpet Area</p>
                  <p className="text-md font-semibold">2000 sqft</p>
                  <p className="text-sm text-gray-600">$ 225/sqft</p>
                </div>
                <div className="flex flex-col items-start p-2">
                  <p className="text-sm font-medium">Floor</p>
                  <p className="text-md font-semibold">
                    Second (Out of 6 floors)
                  </p>
                </div>
                <div className="flex flex-col items-start p-2">
                  <p className="text-sm font-medium">Transaction Type</p>
                  <p className="text-md font-semibold">Ready to move</p>
                </div>
                <div className="flex flex-col items-start p-2">
                  <p className="text-sm font-medium">Lift</p>
                  <p className="text-md font-semibold">1</p>
                </div>

                <div className="flex flex-col items-start p-2">
                  <p className="text-sm font-medium">Facing</p>
                  <p className="text-md font-semibold">North-East</p>
                </div>
                <div className="flex flex-col items-start p-2">
                  <p className="text-sm font-medium">Additional Rooms</p>
                  <p className="text-md font-semibold">
                    1 Servant Room & 1 Guest Room
                  </p>
                </div>
                <div className="flex flex-col items-start p-2">
                  <p className="text-sm font-medium">Age of Construction</p>
                  <p className="text-md font-semibold">New Construction</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:basis-1/3 ">
            <div className="rounded-lg overflow-visible">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                className="w-full h-72 -translate-y-10"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <CardAmenities />
      <CardOtherServices />
      <CardPropertyDetails />

      <Footer />
    </div>
  );
}
