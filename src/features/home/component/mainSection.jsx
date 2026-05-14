import i18next from "i18next";
import { useNavigate, useLocation } from "react-router-dom";
import mainImage from "../../../assets/images/mainImage.png";
import settings from "../../../assets/images/settings.svg";

const MainSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current language from URL
  const getCurrentLang = () => {
    const match = location.pathname.match(/^\/(en|ar)/);
    return match ? match[1] : "ar";
  };

  const currentLang = getCurrentLang();

  // Function to generate path with language
  const getLocalizedPath = (path) => {
    return `/${currentLang}/${path}`;
  };

  const handleDiscoverServices = () => {
    navigate(getLocalizedPath("Services"));
  };

  const handleDiscoverProducts = () => {
    navigate(getLocalizedPath("Products"));
  };

  return (
    <div className="mt-[4rem] lg:mt-[8rem] container mx-auto pb-[3rem] md:pb-[7rem] px-4 md:px-0">
      <div className="grid lg:grid-cols-2 gap-[2rem]">
        {/* first section */}
        <div>
          <div className="w-[9rem] bg-[#06641A1A] gap-x-2 rounded-4xl h-[2rem] flex justify-center items-center mx-auto lg:mx-0">
            <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-primary"></div>
            <p className="text-[0.9rem] text-primary font-bold">
              {i18next.t("home.oman_vission")}
            </p>
          </div>

          {/* Desktop heading */}
          <div className="lg:block hidden">
            <h1
              className={`text-secondary lg:text-[7rem] text-[3rem] font-bold text-center ${i18next.language == "ar" ? "lg:text-right" : "lg:text-left"}`}
            >
              {i18next.t("home.support_product")}
              <br />
              <span className="text-dark">{i18next.t("home.Omani")}</span>
            </h1>
          </div>

          {/* Mobile heading */}
          <div className="lg:hidden block">
            <h1 className="text-secondary text-[2.5rem] md:text-[3rem] font-bold text-center">
              {i18next.t("home.support_product")}{" "}
              <span className="text-dark">{i18next.t("home.Omani")}</span>
            </h1>
          </div>

          <p
            className={`text-[1.125rem] md:text-[1.5rem] mt-[1rem] w-full lg:w-[80%] text-[#525252] leading-relaxed text-center ${i18next.language == "ar" ? "lg:text-right" : "lg:text-left"}`}
          >
            {i18next.t("home.main_image_description")}{" "}
          </p>

          <div className="mt-[2rem] md:mt-[3rem] flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 gap-x-[1rem] justify-center lg:justify-start">
            <button 
              onClick={handleDiscoverServices}
              className="w-full sm:w-[14rem] h-[3.5rem] md:h-[4rem] bg-primary cursor-pointer shadow-lg text-[1rem] md:text-[1.2rem] font-bold rounded-md text-white hover:bg-primary/90 transition-colors"
            >
              {i18next.t("home.discover_services")}
            </button>
            <button 
              onClick={handleDiscoverProducts}
              className="w-full sm:w-[14rem] h-[3.5rem] md:h-[4rem] cursor-pointer bg-[#DDE0E4] shadow-lg text-[1rem] md:text-[1.2rem] font-bold rounded-md text-dark hover:bg-[#ccd0d4] transition-colors"
            >
              {i18next.t("home.discover_products")}
            </button>
          </div>
        </div>

        {/* second section */}
        <div className="relative mt-[2rem] lg:mt-0">
          <img
            style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
            className="w-full lg:h-[40rem] h-[18rem] md:h-[25rem] rounded-[1.5rem] md:rounded-[3rem] object-cover lg:rotate-[3deg] shadow-2xl"
            src={mainImage}
            alt="Main section"
          />

          {/* Floating card - responsive position */}
          <div className="absolute lg:block hidden -bottom-[2rem] -right-[1rem] md:-bottom-[3rem] md:-right-[3rem] left-1/2 transform -translate-x-1/2 lg:left-auto lg:translate-x-0 ">
            <div
              style={{ boxShadow: "0px 20px 25px -5px #0000001A" }}
              className="w-[calc(100vw-2rem)] max-w-[17rem] h-auto md:w-[17rem] md:h-[11rem] flex flex-col justify-center items-center px-[1.5rem] md:px-[2rem] py-[1rem] shadow-2xl rounded-2xl md:rounded-3xl bg-white"
            >
              <div className="flex gap-x-4 items-center">
                <div className="w-[2.5rem] md:w-[3rem] h-[2.5rem] md:h-[3rem] flex justify-center items-center rounded-md bg-[#0B6C4B1A]">
                  <img
                    src={settings}
                    alt="Settings"
                    className="w-5 md:w-auto"
                  />
                </div>
                <p className="font-bold text-sm md:text-md text-dark">
                  {i18next.t("home.certified_quality")}
                </p>
              </div>
              <div>
                <p className="px-0 md:px-4 mt-2 text-[#5C403F] text-xs md:text-base text-center">
                  {i18next.t("home.product_quality")}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;