import logo from "../../assets/images/logo.svg";
import i18next from "i18next";
const Navbar = () => {
  const items = [
    { desc: i18next.t("home"), path: "/" },
    {
      desc: i18next.t("about_the_platform"),
      path: "/about_the_platformlatform",
    },
    { desc: i18next.t("services"), path: "/Services" },
    { desc: i18next.t("products"), path: "/Products" },
    { desc: i18next.t("blog"), path: "/Blog" },
    { desc: i18next.t("contact_us"), path: "/Contact" },
  ];
  return (
    <div
      className=" mt-[1.5rem] w-full bg-white h-[5rem] px-[5rem]
                   flex items-center justify-between"
    >
      <img className="w-[10.5rem]" src={logo} />
      <div className="flex gap-x-[2.5rem]">
        {items?.map((item) => (
          <p className="text-[1rem] text-[#525252]">{item.desc}</p>
        ))}
      </div>
      <div className="w-[5.5rem] flex rounded-sm flex justify-center items-center h-[3rem] text-primary font-bold cursor-pointer bg-[#E3EAE5]">العربية</div>
    </div>
  );
};
export default Navbar;
