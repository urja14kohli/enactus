import { motion } from 'motion/react';

interface FloatingGeometricProps {
  shape?: 'triangle' | 'square' | 'pentagon';
  size?: number;
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  delay?: number;
}

export default function FloatingGeometric({
  shape = 'triangle',
  size = 60,
  position = {},
  delay = 0,
}: FloatingGeometricProps) {
  const shapes = {
    triangle: (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" className="fill-enactus-yellow/20" />
      </svg>
    ),
    square: (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" className="fill-enactus-yellow/20" transform="rotate(45 50 50)" />
      </svg>
    ),
    pentagon: (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <polygon points="50,5 95,40 75,95 25,95 5,40" className="fill-enactus-yellow/20" />
      </svg>
    ),
  };

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={position}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {shapes[shape]}
    </motion.div>
  );
}
