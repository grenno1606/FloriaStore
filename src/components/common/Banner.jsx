import { FaCaretRight } from "react-icons/fa";
import { Button } from "../buttons/Button";

export const Banner = ({ img, subtitle, title, buttonName }) => {
  return (
    <div className="relative py-0 mt-4 md:px-0 overflow-hidden group">
      <img
        className="bg-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
        src={img}
        alt="image banner"
      />
      <div className="absolute top-[30px] left-[30px] md:top-5 md:left-5">
        <p className="font-medium uppercase">{subtitle}</p>
        <p className="font-semibold text-2xl mt-1.5 leading-[1.2] mb-7">
          {title}
        </p>
        <Button variant="ghost">
          {buttonName} <FaCaretRight />
        </Button>
      </div>
    </div>
  );
};
