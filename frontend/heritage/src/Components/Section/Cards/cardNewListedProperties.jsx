import React, { useState } from "react";
export default function CardNewListedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      title: "SunnySlope Suites",
      content: "Meadowshire Park, Greenfield, USA",
    },
    {
      id: 2,
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      title: "SunnySlope Suites",
      content: "Meadowshire Park, Greenfield, USA",
    },
    {
      id: 3,
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      title: "SunnySlope Suites",
      content: "Meadowshire Park, Greenfield, USA",
    },
    {
      id: 4,
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
      title: "SunnySlope Suites",
      content: "Meadowshire Park, Greenfield, USA",
    },
    {
      id: 5,
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
      title: "SunnySlope Suites",
      content: "Meadowshire Park, Greenfield, USA",
    },
    {
      id: 6,
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      title: "SunnySlope Suites",
      content: "Meadowshire Park, Greenfield, USA",
    },
    {
      id: 7,
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      title: "SunnySlope Suites",
      content: "Meadowshire Park, Greenfield, USA",
    },
    {
      id: 8,
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      title: "SunnySlope Suites",
      content: "Meadowshire Park, Greenfield, USA",
    },
    {
      id: 9,
      image:
        "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      title: "SunnySlope Suites",
      content: "Meadowshire Park, Greenfield, USA",
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 4) {
      setCurrentIndex(currentIndex + 4);
    }
  };
  return (
    <div className="relative w-full">
      <div className="py-10 sm:py-10 lg:mx-auto lg:max-w-7xl lg:px-32">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            New Listed Properties
          </h2>
          <a
            href=""
            className="hidden text-sm font-semibold underline text-indigo-600 hover:text-indigo-500 sm:block"
          >
            See all propeety
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center space-x-4 overflow-x-auto ">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div
            key={card.id}
            className="max-w-xs rounded overflow-visible shadow-lg relative bg-slate-100 my-6"
          >
            <div className="relative w-full max-w-sm">
              {/* Large Image */}
              {/* <img
                  src="path_to_large_image.jpg"
                  className="w-full h-auto rounded-lg"
                /> */}
              <img
                className="w-full h-auto rounded"
                src={card.image}
                alt={card.title}
              />

              <div className="flex absolute left-0 bottom-0 transform translate-x-5 -translate-y-5 px-1 space-x-2 bg-white rounded">
                <div>
                  <svg
                    viewBox="0 -2 20 20"
                    version="1.1"
                    className="w-6 h-6 rounded "
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
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-420.000000, -3881.000000)"
                          fill="#ff8000"
                        >
                          {" "}
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            {" "}
                            <path
                              d="M376.083,3725.667 C376.083,3724.562 376.978,3723.667 378.083,3723.667 C379.188,3723.667 380.083,3724.562 380.083,3725.667 C380.083,3726.772 379.188,3727.667 378.083,3727.667 C376.978,3727.667 376.083,3726.772 376.083,3725.667 L376.083,3725.667 Z M382,3733.086 L377.987,3729.074 L377.971,3729.089 L377.955,3729.074 L376.525,3730.504 L371.896,3725.876 L371.881,3725.892 L371.865,3725.876 L366,3731.741 L366,3723 L382,3723 L382,3733.086 Z M364,3737 L384,3737 L384,3721 L364,3721 L364,3737 Z"
                              id="image_picture-[#ff8000]"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <h1 className="text-sm">20</h1>
              </div>
            </div>
            <div className="grid px-6 py-4">
              <div className="flex flex-initial justify-between border-b-2">
                <div className="bg-blue-300 rounded px-2 py-1 text-xs sm:text-sm sm:bg-blue-300 bg-transparent">
                  Apartment
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 w-2 h-2 mr-2 sm:bg-orange-500 bg-transparent"></div>
                  <div className="text-xs sm:text-sm">Ready to Move</div>
                </div>
              </div>
              <div className=" text-xl mb-1">{card.title}</div>
              <div className="flex">
                {" "}
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400 my-2"
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
                </svg>{" "}
                <p className="text-gray-700 text-base my-1">{card.content}</p>
              </div>

              <h1 className="font-bold text-xl mb-2">$ 25000</h1>
            </div>
            {/* Button Half Inside and Half Outside the Card */}
            {index === 0 && currentIndex > 0 && (
              <button
                type="button"
                className="absolute top-1/2 left-[-12px] sm:left-[-16px] md:left-[-20px] transform -translate-y-1/2 z-10"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
            )}
            {index === cards.slice(currentIndex, currentIndex + 3).length - 1 &&
              currentIndex < cards.length - 3 && (
                <button
                  type="button"
                  className="absolute top-1/2 right-[-12px] sm:right-[-16px] md:right-[-20px] transform -translate-y-1/2 z-10"
                  onClick={handleNext}
                  disabled={currentIndex >= cards.length - 3}
                  data-carousel-next
                >
                  <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-3 h-3 md:w-4 md:h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
