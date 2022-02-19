import {combineReducers} from 'redux'
import contactsReducer from './contacts'
import popupFormReducer from "./popupForm";
import visibilityPopupConfirm from "./visibilityPopupConfirm";

export default combineReducers({
    contactsReducer,
    visibilityPopupConfirm,
    popupFormReducer
})
