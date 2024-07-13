import { FaShieldAlt, FaSearch, FaBrain, FaBriefcase } from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  return (
    <div id="services" className="container py-5 text-center">
      <h1 className="display-4 font-semibold mb-5 text-success">Our Services</h1>
      <div className="row g-4">
        <div className="col-md-3">
          <div className="card h-100 text-center bg-dark text-light border-success d-flex flex-column justify-content-center">
            <div className="card-body d-flex flex-column align-items-center">
              <FaShieldAlt className="fs-1 icon mb-3" />
              <h3 className="card-title text-success">Ethical Hacking Workshops</h3>
              <p className="card-text">Hands-on training in ethical hacking to safeguard digital assets.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100 text-center bg-dark text-light border-success d-flex flex-column justify-content-center">
            <div className="card-body d-flex flex-column align-items-center">
              <FaSearch className="fs-1 icon mb-3" />
              <h3 className="card-title text-success">Cybercrime Awareness</h3>
              <p className="card-text">Educational sessions to raise awareness about cyber threats and safety.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100 text-center bg-dark text-light border-success d-flex flex-column justify-content-center">
            <div className="card-body d-flex flex-column align-items-center">
              <FaBrain className="fs-1 icon mb-3" />
              <h3 className="card-title text-success">Data Science Courses</h3>
              <p className="card-text">Comprehensive courses to master data analysis, machine learning, and more.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card h-100 text-center bg-dark text-light border-success d-flex flex-column justify-content-center">
            <div className="card-body d-flex flex-column align-items-center">
              <FaBriefcase className="fs-1 icon mb-3" />
              <h3 className="card-title text-success">Data Science Internship</h3>
              <p className="card-text">Real-world experience through our unpaid internship program.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://cosmofeed.com/vp/66431a92a30cb40013be6fd2"
          className="text-lg font-semibold text-white bg-green-600 rounded-lg px-6 py-3 b_glow hover:scale-105 mr-7"
        >
          Register For DataScience Internship
        </a>
        <a
          href="https://cosmofeed.com/vp/6644b368215f230013178aa6"
          className="text-lg font-semibold text-white bg-green-600 rounded-lg px-6 py-3 b_glow hover:scale-105"
        >
          Register For Cybersec Internship
        </a>
      </div>
    </div>
  );
};

export default Services;
