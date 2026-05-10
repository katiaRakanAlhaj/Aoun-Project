import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import blog1 from "../../../assets/images/blog1.png";
import blog2 from "../../../assets/images/blog2.png";
import blog3 from "../../../assets/images/blog3.png";
import download from "../../../assets/images/download.svg";
import i18next from "i18next";
const BlogGrid = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [flash, setFlash] = useState(false);
  const [newImages, setNewImages] = useState([]);

  const blogItems = [
    {
      id: 1,
      image: blog1,
      title: "وضع حجر الأساس لأكبر مشروع متكامل الإنتاج مركزات النحاس ..",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا ...",
    },
    {
      id: 2,
      image: blog2,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 3,
      image: blog3,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 4,
      image: blog1,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 5,
      image: blog2,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 6,
      image: blog3,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 7,
      image: blog1,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 8,
      image: blog2,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 9,
      image: blog3,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 10,
      image: blog1,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 11,
      image: blog2,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 12,
      image: blog3,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 13,
      image: blog1,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 14,
      image: blog2,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 15,
      image: blog3,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 16,
      image: blog1,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 17,
      image: blog2,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 18,
      image: blog3,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 19,
      image: blog1,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 20,
      image: blog2,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
    {
      id: 21,
      image: blog3,
      title: "لوريم ايبسوم دولار سيت",
      description:
        "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم ",
    },
  ];

  const buttons = ["سياسي", "دبلوماسي", "ثقافة", "اقتصادي", "ثقافي"];

  const visibleItems = blogItems.slice(0, visibleCount);
  const hasMore = visibleCount < blogItems.length;

  const loadMore = () => {
    setIsLoading(true);
    setFlash(true);

    const currentCount = visibleCount;
    const newIndices = [];
    for (
      let i = currentCount;
      i < currentCount + 6 && i < blogItems.length;
      i++
    ) {
      newIndices.push(i);
    }
    setNewImages(newIndices);

    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 6);
      setIsLoading(false);

      setTimeout(() => {
        setFlash(false);
        setTimeout(() => {
          setNewImages([]);
        }, 500);
      }, 500);
    }, 800);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container3 mx-auto mb-[4rem]">
      <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[4rem] mt-[3rem]">
        {/* first column */}
        <div className="lg:col-span-4 col-span-1">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن خبر"
              className={`w-full px-4 h-[3rem] text-sm ${i18next.language == "ar" ? "pr-10" : "pl-10"} rounded-t-lg bg-white border border-[#E7E8E9] focus:outline-none text-[#697077]`}
            />
            <div
              className={`absolute inset-y-0 ${i18next.language == "ar" ? "right-0 pr-3 " : "left-0 pl-3 "} flex items-center pointer-events-none`}
            >
              <svg
                className="w-5 h-5 text-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button
              className={`absolute bottom-0  ${i18next.language == "ar" ? "left-0 rounded-tl-lg" : "right-0 rounded-tr-lg"} top-0 h-full w-[6rem] bg-primary font-bold text-white text-md cursor-pointer`}
            >
              بحث
            </button>
          </div>
          <div
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            className="w-full h-auto rounded-b-3xl bg-white mt-[1rem] py-[1rem] px-[1.5rem]"
          >
            <h1 className="text-[#002F3C] text-[1.2rem] font-bold">
              تصفية و ترتيب
            </h1>
            <p className="text-[#333333] text-[1.2rem] mt-3">تصفية حسب</p>

            <div className="flex flex-row mt-2 flex-wrap gap-x-[0.5rem] gap-y-[1rem]">
              <button className="w-auto h-[2.2rem] px-[1.5rem] rounded-full flex justify-center items-center text-[1.1rem]  bg-[#C2DAFF80] text-secondary">
                الكل
              </button>
              {buttons?.map((button, index) => (
                <div key={index}>
                  <button className="w-auto h-[2.2rem] px-[1.5rem] rounded-full flex justify-center items-center text-[1.1rem]  bg-[#F0F0F0] text-[#525252]">
                    {button}
                  </button>
                </div>
              ))}
            </div>
            <p className="text-[#333333] text-[1.2rem] mt-6">رتب حسب</p>
            <div className="relative">
              <select className="w-full px-4 py-3 mt-2 font-bold rounded-lg focus:outline-none appearance-none bg-[#E7F3EB] text-primary">
                <option
                  value=""
                  disabled
                  selected
                  className="hidden text-gray-500"
                >
                  اختر ترتيب الفرز
                </option>
                <option className="text-[#009444]">العنوان</option>
                <option>الاحدث اولا</option>
                <option>الاقدم اولا</option>
              </select>
              <div
                className={`absolute inset-y-0 flex items-center ${i18next.language == "ar" ? "pl-3 left-0 " : "pr-3 right-0 "} pointer-events-none`}
              >
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <button className="h-[3rem] w-full bg-primary rounded-lg mt-[1.5rem] font-bold text-white text-lg cursor-pointer">
              تطبيق الفلتر
            </button>
            <p className="text-[#5B1B1B] text-sm mt-[1rem] text-center cursor-pointer">
              إعادة تعيين
            </p>
          </div>
        </div>

        {/* second column */}
        <div className="lg:col-span-8 cols-span-1 lg:mr-[-1.5rem]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1e gap-[2rem]">
            <AnimatePresence mode="wait">
              {visibleItems?.map((blogItem, index) => {
                const isNewImage = newImages.includes(index);

                return (
                  <motion.div
                    initial={isNewImage ? "hidden" : false}
                    animate={isNewImage ? "visible" : false}
                    variants={imageVariants}
                    style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                    className="w-full bg-white h-[25rem] relative rounded-b-3xl"
                  >
                    <img
                      src={blogItem?.image}
                      className="w-full h-[12rem] object-cover"
                      alt={blogItem?.title}
                    />
                    <div className="px-[1rem]">
                      <h1 className="text-[#333333] font-bold text-md mt-3 line-clamp-2">
                        {blogItem?.title}
                      </h1>
                      <p className="text-[#959595] mt-[1rem] text-sm line-clamp-3 leading-relaxed">
                        {blogItem?.description}
                      </p>
                    </div>
                    <Link
                      to={`/blog/${blogItem.id}`}
                      className="absolute bottom-0 right-0 left-0"
                    >
                      <button className="h-[2.7rem] cursor-pointer w-full bg-primary rounded-b-3xl text-white font-bold text-lg">
                        قراءة المزيد
                      </button>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Show More Button */}
          {hasMore && (
            <div className="flex justify-center items-center mt-[3rem]">
              <button
                onClick={loadMore}
                disabled={isLoading}
                className="w-[16rem] h-[4rem] rounded-md bg-primary flex justify-center items-center gap-x-5 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-white font-bold text-lg">
                      جاري التحميل...
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-white font-bold text-lg">شاهد المزيد</p>
                    <img src={download} alt="download" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
