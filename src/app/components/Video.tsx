import { useEffect, useRef } from "react";

type Props = {
  src: string;
  isPlaying: boolean;
};

export const Video = ({ src, isPlaying }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  });

  return (
    <video
      ref={videoRef}
      className="w-96 h-auto mt-8"
      src={src}
      loop
      playsInline
    ></video>
  );
};
