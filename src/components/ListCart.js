import React from 'react';
import {connect} from 'react-redux';
import ListCartDetail from './ListCartDetail'
import {addListItem} from '../actions/listActions';
import {removeCartItem} from '../actions/cartActions';
import totalPrice from '../selectors/totalPrice';
import numeral from 'numeral'

 class ListCart extends React.Component{ 

    onClick = (item) => {
        this.props.removeCartItem(item);
        this.props.addListItem(item);
    }


    render(){
        return(
            <div className="cart-main">
                {
                    this.props.carts.length === 0 ? (
                        <div className="no-item_cart">There is no item, try to add one mobile to the shopping cart</div>
                    ) :(
                        this.props.carts.map( cartItem => {
                            return <ListCartDetail key = {cartItem.productName} cartItem={cartItem} onClick = {this.onClick} />;
                        })
                    )
                }
                <div className="cart-total">Total Pirce: {numeral(totalPrice(this.props.carts)).format('$0,0.00')}</div>
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