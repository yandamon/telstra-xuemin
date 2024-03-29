import React from 'react';
import numeral from 'numeral';


export default (props) =>{
    const {productImage,productName,price} = props.item;

    return(<div className="item-card col-md-6 col-sm-12">
        <img src={productImage} alt="Unaccessable" className="item-card_image"></img>
        <div className="item-card_product">{productName}</div>
        <div className="item-card_price">{numeral(price).format('$0,0.00')}</div>
        <button onClick = {() => props.onAddToCartClick(props.item)} className="item-card_button">Add to cart</button>
    </div>
)}



