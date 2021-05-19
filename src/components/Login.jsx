import Loginform from './Loginform';
import Navbar from "./Navbar";
import "./login.css"


function Login() {
  return (
 <div className="loginbody" style={{height:"100vh"}}>
   <Navbar/>
   <Loginform />
   </div>
  );
}

export default Login;
