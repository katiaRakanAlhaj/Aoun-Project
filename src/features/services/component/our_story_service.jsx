import SecondTitleStyle from "../../../ui/secondTitleStyle";

const OurStoryService = () => {
  return (
    <div className="h-auto  py-[6rem] w-full bg-[#F5F3EE]">
      <div className="container2 mx-auto">
        <div className="">
         <SecondTitleStyle title = {"قصتنا ورؤيتنا"}/>
          <p className="text-lg mt-[1rem] text-dark">
            نحن نؤمن بأن الابتكار والجودة العمانية يستحقان الوصول إلى كل
            بيت.منصة "الصناعة العمانية" هي المبادرة الرقمية الرائدة التي تسعى
            لتحويل القطاع الصناعي في السلطنة بما يتواكب مع رؤية عمان 2026{" "}
          </p>
          <div className="w-full px-[1rem] flex  items-center h-[5rem] bg-white rounded-[0.8rem] mt-[1.5rem]  relative">
            <div className="absolute h-full w-[0.2rem] rounded-tr-[0.8rem] rounded-br-[0.8rem] bg-[#0B6C4B] right-0 top-0 bottom-0 flex"></div>
            <p className="text-md text-secondary">
              "نهدف إلى خلق بيئة رقمية متكاملة تدعم الصناعات المحلية وتعزز من
              تنافسيتها عالمياً من خلال التكنولوجيا والذكاء الاصطناعي."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurStoryService;
