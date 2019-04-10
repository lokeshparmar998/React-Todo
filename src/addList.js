import React, {Component} from 'react'
class AddList extends Component{
    state={
        name:''
    }
    handleSubmit= (e) =>{
        e.preventDefault();
        this.props.Addlist(this.state);
        this.setState({
            name:''
        })
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render(){
        return(
            <div className="input">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Add an item" id="name" onChange={this.handleChange} value={this.state.name}/> <br/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}
export default AddList;