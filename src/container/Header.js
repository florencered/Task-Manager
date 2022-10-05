import React from 'react'
import Button from './Button'; 

const Header = ({onToggleButton}) => { 
  const onClick=(e)=>{  //calling one function unfder another,we dont have to create a seperate subsection for this one
    
    console.log(e)
  }
  return (
    <header className="header">
        <h1>Task Manager</h1>  
        
        <Button color="green" text="Add" onClick={onToggleButton}/> 
    </header> 
  
  );
}

export default Header