import {connect} from 'react-redux'
import ContactInfo from '../components/ContactInfo/ContactInfo'
import {setIdSelectedContact} from "../actions/main";
import {setVisibilityPopupConfirm} from "../actions/popupConfirm";
import {selectedContactSelector} from "../selectors";
import {setVisibilityPopupForm} from "../actions/popupForm";

const mapStateToProps = state => ({
    contact: selectedContactSelector(state),
    popupConfirm: state.visibilityPopupConfirm
})

const mapDispatchToProps = dispatch => ({
    back: () => dispatch(setIdSelectedContact(null)),
    showPopupForm: () => dispatch(setVisibilityPopupForm(true)),
    showPopupConfirm: () => dispatch(setVisibilityPopupConfirm(true)),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(ContactInfo)
