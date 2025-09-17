import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IMG_LOGO } from "../../contants/images";
import SearchIcon from "../../assets/icons/SearchIcon";
import CartIcon from "../../assets/icons/CartIcon";
import { Link } from "react-router";
import { Button } from "../../components/buttons/Button";
import HeartIcon from "../../assets/icons/HeartIcon";
import UserIcon from "../../assets/icons/UserIcon";

export const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={twMerge(
          "absolute top-0 left-0 right-0 z-40 bg-white xl:bg-transparent transition-all duration-300 shadow-md xl:shadow-none",
          showHeader && "fixed xl:bg-white xl:shadow-md moveHeader"
        )}
      >
        <div className="wrapper">
          <div className="flex py-[15px] relative z-[2] items-center xl:py-[25px]">
            <div className="text-black flex flex-col gap-y-1.5 xl:hidden">
              <span className="w-6 h-[1.5px] bg-black" />
              <span className="w-3 h-[1.5px] bg-black" />
              <span className="w-[18px] h-[1.5px] bg-black" />
            </div>
            <ul className="items-center gap-4 hidden xl:flex text-base font-bold *:px-[15px] 2xl:text-lg *:hover:text-pink-dark *:hover:cursor-pointer *:hover:underline">
              <li className="!pl-0">
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/products">SHOP</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
            </ul>
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 xl:scale-[165%] hover:cursor-pointer"
            >
              <img width={100} height={25} src={IMG_LOGO} alt="image logo" />
            </Link>
            <div className="ml-auto flex items-center gap-5 *:cursor-pointer h-[34.5px]">
              <Button variant="ghost">
                <SearchIcon className="w-[22px] h-[22px]" />
              </Button>
              <Button variant="ghost" className="hidden xl:block">
                <UserIcon className="w-[22px] h-[22px]" />
              </Button>
              <Button variant="ghost" className="hidden xl:block">
                <HeartIcon className="w-[22px] h-[22px]" />
              </Button>
              <Link to="cart">
                <div className="relative">
                  <Button variant="ghost">
                    <CartIcon className="w-[22px] h-[22px]" />
                  </Button>
                  <span className="block absolute text-center -top-3.5 -right-1 text-[14px] text-pink-dark">
                    1
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
