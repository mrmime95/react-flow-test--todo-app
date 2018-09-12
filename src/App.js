/* @flow */
import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

type Todo = {
  id: number,
  title: string,
  description: string
};

type State = {
  toddos: Array<Todo>,
  counter: number,
};

type TypeOfHanfleSubmit = {
    title: string,
    description: string,
}

class App extends Component<null, State> {
  state = {
    toddos: [
      { id: 0, title: "elso", description: "Elosnek a leirasa" },
      { id: 1, title: "masodik", description: "Masodiknak a leirasa" },
      { id: 2, title: "harmadik", description: "Harmadiknak a leirasa" }
    ],
    counter: 3
  };

  handleSubmit = (todo: TypeOfHanfleSubmit) => {
    console.log("HandleSubmit", todo);
    const toddos = this.state.toddos;
    toddos.push(
      { 
        id: this.state.counter,
        title: todo.title,
        description: todo.description,
      }
    );
    this.setState(prevState => ({
      counter: prevState.counter + 1,
      toddos,
    }));
  };
  
  render() {
    return (
      <div>
        <header className="App-header" />
        <div className="App">
          <TodoList 
            todoList={this.state.toddos}
            handleSubmit={this.handleSubmit}
            />
        </div>
      </div>
    );
  }
}

export default App;
