import { useQuery } from "@tanstack/react-query"
import { fetchCategories } from "../api/fetchCategories";
export const useFetchCategories = () => {
    return useQuery({
        queryKey: ["v2/category"],
        queryFn: fetchCategories,

    });
}