import React, {useEffect, useState} from "react";
import './App.css';
import Input from "./Components/Input/Input";
import Todo from "./Components/Todo/Todo";
import Footer from "./Components/Footer/Footer";

function App() {

  const [ todos, setTodos ] = useState([])

  const [ sortSelector, setSortSelector ] = useState(true)

  const removeTodo = (id) => {
    setTodos( todos.filter((todo) => todo.id !== id) );
  }

  const changeTodo = (id) => {
    setTodos( todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    }) );
  }

  const addTodo = ( name ) => {
    if (name) {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          name,
          checked: false,
        }
      ]);
    }
  }

  const changeSelector = () => {
    setSortSelector(!sortSelector)
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
    console.log(JSON.parse(localStorage.getItem('todos')));
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div className="wrapper">
      <div className="container">
        <Input add={addTodo} />
        {
          todos.length === 0 ?
          <h2 className="text wrapper__text">Todos list is empty</h2>
          : sortSelector ?
          todos.map((todo) => <Todo key={todo.id} props={todo} remove={removeTodo} change={changeTodo} />)
          : todos.filter((todo) => todo.checked !== true ).map((todo) => <Todo key={todo.id} props={todo} remove={removeTodo} change={changeTodo} />)
        }
        <Footer mode={sortSelector} setMode={changeSelector} />
      </div>
    </div>
  );
}

export default App;
