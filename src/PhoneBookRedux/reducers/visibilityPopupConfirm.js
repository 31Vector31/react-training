const visibilityPopupConfirm = (state = false, action) => {
    switch (action.type) {
        case 'VISIBILITY_POPUP_CONFIRM': {
            const {payload} = action;
            return payload;
        }
        default:
            return state;
    }
}

export default visibilityPopupConfirm;