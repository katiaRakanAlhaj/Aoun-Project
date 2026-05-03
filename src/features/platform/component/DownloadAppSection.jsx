import { TitleStyle } from "../../../ui/titleStyle";
import explore from "../../../assets/images/explore.svg";
import secure from "../../../assets/images/secure.svg";
import { DownloadAppSectionButton } from "../../../ui/DownloadAppSectionButton";
import MainSection from "../../home/component/mainSection";
import supplierImage from "../../../assets/images/supplierImage.png";
import upload from "../../../assets/images/upload.svg";
const DownloadAppSection = () => {
  return (
    <div className="bg-[#FBF9F4]">
      <div className="container1 mx-auto py-[7rem]">
        <div className="w-full auto bg-[#E4EAE3] rounded-4xl py-[5rem]">
          <div className="container1 mx-auto h-full">
            <div className="grid grid-cols-2 gap-x-[2.5rem] h-full">
              {/* first column */}
              <div className="flex flex-col justify-center">
                <TitleStyle title="للمشترين والمستهلكين" />
                <p className="font-bold text-[2.5rem] text-[#1B1C19] w-[70%] mt-[1rem]">
                  ادعم اقتصاد وطنك بلمسة زر واحدة
                </p>
                <p className="text-[#5C403F] text-xl leading-relaxed mt-[1.5rem]">
                  اكتشف أفضل المنتجات العمانية التي تضاهي الجودة العالمية.
                  منصتنا توفر لك تجربة تسوق حديثة، آمنة، وداعمة للمنتج المحلي
                  الذي تفتخر به.
                </p>
                <div className="grid grid-cols-2 gap-x-[1.4rem] mt-[2rem]">
                  <DownloadAppSectionButton
                    image={explore}
                    title="سهولة الاكتشاف"
                    description={"بحث ذكي حسب الفئات"}
                  />
                  <DownloadAppSectionButton
                    image={secure}
                    title="ثقة وأمان"
                    description="دفع آمن وضمان محلي"
                  />
                </div>
                <button className="w-full h-[4rem] rounded-md gap-x-4 bg-secondary mt-[3rem] cursor-pointer flex justify-center items-center">
                  <img src={upload} className="w-[1.2rem]" />
                  <p className="font-bold text-white text-lg">حمل التطبيق</p>
                </button>
              </div>
              {/* second column */}
              <div className="h-[40rem] relative w-full bg-white rounded-xl p-[1.5rem]">
                <img
                  className="absolute w-[92%] h-[92%] rounded-xl object-cover"
                  src={supplierImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadAppSection;
