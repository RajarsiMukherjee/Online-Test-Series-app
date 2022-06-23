import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Test() {
  const [data , setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/test").then((res) => setData(res.data)).catch((err) => console.log(err))
  },[])

  console.log("data",data)
  return (
    <div>
      <input type="text" placeholder='Search By City' />


      
{
  data.map((e) => (
    <div>
    <p>{e.question}</p>
    <p>{e.option[0]}</p>
    <p>{e.option[1]}</p>
    <p>{e.option[2]}</p>
    <p>{e.option[3]}</p>
  </div>
  ))
}
      
    </div>
  )
}