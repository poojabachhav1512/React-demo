import Navbar from "./components/Navbar"
// import Carousel from "./components/Carousel"
// import Signup from "./components/Signup"
// import Cakelist from "./components/Cakelist"
import Register from "./components/Register"
import {BrowserRouter as Router, Route, router} from "react-router-dom"
import {Switch} from "react-router-dom"
import Notfound from "./components/Notfound"
import Search from "./components/Search"
import CakeDetails from "./components/CakeDetails"
import Login from "./components/Login"
import Home from "./Home"
// import Data from 


function App() {
  
  
  return (
    <div>
      
      <Router>
      
      <Navbar ></Navbar>
      <Switch>
     
        <Route exact path="/"><Home /></Route>
        <Route exact path="/SignUp" component={Register}></Route>
        <Route exact path="/Login" component={Login}><Login /></Route>
        <Route exact path="/search" component={Search}></Route>
        <Route exact path="/cake/:cake" component={CakeDetails}></Route>
        <Route path="/*" component={Notfound}></Route>
       
        
        </Switch>
      
      </Router>
     
      
    </div>
  );
}

export default App;
