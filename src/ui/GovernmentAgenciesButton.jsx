const GovernmentAgenciesButton = ({ image, desc, onClick }) => {
  return (
    <div>
      <button
        className="w-full flex justify-center items-center gap-x-4 h-[4rem] rounded-md bg-[#009444] text-white font-bold cursor-pointer hover:opacity-90 transition-opacity"
        onClick={onClick}
        aria-label={`Download from ${desc}`}
      >
        <img className="w-[2rem] h-[2rem]" src={image} alt="" />
        <p className="text-[#FBF9F4] text-lg">{desc}</p>
      </button>
    </div>
  );
};

export default GovernmentAgenciesButton;
