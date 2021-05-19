import React from "react";


class Footer extends React.Component{
    render(){
        return(
            <div>
                 <div class="section4">
          <div className="hfooter" >
            <div class="row">
              <div class="col-sm-4 footercols">
                <ul>
                  
                  <li><a href="./index">Home</a> </li>
                  <li><a href="./blog">Blog</a> </li>
                  <li><a href="./contactus">facebook</a> </li>
                  <li><a href="./signup">Sign up</a> </li>
                </ul>

              </div>
              
              <div class="col-sm-4 footercols">
                <ul>
                  
                  <li><a href="./about">About us</a> </li>
                  <li><a href="./price">Pricing</a> </li>
                  <li><a href="./contactus">Twitter</a> </li>
                  <li><a href="./login">Log in</a> </li>
                </ul>

              </div>
            
              <div class="col-sm-4 footercols">
                <ul>
                  
                  <li><a href="./addtocart">Cart</a> </li>
                  <li><a href="./contactus">Contact us</a> </li>
                  <li><a href="./contactus">Linkedin</a> </li>
                  <li><a href="./contactus">facebook</a> </li>
                </ul>

              </div>

            </div>
            <center><p>Made with ❤</p></center>
             
         </div>
         

         </div>

            </div>
        );
    }

}

export default Footer;