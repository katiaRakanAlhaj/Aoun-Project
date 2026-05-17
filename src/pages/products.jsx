import Loader from "../component/loader/loader";
import MetaHelmet from "../component/meta/metaHelemt";
import ScrollToTop from "../component/scrollToTop.js/scrollToTop";
import { useFetchHomePage } from "../features/home/hook/useFetchHomePage";
import GovernmentAgencies from "../features/products/component/GovernmentAgencies";
import JoinOurIndustrialCommunity from "../features/products/component/JoinOurIndustrialCommunity";
import ProductImage from "../features/products/component/productImage";
import ProductsGrid from "../features/products/component/productsGrid";
import { useFetchPartners } from "../features/products/hook/useFetchPartners";
import { useFetchProducts } from "../features/products/hook/useFetchProducts";

const Products = () => {
  const {
    data: productsData,
    isLoading: productsDataLoading,
    error: productsDataError,
  } = useFetchProducts();
  const {
    data: partnerData,
    isLoading: partnerDataLoading,
    error: partnerDataError,
  } = useFetchPartners();
  const {
    data: homePageData,
    isLoading: homePageDataLoading,
    error: homePageDataError,
  } = useFetchHomePage();
  if (productsDataLoading || partnerDataLoading || homePageDataLoading) {
    return <Loader />;
  }
  return (
    <div>
      <ScrollToTop />
      <MetaHelmet title={"Products"} description={"Products"} />
      <ProductImage />
      <ProductsGrid productsData={productsData} />
      <JoinOurIndustrialCommunity partnerData={partnerData} />
      <GovernmentAgencies homePageData={homePageData} />
    </div>
  );
};
export default Products;
