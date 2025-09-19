import { twMerge } from "tailwind-merge";

import { Button } from "../buttons/Button";
import PlaneIcon from "../../assets/icons/PlaneIcon";
import { IoSearch } from "react-icons/io5";

export const SendMailInput = ({
  className,
  color = "secondary",
  placeholder = "Your email address...",
  icon,
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center gap-0 font-semibold bg-white text-xs rounded-[3px] border border-gray-300",
        className
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        required
        className="w-full px-6 leading-[1.5] outline-none"
      />
      <Button
        color={color}
        className={
          color == "secondary"
            ? "h-[50px] leading-8 py-1.5 px-3"
            : "h-[40px] py-1.5 px-3"
        }
      >
        {icon ? (
          <IoSearch className="text-[20px]" />
        ) : (
          <PlaneIcon
            className={
              color == "secondary"
                ? "h-auto w-[25px] fill-white"
                : "w-[15px] h-[15px] fill-white"
            }
          />
        )}
      </Button>
    </div>
  );
};
