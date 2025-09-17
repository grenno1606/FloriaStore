import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const title = tv({
  base: "uppercase inline-block relative leading-[1.2] text-black-light after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
  variants: {
    color: {
      primary: "after:w-1/2 after:h-0.5 after:bg-pink-dark pb-2.5",
      secondary: "after:w-1/4 after:h-[1px] after:bg-black-light pb-4",
    },
    size: {
      sm: "text-lg font-semibold normal-case",
      md: "text-2xl font-medium tracking-[1px] ",
      lg: "text-3xl font-semibold tracking-[2px]",
    },
  },
});

export const Title = ({
  size = "md",
  color = "primary",
  children,
  className,
}) => {
  return (
    <div className={twMerge(title({ size, color }), className)}>{children}</div>
  );
};
