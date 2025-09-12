"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required Swiper modules
import { Pagination, Autoplay } from "swiper/modules";

// Import your assets
import partylah from "../../assets/Testimonial/partylah.jpg";
import kubes from "../../assets/Testimonial/kubes.jpg";
import kamala from "../../assets/Testimonial/kamala.jpg";
import casurina from "../../assets/Testimonial/casurina.jpg";
import quote from "../../assets/icons/quote.svg";

const testimonials = [
  {
    id: 1,
    name: "Kamala Restaurant",
    location: "Singapore",
    comment:
      "Thanks to their digital marketing expertise, our online orders have increased by 40% and our reservation system is busier than ever. A fantastic partnership!",
    rating: 5,
    image: kamala,
    starColor: "text-yellow-500",
  },
  {
    id: 2,
    name: "Partylah",
    location: "Singapore",
    comment:
      "They completely transformed our brand's online presence. The event campaign they ran was a huge success, leading to a sold-out launch night and more!",
    rating: 5,
    image: partylah,
    starColor: "text-yellow-500",
  },
  {
    id: 3,
    name: "KUBES IndianRestobar",
    location: "Singapore",
    comment:
      "Their social media management has been a game-changer. Our engagement and followers have grown exponentially, attracting a whole new crowd to our restobar.",
    rating: 5,
    image: kubes,
    starColor: "text-yellow-500",
  },
  {
    id: 4,
    name: "Casurina Curry",
    location: "Singapore",
    comment:
      "We've seen a massive surge in website traffic and online sales since working with this agency. Their strategies are powerful and their team is great to work with.",
    rating: 5,
    image: casurina,
    starColor: "text-yellow-500",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header section */}
      <div className="pb-12 text-center space-y-3">
        <p>Testimonial</p>
        <h1 className="text-3xl font-semibold font-heading">
          What <span className="font-light text-red-500">Clients Say</span>
        </h1>
      </div>
      {/* Testimonial slider */}
      <Swiper
        loop={true}
        speed={500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={16} // Adds space between slides
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {testimonials.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="p-8 rounded-2xl bg-white shadow-md flex flex-col items-center justify-center h-full">
              {" "}
              {/* Changed bg-gray-100 to bg-white */}
              <img src={quote} alt="Quote icon" className="w-10 h-10 mb-4" />
              
              <p className="text-base text-gray-600 text-center mt-6 mb-8">
                "{card.comment}"
              </p>
              <img
                src={card.image}
                className="rounded-full mb-4 w-20 h-20 object-cover"
                alt={`Profile of ${card.name}`}
              />
              <h3 className="text-center text-lg text-black">
                {card.name}
                <br />
                <small className="text-red-500 font-medium text-sm">
                  {card.location}
                </small>
              </h3>
              {/* Stars for rating - placed above the quote */}
              <div className={`flex justify-center mb-4 ${card.starColor}`}>
                {[...Array(5)].map(
                  (
                    _,
                    i // Always render 5 stars
                  ) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < card.rating ? card.starColor : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  )
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
