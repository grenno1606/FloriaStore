import { FaAngleRight } from "react-icons/fa";
import { Button } from "../buttons/Button";

export const Pagination = () => {
  return (
    <div className="flex items-center justify-center pb-5 mb-8 gap-2.5">
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline" className="py-[15px] px-4">
        <FaAngleRight />
      </Button>
    </div>
  );
};
