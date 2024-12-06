import React, { useState, useRef } from 'react';
import Controls from './Controls';
import TrackInfo from './TrackInfo';
import ProgressBar from './ProgressBar';

const Player = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState({
    title: "Song Title",
    artist: "Artist Name",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // example audio file
  });
  const [volume, setVolume] = useState(1);
  const [isShuffled, setIsShuffled] = useState(false); // new state for shuffle

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
    // Logic for shuffling can be implemented later
  };

  return (
    <div className="bg-black p-4 rounded-lg w-80 mx-auto text-white">
      <TrackInfo track={track} />
      <audio ref={audioRef} src={track.src} volume={volume} />
      <Controls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        setVolume={setVolume}
        volume={volume}
      />
      <ProgressBar audioRef={audioRef} />
      
      {/* Shuffle Button */}
      <button 
        className={`bg-${isShuffled ? 'blue' : 'gray'}-500 p-2 rounded-lg mt-4`}
        onClick={handleShuffle}
      >
        {isShuffled ? 'Shuffle On' : 'Shuffle Off'}
      </button>
    </div>
  );
};

export default Player;
