const visibilityPopupConfirm = (state = false, action) => {
    switch (action.type) {
        case 'VISIBILITY_POPUP_CONFIRM':
            return action.status;
        default:
            return state;
    }
}

export default visibilityPopupConfirm;