import mainImage from "../../../assets/images/mainImage.png";
import settings from "../../../assets/images/settings.svg";
const MainSection = () => {
  return (
    <div className="mt-[8rem] container mx-auto pb-[7rem]">
      <div className="grid grid-cols-2 gap-x-[2rem]">
        {/* first section */}
        <div>
          <div className="w-[9rem] bg-[#06641A1A] gap-x-2 rounded-4xl h-[2rem] flex justify-center items-center">
            <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-primary"></div>
            <p className="text-[0.9rem] text-primary font-bold">
              رؤية عمان 2040
            </p>
          </div>
          <h1 className="text-secondary text-[7rem] font-bold">
            ندعم المنتج
            <br />
            <span className="text-dark">العماني..</span>
          </h1>
          <p className="text-[1.5rem] mt-[1rem] w-[80%] text-[#525252] leading-relaxed">
            نربط الشركات بالمستهلك مباشرة. نسعى لتمكين الابتكار الصناعي المحلي
            وبناء جسور الثقة بين المنتج الوطني والمستهلك العالمي.
          </p>
          <div className="mt-[3rem] flex gap-x-[1rem]">
            <button className="w-[14rem] h-[4rem] bg-primary cursor-pointer shadow-lg text-[1.2rem] font-bold rounded-md text-white">
              اكتشف الشركات
            </button>
            <button className="w-[14rem] h-[4rem] cursor-pointer bg-[#DDE0E4] shadow-lg text-[1.2rem] font-bold rounded-md text-dark">
              {" "}
              تصفح المنتجات
            </button>
          </div>
        </div>
        {/* second section */}
        <div className="relative">
          <img
            style={{ boxShadow: "0px 25px 50px -12px #00000040;" }}
            className="w-full h-[40rem] rounded-[3rem]  object-cover rotate-[3deg] shadow-2xl"
            src={mainImage}
          />
          <div className="absolute -bottom-[3rem] -right-[3rem]">
            <div
              style={{ boxShadow: "0px 20px 25px -5px #0000001A" }}
              className="w-[17rem] h-[11rem]  flex flex-col justify-center items-center px-[2rem] shadow-2xl rounded-3xl bg-white"
            >
              <div className="flex gap-x-4  items-center">
                <div className="w-[3rem] h-[3rem] flex justify-center items-center rounded-md bg-[#0B6C4B1A]">
                  <img src={settings} />
                </div>
                <p className="font-bold text-md text-dark">جودة معتمدة</p>
              </div>
              <div>
                <p className = "px-4 mt-2 text-[#5C403F]">منتجاتنا تخضع لأعلى معايير الجودة العمانية المعتمدة.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainSection;
