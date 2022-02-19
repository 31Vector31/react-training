import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import PhoneBook from './containers/PhoneBook'
import rootReducer from './reducers'

function index() {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return (
        <Provider store={store}>
            <PhoneBook/>
        </Provider>
    )
}

export default index;