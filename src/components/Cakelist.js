import Cakes from "./data"
import Cake from "./Cake"
import axios from "axios"
import React, {useState, useEffect } from "react";



    
function Cakelist()
{
    var [Cakes, setcakes] = useState([]);
var api="http://apibyashu.herokuapp.com/api/allcakes"
    useEffect(() => {
        axios({
            method:"GET",
        url:api,
        
        }).then((response)=>{
        console.log(response.data.data)
        setcakes(response.data.data)
        },
        (error)=>{
            console.log("error",error)
        })
    }, []);


    return(
        // <div class="container" >
        <div class="row" style={{padding:"8%"}}>
       { Cakes.map((each,index)=>{
return(
  
    <Cake data={each} key={index}></Cake>

)
       })}
</div>
// </div>
       
    )

    
}

export default Cakelist