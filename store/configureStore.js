import { CartCountRedecer } from "../src/reducers/CartCountRedecer";
import {createStore, combineReducers} from "redux"
import { CartListRedecer } from "../src/reducers/CartItemReducer";

const rootReducer = combineReducers({
    cartCount : CartCountRedecer,
    cartItem : CartListRedecer
})

const configureStore = () => {
    return createStore(rootReducer)
}

export default configureStore;