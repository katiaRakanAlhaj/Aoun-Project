import GovernmentAgencies from "../features/products/component/GovernmentAgencies";
import JoinOurIndustrialCommunity from "../features/products/component/JoinOurIndustrialCommunity";
import ProductImage from "../features/products/component/productImage";
import ProductsGrid from "../features/products/component/productsGrid";

const Products = ()=> {
    return(
        <div>
            <ProductImage/>
            <ProductsGrid/>
            <JoinOurIndustrialCommunity/>
            <GovernmentAgencies/>
        </div>
    )
}
export default Products;