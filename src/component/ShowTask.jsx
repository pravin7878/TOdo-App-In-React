import { useEffect, useState } from "react";

const ShowTask = ({ tasks ,settasks}) => {
    console.log(tasks);
        const hendelstatus = (index) => {
            let updatedTasks = [...tasks]; // 
            updatedTasks[index].status = !updatedTasks[index].status;
            settasks(updatedTasks); 
        }
        
    return <>
        {tasks?.map((ele, ind) => {


            return (<div key={ind}>
                <h4 >Title : {ele.task}</h4>
                {/* <p>status : {ele.status ? "Completed" : "pending"}</p> */}
                <p style={{ color: ele.status ? "green" : "red" }}>Status : {ele.status ? "complete" : "pending"}</p>
                <button onClick={() => hendelstatus(ind)}>Mark as Completed</button>
            </div>)
        })}
    </>
}

export default ShowTask