import Image from "next/image";

const ProductCard = ({ product }) => {
  return (

    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">

      <div className="w-full h-64 bg-gray-300 bg-center bg-cover bg-no-repeat rounded-lg shadow-md p-4 relative">
        <Image src={product.image} alt="image" fill />
      </div>
      
      <div className="z-[999] w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase">
          Nike Revolt
        </h3>

        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 ">
          <span className="font-bold text-gray-800 ">
            $129
          </span>
          <button className="px-2 py-1 text-xs font-semibold text-primary uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 focus:bg-gray-700  focus:outline-none">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
