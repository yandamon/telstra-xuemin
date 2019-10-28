import { createStore, combineReducers} from 'redux';
import cartItemsReducer from '../reducer/cartItems';
import listItemsReducer from '../reducer/listItems';


export default createStore(
        combineReducers({
            carts: cartItemsReducer,
            lists: listItemsReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )