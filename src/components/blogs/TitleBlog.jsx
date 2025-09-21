import { FaComment, FaRegClock, FaUser } from "react-icons/fa";

export const TitleBlog = ({
  img,
  day,
  month,
  year,
  title,
  commentCount,
  author,
}) => {
  return (
    <div className="relative">
      <img src={img} alt={title} className="w-full" />
      <div className="absolute bottom-0 w-full pt-[1.875rem] px-[0.9375rem] pb-[3.75rem] bg-[linear-gradient(180deg,transparent_0,rgba(0,0,0,0.85))]">
        <h2 className="text-3xl font-semibold text-center pb-2.5 mx-auto text-white">
          {title}
        </h2>
        <div className="flex items-center justify-center gap-2.5 text-[13px] text-white capitalize">
          <p className="flex items-center gap-1">
            <FaUser />
            <span>{author}</span>
          </p>
          <p className="flex items-center gap-1">
            <FaRegClock />
            {day}.{month}.{year}
          </p>
          <p className="flex items-center gap-1">
            <FaComment />
            <span>{commentCount} Comments</span>
          </p>
        </div>
      </div>
    </div>
  );
};
