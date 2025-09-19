// "use client";
// import React, { use, useEffect } from "react";
// import { usePlayer } from "../context/PlayerContext";

// export default function Search() {
//   const [query, setQuery] = React.useState("");
//   const [results, setResults] = React.useState<any[]>([]);
//   const [loading, setLoading] = React.useState(false);

//   const { setSong } = usePlayer();
//   const apiUrl = "http://localhost:3000";

//   useEffect(() => {
//     if (query.trim()) {
//       setResults([]);
//       return;
//     }

//     setLoading(true);

//     const delayDebounce = setTimeout(() => {
//       fetch(`${apiUrl}/api/search?query=${query}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setResults(data || []);
//           setLoading(false);
//         })
//         .catch(() => setLoading(false));
//     }, 400);
//     return () => clearTimeout(delayDebounce);
//   }, [query]);
//   return (
//     <div className="py-7">
//       <h1>Search</h1>
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@heroui/input";
import { Search as SearchIcon } from "lucide-react";
import { usePlayer } from "@/app/context/PlayerContext";
import Loader from "@/components/Loader";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const { setSong } = usePlayer();

  const apiUrl = "http://localhost:3000";

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    const delayDebounce = setTimeout(() => {
      fetch(`${apiUrl}/api/songs?search=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 2000);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="py-7">
      <h1 className="text-xl font-semibold mb-4">Search</h1>

      {/* Search Input */}
      <div className="flex gap-12">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, artists..."
          radius="sm"
          className="mb-6 max-w-md"
          endContent={<SearchIcon className="text-black/50" />}
        />

        {loading && <Loader />}
      </div>

      {/* Loading State */}
      {/* {loading && <p className="text-sm text-gray-500">Searching...</p>} */}

      {/* Results */}
      <div className="flex flex-col gap-3">
        {results.length > 0
          ? results.map((song, idx) => (
              <button
                key={idx}
                onClick={() => setSong(song, idx)}
                className="flex items-center gap-3 p-3 rounded-lg bg-black/5 hover:bg-black/10 transition"
              >
                <img
                  src={song.thumbnail_img}
                  alt={song.song_name}
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div className="text-left">
                  <p className="font-medium">{song.song_name}</p>
                  <p className="text-sm opacity-70">{song.artist_name}</p>
                </div>
              </button>
            ))
          : !loading && <p className="text-gray-400">No results</p>}
      </div>
    </div>
  );
}
