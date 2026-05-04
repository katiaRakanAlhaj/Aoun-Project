import productBanner from "../../../assets/images/productBanner.png";
import MainBanner from "../../../component/banner/mainBanner";
const ProductImage = () => {
  return (
    <div className="relative">
      <MainBanner image={productBanner} />
      <div className="absolute right-[4rem] top-1/4 mt-[1.5rem]">
        <h1 className="text-[2.5rem] font-bold text-primary">
          معرض المنتجات وشركاء النجاح
        </h1>
        <p className="text-[#57534E] w-[70%] text-[1.4rem] mt-3 leading-9">
          المنصة الصناعية العمانية المتكاملة لاستعراض الابتكارات المحلية وربط
          المصنعين العمانيين بالأسواق العالمية بدعم من نخبة المؤسسات السيادية
          والشركاء الاستراتيجيين.
        </p>
      </div>
    </div>
  );
};
export default ProductImage;
