"use client";

import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MobileCategory from "./MobileCategory";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileDrawerMenu = () => {
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [menus, setMenus] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.shope.com.bd/api/v1/public/hero-categories"
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setMenus(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  if (!hasMounted) return null;

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="flex flex-col justify-center items-center"
      >
        <span>
          <FiUser />
        </span>
        <span className="text-sm">Account</span>
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="z-[999999]"
      >
        <div className="p-4 h-full flex flex-col gap-4">
          <Link href="/registration" className="flex gap-2 items-center">
            <span className=" w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
              <FiUser className="text-white text-xl" />
            </span>
            <span className="text-primary text text-sm font-medium">Login</span>
            <span className="text-xs">or</span>
            <span className="text-primary text text-sm font-medium">
              Registration
            </span>
          </Link>

          {menus && <MobileCategory data={menus} />}
        </div>
      </Drawer>
    </>
  );
};

export default MobileDrawerMenu;
