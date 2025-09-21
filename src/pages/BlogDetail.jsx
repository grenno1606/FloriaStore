import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { TitleBlog } from "../components/blogs/TitleBlog";
import { Button } from "../components/buttons/Button";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { Title } from "../components/common/Title";
import { Blog } from "../components/blogs/Blog";
import { IMG_BLOG } from "../contants/images";
import { SendMailInput } from "../components/inputs/SendMailInput";
import { TitleWidget } from "../components/common/TitleWidget";
import { CategoryItem } from "../components/common/CategoryItem";
import { Post } from "../components/blogs/Post";

export const BlogDetail = ({ children }) => {
  return (
    <div className="my-16 xl:mt-20">
      <div className="pb-7 wrapper">
        <Breadcrumb hasBackground={false}>
          Where Do Tulips Come From?
        </Breadcrumb>
      </div>
      <div className="wrapper">
        <div className="lg:flex lg:*:px-3.5 lg:-mx-3.5">
          <div className="lg:w-2/3 xl:w-3/4">
            <div className="pb-9 border-b border-b-gray-300">
              <TitleBlog
                img={IMG_BLOG}
                day={"23"}
                month={"August"}
                year={"2025"}
                title={"Where Do Tulips Come From?"}
                commentCount={"0"}
                author={"Phan Thuý"}
              ></TitleBlog>
              <div>
                <h3 className="text-3xl font-medium my-2.5">
                  Where Can I Get Some?
                </h3>
                <p className="text-[14px] text-gray-700mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima aut iste sit molestias voluptas sunt doloribus quisquam
                  eveniet vitae corrupti! Sed itaque, voluptatibus adipisci quis
                  nostrum earum perferendis recusandae dolor exercitationem eum,
                  obcaecati reprehenderit, velit nulla consequatur harum vitae
                  deleniti accusamus autem. Consequatur ea totam obcaecati aut
                  quaerat eligendi fugit?
                </p>
              </div>

              <div className="md:flex md:justify-between md:*:px-8 md:-mx-8 md:items-center">
                <div className="flex items-center flex-wrap py-5 gap-2.5">
                  <p className="mr-2.5 text-xs font-semibold uppercase tracking-[2px]">
                    TAGS :
                  </p>
                  <Button
                    variant="outline"
                    color="fourth"
                    className={"w-fit px-5"}
                  >
                    Flowers
                  </Button>
                  <Button
                    variant="outline"
                    color="fourth"
                    className={"w-fit px-5"}
                  >
                    Flowers
                  </Button>
                  <Button
                    variant="outline"
                    color="fourth"
                    className={"w-fit px-5"}
                  >
                    Flowers
                  </Button>
                  <Button
                    variant="outline"
                    color="fourth"
                    className={"w-fit px-5"}
                  >
                    Flowers
                  </Button>
                  <Button
                    variant="outline"
                    color="fourth"
                    className={"w-fit px-5"}
                  >
                    Flowers
                  </Button>
                </div>
                <div className="flex items-center gap-2.5">
                  <Button variant="primary" color="fifth" size="xs">
                    <FaTwitter />
                  </Button>
                  <Button variant="primary" color="fifth" size="xs">
                    <FaFacebookF />
                  </Button>
                  <Button variant="primary" color="fifth" size="xs">
                    <FaPinterestP />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-9 font-semibold">
              <a href="" className="border-b border-b-pink-dark text-pink-dark">
                Previous Post
              </a>
              <a href="" className="border-b border-b-pink-dark text-pink-dark">
                Next Post
              </a>
            </div>

            <div className="my-16">
              <div className="text-center">
                <Title>Related Post</Title>
              </div>
              <div className="pt-7 md:flex md:items-center md:*:w-1/2 md:*:px-[7.5px] md:-mx-[7.5px]">
                <div>
                  <Blog
                    title={"Where Do Tulips Come From?"}
                    img={IMG_BLOG}
                    day={"23"}
                    month={"AUG"}
                  ></Blog>
                </div>
                <div>
                  <Blog
                    title={"Where Do Tulips Come From?"}
                    img={IMG_BLOG}
                    day={"23"}
                    month={"AUG"}
                  ></Blog>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 lg:!pt-0 lg:w-1/3 xl:w-1/4">
            <SendMailInput
              placeholder="Search..."
              icon={true}
              color="primary"
              className={"mb-10"}
            ></SendMailInput>
            <div className="pb-4">
              <TitleWidget>CATEGORIES</TitleWidget>
              <ul>
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
              <div>
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
