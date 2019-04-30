import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      filter: '',
      array: ['Brooke', 'Rylee', 'Hallie', 'Kaden', 'Dasha']
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e){
    this.setState({
      filter: e.target.value
    })
  }
  render() {
    let array = this.state.array;
    let filtered = array.filter(element => element.includes(this.state.filter))
    let list = filtered.map((element,index)=> <h1 key={index}>{element}</h1>)
    return (
      <div className="App">
      {list}
      <input onChange={this.changeHandler}></input>
      </div>
    );
  }
}

export default App;
