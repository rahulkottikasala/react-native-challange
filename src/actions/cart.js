 import {ADD_TO_CART, CART_COUNT, REMOVE_FROM_CART} from '../constants/index'


export const addToCart = (item) =>{
    return{
        type:ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (item) =>{
    return{
        type:REMOVE_FROM_CART,
        payload:item
    }
}

export const cartCount = (item) =>{
    return{
        type:CART_COUNT,
        payload:item
    }
}