import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const button = tv({
  base: "font-semibold inline-block transition-all duration-300 relative cursor-pointer",
  variants: {
    variant: {
      primary: "py-3 px-5 tracking-[2px] !leading-none text-center uppercase",
      ghost:
        "text-black font-medium flex items-center bg-transparent hover:text-pink-dark",
      outline:
        "w-[42px] h-[42px] border border-gray-300 text-gray-650 font-medium tracking-normal leading-[42px] flex items-center justify-center hover:text-white hover:bg-pink-dark",
      secondary:
        "leading-[43px] flex items-center justify-center overflow-hidden shadow-lighter",
    },

    color: {
      default: "",
      primary: "bg-black text-white hover:bg-pink-dark",
      secondary: "bg-pink-dark text-white hover:bg-black",
      third:
        "bg-white text-black hover:bg-pink-dark hover:text-white hover:fill-white",
      fourth: "border-black-light text-black-light",
    },

    size: {
      xs: "text-[12px]",
      sm: "text-sm",
      md: "text-base",
      lg: "text-[20px]",
    },

    shape: {
      default: "",
      circle: "rounded-[50%] w-[45px] h-[45px]",
    },
  },
});

export const Button = ({
  children,
  variant = "primary",
  color = "default",
  size = "md",
  shape = "default",
  className,
}) => {
  return (
    <button
      className={button({ variant, color, size, shape, class: className })}
    >
      {children}
    </button>
  );
};
