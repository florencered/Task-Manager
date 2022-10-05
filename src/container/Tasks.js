import React from 'react'  
import Task from './Task'
{/**using state under comments**/ }




const Tasks = ({tasks,onDelete,onToggle}) => { 
 
  return ( 
    
    <>
   {/*how to use setTasks properly*/}
    {tasks.map((task)=>(<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
  )
}

export default Tasks