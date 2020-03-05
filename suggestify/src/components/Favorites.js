import React from 'react';
import {useSelector} from 'react-redux';
import Song from "./Song";
import styled from "styled-components";

const SongContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
  border: 5px outset #81b71a;
  border-radius: 25px;
  background-color: #141414;
`;

const Title = styled.h2`
  width: 100%;
  margin: 0;
  padding: 0;
`;

function Favorites() {
  const favorites = useSelector(({favorites}) => favorites);

  return (
    <SongContainer>
      <Title>Favorites</Title>
      {favorites.map(song => <Song key={song.track_id} {...song} />)}
    </SongContainer>
  );
}

export default Favorites;
