import React, { useContext } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

function Playing() {
  const { song, handleSetSong } = useContext(Songs);
  const handleClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handleClickPrevious = () => {
    handleSetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        autoPlay={true}
        customProgressBarSection={[
          RHAP_UI.CURRENT_TIME,
          RHAP_UI.PROGRESS_BAR,
          RHAP_UI.CURRENT_LEFT_TIME,
        ]}
      />
      {console.log({ AudioPlayer })}
    </div>
  );
}

export default Playing;
