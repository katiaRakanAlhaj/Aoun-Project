import { useQuery } from "@tanstack/react-query"
import { fetchNews } from "../component/api/fetchNews";
export const useFetchNews = () => {
    return useQuery({
        queryKey: ["v2/news"],
        queryFn: fetchNews,

    });
}