import React, {Component} from "react";
import './NewTodo.css'

class NewTodo extends Component{
    state = {
        title: '',
        content: '',
        submitted: false,
    }

    render(){
        return(
            <div className="NewTodo">
                <h1>Add a Todo</h1>
                <label>Title</label>
                <input type="text" value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea row="4" type="text" value={this.state.content}
                    onChange={(event) => this.setState({content: event.target.value})} />
                <button onClick={() => alert("submitted!")}>Submit</button>
            </div>
        )
    }
}
export default NewTodo;