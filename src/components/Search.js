
import Cake from './Cake';
import axios from 'axios';
import { useEffect, useState } from "react";
import querystring from "query-string";


function Search(props){
    var [Cakes,setCakes] = useState([]);
    var query = querystring.parse(props.location.search);
    var apiurl="https://apibyashu.herokuapp.com/api/searchcakes?q="+query.q;
    useEffect(()=>{
        axios({
            url:apiurl,
            method:"get",
        }).then((response)=>{
            setCakes(response.data.data)
        },(error)=>{
            console.log("error from cakes api" , error)
        })
     }, [query.q]);

     if (Cakes.length === 0) {
            return (<div class="container">
            <div class="jumbotron">
                <br></br>
              <center><h1>No Cake found!. For your Search Query!</h1></center>      
             
            </div>
                
          </div>
            );
     }

     return (
            <div className="row px-2">
                { Cakes.map((each,index)=>{
                    return (<Cake data={each} key={index}></Cake>)
                })}
            </div>   
     )
}
export default Search