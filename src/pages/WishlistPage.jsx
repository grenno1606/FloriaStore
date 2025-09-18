import { Button } from "../components/buttons/Button";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { ProductWishlist } from "../components/products/ProductWishlist";
import { IMG_PRODUCT } from "../contants/images";

export const WishlistPage = () => {
  return (
    <div className="mt-16 xl:mt-20">
      <Breadcrumb>Wishlist</Breadcrumb>
      <div className="wrapper py-10">
        <ul className="border border-gray-300 *:py-[15px] *:px-5 text-sm font-semibold tracking-[2px] hidden md:flex mb-2.5">
          <li className="w-5/12 uppercase border-r border-r-gray-300">
            Product Name
          </li>
          <li className="w-1/6 uppercase flex justify-center border-r border-r-gray-300">
            Price
          </li>
          <li className="w-1/3 uppercase flex justify-center border-r border-r-gray-300">
            Action
          </li>
          <li className="w-1/12 uppercase"></li>
        </ul>
        <div>
          <ProductWishlist
            img={IMG_PRODUCT}
            name={"Angel Centerpiece"}
            price={"$34.00"}
          ></ProductWishlist>
          <ProductWishlist
            img={IMG_PRODUCT}
            name={"Angel Centerpiece"}
            price={"$34.00"}
          ></ProductWishlist>
        </div>
        <div className="my-6 flex justify-center">
          <Button color="secondary">Continue shopping</Button>
        </div>
      </div>
    </div>
  );
};
