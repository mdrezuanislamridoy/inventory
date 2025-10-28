"use client";

import { useState } from "react";
import { BiCart, BiStore } from "react-icons/bi";
import { BsGear, BsHouse } from "react-icons/bs";
import { MdCategory, MdMoney } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";

export default function Sidebar() {
  const [selectedSection, setSelectedSection] = useState("Home");
  const [open, setOpen] = useState(false);

  const Sections = [
    {
      name: "Home",
      icon: <BsHouse size={20} />,
    },
    {
      name: "Products",
      icon: <BiCart size={20} />,
    },
    {
      name: "Categories",
      icon: <MdCategory size={20} />,
    },
    {
      name: "Stores",
      icon: <BiStore size={20} />,
    },
    {
      name: "Finances",
      icon: <MdMoney size={20} />,
    },
    {
      name: "Settings",
      icon: <BsGear size={20} />,
    },
  ];

  const handleSectionClick = (sectionName: string) => {
    setSelectedSection(sectionName);
  };

  return (
    <div
      className={`
        min-h-screen bg-purple-800 text-white transition-all duration-300
        ${open ? "w-56" : "w-16"} 
        md:w-64
      `}
    >
      <div className="flex justify-end p-4 md:hidden">
        <button
          className="text-2xl transition-transform duration-300"
          onClick={() => setOpen(!open)}
        >
          <FaAngleRight
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            size={24}
          />
        </button>
      </div>

      <nav className="p-2">
        {Sections.map((section) => (
          <div
            key={section.name}
            className={`
              flex items-center p-3 rounded-md my-2 
              hover:bg-purple-700 cursor-pointer whitespace-nowrap
              ${selectedSection === section.name ? "bg-purple-900" : ""}
            `}
            onClick={() => handleSectionClick(section.name)}
          >
            <div className="flex-shrink-0">{section.icon}</div>

            <span
              className={`
                ml-4 transition-opacity duration-300
                ${open ? "opacity-100" : "opacity-0"} 
                ${open ? "block" : "hidden"} 
                md:opacity-100 md:block
              `}
            >
              {section.name}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}
