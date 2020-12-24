const STOCK_URL_START = 'https://cloud.iexapis.com/stable/stock/';
const STOCK_URL_END = '/chart/1m?token=pk_8c5bd128eeab4bec97784baa1d133b30';

const FULL_PRICE_URL = 'https://cloud.iexapis.com/stable/stock/amgn/chart/1m?token=pk_8c5bd128eeab4bec97784baa1d133b30'

export const getPrices3Months = (ticker) =>
    fetch(STOCK_URL_START + ticker + STOCK_URL_END)
        .then(response => response.json())
