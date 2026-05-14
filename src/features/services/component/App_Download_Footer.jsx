import SecondTitleStyle from "../../../ui/secondTitleStyle";
import googlePlay from "../../../assets/images/google_play.svg";
import uploadImage from "../../../assets/images/upload.svg";
import AppDownloadFooterButton from "../../../ui/AppDownloadFooterButton";
import i18next from "i18next";

const AppDownloadFooter = ({ homePageData }) => {
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
    <div className="w-full h-auto lg:py-[6rem] py-[3rem] bg-[#FBF9F4]">
      <div className="container2 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <SecondTitleStyle
            title={i18next.t("AppDownloadFooter.platform_in_your_pocket")}
          />
          <p className="text-lg text-[#5C403F] mt-[1.5rem]">
            {i18next.t("AppDownloadFooter.download_app_description")}{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-[2rem]">
          <AppDownloadFooterButton
            description={"Play Store"}
            image={googlePlay}
            onClick={handleGooglePlayClick}
          />
          <AppDownloadFooterButton
            description={"App Store"}
            image={uploadImage}
            onClick={handleAppStoreClick}
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownloadFooter;
