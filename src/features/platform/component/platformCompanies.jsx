import thirdSectionImage from "../../../assets/images/thirdSectionImage.png";
import menImage from "../../../assets/images/menImage.png";
import rocket from "../../../assets/images/rocket.svg";
import trueImage from "../../../assets/images/true.svg";
const PlatformCompanies = () => {
  const companyOffers = [{ desc: "هوية رقمية متكاملة لشركتك" }, { desc: "أدوات إدارة المخزون الذكية" }, { desc: "تقارير أداء المبيعات والنمو" }];
  return (
    <div className="w-full h-auto bg-[#191C1A] py-[6rem]">
      <div className="container1 mx-auto">
        {/* first column */}
        <div className="grid grid-cols-2 gap-x-[4.5rem]">
          <div className="grid grid-cols-2 gap-[1.5rem]">
            {/* first column inside first main column */}
            <div className="flex flex-col space-y-[1.5rem]">
              <img
                className="w-full h-[21rem] object-cover rounded-lg"
                style={{ filter: "grayscale(100%)" }}
                src={thirdSectionImage}
              />
              <div className="w-full h-[8.5rem] bg-[#E4E2DD1A] rounded-lg border border-[#FFFFFF0D] p-[1.5rem]">
                <h1 className="font-bold text-primary text-4xl">45%</h1>
                <p className="text-white font-bold text-lg mt-3">
                  زيادة في الانتشار الرقمي
                </p>
              </div>
            </div>
            {/* second column inside first main column */}
            <div className="flex flex-col space-y-[1.5rem] mt-[4rem]">
              <div className="w-full h-[8.5rem] bg-[#0066B3] rounded-lg border border-[#FFFFFF0D] p-[1.5rem]">
                <img src={rocket} className="w-[2rem]" />
                <p className="text-white font-bold text-lg mt-3">
                  تسويق احترافي لعلامتك التجارية
                </p>
              </div>
              <img
                className="w-full h-[21rem] object-cover rounded-lg"
                style={{ filter: "grayscale(100%)" }}
                src={menImage}
              />
            </div>
          </div>
          {/* second column */}
          <div>
            <h1 className="text-lg text-primary font-bold">
              للشركات والمصانع
            </h1>
            <p className="text-white font-bold text-4xl mt-[0.8rem] leading-[4rem]">
              وسّع آفاق شركتك
              <br />
              <span className="mt-[1.5rem] text-primary">رقمياً</span>
              <p className="text-[#DBDAD5] text-xl font-normal mt-[2rem] w-[90%] leading-[2.5rem]">
                نقدم للشركات العمانية منصة متكاملة للنمو. من خلالنا، يمكنك
                الوصول إلى قاعدة عملاء واسعة محلياً وإقليمياً، مع أدوات تحليلية
                متقدمة وفريق تسويق متخصص يبرز جودة منتجاتك.
              </p>
            
            </p>
             <div className = "flex flex-col space-y-[1.5rem] mt-[2rem]">
                 {companyOffers?.map((companyOffers)=>(
                <div className = "flex gap-x-2 items-center">
                    <img className = "w-[1.5rem]" src ={trueImage}/>
                    <p className = "text-[#FBF9F4] text-lg">{companyOffers?.desc}</p>
                </div>
              ))}
             </div>
             <button className = "h-[4rem] w-[15rem] bg-[#009444] mt-[2.5rem] rounded-md font-bold text-white text-lg cursor-pointer">سجل شركتك الآن</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlatformCompanies;
