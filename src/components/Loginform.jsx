import React, { Component } from 'react'
import profile from "./images/profile.jpeg"
import './login.css'

export default class Loginform extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>

        <div className = "login form" >
        <form>
          <img src={profile} alt="icon"/>
          <h1>Login</h1>
          <input type = "email" class = "input-box" placeholder="Username" />
          <input type = "password" class = "input-box" placeholder="Password" />
          <p>Forgot password ?</p>
          <button class="loginbutton" type ="button">Login</button>
          <p>Not a member ?<a href="/#">Sign-in</a></p>
      </form>
  </div>
              </div>
        );
    }
}
