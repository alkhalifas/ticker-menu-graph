import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {Home} from "../Home/Home";
import {Graph1} from "../Graph1/Graph1";
import Login from "../Fake/Login";

class Routes extends React.Component {

    render() {
        return (
            <div>
                <h1>Routes!</h1>
                <BrowserRouter>
                    <div className="container">
                        <Route
                            path="/tickers"
                            exact component={Home}/>
                        <Route
                            path="/"
                            exact component={Home}/>
                        <Route
                            path= "/tickers/:tickerId"
                            exact component={Home}/>
                    </div>
                </BrowserRouter>
            </div>

        );
    }
}
export default Routes