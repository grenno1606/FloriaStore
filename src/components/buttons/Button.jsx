import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const button = tv({
  base: "font-semibold inline-block transition-all duration-300 relative",
  variants: {
    variant: {
      primary: "py-3 px-5 tracking-[2px] leading-none text-center uppercase",
      ghost: "text-black font-medium flex items-center bg-transparent",
      secondary:
        "leading-[43px] flex items-center justify-center overflow-hidden shadow-lighter",
    },

    color: {
      default: "",
      primary: "bg-black text-white hover:bg-pink-dark",
      secondary: "bg-pink-dark text-white hover:bg-black",
      third: "bg-white text-black hover:bg-pink-dark hover:text-white",
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
