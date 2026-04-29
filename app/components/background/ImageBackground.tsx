export default function ImageBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/bgs/bg-img.jpeg')",
        }}
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-white/100" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/grain.png')",
        }}
      />
    </div>
  );
}