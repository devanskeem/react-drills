import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state ={
      filter: '',
      array: ['Brooke','Clint','Cora','Knox','Devan']
    }

    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e){
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    let filter = this.state.filter
    let array = this.state.array;
    let filtered = array.filter(element => element.includes(filter))
    let list = filtered.map((element, index) => <h3 key={index}>{element}</h3>)
    return (
      <div className="App">
      {list}
      <input onChange={this.changeHandler} type="text"></input>
      </div>
    );
  }
}

export default App;
