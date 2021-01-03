import React from "react";
import { Link } from "react-router-dom";
import {getPrices3Months} from "../Services/ticker-service"
import "./Home.css"
import {
    loadQuotesForStock,
    loadChartForStock
} from "../Services/iex";
import ChartLineGraph from "../Graph3/StockChart";

export class Home extends React.Component {
    state = {
        priceHistory: [],
        tickers: ["AMGN", "W", "FB", "GOOG", "BIIB", "PFE", "MSFT", "AMD"],
        tickerId: "GM",
        chart: [],
    }

    componentDidMount() {
        this.tickerId = this.props.match.params.tickerId
        getPrices3Months("amgn") //todo: need to change to: this.props.match.params.tickerId
            .then(priceHistory => {
                this.setState({
                    priceHistory: priceHistory
                })
            })
        this.loadQuote();

    }

    loadQuote = () => {
        const enteredSymbol = this.props.match.params.tickerId;

        Promise.all([
            loadQuotesForStock(enteredSymbol),
            loadChartForStock(enteredSymbol, "6m")
        ])
            .then(values => {
                const [quote, logo, news, chart] = values;
                this.setState(prevState => {
                    // Merge the quote and logo
                    const quoteWithLogo = { ...quote, logo: logo };
                    // Append the quote w/ logo in history
                    const history = prevState.quoteHistory;
                    history.push({ ...quoteWithLogo });

                    return {
                        quote: quoteWithLogo,
                        error: null,
                        quoteHistory: history,
                        news: news,
                        chart: chart
                    };
                });
            })
            .catch(error => {
                // If 404 not found
                if (error.response.status === 404) {
                    error = new Error(`The stock symbol ${enteredSymbol} does not exist`);
                }
                this.setState({ error: error });
            });
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        // const tickerId = this.props.match.params.tickerId
        // const tickerId = this.tickerId


    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const tickerId = this.props.match.params.moduleId
    // }

    render() {
        const tickerId = this.props.match.params.tickerId
        const {
            quote,
            enteredSymbol,
            quoteHistory,
            showHistory,
            news,
            showAllNews,
            chart,
            showAllChart,
            error
        } = this.state;

        const chartCloses = [];
        const chartDates = [];
        chart.map(chartItem => {
            chartDates.push(chartItem.label);
            chartCloses.push(chartItem.close);
            return null;
        });

        return (
            <div className="container-fluid container">
                <div className="row">
                    <div className="col-lg-3 col-sm-12">
                        <h1>Ticker List:</h1>
                        <ul className="list-group">

                            {
                                this.state.tickers.map(ticker =>
                                    <li
                                        key={ticker}
                                        className="list-group-item">
                                            <Link
                                                to={`/tickers/${ticker}`}>
                                                {ticker}
                                            </Link>
                                    </li>
                                )
                            }
                            <li className="list-group-item">
                                <button className="btn btn-primary">Add + </button>
                            </li>
                        </ul>

                    </div>
                    <div className="col-lg-9 col-sm-12">
                        <h1>Graph:</h1>
                        <h1>HOME: {this.props.match.params.tickerId}</h1>
                        {console.log("Home this.state.priceHistory: ", this.state.priceHistory)}
                        {/*<Graph1*/}
                        {/*    tickerId = {this.props.match.params.tickerId}*/}
                        {/*    priceHistory = {this.state.priceHistory}*/}
                        {/*/>*/}

                        {/*<Demo/>*/}

                        <ChartLineGraph
                            title={this.props.match.params.tickerId}
                            chartLabels={chartDates}
                            chartData={chartCloses}
                        />


                    </div>
                </div>
            </div>

        );
    }
}