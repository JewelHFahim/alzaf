"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const MobileNav = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="w-full h-[50px] px-4 bg-white border-b md:hidden fixed z-[999] top-0">
      
      <div className="flex justify-between items-center relative w-full h-full">
        <div>
          <Link href="/" className="h-[37px]">
            <div className="w-[100px] h-[30px] relative">
              <Image src="/alfaz-logo.png" alt="" fill />
            </div>
          </Link>
        </div>

        <div>
          <button
            onClick={() => setOpenSearch((prev) => !prev)}
            className="border-2 text-xl p-2 text-gray-500 rounded-full"
          >
            <FiSearch className="rotate-90" />
          </button>
        </div>

        {openSearch && (
          <div className="absolute top-1/2 left-1/2 right-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] w-full mx-auto h-[40px] bg-white flex items-center px-2 py-1 border border-gray-400">
            <input
              type="text"
              placeholder="search here"
              className="w-[90%] h-full outline-none"
            />
            <button
              onClick={() => setOpenSearch((prev) => !prev)}
              className="w-[10%] h-full  flex justify-center items-center"
            >
              <FiSearch className="text-gray-500 text-2xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
