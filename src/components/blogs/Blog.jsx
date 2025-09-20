import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import { Button } from "../buttons/Button";

export const Blog = ({
  children,
  title,
  img,
  day,
  month,
  condensedContent = true,
}) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div
        className={twMerge(
          "relative group overflow-hidden cursor-pointer",
          condensedContent &&
            "hover:after:bg-white/40 after:absolute after:inset-0 after:z-[1] after:transition after:duration-300"
        )}
      >
        <img
          src={img}
          alt="img_blog"
          className="w-full group-hover:scale-110 transition duration-300"
        />
        <div
          className={twMerge(
            "absolute top-4 flex flex-col left-4 justify-center items-center bg-white shadow-light w-[68px] h-[68px] text-black font-semibold text-center uppercase rounded-full",
            !condensedContent && "rounded-none"
          )}
        >
          <p className="text-[14px]">{day}</p>
          <span className="bg-gray-450 w-7 h-[1px] block mt-1 mx-auto"></span>
          <p className="text-[10px] pt-1 tracking-[3px] uppercase text-center font-semibold">
            {month}
          </p>
        </div>
      </div>
      <div className="text-center px-7">
        <span
          className={twMerge(
            "text-[16px] font-semibold leading-[24px] text-gray-700 uppercase hover:text-pink-dark cursor-pointer",
            condensedContent && "text-pink-dark cursor-default"
          )}
        >
          NEWS
        </span>
        <br />
        <div className="relative text-[22px] inline-block text-black font-semibold pb-[15px] mb-[15px]">
          <Link
            to=""
            className="pt-1 hover:text-pink-dark hover:cursor-pointer"
          >
            {title}
          </Link>
          <span
            className={twMerge(
              "absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[50px] bg-gray-400",
              !condensedContent && "bg-pink-dark"
            )}
          ></span>
        </div>
        <p
          className={twMerge(
            "text-base font-normal text-gray-700",
            children && "mb-3"
          )}
        >
          {children}
        </p>
        <Button
          variant="third"
          size="sm"
          className={!condensedContent && "hidden"}
        >
          Read more
        </Button>
      </div>
    </div>
  );
};
