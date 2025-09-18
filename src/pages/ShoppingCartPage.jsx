import { Button } from "../components/buttons/Button";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { ProductCart } from "../components/products/ProductCart";
import { IMG_PRODUCT } from "../contants/images";

export const ShoppingCartPage = () => {
  return (
    <div className="my-16 xl:mt-20">
      <div className="wrapper">
        <Breadcrumb hasBackground={false}>Your Shopping Cart</Breadcrumb>
      </div>
      <div className="wrapper">
        <ul className="border border-gray-300 *:py-[15px] *:px-5 text-sm font-semibold tracking-[2px] hidden md:flex mb-2.5 my-4">
          <li className="w-5/12 uppercase border-r border-r-gray-300">
            Product Name
          </li>
          <li className="w-1/6 uppercase flex justify-center border-r border-r-gray-300">
            Price
          </li>
          <li className="w-1/6 uppercase flex justify-center border-r border-r-gray-300">
            Quantity
          </li>
          <li className="w-1/6 uppercase flex justify-center border-r border-r-gray-300">
            Total
          </li>
          <li className="w-1/12 uppercase"></li>
        </ul>
        <div className="pb-4">
          <ProductCart
            img={IMG_PRODUCT}
            name="Baby First Block"
            price="$138.00"
          ></ProductCart>
          <ProductCart
            img={IMG_PRODUCT}
            name="Baby First Block"
            price="$138.00"
          ></ProductCart>
        </div>
        <div className="flex flex-wrap gap-5">
          <Button color="primary" size="sm" className="capitalize">
            Update cart
          </Button>
          <Button color="secondary" className="capitalize">
            Continue Shopping
          </Button>
        </div>
        <div className="pb-5 border border-gray-300 my-7 px-2.5">
          <h2 className="text-sm font-semibold tracking-[2px] uppercase py-4 border-b border-b-gray-300">
            Cart totals
          </h2>
          <div className="py-4 flex items-center justify-between">
            <p>Total</p>
            <span className="font-bold">$207.00</span>
          </div>
          <Button color="primary" size="sm" className="capitalize">
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
