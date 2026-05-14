import ScrollToTop from "../component/scrollToTop.js/scrollToTop";
import SingleBlogBanner from "../features/singleBlog/component/singleBlogBanner";
import SingleBlogGrid from "../features/singleBlog/component/singleBlogGrid";

const SingleBlog = () => {
  return (
    <div>
      <ScrollToTop/>
      <div className="lg:block hidden container6 mx-auto mb-[5rem]">
        <SingleBlogBanner />
        <SingleBlogGrid />
      </div>
      <div className="lg:hidden block  mb-[5rem]">
        <SingleBlogBanner />
        <SingleBlogGrid />
      </div>
    </div>
  );
};
export default SingleBlog;
