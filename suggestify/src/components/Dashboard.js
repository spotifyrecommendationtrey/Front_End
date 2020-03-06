import React, {useEffect} from 'react';
import Favorites from "./Favorites";
import Songs from "./Songs";
import {useDispatch} from "react-redux";
import {loadFavorites} from "../actions";
import FormikSongForm from "./SongSearch";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return (
    <div>
      <FormikSongForm dispatch={dispatch} />
      <Songs />
      <Favorites />
    </div>
  )
}

export default Dashboard;
