export const ButtonUpload = ({ title, description, image ,mrClass}) => {
  return (
    <button className="w-[13.5rem] lg:mt-0 mt-[1rem] h-[5rem] bg-[#1B1C19] rounded-md">
      <div className="flex gap-x-5 items-center justify-center">
        <img src={image} alt="" />
        <div className="flex flex-col">
          <p className={`text-[#FBF9F4] opacity-50 text-sm ${mrClass}`}>
            {title}
          </p>
          <h1 className="font-bold text-white text-[1.3rem]">{description}</h1>
        </div>
      </div>
    </button>
  );
};