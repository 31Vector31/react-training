import {connect} from 'react-redux'
import ContactsList from '../components/ContactsList/ContactsList'
import {setIdSelectedContact, setVisibilityPopupForm} from "../actions/main";

const mapStateToProps = state => ({
    contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
    showPopupForm: () => dispatch(setVisibilityPopupForm(true)),
    setIdSelectedContact: (id) => dispatch(setIdSelectedContact(id))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(ContactsList)
