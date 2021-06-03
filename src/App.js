import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
// import Signup from "./components/Signup"
import Cakelist from "./components/Cakelist"
import Register from "./components/Register"
import {BrowserRouter as Router, Route, router} from "react-router-dom"
import Notfound from "./components/Notfound"
import Home from "./Home"
// import Data from 


function App() {
  
  
  return (
    <div>
      
      <Router>
      <switch>
      <Navbar ></Navbar>
      
     
        <Route exact path="/">Home</Route>
        <Route exact path="/SignUp" component={Register}></Route>
        <Route path="/*" component={Notfound}></Route>
       
        
        </switch>
      
      </Router>
     
      <Carousel></Carousel>
      {/* <Signup></Signup> */}
      {/* <Register></Register> */}
      <Cakelist></Cakelist>
     
    </div>
  );
}

export default App;
