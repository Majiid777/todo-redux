import { DELETE_TASK, FILTER_TASK } from "./actionType";
import { COMPLETE_TASK, ADD_TASK, EDIT_TASK } from "./actionType";

const init = {
    tasks : [{ id: Math.random(), tache: "Learn HTML", isDone: true },
        { id: Math.random(), tache: "Learn HOOKS", isDone: false },
        { id: Math.random(), tache: "Learn STATE", isDone: true }
        ],
    filter: false
    };



    const reducer = (state = init, {type, payload} ) => {
        switch (type) {
            case DELETE_TASK:
             return{...state, tasks: state.tasks.filter((el) => el.id !== payload)};  
             case COMPLETE_TASK:
             return {...state, tasks: state.tasks.map((el) => el.id === payload ? {...el, isDone: !el.isDone} : el)};
             case ADD_TASK:
             return {...state, tasks:[...state.tasks,payload]};
             case FILTER_TASK:
             return  {...state, filter: !state.filter};
             case EDIT_TASK:
             return {...state, tasks: state.tasks.map((el)=> el.id === payload.id  ? payload : el)};
               
        
            default:
                return state;
        }
       
        };
        export default reducer;

        