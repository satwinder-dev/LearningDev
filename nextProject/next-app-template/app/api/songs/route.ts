import { NextResponse } from "next/server";

const songs = [
  {
    song_name: "For A Reason",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "4:00",
    audio_url: "/songs/ForAReason.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  {
    song_name: "Main Gabru ",
    artist_name: "Karan Aujla",
    thumbnail_img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/P-Pop_Culture.jpg/250px-P-Pop_Culture.jpg",
    song_length: "05:00",
    audio_url: "/songs/MainGabruPuttPunjabDa.mp3",
  },
  
  
];

export async function GET() {
  return NextResponse.json(songs);
}
