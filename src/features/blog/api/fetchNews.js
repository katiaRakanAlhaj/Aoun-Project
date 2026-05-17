import client from "../../../api/client";

export const fetchNews = async(queryParams = "", page = 1) => {
    // Build the query string with page parameter
    let url = `/v2/web/news?`;

    if (queryParams) {
        url += `${queryParams}&`;
    }

    url += `page=${page}`;

    const response = await client.get(url);
    return response.data || { data: [], meta: { current_page: 1, last_page: 1 } };
};