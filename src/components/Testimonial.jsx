import React from "react";

class Testimonial extends React.Component{
    render(){
      
function TestiCompo(props){
  return(
    <div class="col-sm-4">
    <div class="testimonial-overlay">
        
        <div class="row">
          <img class="rounded-circle"src={props.img} alt=""/>
           
        </div>
        <h4 style={{textAlign: "center" ,paddingTop: "20px"}}>{props.name}</h4>
        <div class="row text">
            <p>{props.desc} </p>             
    
        </div>
    </div>
    </div>
    
  );
}

        return(
        <div>
            <div class="section3"> 
                <center><h1 style={{textAlign: "center",paddingTop: "40px"}}><em>Our happy Customers</em></h1></center>
                
           
            <div class="row">
            <TestiCompo name="Eric and Lara"img="https://images.pexels.com/photos/254069/pexels-photo-254069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"desc="We hired bigdays events to host our wedding. From the moment I met  her team, I was sure my event was going to be a successful one. In fact, it was beyond what I could have expected or imagined."/>
            <TestiCompo name="Crystal" img="https://images.pexels.com/photos/2333711/pexels-photo-2333711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" desc="Big day events were great! She was a pleasure to work with when helping plan my birthday party and her passion can really be seen through their work."/>
            <TestiCompo name="IITM" img="https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" desc="They never made me feel like she was taking advantage of me. Their goal the entire time was to actually save me money and they did!  Needless to say, I will be hiringbig day events for all future events!"/>
            
              </div>

            
          </div>
</div>
    );
}
}
export default Testimonial;