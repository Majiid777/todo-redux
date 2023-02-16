import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTask from './components/addTask/AddTask';
import TaskList from './components/taskList/TaskList';




function App() {
  
  return (
    <div className="App">
       <AddTask/> 
      <TaskList/>

    </div>
  );
}

export default App;
