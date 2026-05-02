"use client";

import { useEffect } from "react";
import Script from "next/script";

type Props = {
  mediaId: string;
  active: boolean;
};

declare global {
  interface Window {
    wistiaOptions: Record<string, any>;
  }
}

export default function WistiaPlayer({ mediaId, active }: Props) {
  useEffect(() => {
    if (!window.wistiaOptions) {
      window.wistiaOptions = {};
    }

    window.wistiaOptions[mediaId] = {
      autoPlay: active,
      muted: true,
      playsinline: true,
    };
  }, [mediaId, active]);

  return (
    <>
      {/* Load Wistia script ONCE */}
      <Script
        src="https://fast.wistia.com/player.js"
        strategy="afterInteractive"
      />

      <div className="w-full h-full">
        <wistia-player
          media-id={mediaId}
          aspect="1.7777777778"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
}