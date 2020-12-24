import React from "react";
import {getPrices3Months} from "../Services/ticker-service"

export class Home extends React.Component {
    state = {
        priceHistory: [],
        tickers: ["AMGN", "W", "FB", "GOOG", "BIIB"],
    }

    componentDidMount() {
        getPrices3Months()
            .then(priceHistory => {
                this.setState({
                    priceHistory: priceHistory
                })
            })
    }

    render() {
        return (
            <div className="container-fluid container">
                <div>
                    <h1>Ticker List:</h1>
                    <ul>
                        {
                            this.state.tickers.map(ticker =>
                            <li>
                                {ticker}
                            </li>
                            )
                        }
                    </ul>
                    <li>
                        <button className="btn btn-primary">Add + </button>
                    </li>
                </div>
            </div>
        );
    }
}