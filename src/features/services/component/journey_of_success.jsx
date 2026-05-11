import i18next from "i18next";
import SecondTitleStyle from "../../../ui/secondTitleStyle";

const JourneyOfSuccess = () => {
  const successItems = [
    {
      num: "01",
      title: i18next.t("journey_of_success.Business_registration"),
      desc: i18next.t("journey_of_success.simple_steps"),
    },
    {
      num: "02",
      title: i18next.t("journey_of_success.display_product"),
      desc: i18next.t("journey_of_success.product_appear"),
    },
    {
      num: "03",
      title: i18next.t("journey_of_success.add_products"),
      desc: i18next.t("journey_of_success.upload_product_list"),
    },
    {
      num: "04",
      title: i18next.t("journey_of_success.Acquisition_and_Selling"),
      desc: i18next.t("journey_of_success.receive_orders"),
    },
  ];

  return (
    <div className="h-auto w-full py-[3rem] md:py-[6rem] bg-white">
      <div className="flex flex-col justify-center items-center px-4">
        <SecondTitleStyle
          title={i18next.t("journey_of_success.journey_of_success")}
        />
        <div className="w-[5.5rem] h-[0.3rem] bg-secondary mt-[1rem] rounded-full"></div>
      </div>

      <div className="container4 mx-auto mt-[2rem] md:mt-[3rem] px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[1rem] md:gap-x-[2rem] gap-y-[2rem] md:gap-y-[4rem]">
          {successItems?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center md:flex-row md:items-start gap-x-5 gap-y-3 text-center ${i18next.language == "ar" ? "md:text-right" : "md:text-left"}`}
            >
              <div className="w-[4rem] h-[4rem] flex justify-center items-center rounded-xl bg-[#E3EAE3] mx-auto md:mx-0">
                <div className="text-3xl text-primary font-extrabold opacity-100">
                  {item?.num}
                </div>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <h1 className="text-[1.25rem] md:text-[1.5rem] text-[#333333] font-bold">
                  {item?.title}
                </h1>
                <p className="text-[#525252] text-sm md:text-md mt-2 leading-relaxed">
                  {item?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyOfSuccess;
