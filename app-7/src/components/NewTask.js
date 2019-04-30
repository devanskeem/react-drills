import React, { Component } from 'react'

export default class NewTask extends Component{
    constructor(){
        super()
        this.state = {
            input: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(val){
        this.setState({
            input: val
        })
    }
    handleClick(){
        console.log(this)
        this.props.add(this.state.input)
        
        this.setState({input: ''})
    }
    render(){
        return(
            <div>
                <input placeholder="Enter new task" onChange={e => this.handleChange(e.target.value)}></input>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}