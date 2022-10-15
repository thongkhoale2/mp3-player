import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import DataSongs from "./data/songs.json";
import Playing from "./components/Playing";
import { useState } from "react";
import { Songs } from "./Context"; //createContext is declared in Context.js

function App() {
  //set song in App, so that it can be used in other components
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (id) => {
    if (id < 0) {
      id = 0;
    }
    if (id >= DataSongs.length) {
      id = 0;
    }
    const song = DataSongs.find((song) => song.id === id);

    setSong(song);
  };
  return (
    <div className="App ">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          <DetailSong />
          {console.log("render-app" + Math.random())}
          <ListSongs />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
