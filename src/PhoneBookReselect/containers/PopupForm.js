import {connect} from 'react-redux'
import PopupForm from "../components/PopupForm/PopupForm";
import {hide, save, setName, setSurname, setTelephone} from "../actions/popupForm";
import {selectedContactSelector} from "../selectors";

const mapStateToProps = state => ({
    contact: selectedContactSelector(state),
    popupForm: state.popupFormReducer.popupForm
})

const mapDispatchToProps = dispatch => ({
    hide: () => dispatch(hide()),
    save: (popupForm, id) => dispatch(save(popupForm, id)),
    setName: (name) => dispatch(setName(name)),
    setSurname: (surname) => dispatch(setSurname(surname)),
    setTelephone: (telephone) => dispatch(setTelephone(telephone)),
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(PopupForm)
