"use client";

import React from "react";
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import your logo images here
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

const LogoSlider = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-12">
          A few of the other companies we helped grow
        </h2>
        <Swiper
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false, // Set to true for right-to-left scroll
          }}
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={16}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
            375: {
              slidesPerView: 2,
            },
          }}
          className="logo-slider"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="logo-slide px-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="mx-auto h-14 md:h-18 lg:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 rounded-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSlider;
