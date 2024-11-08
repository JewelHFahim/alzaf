import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const TopNavbar = () => {
  return (
    <div className="bg-[#F0F1F1] w-full h-[25px] hidden md:block">
      <div className="lg:w-[63.5%] px-4 lg:px-0 mx-auto flex justify-between items-center text-xs text-[#434343] h-full">
        <div className="flex justify-center items-center gap-[35px]">
          <Link href="/" className="flex items-center">
            Language <MdKeyboardArrowDown />
          </Link>

          <Link href="/">Help Center</Link>

          <Link href="/">Helpline: 0964781656</Link>
        </div>
        <div className="flex justify-center items-center gap-[35px]">
          <Link href="/">Become a Seller</Link>

          <Link href="/">Order Track</Link>

          <Link href="/registration" className="text-primary">
            Sign up/Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
