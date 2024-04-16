import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import img1 from '../assets/onkar.jpg';
import img2 from '../assets/gun.jpg';

const About = () => {
    return (
        <div id='#about' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <img data-aos="fade-down" src={img1} width={200} height={200} className='border-2 p-1 border-green-500 img_glow ' alt=""/>
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <div>
                    <h1 data-aos="fade-right" className="text-4xl md:text-5xl font-semibold mb-8 leading-normal uppercase text-green-600">About us</h1>
                </div>
                <div className="text-left text-lg lg:text-xl"> {/* Adjusted text size here */}
                    <p data-aos="fade-left">Founded in January 2024 by Gungun Nilamwar and Onkar Sinha, Tech_pupil is committed to fostering a safer cyber world. Led by CEO Gungun Nilamwar, we offer Cyber Security and data science courses, live sessions, and interactive workshops in schools and colleges. Join us in shaping a secure digital future.</p>
                </div>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center ">
                        <div className="flex space-x-2">
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-down" src={img2} width={200} height={200} className='border-2 p-1 border-green-500 img_glow ' alt=""/>
        </div>
    );
};

export default About;


