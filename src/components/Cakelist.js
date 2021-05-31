import Cakes from "./data"
import Cake from "./Cake"

function Cakelist()
{
    return(
        <div class="container">
        <div class="row">
       { Cakes.map((each,index)=>{
return(
  
    <Cake data={each} key={index}></Cake>

)
       })}
</div>
</div>
       
    )
}
export default Cakelist