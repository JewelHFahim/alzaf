/* eslint-disable react/prop-types */
import Link from "next/link";
import { LiaOpencart } from "react-icons/lia";
import { RiArrowRightSLine } from "react-icons/ri";

const MobileCategory = ({ data }) => {
  const renderCategory = (category) => {
    return (
      <div className="" key={category.id}>
        <Link href="/" className="p-1 flex items-center gap-1 text-sm">
          <LiaOpencart className="text-sm" />
          <span>{category.title}</span>
          {category.childrens && <RiArrowRightSLine />}
        </Link>

        {category.childrens && (
          <div className=" pl-2.5">
            {category.childrens.map((subCategory) =>
              renderCategory(subCategory)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="pl-2 pb-2">
      {data?.map((category) => renderCategory(category))}
    </div>
  );
};

export default MobileCategory;
