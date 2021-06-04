function Login(){
return(
    <div className="container" style={{"marginTop":"10px"}}>
    <div className="row">
        <div className="col-md-12">
        <form>
            <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                    
                    <label>Email</label>
                    <input type="text" className="signup form-control" name="email" value={this.state.email} onChange={this.changeEmail} placeholder="Email"></input>
<p class="help-block help-block-error" style={{color:"red"}}>{this.state.emailError}</p>

                    
                    <label>Password</label>
                    <input type="password" className="form-control" name="pwd" placeholder="Enter Your Password"></input>
                    
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
export default Login