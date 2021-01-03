import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "./utils"
import { TypeChooser } from "react-stockcharts/lib/helper";
import getPrices3Months from "../Services/ticker-service"


// https://codesandbox.io/s/github/rrag/react-stockcharts-examples2/tree/master/examples/AreaChart?file=/src/utils.js:0-579

export class Graph1 extends React.Component {
    componentDidMount() {
        getData().then(data => {
            this.setState({ data })
        })
        // this.setState(dataset => getPrices3Months("amgn"))
        // console.log(this.state.dataset)

        // getPrices3Months("amgn") //todo: need to change to: this.props.match.params.tickerId
        //     .then(priceHistory => {
        //         this.setState({
        //             priceHistory: priceHistory
        //         })
        //     })
        // console.log("G1 priceHistory: ", this.priceHistory)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h1>Graph1: {this.props.tickerId}</h1>
                {console.log("Graph1 this.props.priceHistory: ", this.props.priceHistory)}
                {console.log("Graph1 this.state.data: ", this.state.data)}
                <TypeChooser>
                    {type => <Chart
                        type={type}
                        tickerId = {this.props.tickerId}
                        // data = {this.props.priceHistory}
                        data={this.state.data}
                    />}
                </TypeChooser>
            </div>

        )
    }
}

