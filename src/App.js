import React from 'react';

import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';

const todos = [
  {
    task: 'learn React',
    id: 1,
    completed: false
  },
  {
    task: 'finish todo list',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos,
      task: ''
    };
  }

  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleComplete = clickedTodoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedTodoId) {
          return {
            ...todo,
            purchased: !todo.purchased
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete}/>
      </div>
      
    );
  }
}

export default App;
