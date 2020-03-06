import axios from 'axios';

function axiosWithAuth() {
  return axios.create({
    headers: {
      Authorization: localStorage.getItem('token')
    },
    baseURL: 'https://spotify3-buildweek.herokuapp.com'
  });
}

export default axiosWithAuth;
