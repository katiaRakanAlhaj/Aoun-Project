import uploadApp from "../../../assets/images/uploadApp.png";
import mobile from "../../../assets/images/mobile.svg";
import googlePlay from "../../../assets/images/google_play.svg";
import i18next from "i18next";
import { ButtonUpload } from "../../../ui/buttonUpload";
const UploadNow = () => {
  return (
    <div className="w-full h-[68rem] py-[6rem] mb-[2rem]">
      <div className="container1 mx-auto">
        <div className="w-full h-[58rem] py-[7rem] bg-primary rounded-[4rem]">
          <div className="container2 mx-auto">
            <div className="grid grid-cols-12 gap-x-[4rem]">
              <div className="col-span-6 flex flex-col justify-center">
                <div className={`flex flex-col justify-center ${i18next.language == "ar"?'mr-[4rem]':'ml-[4rem]'}`}>
                  <h1 className="font-bold text-white text-[4rem]">
                    حمل التطبيق الآن
                  </h1>
                  <p className="text-[1.4rem] mt-[2rem] text-[#FFFFFF] w-[86%] leading-[3rem]">
                    ابدأ رحلتك في دعم الاقتصاد الوطني. تصفح، قارن، واشترِ
                    المنتجات العمانية بكل سهولة وأمان من خلال تطبيقنا المتكامل.
                  </p>
                  <div className="flex gap-x-[1.5rem] mt-[3rem]">
                    <ButtonUpload
                      mrClass="mr-[-1.4rem]" // full Tailwind class with brackets
                      title={i18next.t("available_on")}
                      image={mobile}
                      description={"App Store"}
                    />
                    <ButtonUpload
                      mrClass="mr-[-2.6rem]"
                      title={i18next.t("available_on")}
                      image={googlePlay}
                      description={"Google Play"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <img
                  className="h-[45rem] object-contain w-full"
                  src={uploadApp}
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
