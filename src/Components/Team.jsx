import teamMember1 from "../assets/1.jpg";
import teamMember2 from "../assets/2.jpg";
import teamMember3 from "../assets/3.jpg";
import teamMember4 from "../assets/4.jpg";
import teamMember5 from "../assets/5.png"; // Corrected duplicate import name
import '../styles/Team.css';

const Team = () => {
  return (
    <section id="team" className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <h1 className="display-4 font-semibold mb-5 text-success" id="team_title">Our Achievements</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow p-4">
            <img src={teamMember1} alt="Team Member 1" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 rounded-md" />
          </div>
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow p-4">
            <img src={teamMember2} alt="Team Member 2" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 rounded-md" />
          </div>
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow p-4">
            <img src={teamMember3} alt="Team Member 3" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 rounded-md" />
          </div>
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow p-4">
            <img src={teamMember4} alt="Team Member 4" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 rounded-md" />
          </div>
          <div className="team-member bg-black relative overflow-hidden rounded-md b_glow p-4">
            <img src={teamMember5} alt="Team Member 5" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
