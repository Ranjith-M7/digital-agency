import React from "react";
import {
  FaArrowRight,
  FaBullhorn,
  FaGlobe,
  FaPencilRuler,
  FaYoutube,
  FaSearch,
  FaLightbulb,
} from "react-icons/fa";

const servicesData = [
  {
    name: "Social Media Management & Marketing",
    icon: <FaBullhorn className="text-2xl" />,
    link: "#",
    description:
      "We create engaging content and run targeted ad campaigns to grow your brand on platforms like Instagram, Facebook, and LinkedIn.",
    aosDelay: "0",
  },
  {
    name: "Web Development",
    icon: <FaGlobe className="text-2xl" />,
    link: "#",
    description:
      "We build fast, responsive, and custom websites that reflect your brand and drive results—whether it’s a portfolio, business site, or e-commerce platform.",
    aosDelay: "300",
  },
  {
    name: "Content Creation & Lead Generation",
    icon: <FaPencilRuler className="text-2xl" />,
    link: "#",
    description:
      "We craft compelling content and targeted campaigns that attract, engage, and convert the right audience—turning clicks into qualified leads.",
    aosDelay: "600",
  },
  {
    name: "YouTube Marketing & Influencer Marketing",
    icon: <FaYoutube className="text-2xl" />,
    link: "#",
    description:
      "We grow your brand through strategic YouTube promotions and trusted influencer partnerships that boost visibility, engagement, and credibility.",
    aosDelay: "900",
  },
  {
    name: "Search Engine Optimization (SEO)",
    icon: <FaSearch className="text-2xl" />,
    link: "#",
    description:
      "We optimize your website to rank higher on Google, drive organic traffic, and attract the right audience with smart keywords and clean SEO practices.",
    aosDelay: "1200",
  },
  {
    name: "Branding & Strategy",
    icon: <FaLightbulb className="text-2xl" />,
    link: "#",
    description:
      "We build strong brand identities and craft result-driven strategies that connect with your audience and set your business apart.",
    aosDelay: "1500",
  },
];

const Services = () => {
  return (
    <>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header section */}
          <div className="pb-12 text-center space-y-3">
            <h1 className="text-3xl font-semibold font-heading">
              Explore <span className="font-light text-red-500">Our Services</span>
            </h1>
            <p>
              We are a marketing and development agency that provides end-to-end
              digital solutions.
            </p>
          </div>
          {/* card section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesData.map((service) => (
              <a
                key={service.name}
                href={service.link}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="group card-hover-effect p-6 rounded-xl space-y-3 bg-white shadow-md flex flex-col justify-between"
              >
                {/* Icon and name container */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-red-800 text-white transition-all duration-300 group-hover:from-red-800 group-hover:to-red-500">
                    {service.icon}
                  </div>
                  <h1 className="text-lg font-semibold">{service.name}</h1>
                </div>

                <p className="text-gray-600 text-sm">{service.description}</p>
                <div className="flex justify-end pt-4">
                  <FaArrowRight className="text-lg text-red-500 group-hover:text-red-800 transition-colors duration-300" />
                </div>
              </a>
            ))}
          </div>
          {/* button section is removed to match the image */}
        </div>
      </div>
    </>
  );
};

export default Services;
