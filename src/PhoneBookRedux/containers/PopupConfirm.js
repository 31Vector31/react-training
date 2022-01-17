import {connect} from 'react-redux'
import PopupConfirm from "../components/PopupConfirm/PopupConfirm";
import {setVisibilityPopupConfirm} from "../actions/popupConfirm";
import {deleteContact} from "../actions/main";
import {selectedContactSelector} from "../selectors";

const mapStateToProps = state => ({
    contact: selectedContactSelector(state)
})

const mapDispatchToProps = dispatch => ({
    hide: () => dispatch(setVisibilityPopupConfirm(false)),
    deleteContact: (id) => dispatch(deleteContact(id)),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(PopupConfirm)
