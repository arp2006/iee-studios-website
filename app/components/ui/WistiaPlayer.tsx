"use client";

import Script from "next/script";

type Props = {
  mediaId: string;
  active?: boolean; // for later (pause/play)
};

export default function WistiaPlayer({ mediaId }: Props) {
  return (
    <>
      {/* Load once globally ideally, but ok here for now */}
      <Script
        src="https://fast.wistia.com/player.js"
        strategy="lazyOnload"
      />
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

      <wistia-player
        media-id={mediaId}
        aspect="1.7777777777777777"
      />
    </>
  );
}