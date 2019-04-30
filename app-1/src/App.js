import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e){
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.changeHandler}></input>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
