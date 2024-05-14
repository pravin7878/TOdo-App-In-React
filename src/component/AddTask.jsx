import { useEffect, useState } from "react"
import ShowTask from "./ShowTask"


export default function AddTask() {
const [tasks, settasks] = useState([])
const [Task, setTask] = useState({
    task:"",
    status : false
})



const hendelInput = (e)=>{
    let inputValue = e.target.value
    setTask({task:inputValue,status:false})
}

const hendelAddTask = (e)=>{
    e.preventDefault()
    if(e.target[0].value !== ""){
        settasks([...tasks,Task])
        setTask("")
        e.target[0].value = ""
    }
    else{
        alert("Please Enter Task Name")
    }
    
}

const hendelfilter =(e)=>{
     let filtervalue = e.target.value
     console.log(filtervalue);
     if(filtervalue == "complet"){
        let filteredData = tasks?.map((ele)=>{
           if(ele.status == true){
            return ele
           } 
        })
        console.log(filteredData);
        settasks(filteredData)
     }
    
}
   





return (<>
    <div>
       
    <form onSubmit={hendelAddTask}>
        <input type="text" placeholder='Enter Your Task'
        onChange={hendelInput}
        />
        <input type="submit" value="ADD TASK" />
        {/* <button onClick={hendelAddTask}>ADD TASK</button> */}
    </form>
    
    </div>
<div>
<select onChange={hendelfilter}>
    <option value="">Select status</option>
            <option value="complet">Complete</option>
            <option value="pending">Pending</option>
        </select>
</div>
    <div>
    <ShowTask tasks = {tasks} settasks = {settasks}/>
    </div>
  </>
  )
}
