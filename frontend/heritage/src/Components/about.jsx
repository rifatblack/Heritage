import Header from "./Section/Header/header";
import Footer from "./Section/Footer/footer";
import SimpleCard from "./Section/Cards/simpleCard";
import Testimonials from "./Section/Testimonials/testimonials";
import CardOurTeam from "./Section/Cards/cardOurTeam";
import CardHeritageJourney from "./Section/Cards/cardHeritageJourney";

export default function About() {
  return (
    <div>
      <Header />
      <div className="relative w-full h-60">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Background"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <SimpleCard />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-32 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative flex justify-center items-center ">
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Background"
              className="w-full h-96 object-cover"
            />
            {/* Text Overlay with Box */}
            <div className="absolute inset-0 flex items-center justify-center translate-x-96 translate-y-48 ">
              <div className="bg-slate-100 bg-opacity-90 p-8 rounded shadow-lg w-2xl">
                <div className="flex flex-initial space-x-2 mb-2">
                  <div className="h-1 w-10 bg-orange-400 my-3"></div>
                  <p className="text-md text-orange-400">Our Story</p>
                </div>
                <h1 className="font-bold text-lg mb-4">
                  Efficient and Transparent Home Buying Solutions
                </h1>
                <p className="text-sm">
                  In the symphony of bustling markets and serene landscapes,
                  Heritage-Nest was born—a vision to
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-32 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image with Text Overlay */}
          <div className="relative flex justify-center items-center lg:order-2">
            <img
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Background"
              className="w-full h-96 object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center -translate-x-96 translate-y-48">
              <div className="bg-slate-100 bg-opacity-90 p-8 rounded shadow-lg w-2xl">
                <div className="flex flex-initial space-x-2 mb-2">
                  <div className="h-1 w-10 bg-orange-400 my-3"></div>
                  <p className="text-md text-orange-400">Our Story</p>
                </div>
                <h1 className="font-bold text-lg mb-4">
                  Efficient and Transparent Home Buying Solutions
                </h1>
                <p className="text-sm">
                  In the symphony of bustling markets and serene landscapes,
                  Heritage-Nest was born—a vision to
                </p>
              </div>
            </div>
          </div>

          {/* Empty Column or Additional Content */}
          <div className="lg:order-1"></div>
        </div>
      </div>
      <CardOurTeam />
      <CardHeritageJourney />
      <Testimonials />
      <Footer />
    </div>
  );
}
