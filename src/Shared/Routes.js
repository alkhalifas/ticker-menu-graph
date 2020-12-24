import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Home} from "../Home/Home";

export class Routes extends React.Component {
    state = {
        tickers: []
    }
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Route
                        path="/tickers"
                        exact component={Home}>
                    </Route>
                    <Route
                        path={[
                            "/tickers/:tickerId"]}
                        exact component={Home}>
                    </Route>
                </div>
            </BrowserRouter>
        );
    }
}