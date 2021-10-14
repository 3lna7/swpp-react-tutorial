import React from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList/TodoList'; //can omit .js
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import NewTodo from './containers/TodoList/NewTodo/NewTodo';

function App() {
  return (
    //Simply routes two pages to two different url
    //One /todos show us the Todo page
    //another is /new-todo which takes us just to a Add a Todo page

    //We need to use switch because of the Redirect part
    //the root would be todos list but the only way
    //we could go to newtodo was from the link in todos
    //So we add the Switch tag and it was solved
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/todos" exact render={() => <TodoList title="My TODOs" />} />
          <Route path="/new-todo" exact component={NewTodo} />
          <Redirect exact from='/' to='todos' />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
