import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {img,title,price} =props.item
    return (
        <li className="list-group-item d-flex my-2 shadow justify-content-between">
           <span>Course:{title}</span>  <span>price=${price}</span>
        </li>
    );

};

export default Cart;