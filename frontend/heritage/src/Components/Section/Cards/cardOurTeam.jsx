import React, { useState } from "react";
export default function CardOurTeam() {
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
          <div className="flex flex-initial space-x-2 mb-2 mx-4">
            <div className="h-1 w-10 bg-orange-400 my-3"></div>
            <p className="text-md text-orange-400">Our Story</p>
          </div>
        </div>
        <div className="grid mx-4">
          <h1 className="text-xl font-bold">
            Discover the Faces Behind Our Success
          </h1>
        </div>
      </div>
      <div className="flex justify-center space-x-4 overflow-x-auto ">
        {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div
            key={card.id}
            className="max-w-xs rounded overflow-visible shadow-lg relative bg-slate-100 "
          >
            <div className="relative w-full max-w-sm">
              {/* Large Image */}
              {/* <img
              src="path_to_large_image.jpg"
              className="w-full h-auto rounded-lg"
            /> */}
              <img
                className="w-full h-96 rounded"
                src={card.image}
                alt={card.title}
              />
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
