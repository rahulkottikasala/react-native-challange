import { CART_COUNT , ADD_TO_CART, REMOVE_TO_CART} from "../constants";
export const cartCount =(count) => {
    return{
        type: CART_COUNT,
        payload:count
    }
}

export const addToCart = (item) => {
    return{
        type: ADD_TO_CART,
        value:item
    }
}
export const removeToCart = (item) => {
    return{
        type: REMOVE_TO_CART,
        value:item
    }
}