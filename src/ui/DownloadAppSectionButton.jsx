export const DownloadAppSectionButton = ({image , title , description}) => {
  return (
    <button className="w-full h-[6rem] bg-white flex gap-x-4 rounded-lg items-center px-[1.5rem]">
      <img src={image} />
      <div className="flex flex-col space-y-1 text-justify">
        <h1 className="text-[#333333] font-bold text-lg">{title}</h1>
        <p className="text-[#525252] text-sm">{description}</p>
      </div>
    </button>
  );
};
