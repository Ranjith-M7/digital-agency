import React from "react";
import HeroImg from "../../assets/website/team.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <main className="bg-white duration-300">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* Image section */}
            <div className="order-1 sm:order-2 ">
              <img
                src={HeroImg}
                className="aspect-video object-cover w-full h-full rounded-3xl "
                alt=""
              />
            </div>
            {/* Text Content section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 mb-10">
              <h1 className="text-4xl sm:text-5xl font-semibold font-heading">
                Building Brands in the{" "}
                <span className="text-red-500">Digital Marketing Agency</span>
              </h1>
              <p>
                Elevate your brand with our expert digital marketing strategies.
                We connect you with your audience and drive measurable growth,
                turning clicks into customers. Let's build your online success
                story together, one campaign at a time.
              </p>
              <Link to="/contact">
                <button className="mt-6 bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
