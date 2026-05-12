import { useQuery } from "@tanstack/react-query"
import { fetchContact } from "../api/fetchContact";
export const useFetchContact = () => {
    return useQuery({
        queryKey: ["v2/contact-info"],
        queryFn: fetchContact,

    });
}