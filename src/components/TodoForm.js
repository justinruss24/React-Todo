import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    };

    handleChanges = e => {
        this.setState({
            todo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="todo" value={this.state.todo} onChange={this.handleChanges} />
                <button>Add</button>
            </form>
        )
    }


}

export default TodoForm;