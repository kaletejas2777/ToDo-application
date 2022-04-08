import React from 'react';

const Todo = (props) => {
  return (
      <>
    <div className='todo_style'>
    <i className="fa-brands fa-amazon-pay"></i>
      <li>{props.text}</li>;
    </div>
    </> 
    )
};

export default Todo;

