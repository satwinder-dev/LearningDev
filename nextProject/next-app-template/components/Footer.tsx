"use client";
import { usePlayer } from "@/app/context/PlayerContext";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Slider } from "@heroui/slider";
import { button } from "@heroui/theme";
import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useState } from "react";

export default function Footer() {
  const {
    currentSong,
    togglePlay,
    volume,
    setVolume,
    time,
    setTime,
    audioRef,
    isPlaying,
    playNext,
    playPrev
  } = usePlayer();

  // const [volume, setVolume] = useState(25);
  // const [time, setTime] = useState(25);

  const duration = audioRef?.current?.audio?.current?.duration || 0;

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleSeek = (val: number | number[]) => {
    const newTime = Array.isArray(val) ? val[0] : val;
    setTime(newTime);
    if (audioRef?.current?.audio?.current) {
      audioRef.current.audio.current.currentTime = newTime;
    }
  };

  const handleVolume = (val: number | number[]) => {
    const newVol = Array.isArray(val) ? val[0] : val;
    setVolume(newVol);
    if (audioRef.current?.audio?.current) {
      audioRef.current.audio.current.volume = newVol / 100;
    }
  };
  return (
    <div className="border-t border-black/10 bg-transparent flex flex-row px-7 py-3 rounded-0">
      <div className="w-full">
        <div className="flex flex-col mt-3 gap-1">
          <Slider
            aria-label="Music progress"
            classNames={{
              track: "w-full h-1 bg-black/5 rounded-full",
              thumb:
                "w-7 h-4 after:w-7 after:h-4 after:bg-white/80 bg-transparent after:backdrop-blur-3xl rounded-full border border-white/20",
            }}
            color="foreground"
            size="sm"
            disableThumbScale={true}
            hideThumb={true}
            value={time}
            onChange={handleSeek}
            showTooltip={true}
            step={0.01}
            minValue={0}
            maxValue={duration}
            getTooltipValue={(e) => formatTime(Array.isArray(e) ? e[0] : e)}
          />
          <div className="flex justify-between">
            <p className="text-small">{formatTime(time)}</p>
            <p className="text-small text-foreground/50">
              {formatTime(duration)}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div></div>
          <div className="flex items-center justify-center gap-5">
            <Button
              isIconOnly
              className="hover:shadow-lg bg-white hover:-translate-y-1 transition-all ease-in-out data-hover:bg-white!"
              radius="full"
              variant="light"
            >
              <Repeat />
            </Button>
            <Button
              isIconOnly
              className="hover:shadow-lg bg-white hover:-translate-y-1 transition-all ease-in-out data-hover:bg-white!"
              radius="full"
              variant="light"
              onPress={playPrev}
            >
              <SkipBack />
            </Button>
            <Button
              isIconOnly
              className="p-3 size-16 hover:shadow-lg bg-white hover:-translate-y-1 transition-all ease-in-out data-hover:bg-white!"
              radius="full"
              variant="light"
              onPress={togglePlay}
            >
              {" "}
              {isPlaying ? <Pause size={50} /> : <Play size={50} />}
            </Button>
            <Button
              isIconOnly
              className="hover:shadow-lg bg-white hover:-translate-y-1 transition-all ease-in-out data-hover:bg-white!"
              radius="full"
              variant="light"
              onPress={playNext}
            >
              <SkipForward />
            </Button>
            <Button
              isIconOnly
              className="hover:shadow-lg bg-white hover:-translate-y-1 transition-all ease-in-out data-hover:bg-white!"
              radius="full"
              variant="light"
            >
              <Shuffle />
            </Button>
          </div>
          <div className="flex items-center gap-3 w-32">
            <Slider
              aria-label="Player progress"
              className="max-w-32"
              color="foreground"
              hideThumb={true}
              size="sm"
              onChange={handleVolume}
              startContent={(() => {
                if (volume === 0)
                  return (
                    <Button
                      isIconOnly
                      className="hover:shadow-lg bg-white hover:-translate-y-1 transition-all ease-in-out data-hover:bg-white!"
                      radius="full"
                      variant="light"
                    >
                      <VolumeX />
                    </Button>
                  );
                if (volume <= 25)
                  return (
                    <Button
                      isIconOnly
                      className="hover:shadow-lg bg-white hover:-translate-y-1 transition-all ease-in-out data-hover:bg-white!"
                      radius="full"
                      variant="light"
                    >
                      <Volume />
                    </Button>
                  );
                if (volume <= 75)
                  return (
                    <Button
                      isIconOnly
                      className="hover:shadow-lg bg-white hover:-translate-y-1 transition-all ease-in-out data-hover:bg-white!"
                      radius="full"
                      variant="light"
                    >
                      <Volume1 />
                    </Button>
                  );
                return (
                  <Button
                    isIconOnly
                    className="hover:shadow-lg bg-white hover:-translate-y-1 transition-all ease-in-out data-hover:bg-white!"
                    radius="full"
                    variant="light"
                  >
                    <Volume2 />
                  </Button>
                );
              })()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
