"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

type Props = {
  mediaId: string;
  active: boolean;
};

declare global {
  interface Window {
    _wq: any[];
  }
}

export default function WistiaPlayer({ mediaId, active }: Props) {
  const playerRef = useRef<any>(null);

  // 1. Register ONCE → get player instance
  useEffect(() => {
    if (!window._wq) window._wq = [];

    window._wq.push({
      id: mediaId,
      onReady: (video: any) => {
        playerRef.current = video;
      },
    });
  }, [mediaId]);

  // 2. Control playback when active changes
  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    if (active) {
      player.play();
    } else {
      player.pause();
    }
  }, [active]);

  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script
        src={`https://fast.wistia.com/embed/${mediaId}.js`}
        strategy="lazyOnload"
      />

      <style>{`
        wistia-player[media-id='${mediaId}']:not(:defined) {
          background: center / contain no-repeat url("https://fast.wistia.com/embed/medias/${mediaId}/swatch");
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>

      <wistia-player media-id={mediaId} aspect="1.7777777777777777" />
    </>
  );
}