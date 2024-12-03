import { useState } from "react";
import "./storage.css"

function Storage(){
    const[username,setUsername]=useState("")
    const[employeeid,setEmployeeid]=useState("")
    const handlename=(e)=>{
        setUsername(e.target.value)
    }
    const handleuser=()=>{
        localStorage.setItem('name' ,username)
        alert("save name into local storage")
    }

    const handleemployee=(e)=>{
        setEmployeeid(e.target.value)
    }
    const handleemployeeid=()=>{
        localStorage.setItem('id' ,employeeid)
        alert("save employee id  into local storage")
    }
    const handleclear=()=>{
        localStorage.clear()
        alert("clear  into local storage")
    }
  const getname=localStorage.getItem('name')
  const getid=localStorage.getItem('id')
    return(
        <div className="user">
    <input onChange={handlename} type="text"  value={username} placeholder="write a name"/>
    <button onClick={handleuser}>save username</button>

    <div className="id">
    <input onChange={handleemployee} type="text"  value={employeeid} placeholder="write a employeeid"/>
    <button onClick={handleemployeeid}>save employeeid</button>
    </div>
    <button onClick={handleclear}>clear</button>
    <div className="values">
     <p>name:{username}</p>
     <p>ID:{employeeid}</p>
     <p>getting name :{getname}</p>
     <p>getting id :{getid}</p>
     </div>
    </div>
    )
}
export default Storage;