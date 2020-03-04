import React from 'react';
import {useSelector} from "react-redux";
import Song from "./Song";

function Songs() {
  const songs = useSelector(({songs}) => songs);

  return (
    <div>
      {songs.map(song => <Song key={song.track_id} {...song} />)}
    </div>
  );
}

export default Songs;
