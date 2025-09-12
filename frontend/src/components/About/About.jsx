import React from "react";
import aboutImage from "../../assets/website/about_img.jpg";
import CountUp from "react-countup";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-6 sm:p-10 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      {/* Header section */}
      <div className="pb-12 text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold font-heading">
          About <span className="font-light text-red-500">Our Brand</span>
        </h1>
        <p className="text-sm sm:text-base">Passionate About digital marketing</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-stretch md:gap-20 w-full">
        {/* Image wrapper */}
        <div className="relative w-full sm:w-1/2 max-w-lg md:max-w-none">
          {/* Background card only on medium+ */}
          <div className="absolute inset-0 bg-brand-red rounded-xl transform translate-x-3 translate-y-3 hidden sm:block"></div>
          <img
            src={aboutImage}
            alt="About Hub Creation"
            className="relative w-full h-auto md:h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content section */}
        <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 text-gray-600 w-full justify-center">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 text-center md:text-left">
            <div>
              <p className="text-3xl sm:text-4xl font-medium text-gray-800">
                <CountUp end={10} suffix="+" duration={2} />
              </p>
              <p className="text-sm sm:text-base">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-medium text-gray-800">
                <CountUp end={30} suffix="+" duration={2} />
              </p>
              <p className="text-sm sm:text-base">Projects completed</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-medium text-gray-800">
                <CountUp end={35} suffix="+" duration={2} />
              </p>
              <p className="text-sm sm:text-base">Ongoing projects</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-medium text-gray-800">
                <CountUp end={47} suffix="+" duration={2} />
              </p>
              <p className="text-sm sm:text-base">yet to start projects</p>
            </div>
          </div>
          <p className="my-6 sm:my-10 max-w-lg text-sm sm:text-base text-center md:text-left">
            At{" "}
            <span className="text-brand-red font-semibold">HUB Creation</span>,
            we craft digital experiences that drive real results. With over 30
            satisfied clients, we are your trusted partner for website
            development and data-driven marketing success.
          </p>
          <button className="bg-brand-red text-white px-6 sm:px-8 py-2 rounded text-sm sm:text-base">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
