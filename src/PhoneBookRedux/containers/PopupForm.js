import {connect} from 'react-redux'
import {addContact, editContact, setVisibilityPopupForm} from "../actions/main";
import PopupForm from "../components/PopupForm/PopupForm";
import {setName, setSurname, setTelephone} from "../actions/popupForm";
import {selectedContactSelector} from "../selectors";

const mapStateToProps = state => ({
    contact: selectedContactSelector(state) || state.popupForm,
})

const mapDispatchToProps = dispatch => ({
    hide: () => dispatch(setVisibilityPopupForm(false)),
    setName: (name) => dispatch(setName(name)),
    setSurname: (surname) => dispatch(setSurname(surname)),
    setTelephone: (telephone) => dispatch(setTelephone(telephone)),
    addContact: (contact) => dispatch(addContact(contact)),
    editContact: (contact) => dispatch(editContact(contact)),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(PopupForm)
