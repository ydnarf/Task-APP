import React, {useState} from "react";
import '../styles/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm (props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleShipping = e =>{
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      complete: false
    }

    props.onSubmit(newTask);
  };

  return (
    <form 
      className="task-form"
      onSubmit={handleShipping}>
      <input 
        className="task-input" 
        type="text" 
        name="text" 
        placeholder="Write a task"
        onChange={handleChange}
      />
      <button className="task-button">Add Task</button>
    </form>
  );
};

export default TaskForm;