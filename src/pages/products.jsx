import GovernmentAgencies from "../features/products/component/GovernmentAgencies";
import JoinOurIndustrialCommunity from "../features/products/component/JoinOurIndustrialCommunity";
import ProductImage from "../features/products/component/productImage";
import ProductsGrid from "../features/products/component/productsGrid";
import { useFetchProducts } from "../features/products/hook/useFetchProducts";

const Products = ()=> {
    const {data:productsData , isLoading:productsDataLoading,error:productsDataError} = useFetchProducts();
    return(
        <div>
            <ProductImage/>
            <ProductsGrid productsData = {productsData}/>
            <JoinOurIndustrialCommunity/>
            <GovernmentAgencies/>
        </div>
    )
}
export default Products;