import i18next from "i18next";
import number1 from "../../../assets/images/number1.svg";
import number2 from "../../../assets/images/number2.svg";
import number3 from "../../../assets/images/number3.svg";
import SubTitle from "../../../ui/subTitleStyle";
import { useFetchHomePage } from "../hook/useFetchHomePage";

const Achievements = () => {
  const {
    data: achievementsData,
    isLoading: achievementsDataLoading,
    error: achievementsDataError,
  } = useFetchHomePage();
  return (
    <div className="w-full h-auto bg-[#EEF2F5]">
      <div className="container1 mx-auto py-[4rem]">
        <h1 className="text-secondary text-center font-bold text-md">
          {i18next.t("achievements")}
        </h1>
        <div className="flex justify-center items-center">
          <SubTitle subTitle={i18next.t("home.number_speak")} />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[4rem] gap-y-[2rem] mt-[3rem]">
          {achievementsData?.data?.achievements?.map((achievementsData) => (
            <div className="w-full h-[22rem] p-[3rem] rounded-xl bg-white">
              <div className="w-[4rem] h-[4rem] rounded-xl bg-[#0664110D] flex justify-center items-center">
                <img className="w-[2rem]" src={achievementsData?.icon} />
              </div>
              <h1 className="mt-[1.5rem] text-[2.5rem] font-bold text-dark">
                {achievementsData?.number}
              </h1>
              <p className="text-[#333333] text-[1.2rem] font-bold">
                {achievementsData?.title}
              </p>
              <p className="text-[#525252] whitespace-pre-line text-[1rem] mt-[2rem]">
                {achievementsData?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Achievements;
