import { twMerge } from "tailwind-merge";
import { IMG_BACKGROUND_TITLE } from "../contants/images";
import { Link } from "react-router";
import { FaAngleRight } from "react-icons/fa";

export const Breadcrumb = ({ children, hasBackground = true }) => {
  return (
    <div
      style={{
        backgroundImage: hasBackground
          ? `url(${IMG_BACKGROUND_TITLE})`
          : undefined,
      }}
      className={twMerge(
        "bg-gray-100 py-2.5 px-[15px]",
        hasBackground &&
          "px-0 bg-transparent py-[70px] bg-no-repeat bg-cover bg-center text-center lg:py-[140px]"
      )}
    >
      <h2
        className={twMerge(
          "text-5xl font-medium text-white tracking-[1px] leading-[60px] mb-2.5 hidden",
          hasBackground && "block"
        )}
      >
        {children}
      </h2>
      <div>
        <span
          className={twMerge(
            "text-black text-base font-normal",
            hasBackground && "text-white"
          )}
        >
          <Link to="/">Home</Link>
          <FaAngleRight className="inline-block mx-1 text-sm" />
        </span>
        <span
          className={twMerge(
            "text-pink-dark text-base font-medium py-1.5",
            hasBackground && "text-white"
          )}
        >
          {children}
        </span>
      </div>
    </div>
  );
};
