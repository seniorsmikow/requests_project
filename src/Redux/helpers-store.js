// Тестовый store. Поиск решения, как узнать отправил пользовать запрос или нет.


import { usersAPI } from '../axios/axios';
import { userHelpers } from './types';

const initialState = {
    isRequestCreate: false
};

const helpersStore = (state = initialState, action) => {
    switch (action.type) {
        case userHelpers.CREATE_HELPER:
            return {
                ...state, isRequestCreate: true
            };
        default:
            return state;
            
    }
};

const isPostRequest = () => ({type: userHelpers.CREATE_HELPER});

export const isUserCreate= (data = {isRequestSend: true}) => async dispatch => {
    let response = await usersAPI.postUserPayload(data);

    if(response) {
        dispatch(isPostRequest());
    }

};

export default helpersStore;
