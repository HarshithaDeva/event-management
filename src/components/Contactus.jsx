import React from "react";

function Contactus(){
    return(
<div style={{backgroundColor: '#f4f9f9'}}>
  <div className="container form" style={{fontFamily: '"Quicksand"'}}>
    <div className="row g-0">
      <div className="imgss col-md-4 py-3 px-3">
        <div className="row py-3">
          <h1 id="head" className="py-4 px-3">Contact us to <br />Make your Dream come into Reality!!</h1>
        </div>
        <div className="row py-3">
          <i className="bi bi-house-fill" style={{fontSize: '2rem', color: 'rgb(231, 21, 119)'}}> Location:</i>
          <p>BigDays event planners, Maddilapalem, Visakhapatnam Pin:530003</p>
        </div>
        <div className="row py-3">
          <i className="bi bi-telephone-fill" style={{fontSize: '2rem', color: 'rgb(231, 21, 119)'}}> Contact:</i>
          <p>0891-242543,+91 9891242543</p>
        </div>
        <div className="row py-3">
          <i className="bi bi-envelope-fill" style={{fontSize: '2rem', color: 'rgb(231, 21, 119)'}}> Mail:</i>
          <p>bigdaysbyteam3@gmail.com</p>
        </div>
        <div className="col soc" id="soc">
          <p style={{fontSize: '2rem', color: 'rgb(231, 21, 119)'}}><i>Connect us on:</i></p>
          <span className="fa fa-facebook" />
          <span className="fa fa-twitter" />
          <span className="fa fa-google" />
          <span className="fa fa-linkedin" />
          <span className="fa fa-instagram" />
        </div>
      </div>
      <div className="sform col-md-8 px-5 py-5">
        <form>
          <h1 className="font-weight-bold py-3">Get in touch</h1>
          <h5>We'd love to hear from you!</h5>
          <div className="cform row">
            <div className="cform col-md-6">
              <input type="text" className="form-control" placeholder="Enter your Name" />
            </div>
            <div className="cform col-md-6">
              <input type="tel" className="form-control" placeholder="Enter your Mobile number" pattern="[0-9]{10}" />
            </div>   
          </div>
          <div className="cform row">
            <div className="cform col-md-12">
              <input type="email" className="form-control" placeholder="Enter your Email" />
            </div>  
          </div>
          <div className="cform row">
            <div className="cform col-md-2">
              <label htmlFor="eventdate">Event Date: </label>
            </div> 
            <div className="cform col-md-4">
              <input type="date" id="eventdate" />
            </div>
            <div className="cform col-md-6">
              <input type="number" className="form-control" placeholder="Guest Count" />
            </div>  
          </div>
          <div className="cform row">
            <div className="cform col-md-6">
              <select className="form-select">
                <option selected>Event Type</option>
                <option value={1}>Birthday</option>
                <option value={2}>Surprise Party</option>
                <option value={3}>Office Party</option>
                <option value={4}>Engagement</option>
                <option value={5}>Wedding</option>
                <option value={6}>Anniversary</option>
                <option value={7}>Corporate Events</option>
                <option value={6}>Others</option>
              </select>
            </div> 
            <div className="cform col-md-6">
              <select className="form-select">
                <option selected>Event Budget</option>
                <option value={1}>Below ₹ 25,000/-</option>
                <option value={2}>₹ 25,000/- to ₹ 50,000/-</option>
                <option value={3}>₹ 50,000/- to ₹ 75,000/-</option>
                <option value={4}>₹ 75,000/- to ₹ 1,00,000/-</option>
                <option value={5}>₹ 1,00,000/- to ₹ 2,00,000/-</option>
                <option value={6}>₹ 2,00,000/- to ₹ 3,00,000/-</option>
                <option value={7}>₹ 3,00,000/- and above</option>
              </select>
            </div>  
          </div>
          <div className="cform">
            <textarea className="form-control" rows={2} placeholder="Enter your Address" defaultValue={""} />
          </div>
          <div className="cform">
            <textarea className="form-control" rows={3} placeholder="Enter your event booking details here" defaultValue={""} />
          </div>
          <div className="form-check col-md-12">
            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
            <label className="form-check-label" htmlFor="flexCheckDefault">I understood and agreed to all <a href="/#"><b>Terms and Conditions</b></a></label>
          </div>
          <div className="cform col-md-12">
            <input className="btn btn-info" type="submit" id="submit" defaultValue="Submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>



    );
}

export default Contactus;