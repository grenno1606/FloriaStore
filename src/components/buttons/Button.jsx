import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const button = tv({
  base: "font-semibold inline-block transition-all duration-300 relative",
  variants: {
    variant: {
      primary: "py-3 px-5 tracking-[2px] leading-none text-center uppercase",
      ghost: "text-black font-medium flex items-center bg-transparent",
      secondary:
        "w-[45px] h-[45px] leading-[43px] rounded-[50%] bg-white flex items-center justify-center overflow-hidden text-[20px] shadow-[0_0_10px_#0000001a]",
    },
    color: {
      default: "",
      primary: "bg-black text-white hover:bg-pink-dark",
      secondary: "bg-pink-dark text-white hover:bg-black",
    },
    size: {
      xs: "text-[12px]",
      sm: "text-sm",
      md: "text-base",
    },
  },
});

export const Button = ({
  children,
  variant = "primary",
  color = "default",
  size = "md",
  className,
}) => {
  return (
    <button className={twMerge(button({ variant, color, size }), className)}>
      {children}
    </button>
  );
};
