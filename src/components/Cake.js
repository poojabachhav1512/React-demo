function Cake(props){
 if(props.data){
    return (
    <div class="card" style={{width: "13rem"}}>
  <img src={props.data.image} class="card-img-top" alt="..." style={{height : "13rem",width:"13rem"}}/>
  <div class="card-body">
    <h5 class="card-title">{props.data.name}</h5> 
    <p class="card-text">{props.data.price}</p>
    
  </div>
</div>
);
}
}


export default Cake;
