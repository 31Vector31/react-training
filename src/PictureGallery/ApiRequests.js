import axios from "axios";

const CancelToken = axios.CancelToken;
let cancel;

export function getPictures(search, page) {
    if (cancel !== undefined) cancel();
    return axios.get("https://pixabay.com/api/", {
        cancelToken: new CancelToken((c) => (cancel = c)),
        params: {
            q: search,
            page,
            key: "24560899-7f54ccf9b913d8ded23167d7d",
        },
    })
        .then(res => res.data.hits);
}