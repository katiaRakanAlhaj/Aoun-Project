import { useQuery } from "@tanstack/react-query"
import { fetchNews } from "../api/fetchNews";
export const useFetchNews = () => {
    return useQuery({
        queryKey: ["v2/news"],
        queryFn: fetchNews,

    });
}