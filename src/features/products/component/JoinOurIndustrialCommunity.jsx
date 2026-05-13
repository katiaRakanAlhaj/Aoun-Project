import SecondTitleStyle from "../../../ui/secondTitleStyle";
import i18next from "i18next";

const JoinOurIndustrialCommunity = ({ partnerData }) => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] lg:py-[5rem] py-[3rem]">
      <div className="flex justify-center flex-col items-center">
        <SecondTitleStyle title={i18next.t("Success_partners")} />
        <div className="w-[6.5rem] h-[0.3rem] bg-secondary mt-[1rem] rounded-full"></div>
      </div>

      <div className="mt-[4rem]">
        <div className="container mx-auto px-4">
          {partnerData?.data?.partners?.map((partnerData, sectionIndex) => (
            <div key={sectionIndex} className="mb-[5rem]">
              <div className="flex gap-x-4 items-center">
                <p className="font-extrabold text-secondary text-xl">
                  {String(sectionIndex + 1).padStart(2, "0")}
                </p>
                <p className="text-[1.5rem] font-bold text-dark text-nowrap">
                  {partnerData.title}
                </p>
                <div className="w-full h-[0.01rem] bg-[#D6D3D1] mt-1"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[4rem] gap-y-6 mt-[5rem]">
                {partnerData.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="flex justify-center">
                    <img
                      src={image}
                      className="w-[5rem] h-[5rem] object-cover opacity-[60%]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinOurIndustrialCommunity;
