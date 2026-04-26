"use client";

import { useEffect, useState } from "react";

export default function AsciiBackground() {
  const [ascii, setAscii] = useState("");

  useEffect(() => {

    function generateAscii() {
      const chars = [
        ".", "·", "•", ":", "∙",
        " "," "," "," "," "
      ];

      const cols = Math.ceil(window.innerWidth / 8.4);
      const rows = Math.ceil(window.innerHeight / 16.8);

      let text = "";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          text += chars[
            Math.floor(Math.random() * chars.length)
          ];
        }
        text += "\n";
      }

      setAscii(text);
    }

    generateAscii();

    window.addEventListener(
      "resize",
      generateAscii
    );

    const interval = setInterval(
      generateAscii,
      3000
    );

    return () => {
      window.removeEventListener(
        "resize",
        generateAscii
      );
      clearInterval(interval);
    };

  }, []);

  return (
    <div
      className="
      fixed inset-0
      z-0
      overflow-hidden
      pointer-events-none
      select-none
      font-mono
      text-[14px]
      leading-[1.2]
      whitespace-pre
      text-black/[0.035]
      "
    >
      {ascii}
    </div>
  );
}