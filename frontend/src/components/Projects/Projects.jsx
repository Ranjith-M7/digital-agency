import React from "react";

// Assuming these image paths are correct based on your project structure.
import Partylah from "../../assets/Projects/partylah.jpg";
import Kubes from "../../assets/Projects/kubes.jpg";
import casuarine from "../../assets/Projects/casuarine.jpg";
import kamala from "../../assets/Projects/Kamala.jpg";
import border from "../../assets/Projects/border.jpg";
import foodCaterer from "../../assets/Projects/bfc.jpg";

const Projects = () => {
  const projectsData = [
    {
      image: Partylah,
      service: "Website Development",
      company: "Partylah",
    },
    {
      image: Kubes,
      service: "E-Commerce Store",
      company: "Kubes Bistro",
    },
    {
      image: casuarine,
      service: "Mobile App Design",
      company: "Casual Curry",
    },
    {
      image: kamala,
      service: "Branding & Marketing",
      company: "Kamala Restaurant",
    },
    {
      image: border,
      service: "SEO & Content",
      company: "Border Parotta",
    },
    {
      image: foodCaterer,
      service: "Website Redesign",
      company: "Food Caterer",
    },
  ];

  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header section */}
        <div className="pb-12 text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold font-heading">
            Our <span className="font-light text-red-500">Projects</span>
          </h1>
          <p className="text-sm sm:text-base">Our Recently Handled Projects</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.company} project`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-4 bg-white text-center">
                <p className="text-xs sm:text-sm text-red-600 font-bold leading-none">
                  {project.service}
                </p>
                <p className="text-sm sm:text-lg font-semibold mt-1">{project.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
