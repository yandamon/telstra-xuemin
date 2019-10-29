import { ADD_CART_ITEM, REMOVE_CART_ITEM} from'./types'

export const addCartItem = (item) => ({
    type: ADD_CART_ITEM,
    item
})

export const removeCartItem = ({productName}) => ({
    type : REMOVE_CART_ITEM,
    productName
})