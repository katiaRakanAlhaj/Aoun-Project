import i18next from "i18next";
import aboutImage from "../../../assets/images/aboutImage.png";
import SubTitle from "../../../ui/subTitleStyle";
const About = () => {
  return (
    <div className="lg:h-[35rem] w-full bg-white  lg:pt-[8rem] pt-[3rem] overflow-hidden">
      <div className="container1 mx-auto">
        <div className="grid lg:grid-cols-12  gap-x-[2rem]">
          {/* first column */}
          <div className="lg:col-span-7 col-span-1">
            <h1 className="text-primary font-bold text-md">
              {i18next.t("home.about_us")}
            </h1>
            <SubTitle subTitle={i18next.t("home.Awn_app")} />
            <p className="text-[1.4rem] text-[#333333] mt-[1.5rem] leading-relaxed">
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج
              أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور لوريم
              ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم
              ايبسوم دولار سيت أميت ,كونسيكتيتور لوريم ايبسوم دولار سيت أميت
              ,كونسيكتيتور أدايبا يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت
              ,كونسيكتيتور لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا
              يسكينج أليايت,سيتلوريم ايبسوم دولار سيت أميت ,كونسيكتيتور{" "}
            </p>
          </div>
          <div
            className={`lg:col-span-4 col-span-1 ${i18next.language == "ar" ? "lg:ml-[-15rem]" : " lg:mr-[-15rem]"} mt-[-2rem]`}
          >
            <img
              className="w-full h-[44rem] overflow-hidden object-contain lg:mt-[-5rem]"
              src={aboutImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
