import React, { useState } from 'react';
import ToDoList from './ToDoList';
function Form() {

  const [input, setInput] = useState("");
  const [item, setItem] =useState([]);

  const update =(event) =>{
    setInput(event.target.value);
  }
  const change =()=>{
    setItem((olditem)=>{
      return [...olditem, input];
    })
    setInput('');
    

  }
return (
    <>
    <div className="main">
      <div className="sub-main">
      <br />
      <h1>To Do List</h1>
      <br />
      <input type="text" placeholder='Add a item' value={input} onChange={update}/>
      <button onClick={change}> + </button> 

      <ol>
        {item.map((itemval,index)=>{
          return(
            <ToDoList key={index}
            id={index}
            text= {itemval} 
            />
          );
        })
        }
        </ol>           
       </div>
    </div>
        
      
     
   </>
)
}
export default Form;