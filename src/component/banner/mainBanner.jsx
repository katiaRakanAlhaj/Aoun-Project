import i18n from "../../i18n";
import bannerPlatform from "../../assets/images/bannerPlatform.png";

const MainBanner = ({ image, title, height }) => {
  return (
    <div className="relative">
      <div className={`w-full ${height ? height : "h-[24rem]"}`}>
        {/* Background Image */}
        <div
          className="absolute w-full h-full bg-cover bg-center -z-10 transition-all duration-700"
          style={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* White Overlay - Full white over entire image */}
        <div
          className="absolute w-full h-full top-0 left-0"
          style={{
            backgroundColor: "white",
            opacity: 0.9,
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