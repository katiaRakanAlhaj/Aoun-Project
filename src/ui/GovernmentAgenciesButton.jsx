const GovernmentAgenciesButton = ({ image, desc }) => {
  return (
    <div>
      <button className="w-full flex justify-center items-center gap-x-4  h-[4rem] rounded-md bg-[#009444] text-white font-bold cursor-pointer">
        <img className="w-[2rem] h-[2rem]" src={image} />
        <p className="text-[#FBF9F4] text-lg">{desc}</p>
      </button>
    </div>
  );
};
export default GovernmentAgenciesButton;
