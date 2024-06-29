import {useContext, useState} from "react";
import TaskContext from "./TaskContext.jsx";

function Task({ ID, TEXT, COMPLETED }) {

    const [id, setId] = useState(ID);
    const [text, setText] = useState(TEXT);
    const [completed, setCompleted] = useState(false);
    const [tasks, setTasks] = useContext(TaskContext);



    return (
        <>
            <div className="task">
                <div>
                    <span> ID: {id} </span>
                    &nbsp;
                    <button type="button"> Mark as Done </button> &nbsp;
                    <button type="button"> Edit </button> &nbsp;
                    <button type="button"> Delete </button>
                </div>
                <br />
                <div>
                    <em>
                        { !completed ? text : <strike> {text} </strike> }
                    </em>
                </div>
            </div>
        </>
    );

}

export default Task;