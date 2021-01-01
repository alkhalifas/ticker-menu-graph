import React from "react";
import { Link } from "react-router-dom";
import {getPrices3Months} from "../Services/ticker-service"
import "./Home.css"
import {Graph1} from "../Graph1/Graph1";

export class Home extends React.Component {
    state = {
        priceHistory: [],
        tickers: ["AMGN", "W", "FB", "GOOG", "BIIB", "PFE", "MSFT", "AMD"],
        tickerId: "GM",
    }

    componentDidMount() {
        this.tickerId = this.props.match.params.tickerId
        getPrices3Months("amgn") //todo: need to change to: this.props.match.params.tickerId
            .then(priceHistory => {
                this.setState({
                    priceHistory: priceHistory
                })
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.tickerId = this.props.match.params.tickerId
        const tickerId = this.tickerId

    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     const tickerId = this.props.match.params.moduleId
    // }

    render() {
        const tickerId = this.props.match.params.tickerId

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
                        <Graph1
                            tickerId = {this.props.match.params.tickerId}
                        />
                    </div>
                </div>
            </div>

        );
    }
}