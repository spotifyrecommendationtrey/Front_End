// import axios from 'axios';

// // export default function axiosWithAuth() {
// //   return axios.create({
// //     headers: {
// //       Authorization: localStorage.getItem('token')
// //     }
// //   });
// // }

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