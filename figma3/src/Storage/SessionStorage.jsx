import { useState } from "react";
import "./storage.css"

function SessionStorage(){
    const[username,setUsername]=useState("")
    const[emailid,setEmailid]=useState("")
    const handlename=(e)=>{
        setUsername(e.target.value)
    }
    const handleuser=()=>{
        sessionStorage.setItem('username' ,username)
        alert("save name into local storage")
    }

    const handleemail=(e)=>{
        setEmailid(e.target.value)
    }
    const handleemailid=()=>{
        sessionStorage.setItem('email' ,emailid)
        alert("save employee id  into sessionstorage")
    }
    const handleclear=()=>{
        sessionStorage.clear()
        alert("clear  into sessionstorage")
    }
  const getname=sessionStorage.getItem('name')
    return(
        <div className="user">
    <input onChange={handlename} type="text"  value={username} placeholder="write a name"/>
    <button onClick={handleuser}>save username</button>

    <div className="id">
    <input onChange={handleemail} type="text"  value={emailid} placeholder="write a employeeid"/>
    <button onClick={handleemailid}>save emailid</button>
    </div>
    <button onClick={handleclear}>clear</button>
    <div className="values">
     <p>name:{username}</p>
     <p>emailid:{emailid}</p>
     <p>getting name :{getname}</p>
     </div>
    </div>
    )
}
export default  SessionStorage;