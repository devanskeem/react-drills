import React, { Component } from "react";
import "./App.css";
import Todo from './components/Todo.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      todoList: []
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  changeHandler(val){
    this.setState({
      input: val
    })
  }
  clickHandler(){
    let list = this.state.todoList;
    list.push(this.state.input)
    this.setState({
      todoList: list 
    })
  }
  render() {
    let list = this.state.todoList
    let output = list.map((element, index) => <Todo key={index} task={element}/>)
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <input onChange={e => this.changeHandler(e.target.value)} type="text"></input>
        <button onClick={this.clickHandler}>Add</button>
        {output}
      </div>
    );
  }
}

export default App;
