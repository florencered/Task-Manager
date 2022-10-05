import React from 'react'

const Button = ({color,text,onClick}) => {
  return (
    <button className="btn" style={{backgroundColor:color}} onClick={onClick}>{text}</button>
  )
}
//creating default property which would run if eberything goes wrong
Button.defaultProps={
    color:"green" ,
    text:"hemlo this is the default text"
}


export default Button