import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://training-app-fb0d3.firebaseio.com/',
});

export const requestsAPI = {
    getData() {
        return instance.get(`requests.json`);
    },
    postData(payload) {
        return instance.post(`requests.json`, payload);
    },
    getDataWithKey(key) {
        return instance.get(`requests/${key}.json`);
    }
};

export const authAPI = {
    login(data) {
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkOTe-LJOL6MgVI7nDy2TUJapgsgyzFQc`, data);
    },
    register(data) {
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkOTe-LJOL6MgVI7nDy2TUJapgsgyzFQc`, data);
    }
};