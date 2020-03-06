import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, loadSongs, removeFavorite} from "../actions";
import axiosWithAuth from "../utils/axiosWithAuth";

const StyledSong = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  white-space: nowrap;
`;

const Artist = styled.p`
  white-space: nowrap;
`;

const StyledButton = styled.button`
  background-color: #81b71a;
  border-radius: 25px;
  border: 1px outset #141414;
  font-size: 16px;
  color: white;
  align-self: center;
`;

function Song({track_id: id, track_name, artist_name, cover_art}) {
  const favorited = useSelector(({favorites}) => favorites.find(({track_id}) => id === track_id));
  const dispatch = useDispatch();

  function toggleFavorite() {
    dispatch((favorited ? removeFavorite : addFavorite)(id));
  }

  function suggestSongs() {
    axiosWithAuth().get(`/api/users/dashboard/suggestions/${id}`)
      .then(({data}) => dispatch(loadSongs(data)))
      .catch(e => console.error(e));
  }

  return (
    <StyledSong>
      <Title>{track_name}</Title>
      <img src={cover_art} />
      <Artist>Artist: {artist_name}</Artist>
      <StyledButton onClick={toggleFavorite}>{favorited ? "Unfavorite" : "Favorite"}</StyledButton>
      <StyledButton onClick={suggestSongs}>Suggested</StyledButton>
    </StyledSong>
  );
}

export default Song;
