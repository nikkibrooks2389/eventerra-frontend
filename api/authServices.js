import axios from 'axios';

const API_URL = 'http://192.168.1.215:3000/api/users';// Replace with your server's URL

export const registerUser = async (userData) => {
    console.log(userData);
    try {
        let response = await axios.post(`${API_URL}/register`, userData);
        console.log(response);
    } catch (error) {
        console.log("error message:", error.message);

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("error response data:", error.response.data);
            console.log("error response status:", error.response.status);
            console.log("error response headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // console.log("error request:", error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }

        // console.log("error config:", error.config);
    }
};

export const loginUser = async (userData) => {
    return axios.post(`${API_URL}/login`, userData);
};

export const requestPasswordReset = async (email) => {
    return axios.post(`${API_URL}/request-reset-password`, { email });
};

export const resetPassword = async (resetData) => {
    return axios.post(`${API_URL}/reset-password`, resetData);
};