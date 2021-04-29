import React, { Component } from 'react'

export default class Task extends Component {
getStyle = () =>{
    return {
        textDecoration : this.props.task.completed? "line-through" : "none"
    }
}
    render() {
        const {id, name, completed} = this.props.task
        return (
            <h1>
                <input type="checkbox" checked={completed}
                onChange={this.props.changeCompleted.bind(this, id)} ></input>
                <span style={this.getStyle()}>{name}</span>
                <button style={xStyle}
                 onClick={this.props.delTask.bind(this, id)}>x</button>

            </h1>
        )
    }
}


const xStyle = {
    background : "red",
    borderRadius : "50%",
    marginLeft : "25px",
    padding : "1px 10px",
    textWeigt : "5",
    border :"none"
}