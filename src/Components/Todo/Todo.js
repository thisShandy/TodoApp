import React, { useState } from 'react';
import './Todo.css'

const Todo = ({ props, remove, change }) => {
  return (
    <div className="row">
      <div className="todo-container">
        <div className="col-9">
          <button className="name-container todo-container__name-contanier" onClick={() => {
            change(props.id)
          }} type="button">
            <h4 style={{
              textDecoration: props.checked ? 'line-through' : 'none',
              color: props.checked ? 'rgba(240, 248, 255, 0.7)' : 'rgb(240, 248, 255)',
            }} className="todo-text name-container__todo-text">{ props.name }</h4>
          </button>
        </div>
        <div className="col-1">
          <button onClick={() => {
            remove(props.id)
          }} className="todo-button todo-container__todo-button">
            <div className="todo-icon todo-button__todo-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;