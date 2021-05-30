function Navbar(){
  let name="ANGEL CAKE SHOP"
  let login="Login"
  let signup="Sign Up"
  let  searchstring=""
  let getSeachText=function(event){
    console.log(event.target.value)
  }

  let search=function(event){
    console.log("we have search", searchstring)
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    
<img src="angle_cake_logo.jpeg" style={{width:"15%",height:"15%"}}/>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true" style={{color:"black"}}>{name}</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" onChange={getSeachText} placeholder="Search" aria-label="Search"/>
      {searchstring}
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={search} type="submit">Search</button>
    </form>
    
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">{login}</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">{signup}</a>
      

  </div>
</nav>
      );
}
export default Navbar;
