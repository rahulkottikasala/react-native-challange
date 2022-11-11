import { ADD_TO_CART, REMOVE_TO_CART} from '../constants';
const initialValue = {
  cart: [],
};

export const CartListRedecer = (state = initialValue, action) => {
  switch (action.type) {

      case ADD_TO_CART:
        return {
          ...state,
          cart: action.value,
        }
        case REMOVE_TO_CART:
          return {
            ...state,
            cart:state.cart.filter((x) => x.id !== action.value.id,)
          }
      default:
        return state;
  }
}
