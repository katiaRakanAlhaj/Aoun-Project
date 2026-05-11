import SecondTitleStyle from "../../../ui/secondTitleStyle";
import i18next from "i18next";
const OurStoryService = () => {
  return (
    <div className="h-auto  py-[6rem] w-full bg-[#F5F3EE]">
      <div className="container2 mx-auto">
        <div className="">
          <SecondTitleStyle
            title={i18next.t("services_description.our_story_and_vision")}
          />
          <p className="text-lg mt-[1rem] text-dark">
            {i18next.t("services_description.Omani_innovation")}{" "}
          </p>
          <div className="w-full px-[1rem] flex  items-center h-[5rem] bg-white rounded-[0.8rem] mt-[1.5rem]  relative">
            <div
              className={`absolute h-full w-[0.2rem] bg-[#0B6C4B] ${i18next.language == "ar" ? "right-0 rounded-tr-[0.8rem] rounded-br-[0.8rem]" : "left-0 rounded-tl-[0.8rem] rounded-bl-[0.8rem]"} top-0 bottom-0 flex`}
            ></div>
            <p className="text-md text-secondary">
              {i18next.t("services_description.digital_enviroment")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStoryService;
