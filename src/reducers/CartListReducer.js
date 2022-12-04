import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/index";


const initialValues = {
    cart:[],
}


export const CartListReducer = (state = initialValues, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state, 
                cart: action.payload
            }
        case REMOVE_FROM_CART:
            return{
                ...state, 
                cart:state.cart.filter(key => key.data.urlKey !== action.payload.urlKey)
            }    
        default:
            return state;
    }
} 