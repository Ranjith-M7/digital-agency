"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      "They completely transformed our brand's online presence and more. The event campaign they ran was a huge success, leading to a sold-out launch night!",
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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  slidesToShow: 3, // Default for large screens (1280px and up)
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1279, // For desktops
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // For tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // For mobile
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        {/* Header section */}
        <div className="pb-12 text-center space-y-3">
          <p>Testimonial</p>
          <h1 className="text-3xl font-semibold font-heading">
            What{" "}
            <span className="font-light text-red-500"> Our Clients Say</span>
          </h1>
        </div>
        {/* Testimonial section */}
        <Slider {...settings}>
          {testimonials.map((card) => (
            <div key={card.id} className="px-4">
              {" "}
              {/* Added px-4 for horizontal spacing */}
              <div className="p-8 rounded-lg bg-gray-100 shadow-md flex flex-col items-center justify-center h-full">
                {" "}
                {/* h-full for equal height */}
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
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
