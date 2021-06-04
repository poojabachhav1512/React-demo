import {Link} from "react-router-dom";

function Cake(props){
 if(props.data){
    return (
    <div class="card" style={{width: "13rem", margin:"5px"}}>
  <Link to={'/cake/'+props.data.cakeid}><img src={props.data.image} class="card-img-top" alt="..." style={{height : "13rem",width:"13rem"}}/></Link>
  <div class="card-body">
    <h5 class="card-title">{props.data.name}</h5> 
    <p class="card-text">{props.data.price}</p>
    
  </div>
</div>
);
}
}


export default Cake;
