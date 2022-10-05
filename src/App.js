import React from "react";
import {useState} from "react";
//importing different component files 
import Header from "./container/Header"; 
import Tasks from "./container/Tasks"; 
import AddTask from "./container/AddTask";



function App() {  
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([
    {id:1, 
      text:"Visit grocery shop" , 
  day:"Feb 5th at 2:30pm", 
  reminder:"true"} ,
  {id:2, 
      text:"Doctor appointment" , 
  day:"Oct 6th at 1:30pm" ,
  reminder:"true"},
  {id:3, 
    text:"Diss someone else" , 
day:"Oct 9th at 1:30pm" ,
reminder:"false"}, 
{id:4, 
  text:"This better work" , 
day:"Oct 9th at 1:30pm" ,
reminder:"true"} 

  ]) 
  //delete task function
  const deleteTask=(id)=>{
    console.log('delete',id); 
    setTasks(tasks.filter((task)=>task.id!==id))
  } 
  //togggle reminder function  
  const toggleReminder=(id)=>{
    console.log('toggled',id)  
    setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
    
  } 
  //Add task 
  const addTask=(task)=>{
    console.log(task); 
    const id=Math.floor(Math.random()*1000)+1; 
    const newTask={id,...task}  //the setTask component has id,day,time and reminder now
    setTasks([newTask,...tasks])

  } 
  //Add toggle button
 const onToggleButton=()=>{
  setShowAddTask(true);
 }

  return (
    <div className="container">
     <Header onToggleButton={onToggleButton}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
   
     {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):(<h1>No tasks to show</h1>)}
     
      
    </div>
  );
}

export default App;
