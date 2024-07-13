import { Link } from "react-scroll";

const Nav = () => {
    return (
        <nav>
            <div className="h-10vh flex justify-between text-white lg:py-5 px-20 py-4 border-b border-slate-800">
                <img src="/Images/logo.png" alt="Tech Pupil Logo" className="h-10" />
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">Tech_pupil</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link spy={true} smooth={true} to="about" offset={-100}>
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="services" offset={-100}>
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Services</li>
                            </Link>
                            <Link spy={true} smooth={true} to="blog" offset={-100}>
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Blog</li>
                            </Link>
                            <Link spy={true} smooth={true} to="contact" offset={-100}>
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-800 hover:border-fuchsia-600 cursor-pointer">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
