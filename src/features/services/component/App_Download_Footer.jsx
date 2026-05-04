import SecondTitleStyle from "../../../ui/secondTitleStyle";
import googlePlay from "../../../assets/images/google_play.svg";
import uploadImage from "../../../assets/images/upload.svg";
import AppDownloadFooterButton from "../../../ui/AppDownloadFooterButton";
const AppDownloadFooter = () => {
  return (
    <div className="w-full h-auto py-[6rem] bg-[#FBF9F4]">
      <div className="container2 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <SecondTitleStyle title={"المنصة في جيبك"} />
          <p className="text-lg text-[#5C403F] mt-[1.5rem]">
            حمل التطبيق الآن واستمتع بتجربة تسوق صناعية فريدة.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-[2rem]">
          <AppDownloadFooterButton
            description={"Play Store"}
            image={googlePlay}
          />
          <AppDownloadFooterButton
            description={"App Store"}
            image={uploadImage}
          />
        </div>
      </div>
    </div>
  );
};
export default AppDownloadFooter;
