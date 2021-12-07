import React, { useState } from 'react';
import './Input.css';
import send from '../../Images/send.svg'

const Input = ({ add }) => {

  const [ name, setName ] = useState('')

  return (
    <div className="row">
      <div className="input-container">
        <div className="col-9">
          <input value={name} onChange={(event) => {
            setName(event.target.value)
          }} placeholder="Type your todo..." className="input-text input-container__input-text" type="text"/>
        </div>
        <div className="col-1">
          <button onClick={() => {
            add(name);
            setName('');
          }} type="button" className="input-button input-container__input-button">
            <div className="send-image" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;