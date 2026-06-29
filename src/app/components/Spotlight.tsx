import { useEffect, useRef } from 'react';

// Soft radial glow that follows the cursor across its parent surface.
// Drop <Spotlight /> as the first child of a `relative spotlight overflow-hidden`
// container; it writes pointer coords to the parent so the glow trails the arrow.
export default function Spotlight() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const host = ref.current?.parentElement;
    if (!host) return;

    const onMove = (e: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      host.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      host.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    host.addEventListener('mousemove', onMove);
    return () => host.removeEventListener('mousemove', onMove);
  }, []);

  return <span ref={ref} aria-hidden="true" className="spotlight-glow" />;
}
