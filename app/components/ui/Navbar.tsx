"use client";

type Props = {
  CALENDLY: string;
};

export default function Navbar({ CALENDLY }: Props) {
  return (
    <header className=" border-b border-black/30 top-6 left-0 w-full z-50">
      <div className="w-full pl-[80px] lg:pl-[120px] pr-6 md:pr-12 lg:pr-20 py-6 flex items-center justify-between">

        {/* LEFT — BRAND */}
        <a
          href="#top"
          className="
    font-bricolage
    text-[22px] md:text-[26px]
    font-bold
    tracking-[-0.03em]
    leading-none
    text-black
  "
        >
          iee studios
        </a>

        {/* CENTER — PILL NAV */}
        <div
          className="
            hidden md:flex items-center gap-8
            rounded-full
            border border-black/10
            bg-white/70 backdrop-blur-md
            px-8 py-3
            text-sm text-black/70
          "
        >
          <a href="#work" className="hover:text-black transition">
            Work
          </a>
          <a href="#work" className="hover:text-black transition">
            Case Studies
          </a>
          <a href="#start" className="hover:text-black transition">
            Start
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>

        {/* RIGHT — CTA */}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-black hover:text-black/70 transition"
        >
          Book a Call ↗
        </a>

      </div>
    </header>
  );
}