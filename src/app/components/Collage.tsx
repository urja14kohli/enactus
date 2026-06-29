import { motion } from 'motion/react';

interface CollageProps {
  images: string[];
  className?: string;
}

// Asymmetric bento-style photo collage. Expects 5 images for the full layout,
// but degrades gracefully with fewer.
export default function Collage({ images, className = '' }: CollageProps) {
  const spans = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
  ];
  return (
    <div className={`grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4 ${className}`}>
      {images.slice(0, 5).map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          className={`group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-[0_18px_44px_-24px_rgba(31,37,48,0.5)] ${spans[i]}`}
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
        </motion.div>
      ))}
    </div>
  );
}
