import { useQuery } from "@tanstack/react-query"
import { fetchFaq } from "../api/fetchFaq";
export const useFetchFaq = () => {
    return useQuery({
        queryKey: ["v2/HelpAndSupports"],
        queryFn: fetchFaq,

    });
}