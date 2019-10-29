import React from 'react';
import {connect} from 'react-redux';
import ListCartDetail from './ListCartDetail'
import {addListItem} from '../actions/listActions';
import {removeCartItem} from '../actions/cartActions';
import totalPrice from '../selectors/totalPrice';
import numeral from 'numeral'

 class ListCart extends React.Component{ 

    onRemoveFromCartClick = (item) => {
        this.props.removeCartItem(item);
        this.props.addListItem(item);
    }


    render(){
        return(
            <div className="cart-main .col-lg-3 .col-3 .col-md-3 .col-sm-12">
                {
                    this.props.carts.length === 0 ? (
                        <div className="cart-item"><p className="no-item_cart">There is no item, try to add one mobile to the shopping cart</p></div>
                    ) :(
                        this.props.carts.map( cartItem => {
                            return <ListCartDetail key = {cartItem.productName} cartItem={cartItem} onRemoveFromCartClick = {this.onRemoveFromCartClick} />;
                        })
                    )
                }
                <div className="cart-total"><p className="cart-total_price">Total Pirce: {numeral(totalPrice(this.props.carts)).format('$0,0.00')}</p></div>
            </div>
        );
    }
    }
const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
};

const mapDispatchToProps = (dispatch,props) => ({
    addListItem: (item) => dispatch(addListItem(item)),
    removeCartItem: (item) => dispatch(removeCartItem(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(ListCart);