import React from "react";
import theFitClub from "../assets/portfolio/TheFitClub.png";
import tollCalculator from "../assets/portfolio/TollCalculator.png";
import portf from "../assets/portfolio/pf.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: theFitClub,
      href: "https://github.com/PrashikDable/TheFitClub",
    },
    {
      id: 2,
      src: tollCalculator,
      href: "https://github.com/PrashikDable/TollSense-Navigator",
    },
    {
      id: 3,
      src: portf,
      href: "https://github.com/PrashikDable/Portfolio",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-400">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  className="w-1/2 px-12 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  // The target="_blank" attribute is used in HTML to specify that a link should open in a new browser window or tab.
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
