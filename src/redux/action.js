
import { DELETE_TASK, FILTER_TASK } from "./actionType";
import { COMPLETE_TASK, ADD_TASK, EDIT_TASK } from "./actionType";

export const deleteTask = (TaskID) => {
    return{
        type: DELETE_TASK,
        payload: TaskID,
    };
};

export const completeTask = (TaskID) => {
    return{
        type: COMPLETE_TASK,
        payload: TaskID,
    };
};


export const taskAdd = (newTodo) => {
    return{
        type: ADD_TASK,
        payload: newTodo,
    };
};
export const filterTask = ( ) => {
    return{
        type: FILTER_TASK,

    };
};

export const taskEdit = (editedTask) => {
    return{
        type: EDIT_TASK,
        payload: editedTask,
    };
};