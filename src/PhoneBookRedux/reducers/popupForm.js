const initialState = {
    visibilityPopupForm: false,
    popupForm: {
        name: {value: null, isInvalid: false},
        surname: {value: null, isInvalid: false},
        telephone: {value: null, isInvalid: false},
    }
};

const popupFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME': {
            const {popupForm} = state;
            const {name} = action;
            return {...state, popupForm: {...popupForm, name}};
        }
        case 'SET_SURNAME': {
            const {popupForm} = state;
            const {surname} = action;
            return {...state, popupForm: {...popupForm, surname}};
        }
        case 'SET_TELEPHONE': {
            const {popupForm} = state;
            const {telephone} = action;
            return {...state, popupForm: {...popupForm, telephone}};
        }
        case 'VISIBILITY_POPUP_FORM':
            const {status} = action;
            return {...state, visibilityPopupForm: status};
        default:
            return state;
    }
}

export default popupFormReducer;
