import i18next from "i18next";
import contactImage from "../../../assets/images/contactImage.png";
import MainBanner from "../../../component/banner/mainBanner";

const ContactBanner = () => {
  return (
    <div className="relative">
      <MainBanner image={contactImage} height="lg:h-[19rem] h-[22rem]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="lg:text-[2.5rem] text-[2rem] font-bold text-primary">
          {i18next.t("contact_banner.contact_us")}{" "}
        </h1>
        <p className="text-[#333333] w-[70%] lg:text-[1.5rem] text-[1.2rem] mt-3 leading-9">
          {i18next.t("contact_banner.contact_description")}{" "}
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
