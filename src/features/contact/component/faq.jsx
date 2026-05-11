import { useState } from "react";
import MainBanner from "../../../component/banner/mainBanner";
import SecondTitleStyle from "../../../ui/secondTitleStyle";
import i18next from "i18next";
import { useFetchFaq } from "../hook/useFetchFaq";

const Faq = () => {
  const {
    data: FaqData,
    isLoading: faqDataLoading,
    error: faqDataError,
  } = useFetchFaq();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="w-full h-auto bg-white lg:py-[6rem] py-[3rem]">
      <div className="w-full container1 mx-auto">
        <h1 className="text-[#0B6C4B] font-bold text-[1.7rem]">
          {i18next.t("FAQ.faq_title")}
        </h1>
        <div className="flex gap-x-[2rem] items-center">
          <p className="text-[#333333] text-nowrap font-bold mt-3 md:text-[2.5rem] text-[1.7rem]">
            {i18next.t("FAQ.faq_subtitle")}{" "}
          </p>
          <div className="w-full h-[0.1rem] bg-[#BBE5C64D]"></div>
        </div>

        {/* Accordion Section */}
        <div className="space-y-[2.8rem] mt-[4rem]">
          {FaqData?.data?.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Title */}
              {category.title && (
                <h2 className="text-[#0B6C4B] text-[1.5rem] font-bold mb-6">
                  {category.title}
                </h2>
              )}

              {/* Questions for this category */}
              {category.questions?.map((item, questionIndex) => {
                const key = `${categoryIndex}-${questionIndex}`;
                return (
                  <div
                    key={key}
                    className="rounded-lg overflow-hidden relative mb-4"
                  >
                    <button
                      onClick={() =>
                        toggleAccordion(categoryIndex, questionIndex)
                      }
                      className="w-full flex justify-between items-center p-6 text-right bg-white hover:bg-gray-50 transition-all cursor-pointer"
                    >
                      <span className="text-dark md:text-[1.4rem] text-lg font-bold">
                        {item.question}
                      </span>
                      <svg
                        className={`w-6 h-6 text-[#0B6C4B] transform transition-transform duration-300 ${
                          openIndex === key ? "rotate-180" : ""
                        }`}
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
                    </button>

                    {/* Green bar - only shows when accordion is open */}
                    {openIndex === key && (
                      <div
                        className={`absolute ${i18next.language == "ar" ? "right-0" : "left-0"} top-0 bg-primary h-full w-[0.3rem] rounded-t-lg rounded-b-lg`}
                      ></div>
                    )}

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        openIndex === key
                          ? "max-h-auto opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="p-6 pt-0 text-[#525252] w-[90%] text-[1rem] leading-8">
                        {item.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
