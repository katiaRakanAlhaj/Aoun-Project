import SingleBlogBanner from "../features/singleBlog/component/singleBlogBanner";
import SingleBlogGrid from "../features/singleBlog/component/singleBlogGrid";

const SingleBlog = ()=> {
    return(
        <div className = "container6 mx-auto mb-[5rem]">
            <SingleBlogBanner/>
            <SingleBlogGrid/>
        </div>
    )
}
export default SingleBlog;