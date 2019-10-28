const listItemsDefaultState = [];

export default (state = listItemsDefaultState,action) =>{
    switch(action.type){
        case 'SET_LIST_ITEMS':
            return action.items;
        case 'ADD_LIST_ITEM' :
            return [...state,action.item];
        case 'REMOVE_LIST_ITEM' :
            return state.filter(({productName})=> productName !== action.productName);
        default:
            return state;
    }
}