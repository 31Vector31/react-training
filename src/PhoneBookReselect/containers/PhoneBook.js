import {connect} from 'react-redux'
import PhoneBook from '../components/PhoneBook/PhoneBook'
import {getContacts} from "../actions/main";
import {idSelectedContactSelector, visibilityPopupFormSelector} from "../selectors";

const mapStateToProps = state => ({
    visibilityPopupForm: visibilityPopupFormSelector(state),
    idSelectedContact: idSelectedContactSelector(state)
})

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(PhoneBook)
