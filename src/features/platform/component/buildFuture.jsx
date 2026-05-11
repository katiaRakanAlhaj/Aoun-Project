import i18next from "i18next";
import futureImage from "../../../assets/images/futureImage.svg";
import SubTitle from "../../../ui/subTitleStyle";
const BuildFuture = () => {
  return (
    <div className="w-full h-auto lg:py-[5rem] py-[3rem] bg-[#DDE2E4]">
      <div className="flex flex-col space-y-[2rem] items-center justify-center">
        <img className="w-[2.5rem]" src={futureImage} />
        <p className="md:text-[2.5rem] text-[2rem] font-bold text-[#333333]">
          {i18next.t("build_future.build_future")}{" "}
        </p>
        <p className="text-[#525252] text-xl text-center">
          {i18next.t("build_future.be_part_of_industrial_transformation")}{" "}
        </p>
      </div>
    </div>
  );
};
export default BuildFuture;
