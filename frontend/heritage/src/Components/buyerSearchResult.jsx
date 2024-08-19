import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AxiosInstance from "../axiosinstance";

import Header from "./Section/Header/header";
import Footer from "./Section/Footer/footer";
import Testimonials from "./Section/Testimonials/testimonials";
export default function BuyerSearchResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const { searchResults } = location.state || {};
  const resultCount = searchResults ? searchResults.length : 0;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const listings = [
    "3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi 1",
    "3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi 2",
    "3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi 3",
    "3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi 4",
    "3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi 5",
    "3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi 6",
    "3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi 7",
  ];

  const indexOfLastListing = currentPage * itemsPerPage;
  const indexOfFirstListing = indexOfLastListing - itemsPerPage;
  const currentListings = listings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const totalPages = Math.ceil(listings.length / itemsPerPage);

  const [loanAmount, setLoanAmount] = useState(20000);

  const handleSliderChange = (event) => {
    setLoanAmount(parseInt(event.target.value));
  };

  const PropertyDetails = async (id) => {
    try {
      const response = await AxiosInstance.get(`heritage/properties/${id}/`);

      console.log("Search results:", response.data);

      navigate(`/buyer/property`, { state: { searchResults: response.data } });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="relative w-full py-4 sm:py-10 lg:mx-auto lg:max-w-7xl lg:px-32">
        <div className="flex flex-initial justify-start space-x-4 ">
          <div className="bg-blue-700 text-white text-sm hover:bg-blue-400 px-4 py-2 rounded">
            properties({resultCount})
          </div>
          <div className="bg-blue-400 text-white text-sm hover:bg-blue-700 px-4 py-2 rounded">
            New Projects(400)
          </div>
          <div className="bg-blue-400 text-white text-sm hover:bg-blue-700 px-4 py-2 rounded">
            Pre-launch offers
          </div>
        </div>
        <div className="border-b my-4 max-w-3xl"></div>
        <h1 className="text-lg my-4">{resultCount} results for rental</h1>
        {searchResults.map((listing, index) => (
          <div key={index} className="my-4 max-w-3xl">
            <div className="flex flex-initial bg-slate-100">
              <div className="p-4">
                <img
                  src={`${import.meta.env.VITE_API_URL}${
                    listing.images[0]?.image
                  }`}
                  className="w-32 h-40 rounded"
                />
              </div>
              <div className="px-4">
                <div className="flex flex-initial space-x-4">
                  <div className="">
                    <h1 className="font-bold text-md my-2">{listing.name}</h1>
                    <div className="flex space-x-2 space-y-2">
                      {" "}
                      <svg
                        class="w-5 h-5 text-gray-500 my-2 dark:text-gray-400"
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
                      <p className="text-sm">{listing.location}</p>
                    </div>
                  </div>

                  <div
                    onClick={() => PropertyDetails(listing.id)}
                    className=" grid  text-center space-y-2 my-2"
                  >
                    <h1 className="font-bold text-md">${listing.price}</h1>
                    <button className="text-center border border-black px-2 py-1 rounded hover:bg-blue-100">
                      Bid Property
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm">Property details</div>
                  <div className="flex-grow py-1 border-b  border-indigo-200"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div>
                    <svg
                      className="w-12 h-13 my-3"
                      viewBox="0 0 73 73"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>design-and-ux/loading</title>{" "}
                        <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                        <g
                          id="design-and-ux/loading"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          {" "}
                          <g
                            id="container"
                            transform="translate(2.000000, 2.000000)"
                            fill="#ff8000"
                            fill-rule="nonzero"
                            stroke="#ffffff"
                            stroke-width="2"
                          >
                            {" "}
                            <rect
                              id="mask"
                              x="-1"
                              y="-1"
                              width="71"
                              height="71"
                              rx="14"
                            >
                              {" "}
                            </rect>{" "}
                          </g>{" "}
                          <g
                            id="spinner-of-dots"
                            transform="translate(12.000000, 11.000000)"
                            fill="#ffffff"
                            fill-rule="nonzero"
                          >
                            {" "}
                            <path
                              d="M11.0326208,35.554416 C9.78039135,35.554416 8.71627583,35.9925812 7.83983577,36.8689117 C6.96372459,37.7460095 6.52534013,38.8099057 6.52534013,40.0621352 C6.52534013,41.3144743 6.96339572,42.3783706 7.83983577,43.2554684 C8.7166047,44.1317988 9.78072022,44.5699641 11.0326208,44.5699641 C12.2638026,44.5699641 13.3225466,44.1317988 14.2095105,43.2554684 C15.0961455,42.3794669 15.5394631,41.3144743 15.5394631,40.0621352 C15.5394631,38.8099057 15.0962552,37.7467768 14.2095105,36.8689117 C13.322437,35.9933486 12.2638026,35.554416 11.0326208,35.554416 Z"
                              id="Shape"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M10.0311003,26.0401906 C10.0311003,24.6630999 9.54097358,23.4845374 8.56017193,22.5029684 C7.57947991,21.5222764 6.40036931,21.03204 5.02327863,21.03204 C3.64607833,21.03204 2.46718698,21.522386 1.48638533,22.5029684 C0.505802929,23.4837701 0.0155665401,24.6626614 0.0155665401,26.0401906 C0.0155665401,27.417062 0.505693305,28.5954052 1.48638533,29.5764261 C2.46718698,30.557447 3.64607833,31.047793 5.02327863,31.047793 C6.40036931,31.047793 7.57947991,30.557447 8.56017193,29.5764261 C9.54097358,28.596063 10.0311003,27.417062 10.0311003,26.0401906 Z"
                              id="Shape"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M39.0757428,14.5229241 C39.76374,14.5229241 40.3541723,14.2773675 40.8438606,13.7872407 C41.3342066,13.2966754 41.5798729,12.7070105 41.5798729,12.0185748 C41.5798729,11.3298102 41.3342066,10.7405838 40.8438606,10.2503474 C40.3538434,9.75978213 39.76374,9.51466394 39.0757428,9.51466394 C38.3869782,9.51466394 37.7972036,9.76022063 37.3068576,10.2503474 C36.8168405,10.7406934 36.5716127,11.3298102 36.5716127,12.0185748 C36.5716127,12.7073394 36.8168405,13.2966754 37.3068576,13.7872407 C37.7972036,14.277806 38.3869782,14.5229241 39.0757428,14.5229241 Z"
                              id="Shape"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M11.0329497,6.5103217 C9.50951163,6.5103217 8.21069215,7.04769621 7.13605276,8.12211634 C6.06130376,9.19653648 5.52425813,10.4954656 5.52425813,12.0185748 C5.52425813,13.5422321 6.06130376,14.8406131 7.13605276,15.9154717 C8.21102102,16.9902207 9.5098405,17.5274856 11.0329497,17.5274856 C12.5560589,17.5274856 13.854988,16.9898919 14.9294082,15.9154717 C16.0038283,14.8406131 16.5412028,13.5419033 16.5412028,12.0185748 C16.5412028,10.4954656 16.0038283,9.19653648 14.9294082,8.12211634 C13.854988,7.04769621 12.5560589,6.5103217 11.0329497,6.5103217 Z"
                              id="Shape"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M47.2130968,23.9116307 C46.6290227,23.3273373 45.9196489,23.0355195 45.0853042,23.0355195 C44.2501923,23.0355195 43.5408184,23.3273373 42.9567443,23.9116307 C42.3729991,24.495924 42.0811813,25.2055171 42.0811813,26.0406291 C42.0811813,26.8748641 42.3729991,27.5854437 42.9567443,28.1684216 C43.5411473,28.7529342 44.2501923,29.0447521 45.0853042,29.0447521 C45.9196489,29.0447521 46.6294612,28.7529342 47.2130968,28.1684216 C47.7976094,27.584786 48.0890984,26.8748641 48.0890984,26.0406291 C48.0890984,25.2059556 47.7980479,24.4962529 47.2130968,23.9116307 Z"
                              id="Shape"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M39.0757428,36.5564846 C38.1153311,36.5564846 37.2911815,36.9004832 36.6024169,37.5892478 C35.9144197,38.2772451 35.5699826,39.1018332 35.5699826,40.0622449 C35.5699826,41.0218892 35.9144197,41.8464773 36.6024169,42.5353515 C37.2911815,43.2240065 38.1154407,43.5676762 39.0757428,43.5676762 C40.0353871,43.5676762 40.8595367,43.2233487 41.5483013,42.5353515 C42.2370659,41.8465869 42.5811741,41.0223277 42.5811741,40.0622449 C42.5811741,39.1018332 42.2370659,38.278122 41.5483013,37.5892478 C40.8596464,36.9003736 40.0353871,36.5564846 39.0757428,36.5564846 Z"
                              id="Shape"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M25.054127,42.0644089 C23.9482449,42.0644089 23.0039479,42.4564226 22.2210167,43.2390249 C21.4388529,44.0216272 21.0474969,44.9653761 21.0474969,46.0713678 C21.0474969,47.1773595 21.4384144,48.121218 22.2210167,48.9037107 C23.0039479,49.6863131 23.9478064,50.0779979 25.054127,50.0779979 C26.1601187,50.0779979 27.1039772,49.6863131 27.8865796,48.9037107 C28.6691819,48.121218 29.0604282,47.1773595 29.0604282,46.0713678 C29.0604282,44.9653761 28.6691819,44.0216272 27.8865796,43.2390249 C27.1039772,42.4564226 26.1601187,42.0644089 25.054127,42.0644089 Z"
                              id="Shape"
                            >
                              {" "}
                            </path>{" "}
                            <path
                              d="M25.054127,0 C23.3851089,0 21.9655939,0.5839645 20.7970072,1.75244162 C19.6287493,2.92102836 19.0445655,4.34021447 19.0445655,6.00934221 C19.0445655,7.67857957 19.62853,9.09710794 20.7970072,10.2658043 C21.9655939,11.4340622 23.38478,12.0183555 25.054127,12.0183555 C26.7239125,12.0183555 28.1424409,11.434391 29.3105891,10.2658043 C30.4787373,9.09765606 31.0629211,7.67857957 31.0629211,6.00934221 C31.0629211,4.34032409 30.4787373,2.92146685 29.3105891,1.75244162 C28.1424409,0.58429337 26.7239125,0 25.054127,0 Z"
                              id="Shape"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="grid">
                    <h1 className="text-md ">Total Area</h1>
                    <p className="text-sm">891 sqft</p>
                  </div>
                  <div>
                    {" "}
                    <svg
                      className="w-14 h-14 my-3"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <defs>
                          <style>{`.a{fill:none;stroke:#ff8040;stroke-linecap:round;stroke-linejoin:round;}`}</style>
                        </defs>
                        <path className="a" d="M36.5,36.5h-25v-25h25Z"></path>
                        <path
                          className="a"
                          d="M40.5,5.5H28.6736l-4-4-4,4H7.5a2.0058,2.0058,0,0,0-2,2v33a2.0059,2.0059,0,0,0,2,2h33a2.0059,2.0059,0,0,0,2-2V7.5A2.0058,2.0058,0,0,0,40.5,5.5Z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="grid">
                    <h1 className="text-md ">Status</h1>
                    <p className="text-sm">Ready to move</p>
                  </div>
                  <div>
                    <svg
                      className="w-12 h-12 my-3"
                      viewBox="0 0 48.001 48.001"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
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
                          id="area"
                          d="M189,471a5.005,5.005,0,0,1-5-5V428a5.006,5.006,0,0,1,5-5h38a5.006,5.006,0,0,1,5,5v38a5.005,5.005,0,0,1-5,5Zm27-2h11a3,3,0,0,0,3-3V455H216Zm-15,0h14V455H201Zm-15-3a3,3,0,0,0,3,3h11V455H186Zm30-12h14V440H216Zm-4.293,0H215v-3.292Zm-4,0H211l-.353-.353,4-4L215,450v-3.293Zm-4,0H207l-.354-.353,8-8L215,446v-3.293ZM201,454h2l-.353-.353,12-12L215,442v-2h-.29a6.88,6.88,0,0,0,.219-1H215V425H201v14h.071a7.047,7.047,0,0,0,.219,1H201v3.292l1.271-1.27a7.068,7.068,0,0,0,.635.779l-1.552,1.553L201,444v3.293l3.331-3.331a6.88,6.88,0,0,0,.932.482l-3.91,3.91L201,448v3.292l6.073-6.073-.848-2.545a5,5,0,1,1,3.55,0L208,448l-.573-1.72-6.073,6.073L201,452Zm-15,0h14V440H186Zm19-16a3,3,0,1,0,3-3A3,3,0,0,0,205,438Zm11,1h14V428a3,3,0,0,0-3-3H216Zm-30-11v11h14V425H189A3,3,0,0,0,186,428Z"
                          transform="translate(-184 -423)"
                          fill="#ff8000"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="grid">
                    <h1 className="text-md ">Total Area</h1>
                    <p className="text-sm">891 sqft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full py-4 sm:py-10 lg:mx-auto lg:max-w-7xl lg:px-32">
        <div className="border-b my-4 max-w-3xl"></div>
        <div className="flex space-x-2 ">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-blue-400 rounded hover:bg-blue-300 text-white"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-blue-200 hover:bg-blue-300"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-blue-400 rounded hover:bg-blue-300 text-white"
          >
            Next
          </button>
        </div>
      </div>
      <div className="relative w-full  py-4 sm:py-10 lg:mx-auto lg:max-w-7xl lg:px-32">
        <div className="flex lg:max-w-3xl bg-blue-50 p-4 rounded space-x-4">
          <div className="grid">
            {" "}
            <h1 className="whitespace-nowrap text-xl font-bold">
              Select Your Home Loan?
            </h1>
            <div className="text-sm">
              Select How much Home loan you can take
            </div>
          </div>

          <div className="w-full relative">
            <input
              type="range"
              min="20000"
              max="60000"
              step="10000"
              value={loanAmount}
              onChange={handleSliderChange}
              className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                  ((loanAmount - 20000) / 40000) * 100
                }%, #cbd5e1 ${
                  ((loanAmount - 20000) / 40000) * 100
                }%, #cbd5e1 100%)`,
              }}
            />

            <div className="flex justify-between text-sm text-gray-600">
              <p>$20k</p>
              <p>$30k</p>
              <p>$40k</p>
              <p>$50k</p>
              <p>$60k</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}
