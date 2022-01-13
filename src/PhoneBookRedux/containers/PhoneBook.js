import {connect} from 'react-redux'
import PhoneBook from '../components/PhoneBook/PhoneBook'
import {getContacts} from "../actions/main";

const mapStateToProps = state => ({
    visibilityPopupForm: state.visibilityPopupForm,
    idSelectedContact: state.idSelectedContact
})

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(PhoneBook)
