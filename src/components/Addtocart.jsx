import React, { useState } from "react";
import Navbar from "./Navbar"
import Form from "usetheform";
import { Cart } from "./Cart";
import ReactDOM from 'react-dom';
import "./Addtocart.css";

export default function Addtocart(){
 const [items, setCartItem] = useState([]);

  const onRemoveItem = (idToRemove) =>
    setCartItem((prev) => prev.filter(({ id }) => id !== idToRemove));

  const onAddItem = () => {
    const item = createRandomItem();
    setCartItem((prev) => [...prev, item]);
  };
const onChange= (state, isFormValid) => console.log('CHANGE', state, isFormValid);
  const onSubmit= (state) => console.log('SUBMIT', state);
  return (
    
    <div className="addtocartbody">
      <Navbar/>
      <div className="Appc">
       <h1 style={{color: "blue"}}>Events registered:</h1>
      <Form onChange={onChange} onSubmit={onSubmit}>
        <Cart items={items} onRemoveItem={onRemoveItem} />
        <button type="submit">Submit</button>
      </Form>
      <br />
      <button type="button" onClick={onAddItem}>
        Add item to cart
      </button>
      <MyForm/>
    </div>
    </div>
  );
}
class MyForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          firstname: '',
          lastname:'',
          address:'',
          age: null,
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "age") {
          if (!Number(val)) {
            alert("Your age must be a number");
          }
        }
        this.setState({[nam]: val});
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
      }
      render() {
        return (
          <div>
          <form onSubmit={this.mySubmitHandler}>
          <h1 style={{color: "blue"}}>BILLING INFORMATION{this.state.username} {this.state.age}</h1>
          <p>Enter your firstname:</p>
          <input
            type='text'
            name='firstname'
            placeholder='john'
            onChange={this.myChangeHandler}
          />
          <p>Enter your lastname :</p>
          <input
            type='text'
            name='lastname'
            placeholder='doe'
            onChange={this.myChangeHandler}
          />
          <p>Enter your age:</p>
          <input
            type='text'
            name='age'
            placeholder='18'
            onChange={this.myChangeHandler}
          />
          <p>address:</p>
          <input
            type='text'
            name='address'
            placeholder='123 Street' required
            onChange={this.myChangeHandler}
          />
         <p>state:</p>
          <select id="state" class="form-control" required> 
            <option value=""> Select </option>
              <option value="newyork"> New York </option>
              <option value="newjersey"> New Jersey  </option>
             <option value="florida"> Florida </option>
            <option value="ohio"> Ohio </option>
            <option value="indiana"> India </option>
            </select>
           <input type='submit' value='submit'/>
         <h2 style={{color: "blue"}}>PAYMENT INFORMATION</h2>
         <p class="fa fa-cc-visa" style={{color:"navy",fontSize:"80px"}}></p>
                    <p class="fa fa-cc-amex" style={{color:"blue",fontSize:"80px"}}></p>
                    <p class="fa fa-cc-mastercard" style={{color:"red", fontSize: "80px"}}></p>
                    <p class="fa fa-cc-discover" style={{color:"orange",fontSize:"80px"}}></p>
                    <p class="fa fa-cc-paypal" style={{color:"black",fontSize:"80px"}}></p>
                 
         <h3>pay using</h3>
         
         <input id ="card" name="payment" type="radio" class="form-check-input" required checked/>
         <p for="card">Credit/Debit Card</p>
         
         <input id ="paypal" name="payment" type="radio" class="form-check-input" required/>
         <p for="paypal">Paypal</p>
         
          <input id ="cashondelivery" name="payment" type="radio" class="form-check-input" required/>
          <p for="cashondelivery">Cash on delivery</p>
          
          <input id ="free" name="payment" type="radio" class="form-check-input" required/>
          <p for="free">I want it free</p>
          <h3>enter details</h3>
          <p for="paymentname" class="form-label">Full Name</p>
                      <small class="text-muted">(as displayed on your card)</small>
                      <input id="paymentname" type="text" class="form-control" placeholder="John Doe" required/> 
                      <div class="invalid-feedback"> Credit Card Name Invalid!</div>
                      <label for="email" class="form-label">Email</label>
                        <small class="text-muted">(Optional)</small>
                        <input id="email" type="text" class="form-control" placeholder="johndoe@email.com"/>             
                        <label for="paymentcard" class="form-label">Credit Card Number</label>
                    <small class="text-muted">(16-digit)</small>
                    <input id="paymentcard" type="text" class="form-control" placeholder="1111 3333 5555 7777" required/>
                    <div class="invalid-feedback">Credit Card Number Invalid!</div> 
                    <label for="cvv" class="form-label">CVV</label>
                        <input id="cvv" type="text" class="form-control" placeholder="123" required/> 
                        <div class="invalid-feedback"> CVV Invalid!</div>  
                        <label for="expiration" class="form-label">Expiration</label>
                        <input id="expiration" type="text" class="form-control" placeholder="(DD/YYYY)" required/> 
                        <div class="invalid-feedback"> Expiration Invalid!</div> 
                        <button type="submit" class="btn btn-primary btn-lg btn-block">Save Info</button>           
          </form>
          </div>
        );
      }
    }

let id = 0;
const createRandomItem = () => {
  id = id + 1;
  return {
    id,
    qty: 1,
    desc: `Item number: ${id}`,
    price: Number((Math.random() * 100 + 1).toFixed(2))
  };
};
ReactDOM.render(<div><Navbar/><Addtocart/></div>, document.getElementById('root'));