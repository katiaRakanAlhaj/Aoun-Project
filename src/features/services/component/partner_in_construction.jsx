import i18next from "i18next";
import hand from "../../../assets/images/hand.svg";
import partnerImage from "../../../assets/images/partnerImage.png";
const PartnerInConstruction = () => {
  return (
    <div className="w-full h-auto bg-[#FBF9F4] py-[6rem]">
      <div className="container2 mx-auto">
        <div className="flex justify-center items-center flex-col">
          <div className="w-[6rem] h-[6rem] bg-[#0B6C4B1A] rounded-xl flex justify-center items-center">
            <img className="w-[2.5rem] h-[2.5rem] object-contain" src={hand} />
          </div>
          <p className="text-[#333333] md:text-[2rem] text-[1.7rem] mt-[1rem] font-bold">
            {i18next.t("PartnerInConstruction.be_a_partner")}{" "}
          </p>
          <p className="text-xl text-[#525252] mt-[1rem]">
            {i18next.t("PartnerInConstruction.shopping_support_message")}{" "}
          </p>
        </div>
        <img
          style={{ boxShadow: "0px 4px 6px -1px rgba(0,0,0,0.1)" }}
          className="w-full h-[18rem] object-cover rounded-4xl mt-[2rem]"
          src={partnerImage}
        />
      </div>
    </div>
  );
};
export default PartnerInConstruction;
