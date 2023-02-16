import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { taskAdd, filterTask} from "../../redux/action";


const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newTodo = { id: Math.random(), tache: text, isDone: false };
    text.trim()==="" ? alert("add task in the input") : dispatch(taskAdd(newTodo)) ;
    setText("");
  };
  return (
    <div>
        <h1>TODO LIST</h1>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={text}  onChange={(e)=>setText(e.target.value)}/>
          <button type="submit">Add</button>
        </form>
        <button onClick={()=>dispatch(filterTask())}>Filter</button>
    </div>
  );
};

export default AddTask;