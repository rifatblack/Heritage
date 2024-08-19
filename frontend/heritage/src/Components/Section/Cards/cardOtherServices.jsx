export default function CardOtherServices() {
  return (
    <div className="relative w-full py-4 sm:py-10 lg:mx-auto lg:max-w-7xl lg:px-32">
      <h1 className="flex justify-center text-black text-2xl font-bold">
        Others Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 justify-items-center">
        <div className="flex bg-slate-100 p-4 h-32 rounded">
          <div className="mr-4 flex-shrink-0">
            <div className="bg-orange-500 p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">Advanced Property Search</h2>
            <p className="text-sm mt-2">
              Effortlessly find your dream property with advanced search
              filters.
            </p>
          </div>
        </div>
        <div className="flex bg-slate-100 p-4 h-32 rounded">
          <div className="mr-4 flex-shrink-0">
            <div className="bg-orange-500 p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">Property Management</h2>
            <p className="text-sm mt-2">
              Manage your properties with ease using our comprehensive tools.
            </p>
          </div>
        </div>
        <div className="flex bg-slate-100 p-4 h-32 rounded">
          <div className="mr-4 flex-shrink-0">
            <div className="bg-orange-500 p-2 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">Real Estate Consulting</h2>
            <p className="text-sm mt-2">
              Get expert advice on buying, selling, and managing properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
