import React from 'react';
import {connect} from 'react-redux';
import {selectItemByPublished, sortItem} from '../selectors/selectItem';
import {removeListItem} from '../actions/listActions';
import {addCartItem} from '../actions/cartActions';
import ListItemDetail from './ListItemDetail';

class ItemsList extends React.Component{
    
    onAddToCartClick = (item) => {
        this.props.removeListItem(item);
        this.props.addCartItem(item);
    }

    
    render(){
        return(<div className = 'item-main row .col-lg-8 .col-8 .col-md-8 .col-sm-12   '>
                {
                    this.props.items.length === 0 ? (
                        <div className = 'no-item'><p className="no-item_text">Sorry, No more items</p></div>
                    ) :(
                    this.props.items.map( item => {
                        return <ListItemDetail key = {item.productName} item = {item} onAddToCartClick = {this.onAddToCartClick}/>;
                        })
                    )
                }
                </div>
                );
        }
}

const mapStateToProps = (state) => {
    return {
        items: sortItem(selectItemByPublished(state.lists))
    }
};

const mapDispatchToProps = (dispatch,props) => ({
    removeListItem: (item) => dispatch(removeListItem(item)),
    addCartItem: (item) => dispatch(addCartItem(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(ItemsList);