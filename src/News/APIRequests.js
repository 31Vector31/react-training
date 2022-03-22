import axios from "axios";

const baseURL = "https://newsdata.io/api/1/news";
const apikey = "pub_4763a33da9f09d1d3c686abdf064d994cf06";

export function getNewsAPIRequests(language, category, page, q) {
    return axios.get(baseURL, {
        params: {
            apikey,
            page,
            language,
            category,
            q
        },
    })
        .then(res => res.data);
}