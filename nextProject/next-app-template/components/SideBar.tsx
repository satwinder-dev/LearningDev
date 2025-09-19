"use client";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

import React, { useState } from "react";
import Loader from "./Loader";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { House, Library, Play, Search } from "lucide-react";
import { usePlayer } from "@/app/context/PlayerContext";
import Waves from "@/components/Waves";
import { Tab, Tabs } from "@heroui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeartIcon = ({
  size = 24,
  strokeWidth = 1.5,
  fill = "none",
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill={fill}
      focusable="false"
      height={size}
      role="presentation"
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      <path
        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default function SideBar({
  collapsed = false,
}: {
  collapsed?: boolean;
}) {
  const [liked, setLiked] = React.useState(false);
  const [songs, setSongs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const pathname = usePathname();
  const { setSong, currentSong, isPlaying, currentIndex } = usePlayer();
  const linkClasses = (href: string) =>
    `flex justify-start items-center w-full cursor-pointer bg-white/10 p-2 rounded-lg text-black
     ${pathname === href ? "shadow-md -translate-y-px" : ""}`;
  const apiUrl = "http://localhost:3000";
  console.log("first");
  React.useEffect(() => {
    fetch(`${apiUrl}/api/songs`)
      .then((res) => res.json())
      .then((song) => {
        setSongs(song || []);
        setLoading(false);
      })
      .catch((err) => {
        try {
          fetch(`http://192.168.1.35:3000/api/songs`)
            .then((res) => res.json())
            .then((song) => {
              setSongs(song || []);
              setLoading(false);
            });
        } catch (networkErr) {
          console.error(networkErr);
          setError("Failed to fetch songs from both local and network");
        }
      });
  }, []);

  // if (!currentSong) {
  //   return null; // nothing is playing yet
  // }
  if (collapsed) {
    return (
      <div className="px-7 py-3 flex flex-col justify-between gap-4 items-center">
        <Button variant="flat" className="w-full flex justify-center px-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Button>
        <Button variant="flat" className="w-full flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </Button>
        <Button variant="flat" className="w-full flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between h-screen gap-4">
      <div className="p-4 pb-0">
        <h1 className="text-2xl  font-light text-black/80 mb-4 px-2">
          HELLa<span className="text-red-500 font-extrabold">.</span>
        </h1>
      </div>

      <div className="flex flex-col gap-1 px-4">
        <Link href="/" className={linkClasses("/")}>
          <House className="scale-75" />
          <div className="px-2">Home</div>
        </Link>

        <Link href="/library" className={linkClasses("/library")}>
          <Library className="scale-75" />
          <div className="px-2">Library</div>
        </Link>

        <Link href="/search" className={linkClasses("/search")}>
          <Search className="scale-75" />
          <div className="px-2">Search</div>
        </Link>
      </div>

      <ScrollShadow className="flex-1 overflow-y-auto flex  flex-col h-full items-center">
        {loading && (
          <div>
            <Loader />
          </div>
        )}
        {error && <div className="text-red-500">{error}</div>}
        {songs.map((song, idx) => (
          <div key={idx} className="w-full px-4">
            <button
              onClick={() => {
                setSong(song, currentIndex);
              }}
              className="flex items-start gap-3 bg-white/10 p-3 rounded-3xl cursor-pointer hover:bg-white/20 w-full  hover:shadow-lg  hover:-translate-y-1 transition-all ease-in-out"
            >
              <div className="relative">
                {currentSong?.audio_url === song.audio_url && isPlaying ? (
                  <div className="absolute flex justify-center items-center w-full h-full bg-black/30 rounded-2xl">
                    <Waves />
                  </div>
                ) : currentSong?.audio_url === song.audio_url ? null : null}
                <img
                  className="w-16 rounded-2xl"
                  src={song.thumbnail_img}
                  alt="song-name"
                />
              </div>
              <div>
                <p>{song.song_name}</p>
                <p className="opacity-80 text-sm text-start">
                  {" "}
                  {song.artist_name}
                </p>
                <p className="opacity-50 text-xs flex w-full justify-between">
                  {song.song_length}
                </p>
              </div>
            </button>{" "}
          </div>
        ))}
      </ScrollShadow>
      <div className="pt-4 p-7 w-[320px]">
        <div>
          {currentSong ? (
            <div className=" flex items-center gap-4">
              {/* Song Thumbnail */}
              <div className="">
                <Image
                  alt={currentSong?.song_name}
                  shadow="md"
                  className="size-14 rounded-md object-cover"
                  src={currentSong?.thumbnail_img}
                  width= {60}
                  height={60}
                />
              </div>

              {/* Song Info + Like Button */}
              <div className="flex flex-col ">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold text-black/90">
                      {currentSong?.song_name}
                    </h3>
                    <p className="text-small text-black/80">
                      {currentSong?.artist_name}
                    </p>
                  </div>
                  <Button
                    isIconOnly
                    className="text-default-900/60 song-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                    radius="full"
                    variant="light"
                    onPress={() => setLiked((v) => !v)}
                  >
                    <HeartIcon
                      className={liked ? "[&>path]:stroke-transparent" : ""}
                      fill={liked ? "currentColor" : "none"}
                    />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-black/50 italic w-full">
              No song is playing
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
