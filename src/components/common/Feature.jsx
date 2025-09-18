export const Feature = ({ icon, children }) => {
  return (
    <div className="flex flex-col justify-center items-center p-5 pb-[25px] border border-gray-300 my-2.5">
      <div className="text-4xl mb-5">{icon}</div>
      <p className="text-xs uppercase tracking-[3px] font-medium text-black">
        {children}
      </p>
    </div>
  );
};
