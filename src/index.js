import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoState from './ToDoState';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';




const App = () => {
  const { todos, addTodo, deleteTodo } = ToDoState([]);
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography align="center" component="h1" variant="h2">
          What You Wanna Do
          </Typography>
        <TodoForm saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo([...todos, trimmedText]);
          }
        }}
        />
        <ToDoList todos={todos} deleteTodo={deleteTodo} />
      </Container>
    </div >
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


