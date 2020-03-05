import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../actions";

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

function Song({track_id: id, track_name, artist_name}) {
  const favorited = useSelector(({favorites}) => favorites.find(({track_id}) => id === track_id));
  const dispatch = useDispatch();

  function toggleFavorite() {
    dispatch((favorited ? removeFavorite : addFavorite)(id));
  }

  return (
    <StyledSong>
      <Title>{track_name}</Title>
      <Artist>Artist: {artist_name}</Artist>
      <StyledButton onClick={toggleFavorite}>{favorited ? "Unfavorite" : "Favorite"}</StyledButton>
    </StyledSong>
  );
}

export default Song;
