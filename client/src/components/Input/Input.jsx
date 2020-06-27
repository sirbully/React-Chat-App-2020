import React from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className='form'>
      <input
        type='text'
        placeholder='Type message...'
        className='input'
        value={message}
        onChange={({ target }) => setMessage(target.value)}
        onKeyPress={event => event.key === 'Enter' && sendMessage(event)}
      />
      <button className='sendButton' onClick={event => sendMessage(event)}>
        Send
      </button>
    </form>
  );
};

export default Input;
