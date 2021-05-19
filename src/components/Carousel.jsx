import React  from "react";
function Carousel(props){
    return(
        <div>
            <div  class="section2">
        <div class="row">
            <div class="col-sm-6 " >
                <div class="coltext"> 
                     <h1><i><span>{props.heading}</span></i></h1>
                     <p>{props.matter}</p>
                        <a href="./blog.html"> <button class="btn ">Check now</button></a>
                    </div>
            </div>
            <div class="col-sm-6" >
                <div class="carousel">
                    <div class="serviceImages">
                        <div id={props.id} class="carousel slide"  data-interval="1000" data-ride="carousel">
                         <div class="carousel-inner">
                           <div class="carousel-item active">
                             <img class="d-block w-100" src={props.img1} alt="First slide"/>
                           </div>
                           <div class="carousel-item">
                             <img class="d-block w-100" src={props.img2}  alt="Secondslide"  />
                           </div>
                           <div class="carousel-item">
                             <img class="d-block w-100"src={props.img3} alt="Thirdslide" />
                           </div>
                           <div class="carousel-item">
                            <img class="d-block w-100" src={props.img4} alt="Fourthslide"/>
                          </div>
                          
                          
                         </div>
                         
                         
                       </div>
                    </div>

                </div>
        </div>
     </div> 
     </div>
  
     </div>
    
    );
}
export default Carousel;
