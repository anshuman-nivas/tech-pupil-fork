import { useState } from "react";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      id="#services"
      className="p-4 md:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-10 leading-normal uppercase text-green-600">
        Services
      </h1>
      <div className="flex flex-col md:flex-row max-w-full md:max-w-4xl">
        <div
          className={`text-lg font-semibold text-neutral-200 rounded-lg h-40 w-full md:w-72 border-2 border-green-600 flex items-center justify-center b_glow my-4 md:my-0 mx-4 md:mx-8 px-4 ${
            hoveredIndex === 0 ? "hover:scale-105" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          Online/Offline Workshops on Cybersecurity
        </div>
        <div
          className={`text-lg font-semibold text-neutral-200 rounded-lg h-40 w-full md:w-72 border-2 border-green-600 flex items-center justify-center b_glow my-4 md:my-0 mx-4 md:mx-8 px-4 ${
            hoveredIndex === 1 ? "hover:scale-105" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          Online/Offline Data Science Workshop
        </div>
        <div
          className={`text-lg font-semibold text-neutral-200 rounded-lg h-40 w-full md:w-72 border-2 border-green-600 flex items-center justify-center b_glow my-4 md:my-0 mx-4 md:mx-8 px-4 ${
            hoveredIndex === 2 ? "hover:scale-105" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          Ethical Hacking Courses
        </div>
        <div
          className={`text-lg font-semibold text-neutral-200 rounded-lg h-40 w-full md:w-72 border-2 border-green-600 flex items-center justify-center b_glow my-4 md:my-0 mx-4 md:mx-8 px-4 ${
            hoveredIndex === 3 ? "hover:scale-105" : ""
          }`}
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          DataScience Course With Unpaid Internship
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://cosmofeed.com/vp/66431a92a30cb40013be6fd2"
          className="text-lg font-semibold text-white bg-green-600 rounded-lg px-6 py-3 b_glow hover:scale-105"
        >
          Register For DataScience Internship
        </a>
      </div>
    </div>
  );
};

export default Services;
