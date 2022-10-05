import {useState} from "react"
const AddTask = ({onAdd}) => { 
    {/*we need to use state to make changes to the form as and when required*/} 
    const [text , setText]=useState('');{/*the default value of the text fild is empty until and unless something is written*/}
    const [day,setDay]=useState('');
    const [reminder, setReminder]=useState(false); 
    const onSubmit =(e)=>{
        e.preventDefault(); 
        if(!text||!day){
            alert('please add a task') 
            return
        } 
     
            onAdd({text,day,reminder}) //this is an object {time:time,day:day,reminder:reminder}
            setText(''); 
            setDay('');
            setReminder(false); 


    }
  return (
    <form className="add-form" onSubmit={onSubmit}> {/*parent wrapper*/}
      <div className="form-control"> 
        <label>Task</label> 
        <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)}/> 
      </div> 
      <div className="form-control"> 
        <label>Day & Time</label> 
        <input type="text" placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)}/> 
      </div> 
      <div className="form-control form-control-check"> 
        <label>Set Reminder</label> 
        <input type="checkbox" checked={reminder} style={{height:"30px",width:"30px" }} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/> {/*will tell us whether the checkbox is checked or not in the boolean form*/}
      </div> 
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form> 

  )
}

export default AddTask