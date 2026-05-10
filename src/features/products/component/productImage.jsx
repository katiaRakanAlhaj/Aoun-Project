import i18next from "i18next";
import productBanner from "../../../assets/images/productBanner.png";
import MainBanner from "../../../component/banner/mainBanner";
const ProductImage = () => {
  return (
    <div className="relative">
      <MainBanner image={productBanner} />
      <div className={`absolute ${i18next.language == "ar"?'lg:right-[4rem] right-[2rem]':'lg:left-[4rem] left-[2rem]'} md:top-1/4 top-[1rem] mt-[1.5rem]`}>
        <h1 className="lg:text-[2.5rem] text-[1.5rem] font-bold text-primary">
          معرض المنتجات وشركاء النجاح
        </h1>
        <p className="text-[#57534E] lg:w-[70%] md:w-[90%] lg:text-[1.4rem] text-[1rem] mt-3 leading-9">
          المنصة الصناعية العمانية المتكاملة لاستعراض الابتكارات المحلية وربط
          المصنعين العمانيين بالأسواق العالمية بدعم من نخبة المؤسسات السيادية
          والشركاء الاستراتيجيين.
        </p>
      </div>
    </div>
  );
};
export default ProductImage;
