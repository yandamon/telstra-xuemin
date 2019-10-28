const cartItemsDefaultState = [];

export default (state = cartItemsDefaultState,action) =>{
    switch(action.type){
        case 'ADD_CART_ITEM' :
            return [...state,action.item];
        case 'REMOVE_CART_ITEM' :
            return state.filter(({productName})=> productName !== action.productName);
        default:
            return state;
    }
}