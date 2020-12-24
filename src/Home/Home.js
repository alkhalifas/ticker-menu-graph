import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import {getPrices3Months} from "../Services/ticker-service"
import "./Home.css"

export class Home extends React.Component {
    state = {
        priceHistory: [],
        tickers: ["AMGN", "W", "FB", "GOOG", "BIIB"],
    }

    componentDidMount() {
        getPrices3Months("amgn")
            .then(priceHistory => {
                this.setState({
                    priceHistory: priceHistory
                })
            })
    }

    render() {
        return (
            <div className="container-fluid container">
                <div className="row">
                    <div className="col-3">
                        <h1>Ticker List:</h1>
                        <ul className="list-group">
                            {
                                this.state.tickers.map(ticker =>
                                    <li
                                        key={ticker}
                                        className="list-group-item">
                                        <BrowserRouter>
                                            <Link to={`/tickers/${ticker}`}>
                                                {ticker}
                                            </Link>
                                        </BrowserRouter>

                                    </li>
                                )
                            }
                            <li className="list-group-item">
                                <button className="btn btn-primary">Add + </button>
                            </li>
                        </ul>

                    </div>
                    <div className="col-9">
                        <h1>Graph:</h1>
                        {console.log(this.state.priceHistory)}
                    </div>
                </div>
            </div>

        );
    }
}