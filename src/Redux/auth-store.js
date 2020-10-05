import { authAPI } from '../axios/axios';

const SET_ADMIN = "auth/SET_ADMIN";
const SET_USER = "auth/SET_USER";
const LOG_OUT = "auth/LOG_OUT";
const CATCH_ERROR = "auth/CATCH_ERROR";
const SHOW_REGISTER_ALERT = "auth/SHOW_REGISTER_ALERT";
const SHOW_LOGIN_ALERT = "auth/SHOW_LOGIN_ALERT";
const RESET_LOGIN_ALERT = "auth/RESET_LOGIN_ALERT";

const initialState = {
    isAdmin: false,
    isUser: false,
    isLogin: false,
    isRegistered: false,
    errorMessage: '',
    kind: null,
};

const loginStore = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN:
            return {
                ...state, isAdmin: true, isUser: false
            };
        case SET_USER: 
            return {
                ...state, isUser: true, isAdmin: false, isRegistered: action.registr
            };
        case LOG_OUT:
            return {
                ...state, isAdmin: false, isUser: false, isLogin: false
            };
        case CATCH_ERROR:
            return {
                ...state, errorMessage: action.error
            };
        case SHOW_REGISTER_ALERT:
            return {
                ...state, kind: action.kind
            };
        case SHOW_LOGIN_ALERT: 
            return {
                ...state, isLogin: true
            };
        case RESET_LOGIN_ALERT:
            return {
                ...state, isLogin: false
            };
        default:
            return state;
    }
};

const setAdminLogin = () => ({type: SET_ADMIN});

const setUserLogin = registr => ({type: SET_USER, registr});

const logOut = () => ({type: LOG_OUT});

//const catchError = error => ({type: CATCH_ERROR, error});

const showLoginAlert = () => ({type: SHOW_LOGIN_ALERT});

const resetLogin = () => ({type: RESET_LOGIN_ALERT});

const showRegisterAlert = kind => ({type: SHOW_REGISTER_ALERT, kind});

export const setLoginData = data => async dispatch => {

    try {
        const response = await authAPI.login(data);
        const resData = response.data;

        if(resData.localId === "nPwPEcPAArNtsE46rqwkL567B1g1") {
            dispatch(setAdminLogin());
            dispatch(showLoginAlert());
        } else {
            dispatch(setUserLogin(resData.registered));
            dispatch(showLoginAlert());
        }
        
        //to LocalStorage

        const expirationDate = new Date(new Date().getTime() + resData.expiresIn * 1000);

        localStorage.setItem('token', resData.idToken);
        localStorage.setItem('userId', resData.localId);
        localStorage.setItem('expirationDate', expirationDate);

    } catch(e) {
        console.log(e);
    }
};

export const setRegisterData = data => async dispatch => {

    try {
        const response = await authAPI.register(data);
        const resData = response.data;
        console.log(resData);
        if(response.data.kind === "identitytoolkit#SignupNewUserResponse") {
            dispatch(showRegisterAlert(response.data.kind));
        }
    } catch(e) {
        console.log(e);
    }
};

export const logoutAction = () => dispatch => {
    dispatch(logOut());
};

export const resetLoginAlert = () => dispatch => {
    dispatch(resetLogin());
}

export default loginStore;