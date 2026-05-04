const Statistics = () => {
  const StatisticsItems = [
    { numb: "+500", desc: "مصنع مسجل" },
    { numb: "+10,000", desc: "منتج عماني" },
    { numb: "+2M", desc: "مستهلك مستهدف" },
  ];
  return (
    <div className="w-full border border-[#E4E2DD] h-auto py-[5rem] bg-[#F5F3EE]">
      <div className="container2 mx-auto">
        <div className="grid grid-cols-3 justify-between">
          {StatisticsItems?.map((statisticsItems) => (
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-secondary font-extrabold opacity-100">
                {statisticsItems?.numb}
              </h1>
              <p className="text-md text-[#333333] mt-[1rem]">
                {statisticsItems?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Statistics;
