import MobileNav from "../MobileNav";
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";

const Header = () => {
  return (
    <div className="w-full md:h-[95px] bg-red-600 md:bg-white">
      <MobileNav />
      <TopNavbar />
      <Navbar />
    </div>
  );
};

export default Header;
