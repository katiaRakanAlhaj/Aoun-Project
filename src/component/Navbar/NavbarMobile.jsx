import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/MARNAS LOGO.svg";
import i18next from "i18next";

const NavbarMobile = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get current language from URL
  const getCurrentLang = () => {
    const match = location.pathname.match(/^\/(en|ar)/);
    return match ? match[1] : "ar";
  };

  const currentLang = getCurrentLang();
  const isAboutPlatform = location.pathname.includes("about_the_platform");

  const items = [
    { desc: t("menu.home"), path: "" },
    { desc: t("menu.about_the_platform"), path: "Platform" },
    { desc: t("menu.services"), path: "services" },
    { desc: t("menu.products"), path: "products" },
    { desc: t("menu.blog"), path: "blog" },
    { desc: t("menu.contact_us"), path: "contact" },
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(getLocalizedPath(path));
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Navbar Header */}
      <div
        className={`w-full bg-white h-[5rem] px-[1.5rem] flex items-center justify-between ${
          !isAboutPlatform ? "mt-[1.5rem]" : ""
        }`}
      >
        <Link to={getLocalizedPath("")}>
          <img className={`w-[20rem] ${i18next.language == "ar"?'mr-[-4rem]':'ml-[-4rem]'}`} src={logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div
            onClick={changeLanguage}
            className="w-[4.5rem] flex rounded-sm justify-center items-center h-[2.5rem] text-primary font-bold cursor-pointer bg-[#E3EAE5] text-sm"
          >
            {currentLang === "ar" ? "English" : "العربية"}
          </div>

          {/* Menu Button */}
          <button onClick={toggleMobileMenu} className="text-2xl text-primary">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[5rem] right-0 bottom-0 w-[80%] bg-primary shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          !isAboutPlatform ? "mt-[1.5rem]" : ""
        } ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          height: !isAboutPlatform ? "calc(100% - 6.5rem)" : "calc(100% - 5rem)",
        }}
      >
        <div className="flex flex-col py-4 overflow-y-auto h-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`py-4 px-6 border-b border-gray-100 cursor-pointer transition-colors ${
                isActive(item.path)
                  ? "bg-primary/5"
                  : "text-primary"
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              <p
                className={`text-[1rem] ${
                  isActive(item.path)
                    ? "text-white font-bold"
                    : "text-white"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;