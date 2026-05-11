import client from "../../../api/client";
export const fetchFaq = async() => {
    const response = await client.get("/v2/HelpAndSupports");
    return response.data || []; // Return empty array if no data
};