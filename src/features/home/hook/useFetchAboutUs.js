import { useQuery } from "@tanstack/react-query"
import { fetchAboutUs } from "../api/fetchAboutUs";
export const useFetchAbout = () => {
    return useQuery({
        queryKey: ["v2/about-us"],
        queryFn: fetchAboutUs,

    });
}