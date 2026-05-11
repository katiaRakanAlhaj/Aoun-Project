import SecondTitleStyle from "../../../ui/secondTitleStyle";
import solution1 from "../../../assets/images/solution1.svg";
import solution2 from "../../../assets/images/solution2.svg";
import solution3 from "../../../assets/images/solution3.svg";
import solution4 from "../../../assets/images/solution4.svg";
import solution5 from "../../../assets/images/solution7.svg";
import solution6 from "../../../assets/images/solution8.svg";
import i18next from "i18next";
const TechnologySolutions = () => {
  const solutionItems = [
    {
      image: solution1,
      desc: i18next.t("Technical_solutions.technical_solutions"),
    },
    {
      image: solution2,
      desc: i18next.t("Technical_solutions.order_and_purchase_system"),
    },
    {
      image: solution3,
      desc: i18next.t("Technical_solutions.electronic_payment"),
    },
    {
      image: solution4,
      desc: i18next.t("Technical_solutions.factory_profiles"),
    },
    {
      image: solution5,
      desc: i18next.t("Technical_solutions.digital_marketing"),
    },
    {
      image: solution6,
      desc: i18next.t("Technical_solutions.reports_and_analytics"),
    },
  ];

  return (
    <div className="h-auto w-full py-[6rem] bg-[#EAE8E3]">
      <div className="container2 mx-auto">
        <SecondTitleStyle title={i18next.t("Technical_solutions.technical_solutions")} />
        <div className="grid md:grid-cols-2 gap-[1rem] mt-[2rem]">
          {solutionItems?.map((item, index) => (
            <div
              key={index}
              className={`w-full h-[8rem] relative rounded-2xl ${
                index === solutionItems.length - 1 ? "bg-[#0066B3]" : "bg-white"
              }`}
            >
              <p
                className={`absolute ${i18next.language == "ar"?'right-[1.5rem]':'left-[1.5rem]'} text-xl bottom-[1.5rem] ${
                  index === solutionItems.length - 1
                    ? "text-white"
                    : "text-[#1B1C19]"
                }`}
              >
                {item.desc}
              </p>
              <img
                className={`absolute ${i18next.language == "ar" ? "left-[1.5rem]" : "right-[1.5rem]"} top-[1.5rem] w-[2rem] h-[2rem] object-contain`}
                src={item.image}
                alt={item.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySolutions;
