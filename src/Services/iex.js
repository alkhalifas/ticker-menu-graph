import axios from "axios";

const api = axios.create({
    baseURL: "https://cloud.iexapis.com/v1"
});

export const loadQuotesForStock = symbol => {
    return api.get(`/stock/${symbol}/quote?token=pk_8c5bd128eeab4bec97784baa1d133b30`).then(res => res.data);
};

export const loadLogoForStock = symbol => {
    return api.get(`/stock/${symbol}/logo?token=pk_8c5bd128eeab4bec97784baa1d133b30`).then(res => res.data.url);
};

export const loadRecentNewsForStock = symbol => {
    return api.get(`/stock/${symbol}/news?token=pk_8c5bd128eeab4bec97784baa1d133b30`).then(res => res.data);
};

export const loadChartForStock = (symbol, range) => {
    return api.get(`/stock/${symbol}/chart/${range}?token=pk_8c5bd128eeab4bec97784baa1d133b30`).then(res => res.data);
};
