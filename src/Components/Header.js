import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import {
  faChevronDown,
  faGlobe,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const Headings = [
    {
      text: "Creation",
      icon: <FontAwesomeIcon icon={faChevronDown} size="sm" />,
    },
    {
      text: "Business",
      icon: <FontAwesomeIcon icon={faChevronDown} size="sm" />,
    },
    {
      text: "Growth",
      icon: <FontAwesomeIcon icon={faChevronDown} size="sm" />,
    },
    {
      text: "Resources",
      icon: <FontAwesomeIcon icon={faChevronDown} size="sm" />,
    },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center shadow-lg p-2 text-sm fixed w-full bg-white">
      <div className="md:flex md:justify-between flex flex-row justify-between items-center w-full md:w-1/2">
        <img src={logo} alt="wix-logo" width="90px" />
        <div className="hidden md:flex gap-x-8 justify-center items-center m-1">
          {Headings.map((item, index) => (
            <div key={index} className="flex justify-center items-center gap-1">
              <span>{item.text}</span>
              {item.icon}
            </div>
          ))}
        </div>
        {/* <div className="md:hidden w-[1px] h-[20px] bg-slate-300 ml-5 mt-0.5"></div> */}
        <div className="hidden md:flex gap-x-7 justify-center items-center ml-6 ">
          <span>Enterprise</span>
          <span>Pricing</span>
          <span>Support</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3">
        <FontAwesomeIcon icon={faGlobe} />
        <button className="py-1.5 px-5 border-2 border-blue-400 rounded-full">
          Sign In
        </button>
        <div className="md:hidden cursor-pointer">
          <FontAwesomeIcon
            icon={showMenu ? faTimes : faBars}
            onClick={toggleMenu}
          />
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white z-50 shadow-md">
          <div className="flex flex-col gap-2 p-4 items-center justify-center">
            {Headings.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-1"
              >
                <span>{item.text}</span>
                {item.icon}
              </div>
            ))}
            <div className="flex flex-col gap--4 justify-center items-center ml-6">
              <span className="p-2">Enterprise</span>
              <span className="p-2">Pricing</span>
              <span className="p-2">Support</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
