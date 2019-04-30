import React, { Component } from "react";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.usernameHandler = this.usernameHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
    }
    usernameHandler(e){
        this.setState({
            username: e.target.value
        })
    }
    passwordHandler(e){
        this.setState({
            password: e.target.value
        })
    }
    clickHandler(){
        alert(`Username: ${this.state.username} \n Password: ${this.state.password}`)
    }
    render() {
        return (
        <div>
            <input onChange={this.usernameHandler}></input>
            <input onChange={this.passwordHandler} type="password"></input>
            <button onClick={this.clickHandler} >Submit</button>
        </div>
        );
    }
    }

export default Login;
