import React from 'react';
import numeral from 'numeral';


export default (props) =>{
    const {productName,price} = props.cartItem;

    return(<div className="cart-card">
        <div className="cart-card_name">{productName}</div>
        <div className="cart-card_price">{numeral(price).format('$0,0.00')}</div>
        <button onClick = {() => props.onClick(props.cartItem)} className="cart-card_button">Remove</button>
    </div>
)}
