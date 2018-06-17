import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoForm from "./components/TodoForm";

import { todos } from './todos.json';
console.log(todos);



class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handelAddTodo =this.handelAddTodo.bind(this);
  }
 
  //Evento para agreagar al state un nuevo elemeneto
  handelAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    }

    )
  }

//Evento para eliminar los elementos del state
  removeTodo(index) {
    if (window.confirm('Estas seguro de querer eliminiarlo?')) {
      this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
    }
  }

  render() {
    //metodo map recorre uno a uno los elemntos y devuelve un arreglo
    const todos = this.state.todos.map((todos, i) => {
      return <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todos.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todos.priority}
              </span>
            </div>
            <div className="card-body">{todos.description}</div>
            <div className="card-footer">
              <button 
              className="btn btn-danger" 
              onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>;
    });
    return <div className="App">
        <nav className="navbar text-center navbar-dark bg-dark">
          <span className="text-white">
             _Num. Tareas:
            <span className="badge badge-pill badge-ligth ml-2">
              <h5>{this.state.todos.length}</h5>
            </span>
          </span>
          <a href="https://twitter.com/EleazarSauz" target="_blank" className="text-white">
            by: Eleazar Saúz
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">
                App de tareas con <a href="https://reactjs.org/" target="_blank" className="text-white">
                  React
                </a>
              </h1>
              <TodoForm onAddTodo={this.handelAddTodo} />
            </div>

            <div className="col-md-9">
              <div className="row">{todos}</div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default App;
