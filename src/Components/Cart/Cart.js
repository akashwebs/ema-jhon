import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart);
    const totalPrice=cart.reduce((initValue,indexValue)=>initValue+indexValue.price,0);
    const totalShipping=cart.reduce((initValue,shiipingPrice)=>initValue+shiipingPrice.shipping,0);
    const tax=(totalPrice*.10).toFixed(2);
    const grandTotal=totalPrice+totalShipping+tax;
    return (
        <div className='cart'>
            <div>
                <h3>Order Summary</h3>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: <span>$</span>{totalPrice}</p>
                <p>Total Shipping Charge: <span>$</span>{totalShipping}</p>
                <p>Tax: <span>$</span>{tax}</p>
                <h3>Grand Total: <span>$</span>{grandTotal}</h3>
            </div>
        </div>
    );
};

export default Cart;