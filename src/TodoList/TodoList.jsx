import React, { useState } from 'react'
import TodoItems from './TodoItems';

const TodoList = () => {
 const[text, setText]=useState("");
 const[todo, setTodo]=useState([]);


 const handleChange=(event)=>{
  // console.log(event.target.value);
 setText(event.target.value); // when this function is called it will update text= "event.target.value"
 }
 
 const handleSubmit=()=>{
 
    let newText={
        title:text,
        id:new Date().toDateString + text,
    }

    setTodo([...todo,newText]);// new text will be added to todo array
    setText(" ");
 }
 
 const handleDelete=(id)=>{
  console.log("clicked delete");
    // console.log(id);
     const todoAfterDeletion= todo.filter(function(element,index){
        return element.id != id; // we are excluding the matched id element
      });
      // console.log(todoAfterDeletion);
      setTodo(todoAfterDeletion);
     }
 
  const handleEditTodo=(id,newItem)=>{
     let updatedTodo= todo.map((element)=>{
        if(element.id ===id){
            return {...element, title:newItem}; //this is updating the title to latest value 
        } 
        return element;
     });
        setTodo(updatedTodo);
   
    }
  return ( 
    <div>
   <input type="text" value={text} onChange={handleChange}/>
    <button onClick={handleSubmit}>submit</button>

    <ol>
    <TodoItems todo={todo}  handleDelete={handleDelete} handleEditTodo={handleEditTodo}/>
    </ol>


    </div>
    
  )

}
export default TodoList