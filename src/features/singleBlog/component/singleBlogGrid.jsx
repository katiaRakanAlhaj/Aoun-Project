import singleBlogImage from "../../../assets/images/singleBlogImage.png";
import blog1 from "../../../assets/images/blog1.png";
import blog2 from "../../../assets/images/blog2.png";
import blog3 from "../../../assets/images/blog3.png";
import i18next from "i18next";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { useFetchSingleNew } from "../hook/useFetchSingleNew";
import { useFetchNews } from "../../blog/hook/useFetchNews";
import Loader from "../../../component/loader/loader";

const SingleBlogGrid = () => {
  const { id } = useParams();
  const {
    data: singleNewData,
    isLoading: singleNewDataLoading,
    error: singleNewDataError,
  } = useFetchSingleNew(id);
  const {
    data: newsData,
    isLoading: newsDataLoading,
    error: newsDataError,
  } = useFetchNews();
  if (singleNewDataLoading || newsDataLoading) {
    return <Loader />;
  }
  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
    });
  };

  // Get last three items from newsData
  const lastThreeNews = newsData?.data?.slice(-3) || [];
  return (
    <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 mt-[2rem] gap-x-[3rem] lg:px-0 px-[1rem]">
      {/* first column */}
      <div className="lg:col-span-8 cols-span-1">
        <div className="lg:flex justify-between space-y-[1rem]">
          <h1 className="font-bold md:text-[1.6rem] text-[1.4rem] leading-relaxed md:w-[70%] text-[#333333]">
            {singleNewData?.data?.title}
          </h1>
          <p className="text-[#666666] font-normal text-lg">
            {formatDate(singleNewData?.data?.created_at)}
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(singleNewData?.data?.content),
          }}
          className="text-[#666666] text-md leading-[2rem] mt-2"
        />
        <img
          className="w-full md:h-[27rem] h-[20rem] rounded-3xl mt-[1rem] object-cover"
          src={singleNewData?.data?.image || singleBlogImage}
        />
        {/* <h1 className="font-bold md:text-[1.6rem] text-[1.4rem] mt-[1rem] leading-relaxed md:w-[70%] text-[#333333]">
          لوريم ايبسوم دولار سيت
        </h1>
        <p className="text-[#666666] text-md leading-[2rem] mt-2">
          لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
          أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
          انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي
          يت أليكيوب أكس أيا كوممودو كونسيكيوات لوريم ايبسوم دولار سيت أميت
          ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور
          أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم أد مينيم
          فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس نيسي يت أليكيوب أكس
          أيا كوممودو كونسيكيوات
        </p> */}
      </div>

      {/* second column */}
      <div className="lg:col-span-4 col-span-1">
        <h1 className="text-[#333333] font-bold text-[1.2rem]">
          {i18next.t("blog.last_news")}
        </h1>
        <div className="w-full h-[0.3rem] mt-2 bg-primary rounded-full"></div>
        {lastThreeNews.map((newsItem, index) => (
          <div key={newsItem?.id || index} className="mt-[2rem]">
            <img
              className="w-full h-[15rem] object-cover rounded-xl"
              src={newsItem?.image}
              alt={newsItem?.title}
            />
            <div className="flex justify-between mt-2">
              <h1 className="text-lg w-[70%] font-bold text-[#000000] bg-transparent">
                {newsItem?.title}
              </h1>
              <p className="text-sm text-[#000000] mt-1">
                {formatDate(newsItem?.created_at)}
              </p>
            </div>
            <div
              style={{ backgroundColor: "transparent" }}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(newsItem?.content),
              }}
              className="text-[#666666] text-sm mt-2 leading-relaxed line-clamp-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleBlogGrid;
