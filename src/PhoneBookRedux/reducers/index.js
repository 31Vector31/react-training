import {combineReducers} from 'redux'
import contacts from './contacts'
import idSelectedContact from "./idSelectedContact";
import visibilityPopupForm from "./visibilityPopupForm";
import popupForm from "./popupForm";
import visibilityPopupConfirm from "./visibilityPopupConfirm";

export default combineReducers({
    contacts,
    idSelectedContact,
    visibilityPopupForm,
    visibilityPopupConfirm,
    popupForm
})
