"use client";
import React, { createContext, use, useContext, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";

type Song = {
  song_name: string;
  artist_name: string;
  audio_url: string;
  thumbnail_img: string;
};

type PlayerContextType = {
  songs: Song[];
  currentIndex: number;
  currentSong: Song | null;
  isPlaying: boolean;
  setSong: (song: Song, index: number) => void;
  playNext: () => void;
  playPrev: () => void;
  togglePlay: () => void;
  audioRef: React.RefObject<AudioPlayer>;
  volume: number;
  setVolume: (volume: number) => void;
  time: number;
  setTime: (t: number) => void;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider = ({ children , songs}: { children: React.ReactNode; songs: Song[] }) => {
  const audioRef = useRef<AudioPlayer>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(25);
  const [time, setTime] = useState(0);

  const setSong = (song: Song, index: number) => {
    const audio = audioRef.current?.audio?.current;
    if (!audio) return;
    
    if (currentSong?.audio_url === song.audio_url) {
      togglePlay();
    } else {
      setCurrentSong(song);
      setCurrentIndex(index);
      setTimeout(() => {
        if (audioRef.current?.audio?.current) {
          audioRef.current.audio.current.src = song.audio_url;
          audioRef.current.audio.current.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  const playNext =()=>{
    if (songs.length === 0) return;
    const nextIndex = (currentIndex + 1) % songs.length;
    setSong(songs[nextIndex], nextIndex);
  }

  const playPrev =() =>{
    if (songs.length === 0) return;
    const prevIndex = (currentIndex -1 + songs.length) % songs.length;
    setSong(songs[prevIndex], prevIndex);
  }

  const togglePlay = () => {
    const audio = audioRef.current?.audio?.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        setSong,
        togglePlay,
        audioRef,
        volume,
        setVolume,
        time,
        setTime,
        songs,
        currentIndex,
        playNext,
        playPrev,
      }}
    >
      <AudioPlayer
        ref={audioRef}
        src={currentSong?.audio_url}
        className="hidden"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        volume={volume / 100}
        onListen={() => {
          const audio = audioRef.current?.audio?.current;
          if (audio) {
            setTime(audio.currentTime);
          }
        }}
        listenInterval={500} // in ms
      />
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
};
