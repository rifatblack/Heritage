import HeritageLogo from "@/assets/HeritageLogo.png";
const navigation = {
  Product: [
    { name: "Overview", href: "#" },
    { name: "Features", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Releases", href: "#" },
  ],
  Company: [
    { name: "About us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "News", href: "#" },
    { name: "Media kit", href: "#" },
    { name: "Contact", href: "#" },
  ],
  Resources: [
    { name: "Blog", href: "#" },
    { name: "Newsletter", href: "#" },
    { name: "Events", href: "#" },
    { name: "Help centre ", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Support", href: "#" },
  ],
  Social: [
    { name: "Twitter", href: "#" },
    { name: "Linkedin", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "AngelList", href: "#" },
    { name: "Dribbble", href: "#" },
  ],
  Legal: [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Licenses", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Contact", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path
            fill="#1D4ED8"
            d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "#",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path
            fill="#1D4ED8"
            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path
            fill="#1D4ED8"
            d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
          ></path>
        </svg>
      ),
    },

    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg
          fill="#000000"
          height="24"
          width="24"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 236.245 236.245"
          xmlSpace="preserve"
        >
          <g>
            <path
              fill="#1D4ED8"
              d="M194.838,135.847c-2.133-22.22-15.158-25.655-21.474-25.995c-2.108-0.113-3.979-1.308-5.003-3.153
            c-5.237-9.439-13.203-11.707-19.649-11.707c-0.829,0-1.634,0.038-2.404,0.102c-0.169,0.014-0.337,0.021-0.502,0.021
            c-3.804,0-6.652-3.66-5.688-7.434c5.181-20.277,18.426-66.731,18.426-66.731C162.669,8.595,152.587,0.001,142.716,0
            c-6.135,0-12.189,3.319-14.701,11.119l-18.587,61.864c-1.253,4.17-4.841,6.267-8.43,6.267c-3.528,0-7.057-2.026-8.37-6.1
            L74.875,18.064c-2.114-8.786-8.794-12.64-15.552-12.64c-9.626,0-19.412,7.816-16.398,20.332l19.132,79.563
            c0.764,3.175-1.168,6.354-4.329,7.171c-6.207,1.604-15.255,6.709-16.433,22.781c-1.439,19.636,27.503,57.831,33.032,65.885
            c0.594,0.865,0.948,1.868,1.029,2.915l2.936,26.793c0.24,3.105,2.83,5.381,5.945,5.381h72.49c3.139,0,5.74-2.311,5.95-5.443
            l2.37-24.415c0.071-1.064,0.422-2.054,1.025-2.934C171.323,195.79,197.294,161.439,194.838,135.847z"
            />
          </g>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-blue-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <img
              className="flex justify-center h-20 w-auto"
              src={HeritageLogo}
              alt="Company name"
            />{" "}
            <p className="my-4">
              Design amazing digital experiences <br />
              that create more happy in the world.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-5 md:gap-4">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.Product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.Company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.Resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Social
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.Social.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.Legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; 2024 Heritage-Nest All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
