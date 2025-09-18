import { FaTwitter } from "react-icons/fa";
import PlaneFeatured from "../assets/icons/PlaneFeatured";
import { Button } from "../components/buttons/Button";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Feature } from "../components/common/Feature";
import { Tab } from "../components/common/Tab";
import { ProductDesc } from "../components/products/ProductDesc";
import { ProductDetailCard } from "../components/products/ProductDetailCard";
import { IMG_PRODUCT, IMG_PRODUCT_DESC } from "../contants/images";
import { Title } from "../components/common/Title";
import { ProductItem } from "../components/products/ProductItem";

export const ProductDetail = () => {
  return (
    <div className="my-16 xl:mt-20">
      <div className="pb-7 wrapper">
        <Breadcrumb hasBackground={false}>Dazzling Orchid</Breadcrumb>
      </div>
      <div className="wrapper">
        <ProductDetailCard
          imgProduct={IMG_PRODUCT}
          name="dazzling orchid"
          originalPrice="$54.00"
          price="$26.00"
          description="lorem dfdf dfdf dfdfdf dfdfdf dfdfdf dfd df dfd dfdf dfdfdf dfdf f hfdhkjf kdjhfd jkhf dsfdhfj ds djkfhdsjkfh dhf dsjhf  djfhdsjfd dhf kjdhf lorem dfdf dfdf dfdfdf dfdfdf dfdfdf dfd df dfd dfdf dfdfdf dfdf f hfdhkjf kdjhfd jkhf dsfdhfj ds djkfhdsjkfh dhf dsjhf  djfhdsjfd dhf kjdhf"
          amount="80"
          stock="20"
        ></ProductDetailCard>
      </div>
      <div className="wrapper pb-14 sm:flex sm:justify-between sm:items-center sm:flex-wrap sm:*:w-1/2 sm:*:px-[7.5px] sm:-mx-[7.5px] md:*:w-1/4 md:*:text-center">
        <div>
          <Feature
            icon={
              <PlaneFeatured className="w-[35px] h-[35px] fill-pink-dark" />
            }
          >
            Worldwide shipping
          </Feature>
        </div>
        <div>
          <Feature
            icon={
              <PlaneFeatured className="w-[35px] h-[35px] fill-pink-dark" />
            }
          >
            Worldwide shipping
          </Feature>
        </div>
        <div>
          <Feature
            icon={
              <PlaneFeatured className="w-[35px] h-[35px] fill-pink-dark" />
            }
          >
            Worldwide shipping
          </Feature>
        </div>
        <div>
          <Feature
            icon={
              <PlaneFeatured className="w-[35px] h-[35px] fill-pink-dark" />
            }
          >
            Worldwide shipping
          </Feature>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col py-6 border-b border-t border-b-gray-300 border-t-gray-300 sm:flex-row">
        <Tab active={true}>Description</Tab>
        <Tab>Description</Tab>
        <Tab>Description</Tab>
      </div>
      <div className="wrapper">
        <div className="pb-8 border-y border-y-gray-100">
          <ProductDesc
            img={IMG_PRODUCT_DESC}
            title="The history of flower meanings"
            description="Out etdf f dfdffdf dfdf d dfd dfdfdf d dfdf dfd fkf jk jjkd h ih id dfdfhdf dihf difdh dihfidfdif dfdh fdf dfhdfidhf dfdifhdifid dfdihfdihf"
          ></ProductDesc>
          <ProductDesc
            img={IMG_PRODUCT_DESC}
            title="The history of flower meanings"
            description="Out etdf f dfdffdf dfdf d dfd dfdfdf d dfdf dfd fkf jk jjkd h ih id dfdfhdf dihf difdh dihfidfdif dfdh fdf dfhdfidhf dfdifhdifid dfdihfdihf"
            reverse={true}
          ></ProductDesc>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5 py-2.5 mb-8 border border-gray-300">
        <Button shape="circle" variant="outline" className="text-black">
          <FaTwitter />
        </Button>
        <Button shape="circle" variant="outline" className="text-black">
          <FaTwitter />
        </Button>
        <Button shape="circle" variant="outline" className="text-black">
          <FaTwitter />
        </Button>
      </div>

      <div className="mt-[70px] pb-10 wrapper">
        <div className="text-center">
          <Title>RELATED PRODUCTS</Title>
        </div>
        <div className="pt-8 flex flex-wrap *:w-1/2 -mx-[7.5px] *:px-[7.5px] md:*:w-1/3 lg:*:w-1/4">
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
      </div>
    </div>
  );
};
