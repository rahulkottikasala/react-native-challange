import { CART_COUNT, CART_ITEM } from "../constants";
export const cartCount =(count) => {
    return{
        type: CART_COUNT,
        payload:count
    }
}

export const cartItem = (item) => {
    return{
        type: CART_ITEM,
        payload:item
    }
}