import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../actions";

function Song({track_id: id, track_name, artist_name}) {
  const favorited = useSelector(({favorites}) => favorites.find(({track_id}) => id === track_id));
  const dispatch = useDispatch();

  function toggleFavorite() {
    dispatch((favorited ? removeFavorite : addFavorite)(id));
  }

  return (
    <div>
      <h3>{track_name}</h3>
      <p>{artist_name}</p>
      <button onClick={toggleFavorite}>{favorited ? "Unfavorite" : "Favorite"}</button>
    </div>
  );
}

export default Song;
