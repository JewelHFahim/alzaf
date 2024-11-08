"use client";

import { FiSearch } from "react-icons/fi";
import CategoryMenu from "./CategoryMenu";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [menus, setMenus] = useState(null);
  const router = usePathname();

  useEffect(() => {
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

  return (
    <div className=" lg:w-[63.5%] px-4 lg:px-0 mt-[13px] mx-auto hidden md:flex items-center justify-between gap-x-4 relative">
      <Link href="/" className="h-[37px]">
        <div className="w-[100px] h-[30px] lg:w-[129px] lg:h-[37.5px] relative">
          <Image src="/alfaz-logo.png" alt="" fill />
        </div>
      </Link>

      <div className="flex items-center w-[57.7% w-[36.67vw] h-[44px] bg-[#EFF0F5] rounded-[10px]">
        <input
          type="text"
          placeholder="Search Poduct"
          className="w-full bg-transparent h-full rounded-l-[10px] text-sm Search Product p-[13px]"
        />
        <button className="w-[47px] bg-primary text-white text-[24px] flex justify-center items-center rounded-[10px] h-full">
          <FiSearch />
        </button>
      </div>

      <div className="flex items-center gap-[17px] lg:gap-[26px]">
        <div className="flex items-center gap-[17px]">
          <div className="bg-[#F5F5F5] w-[32px] h-[32px] rounded-md flex justify-center items-center relative">
            <Image src="/user.svg" alt="" width={18} height={18} />

            <div className="absolute top-0 right-0 bg-primary w-[15px] h-[16px] rounded-full text-white font-medium text-[7px] flex justify-center items-center">
              20
            </div>
          </div>
          <div className="bg-[#F5F5F5] w-[32px] h-[32px] rounded-md flex justify-center items-center">
            <Image
              src="/heart.svg"
              alt=""
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </div>
          <Link
            href="/"
            className="bg-[#F5F5F5] w-[32px] h-[32px] rounded-md flex justify-center items-center"
          >
            <Image
              src="/cart.svg"
              alt=""
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
            />
          </Link>
        </div>

        <div className="w-[9.21vw] h-[44px] relative">
          <Image src="/cloud server.png" fill alt="" />
        </div>
      </div>

      {router === "/" && (
        <div className="absolute left-0 top-[57.5px] z-[999] bg-white shadow-md ">
          <CategoryMenu data={menus} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
