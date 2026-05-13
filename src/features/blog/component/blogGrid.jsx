import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import download from "../../../assets/images/download.svg";
import i18next from "i18next";
import { useFetchCategories } from "../hook/useFetchCategories";
import { useFetchNews } from "../hook/useFetchNews";

const BlogGrid = () => {
  const {
    data: newsData,
    isLoading: newsDataLoading,
    error: newsDataError,
  } = useFetchNews();
  const {
    data: categoriesData,
    isLoading: categoriesDataLoading,
    error: categoriesDataError,
  } = useFetchCategories();
  
  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [flash, setFlash] = useState(false);
  const [newImages, setNewImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Extract blog items from API data
  const blogItems = newsData?.data || [];
  
  // Filter blog items based on category and search
  const filteredItems = blogItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.content?.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  // Function to clean HTML content and remove extra spaces
  const getCleanedContent = (html) => {
    if (!html) return "";
    
    // Step 1: Replace all HTML space entities
    let cleaned = html
      .replace(/&nbsp;/gi, ' ')
      .replace(/&emsp;/gi, ' ')
      .replace(/&ensp;/gi, ' ')
      .replace(/&thinsp;/gi, ' ')
      .replace(/&zwnj;/gi, '')
      .replace(/&zwj;/gi, '');
    
    // Step 2: Remove empty HTML elements
    cleaned = cleaned
      .replace(/<p>\s*<\/p>/gi, '')
      .replace(/<div>\s*<\/div>/gi, '')
      .replace(/<span>\s*<\/span>/gi, '')
      .replace(/<section>\s*<\/section>/gi, '')
      .replace(/<article>\s*<\/article>/gi, '');
    
    // Step 3: Replace line breaks with spaces
    cleaned = cleaned
      .replace(/<br\s*\/?>\s*<br\s*\/?>/gi, ' ')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<\/(p|div|h1|h2|h3|h4|h5|h6)>/gi, ' ')
      .replace(/<(p|div|h1|h2|h3|h4|h5|h6)(\s[^>]*)?>/gi, ' ');
    
    // Step 4: Remove any remaining HTML tags that might cause spacing
    cleaned = cleaned.replace(/<[^>]*>/g, ' ');
    
    // Step 5: Collapse all multiple spaces and trim
    cleaned = cleaned
      .replace(/\s+/g, ' ')
      .trim();
    
    // Step 6: Sanitize for security (though most HTML is already removed)
    return DOMPurify.sanitize(cleaned);
  };

  const loadMore = () => {
    setIsLoading(true);
    setFlash(true);

    const currentCount = visibleCount;
    const newIndices = [];
    for (
      let i = currentCount;
      i < currentCount + 6 && i < filteredItems.length;
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

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    setVisibleCount(9);
  };

  const applyFilter = () => {
    setVisibleCount(9);
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

  // Loading state
  if (newsDataLoading || categoriesDataLoading) {
    return (
      <div className="container3 mx-auto mb-[4rem] flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">{i18next.t("loading")}</p>
        </div>
      </div>
    );
  }

  // Error state
  if (newsDataError || categoriesDataError) {
    return (
      <div className="container3 mx-auto mb-[4rem] text-center py-10">
        <p className="text-red-500">Error loading content. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container3 mx-auto mb-[4rem]">
      <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[4rem] mt-[3rem]">
        {/* first column - Filters */}
        <div className="lg:col-span-4 col-span-1">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={i18next.t("blog.search_for_news")}
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
              onClick={applyFilter}
              className={`absolute bottom-0  ${i18next.language == "ar" ? "left-0 rounded-tl-lg" : "right-0 rounded-tr-lg"} top-0 h-full w-[6rem] bg-primary font-bold text-white text-md cursor-pointer`}
            >
              {i18next.t("blog.search")}
            </button>
          </div>
          <div
            style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
            className="w-full h-auto rounded-b-3xl bg-white mt-[1rem] py-[1rem] px-[1.5rem]"
          >
            <h1 className="text-[#002F3C] text-[1.2rem] font-bold">
              {i18next.t("blog.filter_and_sort")}
            </h1>
            <p className="text-[#333333] text-[1.2rem] mt-3">
              {i18next.t("blog.filter_by")}
            </p>

            <div className="flex flex-row mt-2 flex-wrap gap-x-[0.5rem] gap-y-[1rem]">
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setVisibleCount(9);
                }}
                className={`w-auto h-[2.2rem] px-[1.5rem] rounded-full flex justify-center items-center text-[1.1rem] cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#C2DAFF80] text-secondary"
                    : "bg-[#F0F0F0] text-[#525252]"
                }`}
              >
                {i18next.t("blog.all")}
              </button>
              {categoriesData?.data?.map((category) => (
                <div key={category?.id}>
                  <button
                    onClick={() => {
                      setSelectedCategory(category?.category);
                      setVisibleCount(9);
                    }}
                    className={`w-auto h-[2.2rem] px-[1.5rem] cursor-pointer rounded-full flex justify-center items-center text-[1.1rem] ${
                      selectedCategory === category?.category
                        ? "bg-[#C2DAFF80] text-secondary"
                        : "bg-[#F0F0F0] text-[#525252]"
                    }`}
                  >
                    {category?.category}
                  </button>
                </div>
              ))}
            </div>
            
            <button
              onClick={applyFilter}
              className="h-[3rem] w-full bg-primary rounded-lg mt-[1.5rem] font-bold text-white text-lg cursor-pointer"
            >
              {i18next.t("blog.apply_filter")}
            </button>
            <button
              onClick={resetFilters}
              className="text-[#5B1B1B] text-sm mt-[1rem] text-center cursor-pointer w-full"
            >
              {i18next.t("blog.reset")}
            </button>
          </div>
        </div>

        {/* second column - Blog Grid */}
        <div className="lg:col-span-8 cols-span-1 lg:mr-[-1.5rem]">
          {filteredItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No news found</p>
            </div>
          ) : (
            <>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">
                <AnimatePresence mode="wait">
                  {visibleItems?.map((blogItem, index) => {
                    const isNewImage = newImages.includes(index);
                    
                    return (
                      <motion.div
                        key={blogItem.id}
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
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
                          }}
                        />
                        <div className="px-[1rem]">
                          <h1 className="text-[#333333] font-bold text-md mt-3 line-clamp-2">
                            {blogItem?.title}
                          </h1>
                          <p 
                            dangerouslySetInnerHTML={{
                              __html: getCleanedContent(blogItem?.content)
                            }} 
                            className="text-[#959595] mt-[1rem] text-sm line-clamp-3 leading-relaxed"
                          />
                        </div>
                        <Link
                          to={`/blog/${blogItem.id}`}
                          className="absolute bottom-0 right-0 left-0"
                        >
                          <button className="h-[2.7rem] cursor-pointer w-full bg-primary rounded-b-3xl text-white font-bold text-lg">
                            {i18next.t("blog.read_more")}
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
                          {i18next.t("loading")}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-white font-bold text-lg">
                          {i18next.t("blog.see_more")}
                        </p>
                        <img src={download} alt="download" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;