import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://api.ezfrontend.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {

    return config;
}, function (error) {

    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {

    console.log("ERROR RESPONNSE", error.response);
    const { config, status, data } = error.response;
    console.log("1", config);
    console.log("2", config);
    console.log("", config);
    // if( config.url === '/auth/local/register' && status === 400 ){
    //     const errorList = data.data || [];
    //     const firstError = errorList.length > 0 ? errorList[0] : {};
    //     const messageList = firstError.message || [];
    //     const firstMessage = messageList.length > 0 ? messageList[0] : {};
    //     throw new Error(firstMessage.message);
    // }
    return Promise.reject(error);
});

export default axiosClient;