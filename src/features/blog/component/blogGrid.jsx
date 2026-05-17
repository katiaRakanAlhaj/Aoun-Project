import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import download from "../../../assets/images/download.svg";
import i18next from "i18next";
import { useFetchCategories } from "../hook/useFetchCategories";
import { useFetchNews } from "../hook/useFetchNews";
import noResult from "../../../assets/images/no_result.svg";

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [appliedCategory, setAppliedCategory] = useState("all");
  const [appliedSearchTerm, setAppliedSearchTerm] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [allBlogItems, setAllBlogItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const [animatedItems, setAnimatedItems] = useState(new Set()); // Use Set for better performance

  const {
    data: categoriesData,
    isLoading: categoriesDataLoading,
    error: categoriesDataError,
  } = useFetchCategories();

  // Find category ID based on selected category name
  useEffect(() => {
    if (appliedCategory === "all") {
      setSelectedCategoryId(null);
    } else if (categoriesData?.data) {
      const category = categoriesData.data.find(
        (cat) => cat.category === appliedCategory,
      );
      setSelectedCategoryId(category?.id || null);
    }
  }, [appliedCategory, categoriesData]);

  // Build query params based on applied filters
  const getQueryParams = () => {
    const params = new URLSearchParams();
    if (selectedCategoryId) {
      params.append("category_id", selectedCategoryId);
    }
    if (appliedSearchTerm) {
      params.append("search", appliedSearchTerm);
    }
    return params.toString();
  };

  const {
    data: newsData,
    isLoading: newsDataLoading,
    error: newsDataError,
    refetch,
  } = useFetchNews(getQueryParams(), currentPage);

  // Reset and fetch when filters change
  useEffect(() => {
    setAllBlogItems([]);
    setCurrentPage(1);
    setHasMore(true);
    setVisibleCount(9);
    setAnimatedItems(new Set()); // Reset animated items
    refetch();
  }, [appliedCategory, appliedSearchTerm]);

  // Append new data when newsData changes and animate new items
  useEffect(() => {
    if (newsData?.data && newsData.data.length > 0) {
      if (currentPage === 1) {
        setAllBlogItems(newsData.data);
        // Mark initial items for animation
        const newAnimatedSet = new Set();
        newsData.data.slice(0, 9).forEach(item => {
          newAnimatedSet.add(item.id);
        });
        setAnimatedItems(newAnimatedSet);
        
        // Clear animation flags after animation completes
        setTimeout(() => {
          setAnimatedItems(new Set());
        }, 800);
      } else {
        // This is loading more pages - animate the new items
        setAllBlogItems(prev => {
          const updated = [...prev, ...newsData.data];
          // Mark newly added items for animation
          const newAnimatedSet = new Set(animatedItems);
          newsData.data.forEach(item => {
            newAnimatedSet.add(item.id);
          });
          setAnimatedItems(newAnimatedSet);
          
          // Remove animation flag after animation completes
          setTimeout(() => {
            setAnimatedItems(prevSet => {
              const newSet = new Set(prevSet);
              newsData.data.forEach(item => {
                newSet.delete(item.id);
              });
              return newSet;
            });
          }, 800);
          
          return updated;
        });
      }
      
      // Check if there are more pages
      const lastPage = newsData?.meta?.last_page || 1;
      setHasMore(currentPage < lastPage);
      
      // Reset loading state
      setIsLoadingMore(false);
    } else if (newsData?.data && newsData.data.length === 0 && currentPage === 1) {
      setAllBlogItems([]);
      setHasMore(false);
      setIsLoadingMore(false);
    }
  }, [newsData, currentPage]);

  const blogItems = allBlogItems;
  const visibleItems = blogItems.slice(0, visibleCount);
  const hasMoreItems = visibleCount < blogItems.length;

  const getCleanedContent = (html) => {
    if (!html) return "";

    let cleaned = html
      .replace(/&nbsp;/gi, " ")
      .replace(/&emsp;/gi, " ")
      .replace(/&ensp;/gi, " ")
      .replace(/&thinsp;/gi, " ")
      .replace(/&zwnj;/gi, "")
      .replace(/&zwj;/gi, "");

    cleaned = cleaned
      .replace(/<p>\s*<\/p>/gi, "")
      .replace(/<div>\s*<\/div>/gi, "")
      .replace(/<span>\s*<\/span>/gi, "")
      .replace(/<section>\s*<\/section>/gi, "")
      .replace(/<article>\s*<\/article>/gi, "");

    cleaned = cleaned
      .replace(/<br\s*\/?>\s*<br\s*\/?>/gi, " ")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/(p|div|h1|h2|h3|h4|h5|h6)>/gi, " ")
      .replace(/<(p|div|h1|h2|h3|h4|h5|h6)(\s[^>]*)?>/gi, " ");

    cleaned = cleaned.replace(/<[^>]*>/g, " ");
    cleaned = cleaned.replace(/\s+/g, " ").trim();

    return DOMPurify.sanitize(cleaned);
  };

  const loadMoreLocalItems = () => {
    const currentCount = visibleCount;
    const newCount = currentCount + 6;
    setVisibleCount(newCount);
    
    // Animate newly visible items
    const newItems = blogItems.slice(currentCount, newCount);
    const newAnimatedSet = new Set(animatedItems);
    newItems.forEach(item => {
      newAnimatedSet.add(item.id);
    });
    setAnimatedItems(newAnimatedSet);
    
    // Remove animation flag after animation completes
    setTimeout(() => {
      setAnimatedItems(prevSet => {
        const newSet = new Set(prevSet);
        newItems.forEach(item => {
          newSet.delete(item.id);
        });
        return newSet;
      });
    }, 800);
  };

  const loadMoreFromApi = () => {
    setIsLoadingMore(true);
    setCurrentPage(prev => prev + 1);
  };

  const handleLoadMore = () => {
    if (hasMoreItems) {
      loadMoreLocalItems();
    } else if (hasMore && !newsDataLoading && !isLoadingMore) {
      loadMoreFromApi();
    }
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchTerm("");
    setAppliedCategory("all");
    setAppliedSearchTerm("");
    setVisibleCount(9);
    setAllBlogItems([]);
    setCurrentPage(1);
    setHasMore(true);
    setAnimatedItems(new Set());
  };

  const applyFilter = () => {
    setAppliedCategory(selectedCategory);
    setAppliedSearchTerm(searchTerm);
    setVisibleCount(9);
    setAllBlogItems([]);
    setCurrentPage(1);
    setHasMore(true);
    setAnimatedItems(new Set());
  };

  const handleSearchClick = () => {
    applyFilter();
  };

  // Fade-in animation variants
  const fadeInVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Scale and fade for images
  const imageFadeVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if ((newsDataLoading && currentPage === 1) || categoriesDataLoading) {
    return (
      <div className="container3 mx-auto mb-[4rem] flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#009444] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-primary font-bold">
            {i18next.t("blog.loading_news")}
          </p>
        </div>
      </div>
    );
  }

  if (newsDataError || categoriesDataError) {
    return (
      <div className="container3 mx-auto mb-[4rem] text-center py-10">
        <p className="text-red-500">
          Error loading content. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container3 mx-auto mb-[4rem]">
      <div className="grid lg:grid-cols-12 gap-y-[2rem] grid-cols-1 gap-x-[4rem] mt-[3rem]">
        <div className="lg:col-span-4 col-span-1">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearchClick();
                }
              }}
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
              onClick={handleSearchClick}
              className={`absolute bottom-0 ${i18next.language == "ar" ? "left-0 rounded-tl-lg" : "right-0 rounded-tr-lg"} top-0 h-full w-[6rem] bg-primary font-bold text-white text-md cursor-pointer transition-transform hover:scale-105`}
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
                }}
                className={`w-auto h-[2.2rem] px-[1.5rem] rounded-full flex justify-center items-center text-[1.1rem] cursor-pointer transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-[#C2DAFF80] text-secondary scale-105"
                    : "bg-[#F0F0F0] text-[#525252] hover:bg-[#E0E0E0]"
                }`}
              >
                {i18next.t("blog.all")}
              </button>
              {categoriesData?.data?.map((category) => (
                <div key={category?.id}>
                  <button
                    onClick={() => {
                      setSelectedCategory(category?.category);
                    }}
                    className={`w-auto h-[2.2rem] px-[1.5rem] cursor-pointer rounded-full flex justify-center items-center text-[1.1rem] transition-all duration-300 ${
                      selectedCategory === category?.category
                        ? "bg-[#C2DAFF80] text-secondary scale-105"
                        : "bg-[#F0F0F0] text-[#525252] hover:bg-[#E0E0E0]"
                    }`}
                  >
                    {category?.category}
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={applyFilter}
              className="h-[3rem] w-full bg-primary rounded-lg mt-[1.5rem] font-bold text-white text-lg cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {i18next.t("blog.apply_filter")}
            </button>
            <button
              onClick={resetFilters}
              className="text-[#5B1B1B] text-sm mt-[1rem] text-center cursor-pointer w-full transition-all duration-300 hover:underline"
            >
              {i18next.t("blog.reset")}
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 cols-span-1 lg:mr-[-1.5rem]">
          {blogItems.length === 0 && !newsDataLoading ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col justify-center items-center py-10"
            >
              <img
                src={noResult}
                alt="No results found"
                className="w-64 h-64 object-contain mb-6"
              />
              <p className="text-primary font-bold text-xl text-center">
                {i18next.t("blog.no_results")}
              </p>
            </motion.div>
          ) : (
            <>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">
                {visibleItems?.map((blogItem, index) => {
                  const shouldAnimate = animatedItems.has(blogItem.id);

                  return (
                    <motion.div
                      key={blogItem.id}
                      variants={fadeInVariants}
                      initial={shouldAnimate ? "hidden" : "visible"} // Changed: use "visible" instead of false
                      animate="visible"
                      style={{ boxShadow: "0px 0px 4px 0px #00000040" }}
                      className="w-full bg-white h-[25rem] relative rounded-b-3xl overflow-hidden"
                    >
                      {/* Image with fade-in animation */}
                      <motion.div 
                        className="h-[12rem] overflow-hidden relative"
                        variants={imageFadeVariants}
                        initial={shouldAnimate ? "hidden" : "visible"} // Changed: use "visible" instead of false
                        animate="visible"
                      >
                        <img
                          src={blogItem?.image}
                          className="w-full h-full object-cover"
                          alt={blogItem?.title}
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/400x200?text=No+Image";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </motion.div>
                      
                      <div className="px-[1rem]">
                        <motion.h1 
                          className="text-[#333333] font-bold text-md mt-3 line-clamp-2"
                          whileHover={{ color: "#009444" }}
                          transition={{ duration: 0.2 }}
                        >
                          {blogItem?.title}
                        </motion.h1>
                        <motion.p
                          dangerouslySetInnerHTML={{
                            __html: getCleanedContent(blogItem?.content),
                          }}
                          className="text-[#959595] mt-[1rem] text-sm line-clamp-3 leading-relaxed"
                          initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }} // Changed: provide default visible state
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        />
                      </div>
                      <Link
                        to={`/blog/${blogItem.id}`}
                        className="absolute bottom-0 right-0 left-0"
                      >
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="h-[2.7rem] cursor-pointer w-full bg-primary rounded-b-3xl text-white font-bold text-lg transition-all duration-300 hover:bg-[#007a3a]"
                        >
                          {i18next.t("blog.read_more")}
                        </motion.button>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* See More button */}
              {(hasMoreItems || (hasMore && !newsDataLoading && !isLoadingMore)) && (
                <motion.div 
                  className="flex justify-center items-center mt-[3rem]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.button
                    onClick={handleLoadMore}
                    disabled={isLoadingMore || newsDataLoading}
                    className="w-[16rem] h-[4rem] rounded-md bg-primary flex justify-center items-center gap-x-5 cursor-pointer disabled:opacity-50 relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      initial={false}
                      animate={{}}
                    />
                    
                    {(isLoadingMore || newsDataLoading) ? (
                      <>
                        <motion.div 
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <p className="text-white font-bold text-lg">
                          {i18next.t("blog.loading_news")}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-white font-bold text-lg">
                          {i18next.t("blog.see_more")}
                        </p>
                        <motion.img 
                          src={download} 
                          alt="download"
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default BlogGrid;