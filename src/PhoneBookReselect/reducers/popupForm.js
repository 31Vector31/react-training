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
            const {payload} = action;
            return {...state, popupForm: {...popupForm, name: payload}};
        }
        case 'SET_SURNAME': {
            const {popupForm} = state;
            const {payload} = action;
            return {...state, popupForm: {...popupForm, surname: payload}};
        }
        case 'SET_TELEPHONE': {
            const {popupForm} = state;
            const {payload} = action;
            return {...state, popupForm: {...popupForm, telephone: payload}};
        }
        case 'VISIBILITY_POPUP_FORM':
            const {payload} = action;
            return {...state, visibilityPopupForm: payload};
        default:
            return state;
    }
}

export default popupFormReducer;
