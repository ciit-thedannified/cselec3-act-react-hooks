import {useRef, useState} from 'react'
import './App.css'
import TaskManager from "./classes/TaskManager.jsx";
import Task from "./classes/Task.jsx";

function App() {

    const taskField = useRef(null);

    function handleTaskAdded() {
        taskField.current.focus();
    }

    return (
        <>
            <div>
                <span> Enter New Task: </span>
                <input ref={taskField} type="text" minLength="1"/> &nbsp;
                <button onClick={handleTaskAdded} type="button"> Add Task</button>
            </div>
            <br/>
        </>
    )
}

export default App
