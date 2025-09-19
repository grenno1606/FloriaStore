export const Post = ({ img, day, month, year, title, commentCount }) => {
  return (
    <div className="flex gap-3 pt-3.5 pb-6 border-b border-b-gray-200">
      <img
        className="w-[20%] min-h-[80px] object-cover cursor-pointer"
        src={img}
        alt="img_post"
      />
      <div>
        <span className="text-[11px] text-gray-700 font-medium uppercase tracking-[0.1em] pb-1.5">
          {day}.{month}.{year}
        </span>
        <h3 className="text-base font-medium text-black pb-0.5 cursor-pointer hover:text-pink-dark">
          {title}
        </h3>
        <span className="text-xs text-gray-700 font-medium">
          {commentCount} Comments
        </span>
      </div>
    </div>
  );
};
