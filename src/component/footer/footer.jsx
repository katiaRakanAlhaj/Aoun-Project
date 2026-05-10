import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.svg";
import global from "../../assets/images/global.svg";
import sharing from "../../assets/images/sharing.svg";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Get current language from URL
  const getCurrentLang = () => {
    const match = location.pathname.match(/^\/(en|ar)/);
    return match ? match[1] : "ar";
  };

  const currentLang = getCurrentLang();

  // Function to generate path with language
  const getLocalizedPath = (path) => {
    if (path === "") {
      return `/${currentLang}`;
    }
    return `/${currentLang}/${path}`;
  };

  // Function to check if the current path matches the item
  const isActive = (itemPath) => {
    const pathWithoutLang = location.pathname.replace(/^\/(en|ar)/, "");

    // Handle home page
    if (itemPath === "") {
      return pathWithoutLang === "" || pathWithoutLang === "/";
    }

    // Handle about_the_platform
    if (itemPath === "Platform" || itemPath === "about_the_platform") {
      return (
        pathWithoutLang === "/Platform" ||
        pathWithoutLang === "Platform" ||
        pathWithoutLang === "/about_the_platform" ||
        pathWithoutLang === "about_the_platform"
      );
    }

    // Handle other paths
    return (
      pathWithoutLang === `/${itemPath}` ||
      pathWithoutLang === itemPath ||
      pathWithoutLang.toLowerCase() === `/${itemPath.toLowerCase()}` ||
      pathWithoutLang.toLowerCase() === itemPath.toLowerCase()
    );
  };

  const firstColumn = [
    { desc: t("menu.home"), path: "" },
    {
      desc: t("menu.about_the_platform"),
      path: "Platform",
    },
    { desc: t("menu.services"), path: "Services" },
  ];

  const secondColumn = [
    { desc: t("menu.products"), path: "Products" },
    { desc: t("menu.blog"), path: "Blog" },
    { desc: t("menu.contact_us"), path: "Contact" },
  ];

  return (
    <div
      style={{ boxShadow: "0px 8px 44px 0px #00000040" }}
      className="w-full h-auto md:h-[25rem] bg-white py-[2rem] md:py-[4rem]"
    >
      <div className="container1 mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
          {/* first column */}
          <div className="md:col-span-6 text-center md:text-right">
            <Link to={getLocalizedPath("")}>
              <img
                className="w-[10.5rem] mx-auto md:mx-0 cursor-pointer"
                src={logo}
                alt="logo"
              />
            </Link>
            <p className="text-[#78716C] text-md w-full md:w-[55%] leading-relaxed mt-[1.5rem] mx-auto md:mx-0">
              المنصة الرسمية الرائدة لربط الشركات العمانية بالمستهلكين، تماشياً
              مع أهداف السلطنة في تعزيز القيمة المحلية المضافة.
            </p>
            <div className="flex gap-x-4 mt-[1.5rem] justify-center md:justify-start">
              <div className="w-[3rem] h-[3rem] flex justify-center items-center bg-[#E4E7E5] rounded-xl cursor-pointer hover:bg-[#d4d7d5] transition-colors">
                <img className="w-[1.3rem]" src={global} alt="global" />
              </div>
              <div className="w-[3rem] h-[3rem] flex justify-center items-center bg-[#E4E7E5] rounded-xl cursor-pointer hover:bg-[#d4d7d5] transition-colors">
                <img className="w-[1rem]" src={sharing} alt="sharing" />
              </div>
            </div>
          </div>

          {/* second column */}
          <div className="md:col-span-6 md:mt-[3rem]">
            <div className="grid grid-cols-2 gap-4 md:mr-[1.4rem]">
              <div className="flex flex-col space-y-4 text-center md:text-right">
                {firstColumn?.map((item, index) => (
                  <Link key={index} to={getLocalizedPath(item.path)}>
                    <p
                      className={`text-md ${
                        isActive(item.path)
                          ? "text-primary font-bold"
                          : "text-[#525252]"
                      } hover:text-[#78716C] transition-colors cursor-pointer block`}
                    >
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-right">
                {secondColumn?.map((item, index) => (
                  <Link key={index} to={getLocalizedPath(item.path)}>
                    <p
                      className={`text-md ${
                        isActive(item.path)
                          ? "text-primary font-bold"
                          : "text-[#525252]"
                      } hover:text-[#78716C] transition-colors cursor-pointer block`}
                    >
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#E7E5E4] mt-[2rem]"></div>

        <div className="flex justify-center items-center mt-[2rem]">
          <p className="text-[#ADADAD] text-sm md:text-lg text-center">
            © 2024 Aoun Platform. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
