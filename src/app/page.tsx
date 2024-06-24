"use client";

import { useState } from "react";
import { Video } from "./components/Video";

export default function Home() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen flex-col ">
      <div>{playing ? "RODANDO" : "PARADO"}</div>
      <button
        onClick={() => setPlaying(!playing)}
        className="border border-orange-800 mt-5 p-4"
      >
        Play / Pause
      </button>
      <Video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />
    </div>
  );
}
