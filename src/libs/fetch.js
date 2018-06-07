import axios from 'axios';
// import store from '@/store';
// import Cookies from 'js-cookie';
const service = axios.create({
    baseURL: "/api",
    timeout: 5000,
    withCredentials: true
});
// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    // if (store.getters.token) {
    //     config.headers['Auth-Token'] = store.getters.token;
    // }
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});
// response拦截器
service.interceptors.response.use(
    response => {
        return response;
        // let res = response.data;
        // if (res.code == 0) {
        //     return response.data;
        // } else if (res.code == 406) {
        //     // Cookies.remove("USER");
        //     // Cookies.remove("ACCESS_TOKEN");
        //     window.vm.$router.push({path: "/login"});
        // } else {
        //     Promise.reject(new Error("出错了"));
        // }
    }
);
export default service;
