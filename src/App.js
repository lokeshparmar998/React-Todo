import React, { Component } from 'react';
import AddList from './addList'
import ShowList from './showList'

class App extends Component {
  state = {
    myTodo:[{name:"buy water",id:1}]
  }
  Addlist = (myTodo) =>{
    myTodo.id=Math.random();
    let todo=[...this.state.myTodo,myTodo]
    this.setState({
      myTodo:todo
    })
  }
  DeleteList = (id) =>{
    console.log(id);
    let mytodo = this.state.myTodo.filter(detail=>{
      return detail.id !== id;
    })
    this.setState({
      myTodo:mytodo
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Whats in my Todo list?</h1>
        <AddList Addlist={this.Addlist}/>
        <ShowList Showlist={this.state.myTodo}  DeleteList={this.DeleteList}/>
      </div>
    );
  }
}

export default App;
