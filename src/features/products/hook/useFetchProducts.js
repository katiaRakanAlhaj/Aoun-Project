import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../api/fetchProducts";
export const useFetchProducts = () => {
    return useQuery({
        queryKey: ["v2/products"],
        queryFn: fetchProducts,

    });
}