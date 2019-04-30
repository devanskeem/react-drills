import React, { Component } from "react";
import "./App.css";
import Image from './components/Image'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Image image={"https://imgix.ranker.com/user_node_img/50015/1000282804/original/jaguar-photo-u3?w=650&q=50&fm=pjpg&fit=crop&crop=faces"}/>
      </div>
    );
  }
}

export default App;
