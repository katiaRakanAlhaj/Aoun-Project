import SecondTitleStyle from "../../../ui/secondTitleStyle";
import solution1 from "../../../assets/images/solution1.svg";
import solution2 from "../../../assets/images/solution2.svg";
import solution3 from "../../../assets/images/solution3.svg";
import solution4 from "../../../assets/images/solution4.svg";
import solution5 from "../../../assets/images/solution7.svg";
import solution6 from "../../../assets/images/solution8.svg";

const TechnologySolutions = () => {
  const solutionItems = [
    { image: solution1, desc: "منصة عرض المنتجات" },
    { image: solution2, desc: "نظام الطلب والشراء" },
    { image: solution3, desc: "الدفع الإلكتروني" },
    { image: solution4, desc: "ملفات تعريف المصانع" },
    { image: solution5, desc: "التسويق الرقمي" },
    { image: solution6, desc: "التقارير والتحليلات" },
  ];
  
  return (
    <div className="h-auto w-full py-[6rem] bg-[#EAE8E3]">
      <div className="container2 mx-auto">
        <SecondTitleStyle title={"الحلول التقنية"} />
        <div className="grid grid-cols-2 gap-[1rem] mt-[2rem]">
          {solutionItems?.map((item, index) => (
            <div 
              key={index}
              className={`w-full h-[8rem] relative rounded-2xl ${
                index === solutionItems.length - 1 
                  ? "bg-[#0066B3]" 
                  : "bg-white"
              }`}
            >
              <p className={`absolute right-[1.5rem] text-xl bottom-[1.5rem] ${
                index === solutionItems.length - 1 
                  ? "text-white" 
                  : "text-[#1B1C19]"
              }`}>
                {item.desc}
              </p>
              <img 
                className="absolute left-[1.5rem] top-[1.5rem] w-[2rem] h-[2rem] object-contain" 
                src={item.image} 
                alt={item.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySolutions;