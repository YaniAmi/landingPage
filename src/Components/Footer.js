import React from "react";
import { Typography } from "@material-tailwind/react";
import instagram from "../Assets/instagram.png";
import dribble from "../Assets/dribble.png";
import twitter from "../Assets/twitter.svg";
import youtube from "../Assets/youtube.png";
import mappin from "../Assets/mappin.png";
import send from "../Assets/send.png";
import Logoo from "../Assets/Logoo.svg";

const Footer = () => {
  const LINKS = [
    {
      title: "Company",
      items: [
        "About us",
        "Contact us",
        "Pricing",
        "Case Studies",
        "Testimonials",
      ],
    },
    {
      title: "Support",
      items: [
        "Technical Support",
        "Help Center",
        "Terms of service",
        "Legal",
        "Privacy policy",
      ],
    },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-2">
        <div className="flex flex-col">
          <img src={Logoo} alt="Logo" className="h-8" />
          <Typography variant="body" style={{ fontSize: "14px" }}>
            Copyright © {currentYear} Flowalytics.
          </Typography>
          <Typography variant="body" style={{ fontSize: "14px" }}>
            All Rights Reserved.
          </Typography>
          <div className="flex mt-4">
            <img src={instagram} alt="Instagram" className="h-6" />
            <img src={dribble} alt="Dribble" className="h-6 ml-4" />
            <img src={twitter} alt="Twitter" className="h-6 ml-4" />
            <img src={youtube} alt="YouTube" className="h-6 ml-4" />
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="flex gap-20">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <Typography variant="body" className="font-bold mb-4">
                  {title}
                </Typography>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <Typography
                        as="a"
                        href="#"
                        className="hover:text-blue-500"
                      >
                        {item}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end">
            <img src={mappin} alt="Location" className="h-8 mb-4" />
            <Typography variant="body" style={{ fontSize: "14px" }}>
              Cohive 101, Jl. DR. Ide Anak Agung Gde Agung, Kawasan Mega
              Kuningan Jakarta Selatan, DKI Jakarta
            </Typography>
            <div className="flex items-center mt-4">
              <input
                type="email"
                className="bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-gray-600"
                placeholder="Your email address"
              />
              <button className="ml-2">
                <img src={send} alt="Send" className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
