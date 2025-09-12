import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const Whatsapp = () => {
  const phoneNumber = "+918940693589";
  const message =
    "Hello, I saw your website and would like to know more about your services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default Whatsapp;
