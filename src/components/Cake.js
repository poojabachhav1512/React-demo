function Cake(props){
 
    
props.map((each,index)=>{
    return (
    <div class="card" style={{width: "20%"}}>
  {/* <img src="" class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{each.name}</h5>
    <p class="card-text">{each.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
);
}
    );
}
export default Cake;
