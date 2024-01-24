import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Prashik Dable, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              A dynamic and enthusiastic software developer, ready to bring
              innovation and efficiency to your projects. With a strong
              foundation in Java, React, Spring, and other cutting-edge
              technologies, I recently demonstrated my expertise through two
              impactful projects.This experience not only highlighted my
              versatile skill set covering both front-end and back-end
              technologies but also emphasized my commitment to enhancing user
              experiences and contributing to the success of the platform.
            </p>
            <br />
            <p>
              Complementing my technical acumen is a Post-Graduate Diploma in
              Advanced Computing from CDAC Pune and a degree in Mechanical
              Engineering from Priyadarshini College of Engineering, Nagpur.
              Beyond coding, I am a passionate football player, embodying
              teamwork and discipline, and a fitness enthusiast dedicated to
              promoting wellness.
            </p>
            <br />
            <p>
              If you are seeking a motivated and skilled developer with a
              holistic approach to projects, let's connect! I am excited about
              the opportunity to contribute my skills and passion to your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
