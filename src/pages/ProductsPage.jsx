import { Link } from "react-router";
import { Breadcrumb } from "../components/Breadcrumb";
import { Filter } from "../components/Filter";
import { PagiNav } from "../components/PagiNav";
import { ProductItem } from "../components/ProductItem";
import { TitleFilter } from "../components/TitleFilter";
import { IMG_PRODUCT } from "../contants/images";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Button } from "../components/Button";

export const ProductsPage = () => {
  return (
    <div className="mt-16 xl:mt-20">
      <Breadcrumb>Products</Breadcrumb>
      <div className="wrapper lg:flex lg:gap-3">
        <div className="lg:w-1/4 py-3 pr-6">
          <TitleFilter>CATEGORIES</TitleFilter>
          <p className="*:text-[15px] *:capitalize *:font-medium *:py-1.5 *:cursor-pointer *:hover:text-pink-dark">
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
            <Link className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Best sale
            </Link>
          </p>
          <TitleFilter>PRICE</TitleFilter>
          <ul className="*:text-[15px] *:capitalize *:font-medium *:py-1.5 *:cursor-pointer *:hover:text-pink-dark">
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
            <li className="flex gap-2 items-center">
              <input type="checkbox" />
              <p>$20.00 - $30.00</p>
            </li>
          </ul>
          <TitleFilter>SIZE</TitleFilter>
          <ul className="flex gap-3 items-center">
            <li>
              <Button variant="outline" color="fourth">
                L
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                L
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                L
              </Button>
            </li>
          </ul>
          <TitleFilter>TAGS</TitleFilter>
          <ul className="flex items-center flex-wrap *:mr-2.5 *:mb-2.5">
            <li>
              <Button variant="outline" color="fourth">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                dff
              </Button>
            </li>
            <li>
              <Button variant="outline" color="fourth">
                dff
              </Button>
            </li>
          </ul>
          <TitleFilter>BRAND</TitleFilter>
          <ul className="*:text-[15px] *:capitalize *:font-medium *:py-1.5 *:cursor-pointer *:hover:text-pink-dark">
            <li className="group flex items-center">
              <IoChevronForwardOutline className="hidden group-hover:block" />{" "}
              Floria
            </li>
          </ul>
        </div>
        <div className="lg:w-3/4">
          <Filter />
          <div className="flex flex-wrap justify-between mt-[30px] *:w-1/2 *:px-[7.5px] -mx-[7.5px] md:*:w-1/3 xl:*:w-1/4">
            <div>
              <ProductItem
                img={IMG_PRODUCT}
                salePercent="-52%"
                name="Angel Centerpiece"
                originalPrice="$54.00"
                price="$26.00"
              />
            </div>
            <div>
              <ProductItem
                img={IMG_PRODUCT}
                salePercent="-52%"
                name="Angel Centerpiece"
                originalPrice="$54.00"
                price="$26.00"
              />
            </div>
            <div>
              <ProductItem
                img={IMG_PRODUCT}
                salePercent="-52%"
                name="Angel Centerpiece"
                originalPrice="$54.00"
                price="$26.00"
              />
            </div>
            <div>
              <ProductItem
                img={IMG_PRODUCT}
                salePercent="-52%"
                name="Angel Centerpiece"
                originalPrice="$54.00"
                price="$26.00"
              />
            </div>
          </div>
          <PagiNav />
        </div>
      </div>
    </div>
  );
};
