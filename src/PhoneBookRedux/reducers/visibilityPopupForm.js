const visibilityPopupForm = (state = false, action) => {
    switch (action.type) {
        case 'VISIBILITY_POPUP_FORM':
            return action.status;
        default:
            return state;
    }
}

export default visibilityPopupForm;