import contactImage from "../../../assets/images/contactImage.png";
import MainBanner from "../../../component/banner/mainBanner";

const ContactBanner = () => {
    return(
        <div className="relative">
            <MainBanner image={contactImage} height="h-[19rem]"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h1 className="text-[2.5rem] font-bold text-primary">
                    تواصل معنا
                </h1>
                <p className="text-[#333333] w-[70%] text-[1.5rem] mt-3 leading-9">
                 نحن هنا لتمكين رحلتكم الصناعية في سلطنة عمان. فريق الخبراء لدينا متاح دائماً للإجابة على
استفساراتكم التقنية واللوجستية وضمان استمرارية إنتاجكم.
                </p>
            </div>
        </div>
    )
}

export default ContactBanner;