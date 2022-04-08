import React, { useState } from 'react';
import ToDo from "./ToDo";
const ToDoList =() => {

  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value)
}
  const listOfItems =()=>{
      setItem((olditem)=>{
        return [...olditem, inputList]
      })
      setInputList("")
}
const deleteitem = (id)=>{
    console.log("deleted")

    setItem((olditem)=>{
      return olditem.filter((arrElem, index)=>{
        return index !== id;
      })
    })
}
    return(
      <>
          <div className="main">
            <div className="sub-main">
              <br/>
              <h1>TO DO LIST</h1>
              <br/>
              <input type="text" placeholder ="Add a Item" value={inputList} onChange={itemEvent}/>
              <button onClick={listOfItems}> + </button>

              <ol>

               { item.map((itemval, index)=>{
                    return <ToDo
                            key = {index}
                            id = {index} 
                            text = {itemval} 
                            onSelect = {deleteitem}
                            />
                })}
              </ol>
            </div>
          </div>
      </>
    )
 
  }
export default ToDoList;
