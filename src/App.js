import React from 'react';
import styled from 'styled-components';
import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';
import './components/Todo.css';

const todos = [
  {
    task: '',
    id: 1,
    completed: false
  },
]
const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center
`

const List = styled.div `
  width: 300px;
  height: 450px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
`

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
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <Container>
        <List>
          <h2>Definitely should do these things..</h2>
          <TodoForm addTodo={this.addTodo} />
          <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
        </List>
      </Container>
    );
  }
}

export default App;
