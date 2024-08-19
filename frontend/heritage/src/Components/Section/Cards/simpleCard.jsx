export default function SimpleCard({ className }) {
  return (
    <div
      className={`relative w-full h-auto flex flex-col items-center justify-center pt-20 px-4 md:px-8 lg:px-16 ${className}`}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 w-full max-w-screen-lg">
        {[
          { value: "2K+", label: "New Flats Listed", color: "Orange" },
          { value: "1.5K+", label: "Properties Sold" },
          { value: "3K+", label: "Happy Customers", color: "Orange" },
          { value: "500+", label: "Properties Rented" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex p-6 rounded-lg shadow-lg flex-col items-start text-start ${
              item.color === "Orange" ? "bg-orange-100" : "bg-blue-100"
            }`}
          >
            <div
              className={`text-2xl font-bold ${
                item.color === "Orange" ? "text-orange-500" : "text-blue-500"
              }`}
            >
              {item.value}
            </div>
            <p
              className={`mt-2 text-sm ${
                item.color === "Orange" ? "text-orange-600" : "text-blue-600"
              }`}
            >
              {item.label}
            </p>
            <div className="flex mt-6 w-full justify-between items-center">
              <a
                href="#"
                className={`underline text-sm font-medium ${
                  item.color === "Orange" ? "text-orange-500" : "text-blue-500"
                } hover:text-opacity-80`}
              >
                View All
              </a>
              {item.color === "Orange" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <path
                    d="M9 13L12 16M12 16L15 13M12 16V8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#ff8000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#3b82f6"
                >
                  <path
                    d="M9 13L12 16M12 16L15 13M12 16V8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
