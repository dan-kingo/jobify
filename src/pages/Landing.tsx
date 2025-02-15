import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logo-cropped.svg";
import heroImage from "../assets/images/main.svg";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="lg:mx-32 lg:py-8 md:mx-4 md:py-6 sm: mx-2 sm:py-4 min-h-screen ">
      <nav>
        <img className="w-32" src={logo} alt="My Job" />
      </nav>
      <div className="my-16 flex justify-between gap-4  items-center">
        <div className="lg:w-[80%] mt-4 " data-aos="fade-right">
          <h1 className="lg:text-6xl sm:text-4xl sm:text-justify pb-8 font-bold">
            Job <span className="gradient">Tracking</span> App
          </h1>
          <p className="text-gray-700 text-balance font-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing. Dignissimos
            amet temporibus, eveniet aliquid, consectetur quo odit sapiente fuga
            iste voluptatum beatae laudantium minima. Ipsa quae quibusdam et vel
            quasi praesentium, eveniet cupiditate.
          </p>
          <div className="mt-12 flex gap-4">
            <button className="py-2 px-4 rounded-sm text-white gradient-background hover:opacity-80 hover:animate-pulse ">
              Register
            </button>
            <button className="py-2 px-4 rounded-sm text-white gradient-background hover:opacity-80 hover:animate-pulse">
              Login/Demo User
            </button>
          </div>
        </div>
        <div className="lg:flex sm:hidden" data-aos="fade-left">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
