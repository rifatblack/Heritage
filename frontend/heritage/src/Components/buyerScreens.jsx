import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AxiosInstance from "../axiosinstance";

import Header from "./Section/Header/header";
import Footer from "./Section/Footer/footer";
import Testimonials from "./Section/Testimonials/testimonials";

import CardPopularProperties from "./Section/Cards/cardPopularProperties";
import CardNewListedProperties from "./Section/Cards/cardNewListedProperties";
import SimpleCard from "./Section/Cards/simpleCard";
export default function BuyerScreens() {
  const [activeOption, setActiveOption] = useState("Buy");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");

  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();

    const finalLocation = location === "" ? "" : location;
    const finalPropertyType = propertyType === "" ? "" : propertyType;

    const queryParams = new URLSearchParams({
      search,
      location: finalLocation,
      property_type: finalPropertyType,
      budget,
    }).toString();

    try {
      const response = await AxiosInstance.get(
        `heritage/properties/?${queryParams}`
      );

      console.log("Search results:", response.data);

      navigate("/buyer/search", { state: { searchResults: response.data } });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className="relative w-full h-60">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Background"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-lg p-4 max-w-screen-md mx-auto transform translate-y-1/2 z-10">
            <div className="flex justify-start space-x-4 my-2 border-b">
              {["Buy", "Rent", "PG", "Plot", "Commercial"].map(
                (option, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 transition-colors duration-300 ease-in-out ${
                      activeOption === option
                        ? "border-b-2 border-indigo-500 text-indigo-500"
                        : "hover:border-b-2 hover:border-indigo-500 hover:text-indigo-500 text-gray-700"
                    }`}
                    onClick={() => setActiveOption(option)}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
            <form
              onSubmit={handleSearch}
              className="flex flex-col space-y-4 mt-6"
            >
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  class="block w-full h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Porperties"
                  required
                />
              </div>

              <div className="flex flex-row justify-between space-x-4">
                <div className="basis-1/3 grid ">
                  <form class="w-full mx-auto">
                    <div className="flex space-x-1">
                      <svg
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                      <label
                        for="countries"
                        className="block mb-2 text-sm  text-gray-900 font-bold"
                      >
                        Your Location
                      </label>
                    </div>

                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      id="countries"
                      className="bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-orange-700 dark:border-orange-600 dark:placeholder-orange-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    >
                      <option value="">Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </form>
                </div>
                <div className="basis-1/3 grid ">
                  <form class="w-full mx-auto">
                    <div className="flex space-x-1">
                      <svg
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="#ff8000"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 300 300"
                        enable-background="new 0 0 300 300"
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
                            <path d="M287.991,131.752L158.449,20.347c-4.861-4.175-12.036-4.175-16.897,0L12.009,131.752 c-5.424,4.667-6.042,12.846-1.379,18.271c4.676,5.421,12.852,6.036,18.27,1.376L150,47.257l121.1,104.141 c2.449,2.103,5.449,3.129,8.436,3.129c3.649,0,7.273-1.527,9.834-4.505C294.034,144.598,293.415,136.418,287.991,131.752z"></path>{" "}
                            <path d="M150,137.043c-16.075,0-29.149,13.075-29.149,29.149c0,16.074,13.075,29.152,29.149,29.152s29.149-13.078,29.149-29.152 C179.149,150.118,166.075,137.043,150,137.043z"></path>{" "}
                            <path d="M154.23,65.419c-2.437-2.093-6.024-2.093-8.461,0l-97.622,84.208c-1.423,1.228-2.245,3.018-2.245,4.901v121.781 c0,3.575,2.9,6.476,6.476,6.476h195.244c3.575,0,6.476-2.901,6.476-6.476V154.528c0-1.883-0.822-3.674-2.245-4.901L154.23,65.419z M155.103,259.241c-1.225,1.574-3.105,2.496-5.103,2.496s-3.878-0.921-5.103-2.496c-5.115-6.547-49.955-64.799-49.955-93.048 c0-30.362,24.702-55.058,55.058-55.058s55.058,24.696,55.058,55.058C205.058,194.442,160.217,252.694,155.103,259.241z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                      <label
                        for="countries"
                        className="block mb-2 text-sm  text-gray-900 font-bold"
                      >
                        Property Type
                      </label>
                    </div>

                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      id="countries"
                      className="bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-orange-700 dark:border-orange-600 dark:placeholder-orange-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    >
                      <option value="">Choose a property</option>
                      <option value="Villa">Villa</option>
                      <option value="Condo">Condo</option>
                      <option value="Cottage">Cottage</option>
                      <option value="Cabin">Cabin</option>
                    </select>
                  </form>
                </div>
                <div className="basis-1/3 grid ">
                  <form class="w-full mx-auto">
                    <div className="flex space-x-1">
                      <svg
                        class="w-5 h-5 text-gray-500 dark:text-gray-400 "
                        fill="#ff8000"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm6.5-12.846c0-2.523-1.576-3.948-5.263-4.836v-4.44c1.14.234 2.231.725 3.298 1.496l1.359-2.196a9.49 9.49 0 00-4.56-1.776V6h-2.11v1.355c-3.032.234-5.093 1.963-5.093 4.486 0 2.64 1.649 3.925 5.19 4.813v4.58c-1.577-.234-2.886-.935-4.269-2.01L9.5 21.35a11.495 11.495 0 005.724 2.314V26h2.11v-2.313c3.08-.257 5.166-1.963 5.166-4.533zm-7.18-5.327c-1.867-.537-2.327-1.168-2.327-2.15 0-1.027.8-1.845 2.328-1.962zm4.318 5.49c0 1.122-.873 1.893-2.401 2.01v-4.229c1.892.538 2.401 1.168 2.401 2.22z"
                            fill-rule="evenodd"
                          ></path>
                        </g>
                      </svg>
                      <label
                        for="countries"
                        className="block mb-2 text-sm  text-gray-900 font-bold"
                      >
                        Budget
                      </label>
                    </div>

                    <input
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Enter Budget"
                      className="bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-orange-700 dark:border-orange-600 dark:placeholder-orange-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                    />
                  </form>
                </div>
              </div>
              <div className="mt-10  flex items-center justify-center gap-x-6">
                <button
                  href="#"
                  type="submit"
                  className="flex w-full h-10 justify-center rounded-md bg-blue-600 px-2 py-1 text-base font-semibold leading-7 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 mr-2 my-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  Find Property
                </button>
              </div>
            </form>
          </div>
        </div>

        <SimpleCard className="mt-32 my-4" />
      </div>

      <CardPopularProperties />
      <CardNewListedProperties />
      <Testimonials />
      <Footer />
    </div>
  );
}
