/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'

const store = configureStore();


const RNRedux = ()=> (
    <Provider store={store}>
    <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
