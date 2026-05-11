import client from "../../../../api/client";
export const fetchNews = async() => {
    const response = await client.get("/v2/news");
    return response.data || []; // Return empty array if no data
};