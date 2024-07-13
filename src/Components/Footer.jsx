import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import logo from '../assets/logo.svg.jpeg';

const Footer = () => {
    return (
        <>
            <hr className="border-t-2 border-gray-300 my-8" />
            <footer className="bg-neutral-950 text-white lg:px-48 px-4 py-20">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="mb-4 md:mb-0">
                        <img src={logo} alt="Logo" className="h-16 mb-4" />
                        <p className="text-[16px] my-4">Empowering innovation in cybersecurity and data science. Join us in shaping the future. </p>
                        <p className="text-[16px] my-4">
                            <strong>Connect:</strong> techpupil15@gmail.com
                        </p>
                    </div>
                    <div>
                        <h2 className="text-[22px] font-semibold text-green-600 py-2 uppercase">Services</h2>
                        <ul className="text-[16px] my-4">
                            <li className="my-2">Ethical Hacking Workshops</li>
                            <li className="my-2">Cybercrime Awareness</li>
                            <li className="my-2">Datascience Courses</li>
                            <li className="my-2">Datascience Unpaid Internship</li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-[22px] font-semibold text-green-600 py-2 uppercase">Contact</h2>
                        <p className="text-[16px] my-4">Email: techpupil15@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-[22px] font-semibold text-green-600 py-2 uppercase">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/tech-pupil-learning/" className="text-white hover:text-green-600 transition-all duration-150 ease-in-out">
                                <FaLinkedin className="h-8 hover:glow" />
                            </a>
                            <a className="text-white hover:text-green-600 transition-all duration-150 ease-in-out" href="">
                                <FaFacebook className="h-8 hover:glow" />
                            </a>
                            <a href="https://www.instagram.com/tech_pupil?igsh=MWVodHhrN3pzbDNrcg==" className="text-white hover:text-green-600 transition-all duration-150 ease-in-out">
                                <FaInstagram className="h-8 hover:glow" />
                            </a>
                            <a href="https://t.me/cyberfreak08" className="text-white hover:text-green-600 transition-all duration-150 ease-in-out">
                                <FaTelegram className="h-8 hover:glow" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-400 mt-8">
                    <p>&copy; {new Date().getFullYear()} Tech Pupil. All rights reserved.</p>
                    <p>
                        <a href="/privacy-policy" className="text-gray-400 hover:text-green-600 transition-all duration-150 ease-in-out">Privacy Policy</a>
                        {" | "}
                        <a href="/terms-of-privacy" className="text-gray-400 hover:text-green-600 transition-all duration-150 ease-in-out">Terms of Privacy</a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
