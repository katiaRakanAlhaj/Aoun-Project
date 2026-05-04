import SecondTitleStyle from "../../../ui/secondTitleStyle";
const JourneyOfSuccess = () => {
  const successItems = [
    {
      num: "01",
      title: "تسجيل المنشأة",
      desc: "خطوات بسيطة لتوثيق مصنعك واعتماده رسمياً في المنصة.",
    },
    {
      num: "02",
      title: "عرض المنتجات",
      desc: "تظهر منتجاتك في واجهة عصرية تصل لآلاف المستهلكين يومياً.",
    },
    {
      num: "03",
      title: "إضافة المنتجات",
      desc: "ارفع تفاصيل منتجاتك، صورها، ومواصفاتها الفنية بكل سهولة.",
    },
    {
      num: "04",
      title: "الاستحواذ والبيع",
      desc: "استقبل الطلبات وتمم عمليات البيع بشكل آمن ومباشر.",
    },
  ];
  return (
    <div className="h-auto w-full py-[6rem] bg-white">
      <div className="flex flex-col justify-center items-center">
        <SecondTitleStyle title={"رحلة النجاح"} />
        <div className="w-[5.5rem] h-[0.3rem] bg-secondary mt-[1rem] rounded-full"></div>
      </div>
      <div className="container4 mx-auto mt-[3rem]">
        <div className="grid grid-cols-2 gap-x-[2rem] gap-y-[4rem]">
          {successItems?.map((successItems) => (
            <div className="flex gap-x-5">
              <div className="w-[4rem] h-[4rem] flex justify-center items-center rounded-xl bg-[#E3EAE3]">
                <div className="text-3xl text-primary font-extrabold opacity-100">
                  {successItems?.num}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-[1.5rem] text-[#333333] font-bold">
                  {successItems?.title}
                </h1>
                <p className="text-[#525252] text-md mt-2">
                  {successItems?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default JourneyOfSuccess;
