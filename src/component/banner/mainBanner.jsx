import i18n from "../../i18n";
import bannerPlatform from "../../assets/images/bannerPlatform.png";

const MainBanner = ({ image, title }) => {
  return (
    <div className="relative">
      <div className="w-full h-[24rem]">
        {/* Background Image */}
        <div
          className="absolute w-full h-full bg-cover bg-center -z-10 transition-all duration-700"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Gradient Overlay - White in center, transparent on edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, rgba(251, 249, 244, 0.8) 0%, rgba(251, 249, 244, 0.6) 20%, #FBF9F4 50%, rgba(251, 249, 244, 0.8) 100%, rgba(251, 249, 244, 0) 100%)",
          }}
        />
        {/* Title */}
      </div>
      <div
        className={`absolute ${i18n.language == "ar" ? "lg:right-[4.5rem] right-[2rem]" : "lg:left-[4.5rem] left-[2rem]"} bottom-[4rem] font-[700] text-primary lg:text-[2.3rem] text-[1.8rem]`}
      >
        {title}
      </div>
    </div>
  );
};

export default MainBanner;
