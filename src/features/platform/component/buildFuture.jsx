import futureImage from "../../../assets/images/futureImage.svg";
import SubTitle from "../../../ui/subTitleStyle";
const BuildFuture = () => {
  return (
    <div className="w-full h-auto py-[5rem] bg-[#DDE2E4]">
      <div className="flex flex-col space-y-[2rem] items-center justify-center">
        <img className="w-[2.5rem]" src={futureImage} />
        <p className="text-[2.5rem] font-bold text-[#333333]">
          لنصنع المستقبل معاً
        </p>
        <p className="text-[#525252] text-xl">
          كونوا جزءاً من التحول الصناعي الرقمي في سلطنة عمان. انضموا إلى آلاف
          الشركات والمشترين اليوم.
        </p>
      </div>
    </div>
  );
};
export default BuildFuture;
