import React, {useState} from "react";
import Taskform from './TaskForm';
import Task from './Task'
import '../styles/TaskList.css';

function TasksList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();
      const updateTasks = [task, ...tasks];
      setTasks(updateTasks);
    }
  };

  const deleteTask = id => {
    const updateTasks = tasks.filter(task => task.id !== id);
    setTasks(updateTasks);
  };

  const completeTask = id => {
    const updateTasks = tasks.map(task => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    });
    setTasks(updateTasks);
  };

  return (
    <>
      <Taskform onSubmit={addTask}/>
      <div className="tasks-list-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id} 
              text={task.text}
              complete={task.complete}
              completeTask={completeTask}
              deleteTask={deleteTask} 
            />
          )           
        }
      </div>
    </>
  );
}

export default TasksList;