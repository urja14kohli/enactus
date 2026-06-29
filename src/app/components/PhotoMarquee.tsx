interface PhotoMarqueeProps {
  images: string[];
  reverse?: boolean;
  className?: string;
}

// Auto-scrolling row of photos used as an animated collage.
export default function PhotoMarquee({ images, reverse = false, className = '' }: PhotoMarqueeProps) {
  const row = [...images, ...images];
  return (
    <div className={`marquee-mask overflow-hidden ${className}`}>
      <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
        {row.map((src, i) => (
          <div
            key={i}
            className="relative mx-2 h-40 w-60 shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_14px_36px_-18px_rgba(31,37,48,0.45)]"
          >
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/15" />
          </div>
        ))}
      </div>
    </div>
  );
}
