import React, {Component} from 'react'
class AddList extends Component{
    state={
        name:null,dueDate:null
    }
    handleSubmit= (e) =>{
        e.preventDefault();
        this.props.Addlist(this.state);
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add an item" id="name" onChange={this.handleChange}/> <br/>
                    <input type="text" placeholder="Add an item" id="dueDate" onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
export default AddList;