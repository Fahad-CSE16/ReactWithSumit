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
        const { change, locale, bangla, valobasa } = this.props;
        return (
            <div>
                <button type="button" onClick={()=>{change(locale)}}>{bangla ? "ঘড়ি পরিবর্তন করুন" : "change clock"} </button>{valobasa && <p>ভালবাসা নিন</p>}
            </div>
        )
    }
}
