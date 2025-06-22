import { useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";

function TaskManager(){
    const [tasks,setTasks] = useState([{id:1,title: 'prepare for interview',completed: true}])
    const toggleTask = (id)=>{
        setTasks(curr=>curr.map(t=>t.id===id ? {...t,completed:!t.completed} : t))
    }
    const onAdd = (title)=>{
        setTasks((curr)=>[{id: Date.now(),title,completed: false},...curr])
    }
    const onDelete = (id)=>{
         setTasks((curr) => curr.filter(task => task.id !== id));
    }
    return(
        <div>
            <AddTask onAdd={onAdd}/>
            {tasks.map((t) => (
                <Tasks key={t.id} id={t.id} title={t.title} completed={t.completed} onDelete={onDelete} onToggle={toggleTask}/>
            ))}
        </div>
    )
}
export default TaskManager;