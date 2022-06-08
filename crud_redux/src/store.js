
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers';
 
const store = createStore(
    reducer,
    //Para habilitar redux devtools
    compose( applyMiddleware(thunk), 
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;