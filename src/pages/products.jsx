import GovernmentAgencies from "../features/products/component/GovernmentAgencies";
import JoinOurIndustrialCommunity from "../features/products/component/JoinOurIndustrialCommunity";
import ProductImage from "../features/products/component/productImage";
import ProductsGrid from "../features/products/component/productsGrid";
import { useFetchPartners } from "../features/products/hook/useFetchPartners";
import { useFetchProducts } from "../features/products/hook/useFetchProducts";

const Products = ()=> {
    const {data:productsData , isLoading:productsDataLoading,error:productsDataError} = useFetchProducts();
    const {data:partnerData , isLoading:partnerDataLoading , error:partnerDataError} = useFetchPartners();
    return(
        <div>
            <ProductImage/>
            <ProductsGrid productsData = {productsData}/>
            <JoinOurIndustrialCommunity partnerData = {partnerData}/>
            <GovernmentAgencies/>
        </div>
    )
}
export default Products;