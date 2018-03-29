import React, { Component } from "react";

class AddForm extends Component {
    constructor(props){
        super(props);
        this.state={
            newItem: '',
            newDetails: ''
        }
    }

    handleAddItem(e){
        e.preventDefault();
        console.log('New item to add', this.state);
        const {newItem, newDetails} = this.state;
        this.props.add({title: newItem, detals: newDetails});
        this.setState = {
            newItem: '',
            newDetails: ''
        }
    }

    render(){
        const {newItem, newDetails} = this.state;
        return(
            <form className="row" onSubmit={this.handleAddItem.bind(this)}>
                <div className="col s6">
                    <label>New Task</label>
                    <input type="text" value={newItem} onChange={e => this.setState({newItem: e.target.value})}/>
                </div>
                <div className="col s6">
                    <label>Task Details</label>
                    <input type="text" value={newDetails} onChange={e => this.setState({newDetails: e.target.value})}/>
                </div>
                <div className="center">
                <button className="waves-effect waves-light btn-large"><i className="material-icons right">+</i>Add Task</button>    
                </div>   
            </form>    
        )
    }
}

export default AddForm;