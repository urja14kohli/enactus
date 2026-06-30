import { motion } from 'motion/react';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999] gap-8">
      <motion.img
        src="/images/enactus-bird.png"
        alt="Enactus"
        className="w-28 h-28 object-contain"
        initial={{ opacity: 0, scale: 0.4, rotate: -12 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: [0, -12, 0],
        }}
        transition={{
          opacity: { duration: 0.5 },
          scale: { type: 'spring', stiffness: 140, damping: 12 },
          rotate: { type: 'spring', stiffness: 140, damping: 12 },
          y: { duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
        }}
      />

      <motion.p
        className="text-sm text-neutral-500"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Loading impact{' '}
        <a
          href="https://www.instagram.com/igdtuw.en/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-neutral-700 transition-colors hover:text-enactus-yellow"
        >
          @igdtuw.en
        </a>
      </motion.p>

      <div className="relative h-[3px] w-40 overflow-hidden rounded-full bg-neutral-200">
        <motion.div
          className="absolute inset-y-0 w-1/3 rounded-full"
          style={{ background: '#F9C515' }}
          animate={{ x: ['-130%', '330%'] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}
