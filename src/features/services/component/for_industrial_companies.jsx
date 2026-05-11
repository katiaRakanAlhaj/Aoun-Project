import i18next from "i18next";
const ForIndustrialCompanies = () => {
  return (
    <div className="w-full h-auto bg-primary lg:py-[6rem] py-[3rem]">
      <div className="container2 mx-auto flex flex-col space-y-[1.5rem]">
        <h1 className="text-white text-[1.7rem] font-bold">
          {" "}
          {i18next.t("ForIndustrialCompanies.for_industrial_companies")}
        </h1>
        <p className="text-[#FFFFFF] text-[1.4rem] font-light">
          {i18next.t("ForIndustrialCompanies.double_your_growth")}{" "}
        </p>
        <button className="w-full h-[5rem] shadow-lg mt-2 bg-white rounded-xl text-secondary font-bold text-xl">
          {i18next.t("ForIndustrialCompanies.register_your_factory_now")}{" "}
        </button>
      </div>
    </div>
  );
};
export default ForIndustrialCompanies;
