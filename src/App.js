import React from 'react';

import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';

const todos = [
  {
    task: '',
    id: 1,
    completed: false
  },
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
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  toggleCompleted = clickedTodoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedTodoId) {
          return {
            ...todo,
            completed: !todo.completed
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
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}/>
      </div>
      
    );
  }
}

export default App;
