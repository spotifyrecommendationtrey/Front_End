import axios from 'axios';

function axiosWithAuth() {
  return axios.create({
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
}

export default axiosWithAuth;
