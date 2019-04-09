import React, { Component } from 'react';
import AddList from './addList'
import ShowList from './showList'

class App extends Component {
  state = {
    myTodo:[{name:null,dueDate:null,id:null}]
  }
  Addlist = (myTodo) =>{
    myTodo.id=Math.random();
    let todo=[...this.state.myTodo,myTodo]
    this.setState({
      myTodo:todo
    })
  }
  deleteList = (id) =>{
    console.log(id);
   // let mytodo = this.state.myTodo.filter(detail=>{
      
    //})
  }
  render() {
    return (
      <div className="App">
        <h1>Whats in my Todo list?</h1>
        <AddList Addlist={this.Addlist}/>
        <ShowList Showlist={this.state.myTodo}  deleteList={this.deletList}/>
      </div>
    );
  }
}

export default App;
