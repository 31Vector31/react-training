import {connect} from 'react-redux'
import ContactsList from '../components/ContactsList/ContactsList'
import {setIdSelectedContact} from "../actions/main";
import {setVisibilityPopupForm} from "../actions/popupForm";

const mapStateToProps = state => ({
    contacts: state.contactsReducer.contacts
})

const mapDispatchToProps = dispatch => ({
    showPopupForm: () => dispatch(setVisibilityPopupForm(true)),
    setIdSelectedContact: (id) => dispatch(setIdSelectedContact(id))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(ContactsList)
