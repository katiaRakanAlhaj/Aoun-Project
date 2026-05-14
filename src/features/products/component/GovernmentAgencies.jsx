import i18next from "i18next";
import googlePlay from "../../../assets/images/google_play.svg";
import upload from "../../../assets/images/upload.svg";
import GovernmentAgenciesButton from "../../../ui/GovernmentAgenciesButton";

const GovernmentAgencies = ({ homePageData }) => {
  // Extract links from homePageData
  const googlePlayLink = homePageData?.data?.google_play_link;
  const appStoreLink = homePageData?.data?.app_store_link;

  const handleGooglePlayClick = () => {
    if (googlePlayLink) {
      window.open(googlePlayLink, "_blank", "noopener,noreferrer");
    } 
  };

  const handleAppStoreClick = () => {
    if (appStoreLink) {
      window.open(appStoreLink, "_blank", "noopener,noreferrer");
    } 
  };

  return (
    <div className="w-full h-auto py-[3rem] lg:py-[5rem] container mx-auto px-[1rem] lg:px-[2rem]">
      <div
        style={{
          backgroundImage: "linear-gradient(0deg, #001B2F 0%, #005595 100%)",
        }}
        className="w-full h-auto lg:h-[14rem] rounded-3xl flex items-center py-[2rem] lg:py-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-[2rem] lg:gap-x-[4rem] px-[1.5rem] lg:px-[4.5rem] w-full">
          <div className="lg:col-span-7">
            <div
              className={`flex flex-col justify-center text-center ${i18next.language == "ar" ? "lg:text-right" : "lg:text-left"}`}
            >
              <h1 className="font-bold text-[1.75rem] lg:text-[2.5rem] text-white leading-tight">
                {i18next.t("GovernmentAgencies.join_our_industrial_community")}
              </h1>
              <p className="text-white text-base lg:text-xl mt-3 leading-relaxed">
                {i18next.t("GovernmentAgencies.stay_updated")}{" "}
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-start lg:mr-[1.3rem]">
            <div className="grid md:grid-cols-2 gap-y-[1rem] gap-x-[1rem] lg:gap-x-[1.5rem] w-full max-w-[300px] lg:max-w-none">
              <GovernmentAgenciesButton
                image={googlePlay}
                desc="Play Store"
                onClick={handleGooglePlayClick}
              />
              <GovernmentAgenciesButton
                image={upload}
                desc="App Store"
                onClick={handleAppStoreClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentAgencies;
