"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FiGrid, FiHome, FiMessageSquare, FiUser } from "react-icons/fi";
import MobileDrawerMenu from "./MobileDrawerMenu";

const BottomMenu = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <FiHome />,
    },
    {
      name: "Categories",
      path: "",
      icon: <FiGrid />,
    },
    {
      name: "Message",
      path: "",
      icon: <FiMessageSquare />,
    },

  ];

  return (
    <div className="fixed z-[999] bottom-0 w-full flex  h-[60px] bg-white border-t justify-center items-center md:hidden px-4">
      <ul className="w-full flex items-center justify-between">
        <li className="flex justify-between items-center w-[75%]">
          {menus.map((menu, idx) => (
            <Link
              href={menu.path}
              key={idx}
              className={`flex flex-col justify-center items-center ${
                router === menu.path ? "text-primary" : ""
              }`}
            >
              <span>{menu.icon}</span>
              <span className="text-sm">{menu.name}</span>
            </Link>
          ))}
        </li>

        <li className="w-[25%] flex justify-end">
          <MobileDrawerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;
