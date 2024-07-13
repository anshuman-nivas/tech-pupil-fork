/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import img from '../assets/logo.svg.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        });
    }, []);

    return (
        <div className="px-10 py-20 text-center lg:text-left lg:px-56 lg:py-10 gap-5 flex flex-col lg:flex-row items-center justify-between lg:gap-28">
            <div className="flex flex-col items-center justify-center text-white lg:items-start">
                <h1 data-aos="fade-right" className="text-5xl md:text-6xl font-semibold mb-4 leading-normal">
                    Welcome To <span className="text-green-600">Tech_pupil</span>
                </h1>
                <p data-aos="fade-left" className="text-lg md:text-xl">Introducing Tech Pupil India's leading ed-tech innovator, revolutionizing learning in data science and cybersecurity since 2024. With over 500 students worldwide, our personalized programs redefine education. Join us and discover limitless possibilities in the digital age.</p>
                <div className="flex mt-8 gap-2">
                    <a href="https://www.linkedin.com/company/tech-pupil-learning/" className="text-neon-green hover:text-green-500 rounded-full glow p-2">
                        <FaLinkedin className="text-3xl" />
                    </a>
                    <a href="https://www.instagram.com/tech_pupil?igsh=MWVodHhrN3pzbDNrcg==" className="text-neon-green hover:text-green-500 rounded-full glow p-2">
                        <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#" className="text-neon-green hover:text-green-500 rounded-full glow p-2">
                        <FaFacebook className="text-3xl" />
                    </a>
                    <a href="https://t.me/cyberfreak08" className="text-neon-green hover:text-green-500 rounded-full glow p-2">
                        <FaTelegram className="text-3xl" />
                    </a>
                </div>
            </div>
            <img data-aos="fade-up" src={img} width={290} height={290} className='rounded-full border-2 p-1 border-green-500 img_glow' alt="" />
        </div>
    );
};

export default Banner;






