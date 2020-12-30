import React from "react";
import {Route, Router, Link} from "react-router-dom";
import {Home} from "../Home/Home";
import {Graph1} from "../Graph1/Graph1";
import Login from "../Fake/Login";

export class Routes extends React.Component {
    state = {
        tickers: []
    }
    render() {
        return (
            <Router>
                <div className="container">
                    <Route
                        path="/tickers"
                        exact component={Login}/>
                    {/*<Route*/}
                    {/*    path="/login"*/}
                    {/*    exact component={Login}/>*/}
                    <Route
                        path= "/tickers/:tickerId"
                        exact component={Home}/>
                </div>
            </Router>
        );
    }
}