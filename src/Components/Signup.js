import React from 'react';
import LoginPage from "./LoginPage";
function Signup(props) {
    return(
        <div className="Signup">
            <div className="Apply">
                <h2> Sign up form</h2><br/>
                <form action="">
                    <label >E-mail id - <input type="text" style={{float:"right"}} placeholder="Enter e-mail"/> </label><br/>
                    <label >Phone Number - <input type="text" style={{float:"right"}} placeholder="Enter phone number"/> </label><br/>
                    <label >Username - <input type="text" style={{float:"right"}} placeholder="Enter username"/> </label><br/>
                    <label >Password - <input type="text" style={{float:"right"}} placeholder="Enter password"/> </label><br/>
                    <label >Confirm Password - <input type="text" style={{float:"right"}} placeholder="confirm password"/> </label><br/><br/>
                    <button className="btn btn-primary">Submit</button>
                </form>
                <button className="btn btn-secondary Back" onClick={()=>{props.onChange(<LoginPage {...props} />)}}>Back</button>
            </div>
        </div>
    )
}export default Signup