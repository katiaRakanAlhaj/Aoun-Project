import { useState } from "react";
import MainBanner from "../../../component/banner/mainBanner";
import SecondTitleStyle from "../../../ui/secondTitleStyle";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Changed from null to 0

  const faqData = [
    {
      question: "كيفية التسجيل في المنصة؟",
      answer:
        "للتسجيل في المنصة، يمكنك الضغط على زر 'تسجيل' في أعلى الصفحة، ثم ملء البيانات المطلوبة مثل اسم المصنع، البريد الإلكتروني، رقم الهاتف، وتحميل المستندات الرسمية. بعد المراجعة، سيتم تفعيل حسابك خلال 3-5 أيام عمل.",
    },
    {
      question: "كيف يتم تحديد رسوم الخدمة؟",
      answer:
        "تحدد رسوم الخدمة بناءً على عدة عوامل منها: حجم المصنع، عدد المنتجات المطلوب عرضها، مدة الاشتراك، والخدمات الإضافية المطلوبة مثل الترجمة أو التسويق. يمكنك الاطلاع على قائمة الأسعار التفصيلية من خلال صفحة 'الخدمات' أو التواصل مع فريق المبيعات.",
    },
    {
      question: "ما هي آليات الدفع المتاحة؟",
      answer:
        "توفر المنصة عدة آليات دفع مرنة تشمل: التحويل البنكي، بطاقات الائتمان (فيزا وماستركارد)، الدفع عبر تطبيقات الهاتف المحمول، والدفع الآجل للشركات المعتمدة. جميع عمليات الدفع مشفرة وآمنة بالكامل.",
    },
    {
      question: "هل الخدمة متاحة لجميع أنواع المصانع؟",
      answer:
        "نعم، الخدمة متاحة لجميع أنواع المصانع العمانية سواء كانت صغيرة، متوسطة، أو كبيرة، وفي جميع القطاعات الصناعية. نحن نرحب بالمصانع الناشئة وكذلك المصانع القائمة التي ترغب في توسيع نطاق وصولها إلى الأسواق المحلية والعالمية.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto bg-white py-[6rem]">
      <div className="w-full container1 mx-auto">
        <h1 className="text-[#0B6C4B] font-bold text-[1.7rem]">
          الأسئلة المتكررة
        </h1>
        <div className="flex gap-x-[2rem] items-center">
          <p className="text-[#333333] text-nowrap font-bold mt-3 text-[2.5rem]">
            حلول سريعة لاستفساراتكم
          </p>
          <div className="w-full h-[0.1rem] bg-[#BBE5C64D]"></div>
        </div>

        {/* Accordion Section */}
        <div className="space-y-[2.8rem] mt-[4rem]">
          {faqData.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden relative">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-right bg-white hover:bg-gray-50 transition-all cursor-pointer"
              >
                <span className="text-dark text-[1.4rem] font-bold">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#0B6C4B] transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
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
              {openIndex === index && (
                <div className="absolute right-0 top-0 bg-primary h-full w-[0.3rem] rounded-t-lg rounded-b-lg"></div>
              )}

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-auto opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 text-[#525252] w-[90%] text-[1rem] leading-8">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
