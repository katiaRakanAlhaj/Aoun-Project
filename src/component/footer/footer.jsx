import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/MARNAS LOGO.svg";
import global from "../../assets/images/global.svg";
import sharing from "../../assets/images/sharing.svg";
import i18next from "i18next";
import { TfiFacebook } from "react-icons/tfi";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import SocialIcons from "../../features/contact/component/socialIcons";
import { useFetchContact } from "../../features/contact/hook/useFetchContact";

const Footer = () => {
  const {data:contactData , isLoading:contactDataLoading , error:contactDataError} = useFetchContact();
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
      className="w-full h-auto lg:h-[27rem] bg-white py-[2rem] md:py-[4rem]"
    >
      <div className="container1 mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
          {/* first column */}
          <div
            className={`md:col-span-6 text-center ${i18next.language == "ar" ? "md:text-right" : "md:text-left"}`}
          >
            <Link to={getLocalizedPath("")}>
              <img
                className={`w-[20rem] ${i18next.language == "ar"?'md:mr-[-6.2rem]':'md:ml-[-6.2rem]'} cursor-pointer mt-[-10rem]`}
                src={logo}
                alt="logo"
              />
            </Link>
            <p className="text-[#78716C] text-md w-full md:w-[55%] leading-relaxed lg:mt-[-10rem] mt-[-8rem] mx-auto md:mx-0">
              {i18next.t("footer.footer_description")}{" "}
            </p>
            <div className="flex gap-x-4 mt-[1.5rem] justify-center md:justify-start">
             <SocialIcons contactData = {contactData}/>
            </div>
          </div>

          {/* second column */}
          <div className="md:col-span-6 md:mt-[3rem]">
            <div
              className={`grid grid-cols-2 gap-4 ${i18next.language == "ar" ? "md:mr-[1.4rem]" : "md:ml-[1.4rem]"}`}
            >
              <div
                className={`flex flex-col space-y-4 text-center ${i18next.language == "ar" ? "md:text-right" : "md:text-left"}`}
              >
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
              <div
                className={`flex flex-col space-y-4 text-center ${i18next.language == "ar" ? "md:text-right" : "md:text-left"}`}
              >
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
            {i18next.t("footer.footer_rights")}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
