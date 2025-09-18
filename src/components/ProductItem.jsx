import { Link } from "react-router";
import CartIcon from "../assets/icons/CartIcon";
import HeartIcon from "../assets/icons/HeartIcon";
import { Button } from "./Button";

export const ProductItem = ({
  img,
  salePercent,
  name,
  originalPrice,
  price,
}) => {
  return (
    <div className="overflow-hidden mb-8 w-full hover:shadow-medium group">
      <div className="relative">
        <img className="w-full" src={img} alt="image product" />
        <span className="absolute top-2.5 -right-14 py-1.5 px-16 rotate-45 text-xs font-bold tracking-wide bg-red-dark text-white">
          {salePercent}
        </span>
        <div className="absolute top-1/2 flex flex-col gap-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700">
          <span className="group-hover:translate-x-5 transition duration-700">
            <Button variant="secondary" shape="circle" color="third">
              <CartIcon className="w-5 h-5" />
            </Button>
          </span>
          <span className="group-hover:translate-x-5 transition duration-500">
            <Button variant="secondary" shape="circle" color="third">
              <HeartIcon className="w-5 h-5" />
            </Button>
          </span>
          <span className="group-hover:translate-x-5 transition duration-300">
            <Button variant="secondary" shape="circle" color="third">
              <HeartIcon className="w-5 h-5" />
            </Button>
          </span>
        </div>
      </div>
      <div>
        <Link
          href=""
          className="block text-center font-semibold text-[14px] p-2.5 sm:text-base hover:text-pink-dark hover:cursor-pointer"
        >
          {name}
        </Link>
        <div className="flex justify-center items-center gap-2 pb-6">
          <span className="text-[15px] text-gray-600 font-bold line-through">
            {originalPrice}
          </span>
          <p className="text-[15px] text-pink-dark font-bold">{price}</p>
        </div>
      </div>
    </div>
  );
};
