// import {LOAD_SONGS, LOAD_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE} from "../actions";

// const initialState = {
//   songs: [],
//   favorites: []
// };

// function reducer(state = initialState, {type, payload}) {
//   switch (type) {
//     case LOAD_SONGS:
//       return {...state, songs: payload};
//     case LOAD_FAVORITES:
//       return {...state, favorites: payload};
//     case ADD_FAVORITE:
//       return {...state, favorites: [...payload]};
//     case REMOVE_FAVORITE:
//       return {...state, favorites: state.favorites.filter(({track_id}) => track_id !== payload)};
//     default:
//       return {...state};
//   }
// }

// export default reducer;
