import React from "react";
import teamMember1 from "../assets/image3.jpg";
import teamMember2 from "../assets/image6.jpg";
import teamMember3 from "../assets/image2.jpg";
import teamMember4 from "../assets/image4.jpg";
import teamMember5 from "../assets/image5.jpg"; // Corrected duplicate import name

const Team = () => {
  return (
    <section id="team" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-green-500">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Add your team member components here */}
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow">
            <img src={teamMember1} alt="Team Member 1" className="w-full h-48 hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow">
            <img src={teamMember2} alt="Team Member 2" className="w-full h-48 hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow">
            <img src={teamMember3} alt="Team Member 3" className="w-full h-48 hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow">
            <img src={teamMember4} alt="Team Member 4" className="w-full h-48 hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow">
            <img src={teamMember5} alt="Team Member 5" className="w-full h-48 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

