import React from "react";
import Navbar from "./Navbar.jsx";
import Homemain from "./Homemain.jsx";
import Carousel from "./Carousel";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import "./Home.css";

function Home(){
  return(
    <div className="homebody">
      
      <Navbar />
      <Homemain />
      <Carousel heading="We Organise" id="first" img1="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" img2="https://images.pexels.com/photos/3748176/pexels-photo-3748176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" img3="https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" img4="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" img5="https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" matter="we love events. We love the on-site details, production plans, schedules, deadlines and to do lists that come along with managing an event.  Knowing that every last detail is looked after will allow you to focus on your attendees and stakeholders at the event. Let us look after the rest."/>
      <Carousel heading="Services" img1="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" img2="https://images.pexels.com/photos/6479590/pexels-photo-6479590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" img3="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" img4="https://images.pexels.com/photos/7666527/pexels-photo-7666527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" matter="Bigday events designs and executes special occasions shaped to meet the client's style and personality. From large, branded corporate events to intimate weddings and everything in between, Her team provide unique insights that will make your big day unforgettable."/>
      <Carousel heading="Everywhere u go" img1="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" img2="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" img3="https://images.pexels.com/photos/408503/pexels-photo-408503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" img4="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" matter="we love events. We love the on-site details, production plans, schedules, deadlines and to do lists that come along with managing an event.  Knowing that every last detail is looked after will allow you to focus on your attendees and stakeholders at the event. Let us look after the rest."/>
      <Testimonial/> 
     <Footer /> 
      
     
     </div>
  );
}


export default Home;
