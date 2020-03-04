import React, {useEffect} from 'react';
import Favorites from "./Favorites";
import Songs from "./Songs";
import {useDispatch} from "react-redux";
import {loadFavorites, loadSongs} from "../actions";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSongs());
    dispatch(loadFavorites());
  }, []);

  return (
    <div>
      <Songs />
      <Favorites />
    </div>
  )
}

export default Dashboard;
