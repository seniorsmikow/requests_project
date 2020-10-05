import { requestsAPI } from '../axios/axios';

const GET_REQUESTS_DATA = "situation/GET_REQUESTS_DATA";
const GET_NEW_REQUESTS = "situation/GET_NEW_REQUESTS";
const RESET_FILTER = "situation/RESET_FILTER";
const IS_ERROR = "situation/IS_ERROR";


const initialState = {
    machines: [],
    error: null,
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

const reset = () => ({type: RESET_FILTER});

export const sendUserRequest = requestData => async dispatch => {
    
    let response = await requestsAPI.postData(requestData);

    if(response.status === 200) {
        dispatch(isError(false));
    }
};

export const getRequestsData = () => async dispatch => {
    let response = await requestsAPI.getData();

    let arr = [];

    Object.keys(response.data).map(elem => (
        arr.push(response.data[elem])
    ));
    
    dispatch(getDateFromAxios(arr));
};

export const getNewRequests = () => dispatch => {

    dispatch(getRequests());
};

export const resetRequests = () => dispatch => {
    dispatch(reset());
};

export default situationStore;