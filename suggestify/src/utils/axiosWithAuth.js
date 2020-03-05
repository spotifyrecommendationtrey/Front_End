import axios from 'axios';
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://spotify3-buildweek.herokuapp.com/api',
        headers: {
            Authorization: token
        }
    });
};