import React from "react";
import './Signup.css';
import profile from "./images/profile.jpeg";
import Navbar from "./Navbar";

function Signup() {
  return (
    <div className="signbody" style={{height:"100vh"}}>
    <Navbar/>
   
  <div className="sign-up form">
    <form>
      <img src={profile} alt="icon"/>
      <h1>Sign Up Now</h1>
      <input type="email" className="input-box" placeholder="Enter your email" />
      <input type="password" className="input-box" placeholder="Your password" />
      <p><span><input type="checkbox" /></span>I agree to the terms of services</p> 
      <button type="button" className="signbutton">Sign-up</button>
      <br/>
      <br/>
      <p className="or">OR</p>
      <button type="button" className="signbutton">Login with Google</button>
      <p>Do you have an account ?<a href="/#">Sign-in</a></p>
    </form>
  </div>
</div>


  );
}

export default Signup;
