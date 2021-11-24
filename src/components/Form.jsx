import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        name : "Fahad",
        text : "",
        check : true,
        slct : "Django"
    }
    handleOnChange=(e)=>{
        // this.setState({
        //     [e.target.name]:e.target.value,
        // })
        if (e.target.type==="text"){
            this.setState({
            name:e.target.value,
        })
        } else if (e.target.type==="textarea"){
            this.setState({
                text:e.target.value,
            })
        } else if (e.target.type==="select-one"){
            this.setState({
                slct:e.target.value,
            })
        }else if (e.target.type==="checkbox"){
            this.setState({
                check:e.target.checked,
            })
        }else {
            console.log(e.target.type)
        }
        
    }
    handleOnSubmit =(e) =>{
        e.preventDefault();
        const { name, text, slct, check } = this.state;
        console.log( name, text, slct, check )
    }
    render() {
        const { name, text, slct, check } = this.state;
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} >
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label  className="col-form-label">Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" name={name} value={name} onChange={this.handleOnChange} className="form-control" />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label className="col-form-label">TextArea</label>
                        </div>
                        <div className="col-auto">
                            <textarea name={text} value={text} onChange={this.handleOnChange} ></textarea>
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label className="col-form-label">Favourite Framework</label>
                        </div>
                        <div className="col-auto">
                            <select name={slct} value={slct} onChange={this.handleOnChange} >
                                <option value="Django">Django</option>
                                <option value="React">React</option>
                                <option value="REST">REST</option>
                                <option value="Vue">Vue</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label className="col-form-label">Checkbox</label>
                        </div>
                        <div className="col-auto">
                            <input type="checkbox"  checked={check} onChange={this.handleOnChange}  />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
            </div>
        )
    }
}
