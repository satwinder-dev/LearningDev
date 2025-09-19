"use client";
import React from "react";
import { PlayerProvider } from "./context/PlayerContext";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Search } from "lucide-react";
import SideBar from "@/components/SideBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            setLoading(false);
          });
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading songs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <PlayerProvider songs={songs}>
      <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
        <main>
          <section className="flex h-screen bg-white">
            {/* Sidebar */}
            <div className="transition-all duration-300 ease-in-out border-r border-transparent border-r-black/10 ">
              <SideBar />
            </div>

            {/* Main */}
            <div className="flex-1 flex flex-col h-screen gap-2">
              <div className="p-4 text-black flex items-center justify-between border-b border-transparent border-b-black/10">
                <div className="flex items-center justify-between w-full ">
                  <div className="flex items-center gap-4">
                    <Input
                      placeholder="Search"
                      radius="sm"
                      endContent={<Search className="text-black/50" />}
                    />
                  </div>

                  <Button
                    radius="full"
                    variant="bordered"
                    className="w-fit pe-1.5"
                  >
                    <p className="text-default-400">Satwinder</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-2xl text-default-400 pointer-events-none shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 pt-0 rounded-2xl">
                <ScrollShadow size={20} className="h-full">
                  {children}
                </ScrollShadow>
              </div>

              <Footer />
            </div>
          </section>
        </main>
      </Providers>
    </PlayerProvider>
  );
}

