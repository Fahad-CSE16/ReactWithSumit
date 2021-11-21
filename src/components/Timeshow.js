import React, { Component } from 'react'
import Button  from './Button';
export default class Timeshow extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         date : new Date(),
    //     }
    // }
    // for  only state a shortcut is
    state = {
        date : new Date(),
        locale: "bn-BD"
    }
    componentDidMount(){
        this.clock = setInterval(()=>{this.timer()},1000);
    }
    componentWillUnmount(){
        clearInterval(this.clock);
    }
    timer(){
        this.setState((state, props)=>({
            date: new Date(),
            // date: state.date + props.increment
        }))
        // this.setState({
        //     date: new Date()
        // });
    }
    handleClick = (locale) => {
        console.log("Clicked")
        this.setState({
            locale
        });
    }
    render() {
        const { date,locale } = this.state;
        console.log("Clock")
        return (
            <div>
                <h1 className="clock">{date.toLocaleTimeString(locale)}</h1>
                <Button change={this.handleClick} locale="en-US">Click Here</Button>
            </div>
        )
    }
}
