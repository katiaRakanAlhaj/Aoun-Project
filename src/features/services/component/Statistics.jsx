import { useFetchHomePage } from "../../home/hook/useFetchHomePage";

const Statistics = () => {
  const StatisticsItems = [
    { numb: "+500", desc: "مصنع مسجل" },
    { numb: "+10,000", desc: "منتج عماني" },
    { numb: "+2M", desc: "مستهلك مستهدف" },
  ];
  const {data:achievementsData , isLoading:achievementsDataLoading,error:achievementsDataError} = useFetchHomePage();
  return (
    <div className="w-full border border-[#E4E2DD] h-auto lg:py-[5rem] py-[3rem] bg-[#F5F3EE]">
      <div className="container2 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[2rem] justify-between">
          {achievementsData?.data?.achievements?.map((achievementsData) => (
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-secondary font-extrabold opacity-100">
                {achievementsData?.number}
              </h1>
              <p className="text-md text-[#333333] mt-[1rem]">
                {achievementsData?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Statistics;
