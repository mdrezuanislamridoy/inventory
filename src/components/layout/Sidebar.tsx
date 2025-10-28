"user client";

import { useState } from "react";
import { BiCart, BiStore } from "react-icons/bi";
import { BsGear, BsHouse } from "react-icons/bs";
import { MdCategory, MdMoney } from "react-icons/md";

export default function Sidebar() {
    
    const [selectedSection,setSelectedSection] = useState("Home")

  const Sections = [
    {
      name: "Home",
      icon: <BsHouse />,
    },
    {
      name: "Products",
      icon: <BiCart />,
    },
    {
      name: "Categories",
      icon: <MdCategory />,
    },
    {
      name: "Stores",
      icon: <BiStore />,
    },
    {
      name: "Finances",
      icon: <MdMoney />,
    },
    {
      name: "Settings",
      icon: <BsGear />,
    },
  ];
  return <div>Sidebar</div>;
}
