import img1 from '../assets/onkar.png';
import img2 from '../assets/mine.png';
import '../styles/About.css';

const About = () => {
    return (
        <div id='about' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <img data-aos="fade-down" src={img1} width={200} height={200} className='border-2 p-1 border-green-500 img_glow' alt="" />
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 data-aos="fade-right" className="text-4xl md:text-5xl font-semibold mb-8 leading-normal uppercase text-green-600" id="about_title">
                        About us
                    </h1>
                    <div className="text-left text-lg lg:text-xl">
                        <p data-aos="fade-left" id="about_text">
                            Born from the visionary minds of Onkar Sinha and Gungun Nilamwar in January 2024, Tech_pupil is a beacon of innovation in cybersecurity and data science. More than just a company, we are a community of trailblazers committed to pushing the boundaries of technology. Our offerings include robust cybersecurity solutions and state-of-the-art data science courses, empowering individuals to master the digital landscape. Join us in shaping the future of cybersecurity and data science.
                        </p>
                    </div>
                </div>
                <div className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2"></div>
                    </div>
                </div>
            </div>
            <img data-aos="fade-down" src={img2} width={200} height={200} className='border-2 p-1 border-green-500 img_glow' alt="" />
        </div>
    );
};

export default About;
