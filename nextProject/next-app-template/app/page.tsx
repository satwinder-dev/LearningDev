"use client";
import Loader from "@/components/Loader";
import Waves from "@/components/Waves";
import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import React, { useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";

import { Pause, Play } from "lucide-react";
import { usePlayer } from "./context/PlayerContext";

export default function Home() {
  const [songs, setSongs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const apiUrl = "http://localhost:3000";

  React.useEffect(() => {
    fetch(`${apiUrl}/api/songs`)
      .then((res) => res.json())
      .then((song) => {
        setSongs(song || []);
        setLoading(false);
      })
      .catch(() => {
        fetch(`http://192.168.1.35:3000/api/songs`)
          .then((res) => res.json())
          .then((song) => {
            setSongs(song || []);
            setLoading(false);
          })
          .catch((networkErr) => {
            console.error(networkErr);
            setError("Failed to fetch songs from both local and network");
          });
      });
  }, []);

  // const playerRef = useRef<AudioPlayer>(null);
  // const [currentSong, setCurrentSong] = useState<any | null>(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlaySong = (song: any) => {
  //   const audioEl = playerRef.current?.audio?.current;
  //   if (!audioEl) return;

  //   if (currentSong?.audio_url === song.audio_url) {
  //     if (isPlaying) {
  //       audioEl.pause();
  //       setIsPlaying(false);
  //     } else {
  //       audioEl.play();
  //       setIsPlaying(true);
  //     }
  //   } else {
  //     setCurrentSong(song);
  //     setTimeout(() => {
  //       if (playerRef.current?.audio?.current) {
  //         playerRef.current.audio.current.src = song.audio_url;
  //         playerRef.current.audio.current.play();
  //         setIsPlaying(true);
  //       }
  //     }, 100);
  //   }
  // };

  const { setSong, currentSong, isPlaying, currentIndex } = usePlayer();

  return (
    <div className="">
      <div className="flex flex-col gap-7">
        <div className="py-4">
          <h1 className="text-2xl mb-4">Songs for you</h1>
          {loading && (
            <div className="w-full h-full items-center justify-center flex">
              <Loader />
            </div>
          )}
          {error && <div className="text-red-500">{error}</div>}

          {/* <AudioPlayer
            ref={playerRef}
            src={currentSong?.audio_url}
            style={{ display: "none" }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          /> */}

          <div className="w-full flex gap-4 flex-nowrap overflow-x-auto">
            {songs.map((song, idx) => (
              <div key={idx} className="max-w-40 flex-shrink-0 rounded-2xl overflow-hidden">
                <div className="w-full h-40 relative">
                  <img
                    className="rounded-2xl"
                    src={song.thumbnail_img}
                    alt="song-img"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:-translate-y-1 transition-all ease-in-out duration-300">
                    <Button
                      isIconOnly
                      className="absolute bottom-2 right-2 bg-white rounded-full"
                      onPress={() => setSong(song, currentIndex)}
                    >
                      {currentSong?.audio_url === song.audio_url &&
                      isPlaying ? (
                        <Pause />
                      ) : (
                        <Play />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="text-sm font-semibold my-1">
                    {song.song_name}
                  </h1>
                  <h1 className="text-xs text-black/65">{song.artist_name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
