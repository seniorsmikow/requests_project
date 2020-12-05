import { requestsAPI } from '../axios/axios';
import { requests } from './types';


const initialState = {
    machines: [],
    error: null,
    isLoading: false,
    isDisabled: false,
    isRequestSend: false,
    isUserCreateRequest: false
};

const situationStore = (state = initialState, action) => {
    switch (action.type) {
        case requests.GET_REQUESTS_DATA:
            return {
                ...state, machines: action.payload
            };
        case requests.GET_NEW_REQUESTS:
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
        case requests.RESET_FILTER: 
            return {
                ...state, machines: state.machines.map(el => el)
            };
        case requests.IS_ERROR:
            return {
                ...state, error: action.error
            };
        case requests.DELETE_REQUEST:
            return {
                ...state, machines: state.machines.filter(el => el.id !== action.id)
            };
        case requests.TOGGLE_LOADING: 
            return {
                ...state, isLoading: action.loading
            };
        case requests.TOGGLE_DISABLED:
            return {
                ...state, isDisabled: action.disabled
            };
        case requests.SEND_REQUEST:
            return {
                ...state, isRequestsSend: action.request, isUserCreateRequest: true
            };
        case requests.CHECK_REQUEST_DELETE:
            return {
                ...state, machines: state.machines.filter(el => el.localId === action.userLocalId)
            };
        default:
            return state;
    }
};

const isError = error => ({type: requests.IS_ERROR, error});

const getDateFromAxios = payload => {
    return {
        type: requests.GET_REQUESTS_DATA,
        payload,
    };
};

const getRequests = () => ({type: requests.GET_NEW_REQUESTS});

const isLoadingRequests = loading => ({type: requests.TOGGLE_LOADING, loading});

const isDisabledButton = disabled => ({type: requests.TOGGLE_DISABLED, disabled});

const isRequestsSend = request => ({type: requests.SEND_REQUEST, request});

const delReq = id => ({type: requests.DELETE_REQUEST, id});


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

    const payload = Object.keys(response.data || {}).map(key => {
        return {
            ...response.data[key],
            id: key
        }
    })

    
    dispatch(getDateFromAxios(payload));
    dispatch(isLoadingRequests(false));
};

export const getNewRequests = () => dispatch => {
    dispatch(getRequests());
};

export const resetRequests = () => dispatch => {
    dispatch(isRequestsSend(false));
};

export const deleteRequests = id => async dispatch => {

    let response = await requestsAPI.deleteRequest(id);
    
    if(response.status === 200) {
        dispatch(delReq(id));
    }
}

export default situationStore;