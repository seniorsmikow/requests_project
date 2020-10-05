export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';


export const alertReducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return action.payload;
        case HIDE_ALERT:
            return null;
        default:
            return state;
    }
};

