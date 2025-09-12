import React from "react";
import { toast } from "react-toastify";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7c3a7bd-39eb-4aac-984e-c04c6cfc334c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold font-heading mb-2 text-center">
        Contact{" "}
        <span className="font-light text-red-500">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <div className="flex flex-col md:flex-row md:items-start justify-center gap-10 max-w-5xl mx-auto">
        {/* Left Side: Contact Details */}
        <div className="w-full md:w-1/2 text-left md:pt-12">
          <h2 className="text-2xl font-bold font-heading text-gray-800 mb-8">
            Get in Touch
          </h2>
          <ul className="space-y-6 text-gray-700">
            {/* Phone */}
            <li className="flex items-center gap-6">
              <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-pink-500 text-xl" />
              </div>
              <div>
                {/* Responsive text: base for mobile, md: for desktop */}
                <p className="text-base sm:text-lg font-bold text-gray-800">
                  Phone
                </p>
                <a
                  href="tel:+15551234567"
                  className="text-sm sm:text-base text-gray-600 hover:text-brand-red transition-colors duration-200"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-center gap-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-green-500 text-xl" />
              </div>
              <div>
                {/* Responsive text: base for mobile, md: for desktop */}
                <p className="text-base sm:text-lg font-bold text-gray-800">
                  Email
                </p>
                <a
                  href="mailto:contact@youragency.com"
                  className="text-sm sm:text-base text-gray-600 hover:text-brand-red transition-colors duration-200"
                >
                  contact@hubcreation.com
                </a>
              </div>
            </li>

            {/* Address */}
            <li className="flex items-center gap-6">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-orange-500 text-xl" />
              </div>
              <div>
                {/* Responsive text: base for mobile, md: for desktop */}
                <p className="text-base sm:text-lg font-bold text-gray-800">
                  Address
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  123 Digital Drive, Suite 456, Singapore
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side: Contact Form - UPDATED DESIGN */}
        <form
          onSubmit={onSubmit}
          className="w-full md:w-1/2 text-gray-600 p-8 rounded-xl shadow-lg bg-white"
        >
          <h2 className="text-2xl font-bold font-heading text-gray-800 mb-8">
            Write us a message
          </h2>
          <div className="flex flex-col space-y-4">
            {/* Your Name */}
            <div>
              <input
                className="w-full border border-gray-300 rounded-lg py-3 px-6 mt-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
            </div>
            {/* Your Email */}
            <div>
              <input
                className="w-full border border-gray-300 rounded-lg py-3 px-6 mt-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
            </div>
            {/* Subject */}
            <div>
              <input
                className="w-full border border-gray-300 rounded-lg py-3 px-6 mt-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                type="text"
                name="Subject"
                placeholder="Subject"
                required
              />
            </div>
            {/* Message */}
            <div>
              <textarea
                className="w-full border border-gray-300 rounded-lg py-4 px-6 mt-2 h-30 resize-none placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
                name="Message"
                placeholder="Your message"
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-8">
            <button className="w-full bg-brand-red text-white py-4 rounded-lg font-semibold">
              {result ? result : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
