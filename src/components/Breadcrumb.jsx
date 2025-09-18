import { twMerge } from "tailwind-merge";
import { IMG_BACKGROUND_TITLE } from "../contants/images";
import { Link } from "react-router";
import { FaAngleRight } from "react-icons/fa";

export const Breadcrumb = ({ children, isBg = true }) => {
  return (
    <div
      style={{
        backgroundImage: isBg ? `url(${IMG_BACKGROUND_TITLE})` : undefined,
      }}
      className={twMerge(
        "bg-gray-100 py-2.5 px-[15px]",
        isBg &&
          "px-0 bg-transparent py-[70px] bg-no-repeat bg-cover bg-center text-center lg:py-[140px]"
      )}
    >
      <h2
        className={twMerge(
          "text-5xl font-medium text-white tracking-[1px] leading-[60px] mb-2.5 hidden",
          isBg && "block"
        )}
      >
        {children}
      </h2>
      <div>
        <span
          className={twMerge(
            "text-black text-base font-normal",
            isBg && "text-white"
          )}
        >
          <Link to="/">Home</Link>
          <FaAngleRight className="inline-block mx-1 text-sm" />
        </span>
        <span
          className={twMerge(
            "text-pink-dark text-base font-medium py-1.5",
            isBg && "text-white"
          )}
        >
          {children}
        </span>
      </div>
    </div>
  );
};
