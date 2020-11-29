import { authAPI } from '../axios/axios';
import { auth } from './types';


const initialState = {
    isAdmin: false,
    isUser: false,
    isLogin: false,
    isRegistered: false,
    showErrorAlert: false,
    networkError: false,
    localId: null
};

const loginStore = (state = initialState, action) => {
    switch (action.type) {
        case auth.SET_ADMIN:
            return {
                ...state, isAdmin: true, isUser: false, isLogin: true
            };
        case auth.SET_USER: 
            return {
                ...state, isUser: true, isAdmin: false, isLogin: true
            };
        case auth.USER_LOGIN_ID:
            return {
                ...state, localId: action.localId
            }
        case auth.LOGOUT_SUCCESS:
            return {
                ...state, isAdmin: false, isUser: false, isLogin: false, localId: null
            };
        case auth.CATCH_ERROR:
            return {
                ...state, showErrorAlert: action.error
            };
        case auth.IS_USER_REGISTERED:
            return {
                ...state, isRegistered: true
            };
        default:
            return state;
    }
};

const setAdminLogin = () => ({type: auth.SET_ADMIN});

const setUserLogin = () => ({type: auth.SET_USER});

const setUserLoacalId = localId => ({type: auth.USER_LOGIN_ID, localId});

const logOut = () => ({type: auth.LOGOUT_SUCCESS});

const catchError = error => ({type: auth.CATCH_ERROR, error});

const isRegistered = () => ({type: auth.IS_USER_REGISTERED});


export const setLoginData = data => async dispatch => {

    try {
        const response = await authAPI.login(data);
        const resData = response.data;

        if(resData.localId === "nPwPEcPAArNtsE46rqwkL567B1g1") {
            dispatch(setAdminLogin(resData.registered));
        } else {
            dispatch(setUserLogin(resData.registered));
            dispatch(setUserLoacalId(resData.localId));
        } 

        //to LocalStorage

        const expirationDate = new Date(new Date().getTime() + resData.expiresIn * 1000);

        localStorage.setItem('token', resData.idToken);
        localStorage.setItem('userId', resData.localId);
        localStorage.setItem('expirationDate', expirationDate);

    } catch(e) {
        dispatch(catchError(true));  
    }
    dispatch(catchError(false));
};

export const setRegisterData = payload => async dispatch => {

    try {
        const response = await authAPI.register(payload);
        const resData = response.data;
        console.log(resData);
        if(response.data.kind === "identitytoolkit#SignupNewUserResponse") {
            dispatch(isRegistered());
        }
    } catch(e) {
        dispatch(catchError(true));
    }
    dispatch(catchError(false));
};

export const logoutAction = () => dispatch => {
    dispatch(logOut());
};


export default loginStore;
