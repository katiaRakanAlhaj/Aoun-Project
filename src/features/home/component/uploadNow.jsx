import uploadApp from "../../../assets/images/uploadApp.png";
import mobile from "../../../assets/images/mobile.svg";
import googlePlay from "../../../assets/images/google_play.svg";
import i18next from "i18next";
import { ButtonUpload } from "../../../ui/buttonUpload";

const UploadNow = ({ homePageData }) => {
  // Get links from API data
  const appStoreLink = homePageData?.data?.app_store_link || "#";
  const googlePlayLink = homePageData?.data?.google_play_link || "#";

  const handleAppStoreClick = () => {
    if (appStoreLink !== "#") {
      window.open(appStoreLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleGooglePlayClick = () => {
    if (googlePlayLink !== "#") {
      window.open(googlePlayLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div  className="w-full lg:h-[68rem] py-[6rem] mb-[2rem]">
      <div className="container1 mx-auto">
        <div className="w-full lg:h-[58rem] lg:py-[7rem] py-[3rem] bg-primary lg:rounded-[4rem]">
          <div className="container2 mx-auto">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-x-[4rem]">
              <div className="lg:col-span-6 col-span-1 flex flex-col justify-center">
                <div
                  className={`flex flex-col justify-center ${i18next.language == "ar" ? "lg:mr-[4rem] mr-[2rem]" : "lg:ml-[4rem] ml-[2rem]"}`}
                >
                  <h1 className="font-bold text-white lg:text-[4rem] text-[2rem]">
                    {i18next.t("home.download_app")}
                  </h1>
                  <p className="md:text-[1.4rem] text-[1.2rem] mt-[2rem] text-[#FFFFFF] w-[86%] leading-[3rem]">
                    {i18next.t("home.supporting_the_national_economy")}
                  </p>
                  <div className="md:flex md:gap-x-[1.5rem] lg:mt-[3rem]">
                    <div onClick={handleAppStoreClick}>
                      <ButtonUpload
                        title={i18next.t("available_on")}
                        image={mobile}
                        description={"App Store"}
                      />
                    </div>
                    <div onClick={handleGooglePlayClick}>
                      <ButtonUpload
                        title={i18next.t("available_on")}
                        image={googlePlay}
                        description={"Google Play"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 col-span-1">
                <img
                  className="lg:h-[45rem] lg:mt-0 mt-[2rem] object-contain w-full"
                  src={uploadApp}
                  alt="App download illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadNow;