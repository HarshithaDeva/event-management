import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Addtocart.jsx';
import Home from './components/Home.jsx';


class App extends React.Component {
  render(){
  return (
    <BrowserRouter> 
       
       <Switch>
       <Route path="/event-management" exact strict component={Home} />
     
      
     <Route path="/" exact strict component={Home}/>
     <Route path="/addtocart" exact strict  component={Cart}/>
     <Route path="/signup" exact strict  component={Signup}/>
     <Route path="/blog" exact strict  component={Blog}/>
     <Route path="/login" exact strict  component={Login}/>
     <Route path="/contactus" exact strict  component={Contact}/>
     <Route path="/about" exact strict  component={About}/>
     
       </Switch>
    </BrowserRouter>
  );
  }
}

export default App;

