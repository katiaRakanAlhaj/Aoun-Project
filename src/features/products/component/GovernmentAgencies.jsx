import googlePlay from "../../../assets/images/google_play.svg";
import upload from "../../../assets/images/upload.svg";
import GovernmentAgenciesButton from "../../../ui/GovernmentAgenciesButton";
const GovernmentAgencies = () => {
  return (
    <div className="w-full h-auto py-[5rem] container mx-auto px-[2rem]">
      <div
        style={{
          backgroundImage: "linear-gradient(0deg, #001B2F 0%, #005595 100%)",
        }}
        className="w-full h-[14rem] rounded-3xl flex items-center"
      >
        <div className="grid grid-cols-12 gap-x-[4rem] px-[4.5rem] w-full">
          <div className="col-span-7">
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-[2.5rem] text-white">
                انضم إلى مجتمعنا الصناعي
              </h1>
              <p className="text-white text-xl mt-3">
                ابقَ على اطلاع بأحدث المنتجات والفرص الاستثمارية في القطاع
                الصناعي العماني.
              </p>
            </div>
          </div>
          <div className="col-span-5 flex items-center mr-[1.3rem]">
            <div className="grid grid-cols-2 gap-x-[1.5rem] w-full">
              <GovernmentAgenciesButton image={googlePlay} desc="Play Store" />
              <GovernmentAgenciesButton image={upload} desc="App Store" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GovernmentAgencies;
