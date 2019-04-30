import React, { Component } from 'react'
import Todo from './Todo'

export default class List extends Component{
    render(){
        let tasks = this.props.list.map((element, index) => <Todo key={index} task={element}/>)
        return(
            <div>{tasks}</div>
        )
    }
}