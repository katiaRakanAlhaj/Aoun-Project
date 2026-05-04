const AppDownloadFooterButton = ({image , description}) => {
  return (
    <button className="w-full h-[4rem] rounded-md mt-[3rem] bg-primary flex justify-center items-center gap-x-3">
      <img src={image} className="w-[2rem] h-[2rem]" />
      <p className="text-[#FBF9F4] font-bold text-lg">{description}</p>
    </button>
  );
};
export default AppDownloadFooterButton;
