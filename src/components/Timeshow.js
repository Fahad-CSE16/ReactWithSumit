import React, { Component } from 'react'

export default class Timeshow extends Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
        }
    }
    componentDidMount(){
        this.clock = setInterval(()=>{this.timer()},1000);
    }
    componentWillUnmount(){
        clearInterval(this.clock);
    }
    timer(){
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString(this.props.locale)}</h1>
            </div>
        )
    }
}
