import client from "../../../api/client";

export const fetchNews = async(queryParams = "") => {
    const url = queryParams ? `/v2/web/news?${queryParams}` : "/v2/web/news";
    const response = await client.get(url);
    return response.data || []; // Return empty array if no data
};