import React from 'react';
import { render } from 'react-dom';
import Chart from './Chart';
import { getData } from "./utils"
import { TypeChooser } from "react-stockcharts/lib/helper";

// https://codesandbox.io/s/github/rrag/react-stockcharts-examples2/tree/master/examples/AreaChart?file=/src/utils.js:0-579

export class Graph1 extends React.Component {
    componentDidMount() {
        console.log("G1 this.tickerId:", this.tickerId)
        getData().then(data => {
            this.setState({ data })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("G1 this.state.tickerId:", this.state.tickerId)
        console.log("G1 this.tickerId:", this.tickerId)
        console.log("G1 this.props.tickerId:", this.props.tickerId)

    }

    render() {
        if (this.state == null) {
            return <div>Loading...</div>
        }
        return (
            <TypeChooser>
                {type => <Chart
                    type={type}
                    data={this.state.data} />}
            </TypeChooser>
        )
    }
}

