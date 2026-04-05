"use client";

export default function Marquee({
  text = "FORGE YOUR BODY — SHAPE YOUR LIFE — ",
  repeat = 4,
  className = "",
}: {
  text?: string;
  repeat?: number;
  className?: string;
}) {
  const repeated = text.repeat(repeat);

  return (
    <div className={`overflow-hidden py-6 md:py-8 ${className}`}>
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-[family-name:var(--font-cormorant)] text-gold/15 text-[2.5rem] md:text-[4rem] font-light tracking-[0.15em] select-none">
          {repeated}
        </span>
        <span className="font-[family-name:var(--font-cormorant)] text-gold/15 text-[2.5rem] md:text-[4rem] font-light tracking-[0.15em] select-none">
          {repeated}
        </span>
      </div>
    </div>
  );
}
