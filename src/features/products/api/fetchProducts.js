import client from "../../../api/client";
export const fetchProducts = async() => {
    const response = await client.get("/v2/products");
    return response.data || []; // Return empty array if no data
};