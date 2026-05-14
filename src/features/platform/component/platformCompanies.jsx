import { useNavigate } from "react-router-dom";
import thirdSectionImage from "../../../assets/images/thirdSectionImage.png";
import menImage from "../../../assets/images/menImage.png";
import rocket from "../../../assets/images/rocket.svg";
import trueImage from "../../../assets/images/true.svg";
import i18next from "i18next";

const PlatformCompanies = () => {
  const navigate = useNavigate();

  const companyOffers = [
    {
      desc: i18next.t(
        "for_company.Integrated digital identity for your company",
      ),
    },
    { desc: i18next.t("for_company.Smart inventory management tools") },
    { desc: i18next.t("for_company.Sales performance and growth reports") },
  ];

  const handleRegisterClick = () => {
    navigate("/", { state: { scrollToUpload: true } });
  };

  return (
    <div className="w-full h-auto bg-[#191C1A] py-[6rem]">
      <div className="container1 mx-auto">
        {/* first column */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-[3rem] gap-x-[4.5rem]">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[1.5rem]">
            {/* first column inside first main column */}
            <div className="flex flex-col space-y-[1.5rem]">
              <img
                className="w-full h-[21rem] object-cover rounded-lg"
                style={{ filter: "grayscale(100%)" }}
                src={thirdSectionImage}
              />
              <div className="w-full h-[8.5rem] bg-[#E4E2DD1A] rounded-lg border border-[#FFFFFF0D] p-[1.5rem]">
                <h1 className="font-bold text-primary text-4xl">45%</h1>
                <p className="text-white font-bold text-lg mt-3">
                  {i18next.t("for_company.Increase in digital reach")}
                </p>
              </div>
            </div>
            {/* second column inside first main column */}
            <div className="flex flex-col space-y-[1.5rem] mt-[4rem]">
              <div className="w-full h-[8.5rem] bg-[#0066B3] rounded-lg border border-[#FFFFFF0D] p-[1.5rem]">
                <img src={rocket} className="w-[2rem]" />
                <p className="text-white font-bold text-lg mt-3">
                  {i18next.t("for_company.professional_marketing")}
                </p>
              </div>
              <img
                className="w-full h-[21rem] object-cover rounded-lg"
                style={{ filter: "grayscale(100%)" }}
                src={menImage}
              />
            </div>
          </div>
          {/* second column */}
          <div>
            <h1 className="text-lg text-primary font-bold">
              {i18next.t("for_company.for_company")}{" "}
            </h1>
            <p className="text-white font-bold text-4xl mt-[0.8rem] leading-[4rem]">
              {i18next.t("for_company.Expand your company's horizons")}
              <br />
              <span className="mt-[1.5rem] text-primary">
                {i18next.t("for_company.Digitally")}
              </span>
              <p className="text-[#DBDAD5] text-xl font-normal mt-[2rem] w-[90%] leading-[2.5rem]">
                {i18next.t("for_company.companies_offers")}{" "}
              </p>
            </p>
            <div className="flex flex-col space-y-[1.5rem] mt-[2rem]">
              {companyOffers?.map((companyOffers, index) => (
                <div key={index} className="flex gap-x-2 items-center">
                  <img className="w-[1.5rem]" src={trueImage} />
                  <p className="text-[#FBF9F4] text-lg">
                    {companyOffers?.desc}
                  </p>
                </div>
              ))}
            </div>
            <button 
              onClick={handleRegisterClick}
              className="h-[4rem] w-[15rem] bg-[#009444] mt-[2.5rem] rounded-md font-bold text-white text-lg cursor-pointer"
            >
              {i18next.t("for_company.register_company")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformCompanies;