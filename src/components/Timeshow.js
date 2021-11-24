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
        let button;
        if (locale === "en-US"){
            button = (
                <Button change={this.handleClick} bangla={false} valobasa={false} locale="bn-BD" />
            )
        }else {
            button = (
                <Button change={this.handleClick} bangla valobasa locale="en-US" />
            )
        }
        return (
            <div>
                <h1 className="clock">{date.toLocaleTimeString(locale)}</h1>
                {button}
            </div>
        )
    }
}
