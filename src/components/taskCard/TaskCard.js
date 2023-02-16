import React from 'react'
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../../redux/action";
import EditTask from "../editTask/EditTask";

const TaskCard = ({ task }) => {
  const dispatch= useDispatch();
  return (
    <div>
<h1 id={task.isDone ? "complete" : "undo"}>{task.tache}</h1>
<button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
<button onClick={()=>dispatch(completeTask(task.id))}>{task.isDone ? "undo" : "complete"}</button>
{task.isDone ? null : <EditTask task={task} />}

    </div>
  );
};

export default TaskCard;