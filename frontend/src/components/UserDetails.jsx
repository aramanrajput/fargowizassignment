import React from 'react'
import { useEffect ,useState} from 'react'

const UserDetails = () => {
let [data,setData]= useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/user").then((res)=>res.json()).then((res)=>{if(!res.error){
            setData(res.data)
        }})
    },[])

    let handleDelete= (id)=>{
    let deletedarr = data.filter((e,i)=>i!=id)
    console.log(deletedarr)
    setData([...deletedarr])
    }
  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      {data.map((e,i)=>{
        return (<div  key = {i}>
            <h3>{e.username}</h3>
            <h3>{e.email}</h3>
            <h3>{e.phonenumber}</h3>
          <button onClick={()=>handleDelete(i)}>Delete</button>
        </div>)
      })}
    </div>
  )
}

export default UserDetails
