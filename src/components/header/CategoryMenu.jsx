/* eslint-disable react/prop-types */
import Link from "next/link";
import { LiaOpencart } from "react-icons/lia";
import { RiArrowRightSLine } from "react-icons/ri";
import "./CategoryMenu.css";
import Image from "next/image";

const CategoryMenu = ({ data }) => {
  const renderCategory = (category) => {
    return (
      <div className="category-item" key={category.id}>
        <Link href="/" className="category-link">

        {/* NOTE: Icon URL dont works */}
          {/* <div className="w-5 h-5 relative">
          <Image src={category?.icon} alt={category.title} fill className="" />
          </div> */}

          <LiaOpencart className="category-icon flex items-center" />
          <span>{category.title}</span>
          {category.childrens && <RiArrowRightSLine />}
        </Link>

        {category.childrens && (
          <div className="sub-category-menu">
            {category.childrens.map((subCategory) =>
              renderCategory(subCategory)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="category-menu border-r pl-2 pb-2">
      {data?.map((category) => renderCategory(category))}
    </div>
  );
};

export default CategoryMenu;
