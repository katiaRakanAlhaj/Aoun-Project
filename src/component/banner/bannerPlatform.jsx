import i18n from "../../i18n";
import bannerPlatform from "../../assets/images/bannerPlatform.png";

const BannerPlatform = ({ image, title }) => {
  return (
    <div className="relative">
      <div
        style={{ boxShadow: "0px 25px 50px -12px #00000040" }}
        className="w-full h-[24rem]"
      >
        {/* Background Image */}
        <div
          className="absolute w-full h-full bg-cover bg-center -z-10 transition-all duration-700"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.002), rgba(255, 255, 255, 0.002)), linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
        {/* Title */}
      </div>
      <div
        className={`absolute ${i18n.language == "ar" ? "lg:right-[4.5rem] right-[2rem]" : "lg:left-[4.5rem] left-[2rem]"} bottom-[4rem] font-[700] text-white lg:text-[2.3rem] text-[1.8rem]`}
      >
        {title}
      </div>
    </div>
  );
};

export default BannerPlatform;
