import {CART_COUNT} from '../constants';
const initialValue = {
  count: 0,
};

export const CartCountRedecer = (state = initialValue, action) => {
  switch (action.type) {
    case CART_COUNT:
      return {
        ...state,
        count: action.payload,
      };
      
      default:
        return state;
  }
}
