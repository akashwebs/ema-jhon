import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
   
    const {img, name, ratings, price, seller}=props.products;
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='prodcut-info'>
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: <span>$</span>{price} </p>
            <div>

            <p className='seller'><small>Seller: {seller}</small></p>
            <p className='ratings'><small>Ratings: {ratings} star</small></p>
            </div>
            </div>
        <button onClick={()=>props.addToCart(props.products)} className='cart-button'>
            <span className='btn-cart-text'>Add to Cart</span> <FontAwesomeIcon icon={faCartArrowDown} ></FontAwesomeIcon>
        </button>
        </div>
    );
};

export default Product;