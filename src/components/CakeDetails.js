// import querystring from "query-string";
// import cakelist from './Data';
// import Cake from './Cake';
import axios from 'axios';
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';

function Cakedetail(props){



    var param=useParams();
    var apiurl="https://apibyashu.herokuapp.com/api/cake/"+param.cake
    var [cakedetails, setCakesdetail] = useState([])
    useEffect(()=>{
        axios({
            url:apiurl,
            method:"get",
        }).then((response)=>{
            setCakesdetail(response.data.data)
        },(error)=>{
            console.log("Error from api",error)
        }

        )
    },[]

    )
    return  (
        <>
        <div className="container">
            <div className="row">
                <div class="col-md-12">
                <h2>Details of cake Id {param.cake}</h2>
                    <img src={cakedetails.image}></img><br></br>
                    <h3>{cakedetails.name}</h3>

                </div>
            </div>
        </div>
        </>
    )
}
export default Cakedetail