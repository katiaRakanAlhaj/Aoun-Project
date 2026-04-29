import logo from "../../assets/images/logo.svg";
import global from "../../assets/images/global.svg";
import sharing from "../../assets/images/sharing.svg";
import i18next from "i18next";

const Footer = () => {
  const firstColumn = [
    { desc: i18next.t("menu.home"), path: "/" },
    {
      desc: i18next.t("menu.about_the_platform"),
      path: "/Platform",
    },
    { desc: i18next.t("menu.services"), path: "/Services" },
  ];
  const secondColumn = [
    { desc: i18next.t("menu.products"), path: "/Products" },
    { desc: i18next.t("menu.blog"), path: "/Blog" },
    { desc: i18next.t("menu.contact_us"), path: "/Contact" },
  ];
  return (
    <div
      style={{ boxShadow: "0px 8px 44px 0px #00000040" }}
      className="w-full h-[25rem] bg-white py-[4rem]"
    >
      <div className="container1 mx-auto">
        <div className="grid grid-cols-12">
          {/* first column */}
          <div className="col-span-6">
            <img className="w-[10.5rem]" src={logo} alt="logo" />
            <p className="text-[#78716C] text-md w-[55%] leading-relaxed mt-[1.5rem]">
              المنصة الرسمية الرائدة لربط الشركات العمانية بالمستهلكين، تماشياً
              مع أهداف السلطنة في تعزيز القيمة المحلية المضافة.
            </p>
            <div className="flex gap-x-4 mt-[1.5rem]">
              <div className="w-[3rem] h-[3rem] flex justify-center items-center bg-[#E4E7E5] rounded-xl cursor-pointer">
                <img className="w-[1.3rem]" src={global} />
              </div>
              <div className="w-[3rem] h-[3rem] flex justify-center items-center bg-[#E4E7E5] rounded-xl cursor-pointer">
                <img className="w-[1rem]" src={sharing} />
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="col-span-6 mt-[3rem]">
            <div className="grid grid-cols-2 mr-[1.4rem]">
              <div className="flex flex-col space-y-4">
                {firstColumn?.map((firstColumn) => (
                  <p className="text-[#525252] text-md">{firstColumn.desc}</p>
                ))}
              </div>
              <div className="flex flex-col space-y-4">
                {secondColumn?.map((secondColumn) => (
                  <p className="text-[#525252] text-md">{secondColumn.desc}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#E7E5E4] mt-[2rem]"></div>
        <div className="flex justify-center items-center mt-[2rem]">
          <p className="text-[#ADADAD] text-lg">
            © 2024 Aoun Platform. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
