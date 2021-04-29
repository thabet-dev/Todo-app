import React, { Component } from 'react';
import Task from './components/Task';
import {v4} from 'uuid';

export default class App extends Component {
    state = {
      title : '' ,
      tasks :[ {
        id : v4(),
        name : "collecting tomatoes",
        completed : false
      },
      {
        id : v4(),
        name : "waching youtube",
        completed : false
      },
      {
        id : v4(),
        name : "reading a story",
        completed : false
      },]
    }
    changeCompleted = id =>{
      this.setState({
        tasks : this.state.tasks.map(task =>{
          if (task.id === id) {
            task.completed = !task.completed
          } return task;
        })
      })
    }
    delTask = id => {
      this.setState({
        tasks : this.state.tasks.filter(task => task.id!=id)
      })
    }

    change = e => {
        this.setState({
          [e.target.name] : e.target.value ,
          target :  [...this.state.tasks]
        })
    };

    
  submit = e => {
    e.preventDefault();
    if (this.state.title.length >0) {
      let newItem ={
          id : v4(),
          name : this.state.title,
          completed : false
        }
       // console.log(newItem)
    this.setState({ title : '',
      tasks : [newItem , ...this.state.tasks]});
  }}
  render() {
    return (
      <div style={containerStyle}>
      <form onSubmit={this.submit}>
            <input type="text" name="title" onChange={this.change}
          value={this.state.title} ></input>
            <input type="submit" value="click here" ></input>
      </form>
            {this.state.tasks.map(task => {
          return <Task task={task} 
          changeCompleted={this.changeCompleted}
          delTask={this.delTask}
          key={task.id} />
      })} </div>
    )
  }
}



const containerStyle ={
  width: "80%",
  margin : "10px auto",
  color : "#fff",
  padding: "20px",
  textAlign : "center",
  background : "#202020"
}