import React, { useEffect, useState } from 'react'
import NavAl from './NavAl'
import axios from 'axios'

const ViewAlbum = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>
        {
            axios.get("https://jsonplaceholder.typicode.com/albums").then((Response)=>{
                changedata(Response.data)
            }
        ).catch().finally()
        }
        useEffect(()=>{fetchData()},[])
  return (
    <div>
<NavAl/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl"></div>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">user id</th>
      <th scope="col">id </th>
      <th scope="col">title</th>
    
    </tr>
  </thead>
  <tbody>
{

data.map(

    (value,index) => {

        return  <tr>
        <th scope="row">{value.userId}</th>
        <td>{value.id}</td>
        <td>{value.title}</td>
      </tr>



}
)
}
   
  </tbody>
</table>



    </div>
</div>

    </div>
  )
}

export default ViewAlbum