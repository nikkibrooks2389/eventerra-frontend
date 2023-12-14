import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users'; // Replace with your server's URL

export const registerUser = async (userData) => {
    return axios.post(`${API_URL}/register`, userData);
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