import {connect} from 'react-redux'
import PopupConfirm from "../components/PopupConfirm/PopupConfirm";
import {setVisibilityPopupConfirm} from "../actions/popupConfirm";
import {deleteContact, setIdSelectedContact} from "../actions/main";

const mapStateToProps = state => ({
    contact: state.contacts.find(contact => contact.id === state.idSelectedContact)
})

const mapDispatchToProps = dispatch => ({
    hide: () => dispatch(setVisibilityPopupConfirm(false)),
    deleteContact: (id) => {
        dispatch(setVisibilityPopupConfirm(false));
        dispatch(setIdSelectedContact(null));
        dispatch(deleteContact(id));
    },
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(PopupConfirm)
