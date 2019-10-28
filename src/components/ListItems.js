import React from 'react';
import {connect} from 'react-redux';
import selectItem from '../selectors/selectItem';
import {removeListItem} from '../actions/listActions';
import {addCartItem} from '../actions/cartActions';
import ListItemDetail from './ListItemDetail';

class ItemsList extends React.Component{
    
    onClick = (item) => {
        this.props.removeListItem(item);
        this.props.addCartItem(item);
    }

    
    render(){
        return(<div className = 'item-main'>
                {
                    this.props.items.length === 0 ? (
                        <div className = 'no-item_list'>Sorry, No more items</div>
                    ) :(
                    this.props.items.map( item => {
                        return <ListItemDetail key = {item.productName} item = {item} onClick = {this.onClick}/>;
                        })
                    )
                }
                </div>
                );
        }
}

const mapStateToProps = (state) => {
    return {
        items: selectItem(state.lists,state.sortBy)
    }
};

const mapDispatchToProps = (dispatch,props) => ({
    removeListItem: (item) => dispatch(removeListItem(item)),
    addCartItem: (item) => dispatch(addCartItem(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(ItemsList);