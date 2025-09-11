import React from "react";
import aboutImage from "../../assets/website/about_img.jpg";
import CountUp from "react-countup";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      {/* Header section */}
      <div className="pb-12 text-center space-y-3">
        <h1 className="text-3xl font-semibold font-heading">
          About <span className="font-light text-red-500">Our Brand</span>
        </h1>
        <p>Passionate About digital marketing</p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <div className="relative w-full sm:w-1/2 max-w-lg h-[60vh]">
          {/* The background card */}
          <div className="absolute inset-0 bg-brand-red rounded-xl transform translate-x-4 translate-y-4"></div>
          <img
            src={aboutImage}
            alt=""
            className="relative w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <CountUp end={10} suffix="+" duration={2} />
              </p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <CountUp end={30} suffix="+" duration={2} />
              </p>
              <p>Projects completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <CountUp end={35} suffix="+" duration={2} />
              </p>
              <p>Ongoing projects</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">
                <CountUp end={47} suffix="+" duration={2} />
              </p>
              <p>Running projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            At{" "}
            <span className="text-brand-red font-semibold">HUB Creation</span>,
            we craft digital experiences that drive real results. With over 30
            satisfied clients, we are your trusted partner for website
            development and data-driven marketing success.
          </p>
          <button className="bg-brand-red text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
