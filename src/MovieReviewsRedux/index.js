import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import Router from './components/Router/Router'
import rootReducer from './reducers'

function index() {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    )
}

export default index;