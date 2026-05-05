"use client";

type Props = {
  CALENDLY: string;
  lenisRef: React.RefObject<any>;
};

export default function Header({ CALENDLY, lenisRef }: Props) {
  const scrollTo = (id: string) => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    lenis.scrollTo(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-black/30 bg-white/85 backdrop-blur-md">

      <div className="absolute lg:left-[70px] top-0 h-full w-px bg-black/20" />
      <div className="w-full pl-6 lg:pl-[120px] pr-6 md:pr-12 lg:pr-20 py-6 flex items-center justify-between">

        {/* LEFT — BRAND */}
        <a
          href="#top"
          onClick={(e) => {
              e.preventDefault();
              scrollTo("#top");
            }}
          className="
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
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#work");
            }}
            className="hover:text-black transition"
          >
            Case Studies
          </a>

          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#faq");
            }}
            className="hover:text-black transition"
          >
            FAQ
          </a>

          <a
            href="#start"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#start");
            }}
            className="hover:text-black transition"
          >
            Start
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="hover:text-black transition"
          >
            Contact
          </a>
        </div>

        {/* RIGHT — CTA */}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-black px-6 py-2.5 text-sm text-white hover:bg-black/80 transition"
        >
          Book a call ↗
        </a>

      </div>
    </header>
  );
}