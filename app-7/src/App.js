import React, { Component } from "react";
import "./App.css";
import List from './components/List.js'
import NewTask from './components/NewTask.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: []
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleAdd(task){
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>To Do List: </h1>
        <NewTask add={this.handleAdd}/>
        <List list={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
