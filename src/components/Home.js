import React from "react";
import HeroImage from "../assets/heroImage.gif";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Programmer", "Full Stack Developer"],
    loop: {},
  });
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Hi I'm <br />
            <span>Prashik Dable</span>
          </h2>
          <p className=" sm:text-3xl font-bold text-white">
            I am a <span className="text-blue-400"> {text}</span>
          </p>
          <p className="text-gray-500 py-6 max-w-4xl">
            Motivated and hardworking individual with a passion for software
            development seeks hands-on experience with a team of professionals.
            Strong understanding of software development concepts and eagerness
            to learn new technologies. Recent graduate with a post-graduate
            diploma in advance computing and a passion for software development.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineDoubleArrow size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full ml-8 md:ml-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
