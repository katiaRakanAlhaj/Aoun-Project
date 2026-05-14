import { TitleStyle } from "../../../ui/titleStyle";
import explore from "../../../assets/images/explore.svg";
import secure from "../../../assets/images/secure.svg";
import { DownloadAppSectionButton } from "../../../ui/DownloadAppSectionButton";
import MainSection from "../../home/component/mainSection";
import supplierImage from "../../../assets/images/supplierImage.png";
import upload from "../../../assets/images/upload.svg";
import i18next from "i18next";
import { useNavigate } from "react-router-dom";
const DownloadAppSection = () => {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
    navigate("/", { state: { scrollToUpload: true } });
  };

  return (
    <div className="bg-[#FBF9F4]">
      <div className="container1 mx-auto lg:py-[7rem] py-[3rem]">
        <div className="w-full auto bg-[#E4EAE3] rounded-4xl lg:py-[5rem] py-[3rem]">
          <div className="container1 mx-auto h-full">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-[2.5rem] h-full">
              {/* first column */}
              <div className="flex flex-col justify-center">
                <TitleStyle
                  title={i18next.t(
                    "For_buyers_and_consumers.For_buyers_and_consumers",
                  )}
                />
                <p className="font-bold lg:text-[2.5rem] text-[1.5rem] text-[#1B1C19] lg:w-[70%] mt-[1rem]">
                  {i18next.t("For_buyers_and_consumers.support_company")}{" "}
                </p>
                <p className="text-[#5C403F] text-xl leading-relaxed mt-[1.5rem]">
                  {i18next.t(
                    "For_buyers_and_consumers.discover_best_products",
                  )}{" "}
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-y-[2rem] gap-x-[1.4rem] mt-[2rem]">
                  <DownloadAppSectionButton
                    image={explore}
                    title={i18next.t(
                      "For_buyers_and_consumers.Ease_of_discovery",
                    )}
                    description={i18next.t(
                      "For_buyers_and_consumers.smart_search",
                    )}
                  />
                  <DownloadAppSectionButton
                    image={secure}
                    title={i18next.t(
                      "For_buyers_and_consumers.true_and_security",
                    )}
                    description={i18next.t(
                      "For_buyers_and_consumers.secure_payment",
                    )}
                  />
                </div>
                <button
                  onClick={handleDownloadClick}
                  className="w-full h-[4rem] rounded-md gap-x-4 bg-secondary mt-[3rem] cursor-pointer flex justify-center items-center"
                >
                  <img src={upload} className="w-[1.2rem]" />
                  <p className="font-bold text-white text-lg">
                    {" "}
                    {i18next.t("For_buyers_and_consumers.download_app")}
                  </p>
                </button>
              </div>
              {/* second column */}
              <div className="md:h-[40rem] h-[20rem] relative w-full bg-white rounded-xl md:p-[1.5rem] lg:mt-0 mt-[2rem]">
                <img
                  className="absolute md:w-[92%] md:h-[92%] h-[100%] rounded-xl object-cover"
                  src={supplierImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadAppSection;
