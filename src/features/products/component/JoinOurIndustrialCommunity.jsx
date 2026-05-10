import SecondTitleStyle from "../../../ui/secondTitleStyle";
import governate1 from "../../../assets/images/governate1.jpg";
import governate2 from "../../../assets/images/governate2.jpg";
import governate3 from "../../../assets/images/governate3.jpg";
import governate4 from "../../../assets/images/governate4.jpg";
import governate5 from "../../../assets/images/governate5.jpg";
import governate6 from "../../../assets/images/governate6.jpg";
import help1 from "../../../assets/images/help1.jpg";
import help2 from "../../../assets/images/help2.jpg";
import help3 from "../../../assets/images/help3.jpg";
import help4 from "../../../assets/images/help4.jpg";
import sharing1 from "../../../assets/images/sharing1.jpg";
import sharing2 from "../../../assets/images/sharing2.jpg";
import sharing3 from "../../../assets/images/sharing3.jpg";
import sharing4 from "../../../assets/images/sharing4.jpg";
import sharing5 from "../../../assets/images/sharing5.jpg";
import sharing6 from "../../../assets/images/sharing6.jpg";

const JoinOurIndustrialCommunity = () => {
  const data = [
    {
      title: "الجهات الحكومية",
      images: [
        governate1,
        governate2,
        governate3,
        governate4,
        governate5,
        governate6,
      ],
    },
    {
      title: "الجهات المساندة",
      images: [help1, help2, help3, help4],
    },
    {
      title: "الشركات المشاركة",
      images: [sharing1, sharing2, sharing3, sharing4, sharing5, sharing6],
    },
  ];

  return (
    <div className="w-full h-auto bg-[#FFFFFF] lg:py-[5rem] py-[3rem]">
      <div className="flex justify-center flex-col items-center">
        <SecondTitleStyle title={"شركاء النجاح"} />
        <div className="w-[6.5rem] h-[0.3rem] bg-secondary mt-[1rem] rounded-full"></div>
      </div>

      <div className="mt-[4rem]">
        <div className="container mx-auto px-4">
          {data.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-[5rem]">
              <div className="flex gap-x-4 items-center">
                <p className="font-extrabold text-secondary text-xl">
                  {String(sectionIndex + 1).padStart(2, "0")}
                </p>
                <p className="text-[1.5rem] font-bold text-dark text-nowrap">
                  {section.title}
                </p>
                <div className="w-full h-[0.01rem] bg-[#D6D3D1] mt-1"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[4rem] gap-y-6 mt-[5rem]">
                {section.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="flex justify-center">
                    <img
                      src={image}
                      alt={`${section.title} ${imageIndex + 1}`}
                      className="w-[5rem] h-[5rem] object-cover opacity-[60%]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinOurIndustrialCommunity;
