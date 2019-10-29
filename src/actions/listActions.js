import {SET_LIST_ITEMS, ADD_LIST_ITEM, REMOVE_LIST_ITEM} from './types';

export const setListItems = (items) => ({
    type: SET_LIST_ITEMS,
    items
})

export const addListItem = (item) => ({
    type: ADD_LIST_ITEM,
    item
})

export const removeListItem = ({productName}) => ({
    type : REMOVE_LIST_ITEM,
    productName
})