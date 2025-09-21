import { Blog } from "../components/blogs/Blog";
import { Post } from "../components/blogs/Post";
import { Button } from "../components/buttons/Button";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { CategoryItem } from "../components/common/CategoryItem";
import { TitleWidget } from "../components/common/TitleWidget";
import { SendMailInput } from "../components/inputs/SendMailInput";
import { IMG_BLOG } from "../contants/images";

export const BlogsPage = () => {
  return (
    <div className="my-16 xl:mt-20">
      <Breadcrumb>News</Breadcrumb>
      <div className="wrapper">
        <div className="lg:flex lg:*:px-3.5 lg:-mx-3.5">
          <div className="lg:w-2/3 xl:w-3/4">
            <div className="flex flex-col *:pt-8 md:flex-row md:flex-wrap md:*:w-1/2 md:*:px-[7.5px] md:-mx-[7.5px]">
              <div>
                <Blog
                  title="Where Do Tulips Come From?"
                  img={IMG_BLOG}
                  day="23"
                  month="AUG"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  suscipit ullam repudiandae? Accusamus in reiciendis voluptatum
                  sequi necessitatibus, voluptate earum...
                </Blog>
              </div>
              <div>
                <Blog
                  title={"Where Do Tulips Come From?"}
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUG"}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  suscipit ullam repudiandae? Accusamus in reiciendis voluptatum
                  sequi necessitatibus, voluptate earum...
                </Blog>
              </div>{" "}
              <div>
                <Blog
                  title={"Where Do Tulips Come From?"}
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUG"}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  suscipit ullam repudiandae? Accusamus in reiciendis voluptatum
                  sequi necessitatibus, voluptate earum...
                </Blog>
              </div>{" "}
              <div>
                <Blog
                  title={"Where Do Tulips Come From?"}
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUG"}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  suscipit ullam repudiandae? Accusamus in reiciendis voluptatum
                  sequi necessitatibus, voluptate earum...
                </Blog>
              </div>{" "}
              <div>
                <Blog
                  title={"Where Do Tulips Come From?"}
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUG"}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  suscipit ullam repudiandae? Accusamus in reiciendis voluptatum
                  sequi necessitatibus, voluptate earum...
                </Blog>
              </div>{" "}
              <div>
                <Blog
                  title={"Where Do Tulips Come From?"}
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUG"}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  suscipit ullam repudiandae? Accusamus in reiciendis voluptatum
                  sequi necessitatibus, voluptate earum...
                </Blog>
              </div>{" "}
              <div>
                <Blog
                  title={"Where Do Tulips Come From?"}
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUG"}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                  suscipit ullam repudiandae? Accusamus in reiciendis voluptatum
                  sequi necessitatibus, voluptate earum...
                </Blog>
              </div>
            </div>
          </div>
          <div className="pt-8 lg:w-1/3 xl:w-1/4">
            <SendMailInput
              placeholder="Search..."
              icon={true}
              color="primary"
              className={"mb-10"}
            ></SendMailInput>
            <div className="pb-4">
              <TitleWidget>CATEGORIES</TitleWidget>
              <ul className="mt-2">
                <li>
                  <CategoryItem>Accessories</CategoryItem>
                </li>
                <li>
                  <CategoryItem>Accessories</CategoryItem>
                </li>
                <li>
                  <CategoryItem>Accessories</CategoryItem>
                </li>
                <li>
                  <CategoryItem>Accessories</CategoryItem>
                </li>
                <li>
                  <CategoryItem>Accessories</CategoryItem>
                </li>
              </ul>
            </div>
            <div>
              <TitleWidget>Recent Posts</TitleWidget>
              <div className="mt-2">
                <Post
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUGUST"}
                  year={"2025"}
                  title={"Where do tulips come from?"}
                  commentCount={"0"}
                ></Post>
                <Post
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUGUST"}
                  year={"2025"}
                  title={"Where do tulips come from?"}
                  commentCount={"0"}
                ></Post>
                <Post
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUGUST"}
                  year={"2025"}
                  title={"Where do tulips come from?"}
                  commentCount={"0"}
                ></Post>
                <Post
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUGUST"}
                  year={"2025"}
                  title={"Where do tulips come from?"}
                  commentCount={"0"}
                ></Post>
                <Post
                  img={IMG_BLOG}
                  day={"23"}
                  month={"AUGUST"}
                  year={"2025"}
                  title={"Where do tulips come from?"}
                  commentCount={"0"}
                ></Post>
              </div>
              <div className="mt-7">
                <TitleWidget>TAGS</TitleWidget>
                <div className="my-7 flex flex-wrap gap-2.5 items-center">
                  <Button variant="outline" className="w-fit px-[22px]">
                    Flowers
                  </Button>
                  <Button variant="outline" className="w-fit px-[22px]">
                    Flowers
                  </Button>
                  <Button variant="outline" className="w-fit px-[22px]">
                    Flowers
                  </Button>
                  <Button variant="outline" className="w-fit px-[22px]">
                    Flowers
                  </Button>
                  <Button variant="outline" className="w-fit px-[22px]">
                    Flowers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
