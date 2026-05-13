import client from "../../../api/client";
export const fetchSingleNew = async(id) => {
    const response = await client.get(`/v2/get-news-by-id?id=${id}`);
    return response.data || {}; // Return empty object if no data
};