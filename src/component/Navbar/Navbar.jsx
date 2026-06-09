import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/MARNAS LOGO.svg";
import i18next from "i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Get current language from URL
  const getCurrentLang = () => {
    const match = location.pathname.match(/^\/(en|ar)/);
    return match ? match[1] : "ar";
  };

  const currentLang = getCurrentLang();
  const isAboutPlatform = location.pathname.includes("Platform");

  const items = [
    { desc: t("menu.home"), path: "" },
    { desc: t("menu.about_the_platform"), path: "Platform" },
    { desc: t("menu.services"), path: "Services" },
    { desc: t("menu.products"), path: "Products" },
    { desc: t("menu.blog"), path: "Blog" },
    { desc: t("menu.contact_us"), path: "Contact" },
  ];

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
    
    // Handle blog section - matches /blog, /blog/, and /blog/2, /blog/1, etc.
    if (itemPath === "blog") {
      return pathWithoutLang === "/blog" || 
             pathWithoutLang === "blog" ||
             pathWithoutLang.startsWith("/blog/") ||
             pathWithoutLang.startsWith("blog/");
    }
    
    // Handle exact matches for other paths
    return pathWithoutLang === `/${itemPath}` || pathWithoutLang === itemPath;
  };

  const changeLanguage = () => {
    const newLanguage = currentLang === "ar" ? "en" : "ar";

    // Change language in i18next
    i18n.changeLanguage(newLanguage);

    // Save to localStorage
    localStorage.setItem("language", newLanguage);

    // Get current path without language prefix
    let currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|ar)/, "");

    // Create new path with new language
    const newPath =
      pathWithoutLang === "" || pathWithoutLang === "/"
        ? `/${newLanguage}`
        : `/${newLanguage}${pathWithoutLang}`;

    // Navigate to new path
    navigate(newPath);
    window.location.reload();
  };

  return (
    <div
      className={`w-full bg-white h-[5rem] px-[5rem] flex items-center justify-between ${!isAboutPlatform ? "mt-[1.5rem]" : ""}`}
    >
      <Link to={getLocalizedPath("")}>
        <img className={`w-[24rem] ${i18next.language == "ar"?'mr-[-4rem]':'ml-[-4rem]'}`} src={logo} alt="logo" />
      </Link>
      <div className={`flex gap-x-[2.5rem] ${i18next.language == "ar"?'mr-[-6rem]':'ml-[-6rem]'}`}>
        {items.map((item, index) => (
          <Link key={index} to={getLocalizedPath(item.path)}>
            <p 
              className={`text-[1rem] ${
                isActive(item.path) 
                  ? "text-primary font-bold" 
                  : "text-[#525252]"
              }`}
            >
              {item.desc}
            </p>
          </Link>
        ))}
      </div>
      <div
        onClick={changeLanguage}
        className="w-[5.5rem] flex rounded-sm justify-center items-center h-[3rem] text-primary font-bold cursor-pointer bg-[#E3EAE5]"
      >
        {currentLang === "ar" ? "English" : "العربية"}
      </div>
    </div>
  );
};

export default Navbar;