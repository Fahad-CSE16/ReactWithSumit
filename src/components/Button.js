import React, { Component } from 'react'

export default class Button extends Component {
    shouldComponentUpdate(nextProps){
        const { change:currentChange, locale:currentLocale } = this.props;
        const { change:nextChange, locale:nextLocale } = nextProps;
        if (currentChange === nextChange && currentLocale === nextLocale){
            return false;
        } else {
            return true;
        }
    }
    render() {
        console.log("Button")
        const { change, locale } = this.props;
        return (
            <div>
                <button type="button" onClick={()=>{change(locale)}}>Click Here2</button>
            </div>
        )
    }
}
