import { authAPI } from '../axios/axios';

const SET_ADMIN = "auth/SET_ADMIN";
const SET_USER = "auth/SET_USER";
const LOG_OUT = "auth/LOG_OUT";
const CATCH_ERROR = "auth/CATCH_ERROR";
const IS_USER_REGISTERED = "auth/IS_USER_REGISTERED";


const initialState = {
    isAdmin: false,
    isUser: false,
    isLogin: false,
    isRegistered: false,
    errorMessage: '',
};

const loginStore = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN:
            return {
                ...state, isAdmin: true, isUser: false, isLogin: true
            };
        case SET_USER: 
            return {
                ...state, isUser: true, isAdmin: false, isLogin: true
            };
        case LOG_OUT:
            return {
                ...state, isAdmin: false, isUser: false, isLogin: false
            };
        case CATCH_ERROR:
            return {
                ...state, errorMessage: action.error
            };
        case IS_USER_REGISTERED:
            return {
                ...state, isRegistered: true
            };
        default:
            return state;
    }
};

const setAdminLogin = () => ({type: SET_ADMIN});

const setUserLogin = registr => ({type: SET_USER, registr});

const logOut = () => ({type: LOG_OUT});

//const catchError = error => ({type: CATCH_ERROR, error});

const isRegistered = () => ({type: IS_USER_REGISTERED});

export const setLoginData = data => async dispatch => {

    try {
        const response = await authAPI.login(data);
        const resData = response.data;

        if(resData.localId === "nPwPEcPAArNtsE46rqwkL567B1g1") {
            dispatch(setAdminLogin());
        } else {
            dispatch(setUserLogin(resData.registered));
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
            dispatch(isRegistered());
        }
    } catch(e) {
        console.log(e);
    }
};

export const logoutAction = () => dispatch => {
    dispatch(logOut());
};


export default loginStore;