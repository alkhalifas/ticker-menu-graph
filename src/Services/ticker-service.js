const STOCK_URL_START = 'https://cloud.iexapis.com/stable/stock/';
const STOCK_URL_END = '/company?token=pk_8c5bd128eeab4bec97784baa1d133b30';

export const getPrices3Months = (ticker) =>
    fetch(STOCK_URL_START + ticker + STOCK_URL_END)
        .then(response => response.json())
