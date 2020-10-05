import React, { useReducer } from 'react';
import { AlertContext } from './alertContext';
import { alertReducer } from './alertReducer';
import { SHOW_ALERT, HIDE_ALERT } from './alertReducer';

export const AlertState = ({children}) => {

    const [state, dispatch] = useReducer(alertReducer, null);

    const hide = () => dispatch({type: HIDE_ALERT});

    const show = (text) => {
        dispatch({
            type: SHOW_ALERT,
            payload: text,
        });
    };

    return (
        <AlertContext.Provider value={{
            show, hide, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
};