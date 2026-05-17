import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop.js/scrollToTop";
import BlogDescription from "../features/blog/component/blogDescription";
import BlogGrid from "../features/blog/component/blogGrid";

const Blog = () => {
  return (
    <div>
      <ScrollToTop />
      <MetaHelmet title={"blog"} description={"blog"} />
      <BlogDescription />
      <BlogGrid />
    </div>
  );
};
export default Blog;
