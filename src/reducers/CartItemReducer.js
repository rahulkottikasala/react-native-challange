import {CART_COUNT, CART_ITEM} from '../constants';
const initialValue = {
  cart: [],
};

export const CartListRedecer = (state = initialValue, action) => {
  switch (action.type) {

      case CART_ITEM:
        return {
          ...state,
          cart:action.payload,
        }
      default:
        return state;
  }
}
