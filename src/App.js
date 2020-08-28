import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseData from './CourseData'
import Courses from './Component/Courses/Courses';
import Cart from './Component/Cart/Cart';

function App() {
    const [cart,setCart] =useState([])
   const addToCart=(item)=>{
     const newCart =[...cart,item];
      setCart(newCart);
   }
 
    const totalPrice=cart.reduce((course,currentCourse)=>course+currentCourse.price,0);

   return (
    <div className="container-fluid px-2">
    <h2 className="text-center py-4 logo text-primary"> Online Course For Everyone </h2>
      <h3 className="text-center ">Online Courses:15</h3> 
    <div className="row food-items">
    <div className="col-md-9 row border-right">
        {CourseData.map(course => <Courses course={course} addToCart={addToCart} />)}
    </div>   
    <div className="col-md-3">
   <h2 className="text-center">Courses Cart :{cart.length}</h2>
   <ul className="list-group">
     {cart.map(item => <Cart item={item}/>) }
   </ul>
     <button type="button" className=" checkout-btn">
   CourseCheckOut <span className="badge badge-light">${totalPrice}</span>
     </button>
    </div>

   </div> 
   </div>
 


  );
};

export default App;

 