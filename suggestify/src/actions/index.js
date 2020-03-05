import axiosWithAuth from "../utils/AxiosWithAuth";

const LOAD_SONGS = "LOAD_SONGS";
const LOAD_FAVORITES = "LOAD_FAVORITES";
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

function loadSongs() {
  return dispatch => {
    axiosWithAuth().get('https://spotify3-buildweek.herokuapp.com/api/users/dashboard/songs')
      .then(({data}) => dispatch({type: LOAD_SONGS, payload: data}))
      .catch(e => console.error(e));
  };
}

function loadFavorites() {
  return dispatch => {
    axiosWithAuth().get(`https://spotify3-buildweek.herokuapp.com/api/users/dashboard/${localStorage.getItem('id')}/favorites`)
      .then(({data}) => dispatch({type: LOAD_FAVORITES, payload: data}))
      .catch(e => console.error(e));
  };
}

function addFavorite(song_id) {
  const user_id = localStorage.getItem('id');
  const data = {
    user_id,
    song_id
  };

  return dispatch => {
    axiosWithAuth()
      .post(`https://spotify3-buildweek.herokuapp.com/api/users/dashboard/${user_id}/favorites`, data)
      .then(({data}) => dispatch({type: ADD_FAVORITE, payload: data}))
      .catch(e => console.error(e));
  };
}

function removeFavorite(songId) {
  return dispatch => {
    axiosWithAuth()
      .delete(`https://spotify3-buildweek.herokuapp.com/api/users/dashboard/${localStorage.getItem('id')}/favorites/${songId}`)
      .then(() => dispatch({type: REMOVE_FAVORITE, payload: songId}))
      .catch(e => console.error(e));
  };
}

export {LOAD_SONGS, LOAD_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE, loadSongs, loadFavorites, addFavorite, removeFavorite};
