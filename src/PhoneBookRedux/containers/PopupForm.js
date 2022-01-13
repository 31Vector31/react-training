import {connect} from 'react-redux'
import {addContact, editContact, setVisibilityPopupForm} from "../actions/main";
import PopupForm from "../components/PopupForm/PopupForm";
import {
    setName, setNameInvalid,
    setSurname, setSurnameInvalid,
    setTelephone, setTelephoneInvalid,
} from "../actions/popupForm";

const mapStateToProps = state => ({
    contact: state.contacts.find(contact => contact.id === state.idSelectedContact) || state.popupForm,
})

const mapDispatchToProps = dispatch => ({
    hide: () => dispatch(setVisibilityPopupForm(false)),
    setName: (name) => {
        dispatch(setName(name));
        dispatch(setNameInvalid(name));
    },
    setSurname: (surname) => {
        dispatch(setSurname(surname));
        dispatch(setSurnameInvalid(surname));
    },
    setTelephone: (telephone) => {
        dispatch(setTelephone(telephone));
        dispatch(setTelephoneInvalid(telephone));
    },
    addContact: (contact) => dispatch(addContact(contact)),
    editContact: (contact) => dispatch(editContact(contact)),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(PopupForm)
