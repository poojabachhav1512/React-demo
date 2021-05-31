import {Component} from 'react';
<<<<<<< HEAD
const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
=======
>>>>>>> 094d48ddf81cbf6a70465696f142f6a325581e66

class Signup extends Component {
    constructor(){
        super()
<<<<<<< HEAD
this.state = {
    emailError:'',
    email:''
    
    };
    
    }


EmailValidate = () => {

if (!emailPattern.test(this.state.email) ) {

    this.setState({
    emailError: "Enter a valid email"
    });
    }

if(emailPattern.test(this.state.email)){
    this.setState({
    emailError: ""
    });
    } 
}
    
changeEmail = (evt) => {
    this.EmailValidate();
    this.setState({
    email: evt.target.value
    });
    
    
    
    
    
    }
    

=======
        this.state = {
            email: "",
            password: "",
            error: "",
            show: "none",
          };
    }


   
   validate = ()=>{
           var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
           if (this.email.value.match(validRegex)) {
            alert("Valid email address!");
               return true;
             } else {
               alert("Invalid email address!");
               return false;
             }
   
   }
>>>>>>> 094d48ddf81cbf6a70465696f142f6a325581e66
    render(){
        return (
            <div className="container" style={{"marginTop":"10px"}}>
                <div className="row">
                    <div className="col-md-12">
                    <form>
                        <div className="card">
                            <div className="card-header">Login</div>
                            <div className="card-body">
                                <label>Username</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter Your name"></input>
                                <label>Email</label>
<<<<<<< HEAD
                                <input type="text" className="signup form-control" name="email" value={this.state.email} onChange={this.changeEmail} placeholder="Email"></input>
<p class="help-block help-block-error" style={{color:"red"}}>{this.state.emailError}</p>

=======
                                <input type="email"  ref={(val) => this.email = val} className="form-control" name="email" placeholder="Enter Your Email"></input>
                                <span className="text-danger"></span>
>>>>>>> 094d48ddf81cbf6a70465696f142f6a325581e66
                                <label>Password</label>
                                <input type="password" className="form-control" name="pwd" placeholder="Enter Your Password"></input>
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" name="pwd" placeholder="Enter Your Confirm Password"></input>
                                <br></br>
                                <button onClick={this.validate} className="btn btn-success" type="button">Submit</button>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;