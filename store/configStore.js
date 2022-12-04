import { createStore, combineReducers } from "redux";
import { CartCountReducer } from "../src/reducers/CartCountReducer";
import { CartListReducer } from "../src/reducers/CartListReducer";

const rootReducer = combineReducers({
    cartList : CartListReducer,
    cartCount : CartCountReducer
})

export const configStore  = () => {
    return createStore(rootReducer);
}
