import {connect} from 'react-redux'
import ContactsList from '../components/ContactsList/ContactsList'
import {setIdSelectedContact} from "../actions/main";
import {openPopup} from "../actions/popupForm";

const mapStateToProps = state => ({
    contacts: state.contactsReducer.contacts
})

const mapDispatchToProps = dispatch => ({
    showPopupForm: () => dispatch(openPopup()),
    setIdSelectedContact: (id) => dispatch(setIdSelectedContact(id))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(ContactsList)
