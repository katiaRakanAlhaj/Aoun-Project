import SecondTitleStyle from "../../../ui/secondTitleStyle";
import product1 from "../../../assets/images/product1.jpg";
import product2 from "../../../assets/images/product2.jpg";
import product3 from "../../../assets/images/product3.jpg";
import product4 from "../../../assets/images/product4.jpg";
import product5 from "../../../assets/images/product5.jpg";
import producIcon from "../../../assets/images/productIcon.svg";
import download from "../../../assets/images/download.svg";
const ProductsGrid = () => {
  const productsGridItems = [
    {
      image: product1,
      title: "محولات الطاقة",
      desc: "المحولات العمانية",
      icon: producIcon,
    },
    {
      image: product2,
      title: "تصميم وإنتاج المنتجات البلاستيكية ",
      desc: "التقنية للمعادن",
      icon: producIcon,
    },
    {
      image: product3,
      title: "أنظمة الطاقة الشمسية المتكاملة",
      desc: "عمان للطاقة المتجددة",
      icon: producIcon,
    },
    {
      image: product4,
      title: "وحدات تصنيع الأغذية",
      desc: "نماء للصناعات الغذائية",
      icon: producIcon,
    },
    {
      image: product5,
      title: "محولات الطاقة",
      desc: "المحولات العمانية",
      icon: producIcon,
    },
    {
      image: product1,
      title: "محولات الطاقة",
      desc: "المحولات العمانية",
      icon: producIcon,
    },
    {
      image: product2,
      title: "تصميم وإنتاج المنتجات البلاستيكية ",
      desc: "التقنية للمعادن",
      icon: producIcon,
    },
    {
      image: product3,
      title: "أنظمة الطاقة الشمسية المتكاملة",
      desc: "عمان للطاقة المتجددة",
      icon: producIcon,
    },
    {
      image: product4,
      title: "وحدات تصنيع الأغذية",
      desc: "نماء للصناعات الغذائية",
      icon: producIcon,
    },
    {
      image: product5,
      title: "محولات الطاقة",
      desc: "المحولات العمانية",
      icon: producIcon,
    },
  ];
  return (
    <div className="h-auto  py-[5rem] w-full">
      <div className="container2 mx-auto px-[2rem]">
        <SecondTitleStyle title={"تصفح المنتجات الصناعية"} />
        <p className="text-[#525252] text-lg mt-[1rem]">
          استكشف التميز الصناعي العماني عبر مختلف القطاعات
        </p>
        <div className="grid grid-cols-5 gap-x-[2rem] gap-y-[3.5rem] mt-[3rem]">
          {productsGridItems?.map((product, index) => (
            <div key={index}>
              <img
                className="w-full rounded-t-2xl h-[15rem] object-cover"
                src={product?.image}
              />
              <h1 className="text-dark font-bold text-xl leading-8 mt-[1.5rem]">
                {product?.title}
              </h1>
              <div className="mt-[1.3rem] items-center flex gap-x-2">
                <img
                  className="w-[1rem] h-[1rem] object-contain"
                  src={product?.icon}
                />
                <p className="text-[1rem] text-[#525252]">{product?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-[5rem]">
        <button className="w-[16rem] h-[4rem] rounded-md bg-primary flex justify-center items-center gap-x-5 cursor-pointer">
          <p className="text-white font-bold text-lg">شاهد المزيد</p>
          <img src={download} />
        </button>
      </div>
    </div>
  );
};
export default ProductsGrid;
