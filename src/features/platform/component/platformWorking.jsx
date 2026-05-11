import SubTitle from "../../../ui/subTitleStyle";
import { TitleStyle } from "../../../ui/titleStyle";
import step1 from "../../../assets/images/step1.svg";
import step2 from "../../../assets/images/step2.svg";
import step3 from "../../../assets/images/step3.svg";
import step4 from "../../../assets/images/step4.svg";
import i18next from "i18next";

const PlatformWorking = () => {
  const steps = [
    {
      image: step1,
      title: `${i18next.t("platform_working.step")} 01`,
      subTitle: i18next.t("platform_working.business_registration"),
      desc: i18next.t("platform_working.register_factory"),
    },
    {
      image: step2,
      title: `${i18next.t("platform_working.step")} 02`,
      subTitle: i18next.t("platform_working.add_products"),
      desc: i18next.t("platform_working.upload_product_list"),
    },
    {
      image: step3,
      title: `${i18next.t("platform_working.step")} 03`,
      subTitle: i18next.t("platform_working.Listing_and_linking"),
      desc: i18next.t("platform_working.product_displayed"),
    },
    {
      image: step4,
      title: `${i18next.t("platform_working.step")} 04`,
      subTitle: i18next.t("platform_working.acquisition_and_selling"),
      desc: i18next.t("platform_working.receive_orders"),
    },
  ];

  // Function to get height class based on index (0-based)
  const getHeightClass = (index) => {
    // Even index (0,2) -> h-[24rem], Odd index (1,3) -> h-[20rem]
    return index % 2 === 0 ? "h-[22rem]" : "h-[20rem] mt-[2.2rem]";
  };

  return (
    <div className="h-auto pb-[5rem] bg-[#F5F3EE] rounded-md">
      <div className="flex items-center justify-center pt-[5rem]">
        <div className="flex flex-col justify-center items-center">
          <TitleStyle title={i18next.t("platform_working.user_journey")} />
          <SubTitle subTitle={i18next.t("platform_working.platform_working")} />
        </div>
      </div>
      <div className="container1 mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-[3rem] gap-x-[2rem]">
          {steps?.map((step, index) => (
            <div
              key={index}
              className={`w-full ${getHeightClass(index)} bg-white p-[2rem]`}
            >
              <div className="flex flex-col space-y-[1.5rem]">
                <div className="w-[4rem] h-[4rem] flex justify-center items-center bg-[#E3EAE3] rounded-md">
                  <img
                    src={step?.image}
                    className="w-[2rem]"
                    alt={step?.title}
                  />
                </div>
                <h1 className="text-md text-primary">{step?.title}</h1>
                <h1 className="text-dark font-bold text-2xl">
                  {step?.subTitle}
                </h1>
                <p className="text-md text-[#525252] mt-[-0.4rem]">
                  {step?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformWorking;
