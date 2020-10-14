import { requestsAPI } from '../axios/axios';

const GET_REQUESTS_DATA = "requests/GET_REQUESTS_DATA";
const GET_NEW_REQUESTS = "requests/GET_NEW_REQUESTS";
const RESET_FILTER = "requests/RESET_FILTER";
const IS_ERROR = "requests/IS_ERROR";
const TOGGLE_LOADING = "requests/TOGGLE_LOADING";
const TOGGLE_DISABLED = "requests/TOGGLE_DISABLED";
const SEND_REQUEST = "requests/SEND_REQUEST";


const initialState = {
    machines: [],
    error: null,
    isLoading: false,
    isDisabled: false,
    isRequestSend: false,
};

const situationStore = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUESTS_DATA:
            return {
                ...state, machines: action.payload
            };
        case GET_NEW_REQUESTS:
            function compare(a, b) {
                const dateA = a.time.split(":").join('');
                const dateB = b.time.split(":").join('');

                let comparison = 0;
                if(dateA > dateB) {
                    comparison = 1;
                } else if(dateB > dateA) {
                    comparison = -1;
                }

                return comparison;
            }
            return {
                ...state, machines: [...state.machines.sort(compare)]
            };
        case RESET_FILTER: 
            return {
                ...state, machines: state.machines.map(el => el)
            };
        case IS_ERROR:
            return {
                ...state, error: action.error
            };
        case TOGGLE_LOADING: 
            return {
                ...state, isLoading: action.loading
            };
        case TOGGLE_DISABLED:
            return {
                ...state, isDisabled: action.disabled
            };
        case SEND_REQUEST:
            return {
                ...state, isRequestsSend: action.request
            };
        default:
            return state;
    }
};

const isError = error => ({type: IS_ERROR, error});

const getDateFromAxios = payload => {
    return {
        type: GET_REQUESTS_DATA,
        payload
    };
};

const getRequests = () => ({type: GET_NEW_REQUESTS});

const isLoadingRequests = loading => ({type: TOGGLE_LOADING, loading});

const isDisabledButton = disabled => ({type: TOGGLE_DISABLED, disabled});

const isRequestsSend = request => ({type: SEND_REQUEST, request});



export const sendUserRequest = requestData => async dispatch => {

    dispatch(isDisabledButton(true));
    
    let response = await requestsAPI.postData(requestData);

    if(response.status === 200) {
        dispatch(isError(false));
        dispatch(isDisabledButton(false));
        dispatch(isRequestsSend(true));
    }
    dispatch(isRequestsSend(false));
};

export const getRequestsData = () => async dispatch => {

    dispatch(isLoadingRequests(true));

    let response = await requestsAPI.getData();

    let arr = [];

    Object.keys(response.data).map(elem => (
        arr.push(response.data[elem])
    ));
    
    dispatch(getDateFromAxios(arr));
    dispatch(isLoadingRequests(false));
};

export const getNewRequests = () => dispatch => {

    dispatch(getRequests());
};

export const resetRequests = () => dispatch => {
    dispatch(isRequestsSend(false));
};


export default situationStore;