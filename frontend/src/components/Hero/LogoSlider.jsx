"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// logo images here
import logoPartylah from "../../assets/Testimonial/partylah.jpg";
import logoKubes from "../../assets/Testimonial/kubes.jpg";
import logoKamala from "../../assets/Testimonial/kamala.jpg";
import logoCasurina from "../../assets/Testimonial/casurina.jpg";

const logos = [
  { id: 1, src: logoPartylah, alt: "Partylah logo" },
  { id: 2, src: logoKubes, alt: "Kubes indian restobar logo" },
  { id: 3, src: logoKamala, alt: "kamala restaurant logo" },
  { id: 4, src: logoCasurina, alt: "Casuarina curry logo" },
  { id: 5, src: logoKubes, alt: "Border parotta logo" },
  { id: 6, src: logoKamala, alt: "BFC logo" },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const LogoSlider = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-12">
          A few of the other companies we helped grow
        </h2>
        <Slider {...settings}>
          {logos.map((logo) => (
            <div key={logo.id} className="logo-slide px-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="mx-auto h-14 md:h-18 lg:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 rounded-full"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;
