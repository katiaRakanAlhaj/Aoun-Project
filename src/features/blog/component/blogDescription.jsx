import SubTitle from "../../../ui/subTitleStyle";
import i18next from "i18next";
const BlogDescription = () => {
  return (
    <div className="container3 mx-auto mt-[4rem]">
      <SubTitle subTitle={i18next.t("blog.blog")} />
      <p className="text-[#525252] text-lg lg:w-[80%] leading-relaxed mt-3">
        {i18next.t("blog.blog_description")}
      </p>
    </div>
  );
};
export default BlogDescription;
