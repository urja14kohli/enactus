interface WedgeProps {
  /** color of the wedge fill (the section that is being entered) */
  color?: 'cream' | 'background' | 'secondary' | 'navy' | 'yellow';
  /** which way the diagonal slopes */
  direction?: 'down-right' | 'down-left';
  className?: string;
}

const fillMap: Record<string, string> = {
  cream: 'fill-[#FBF7EC]',
  background: 'fill-[#F8F8F6]',
  secondary: 'fill-[#EFEFE9]',
  navy: 'fill-[#2F3B4D]',
  yellow: 'fill-[#FFC72C]',
};

/**
 * A single tasteful diagonal section transition. Kept subtle and used
 * sparingly, unlike a divider between every section.
 */
export default function Wedge({ color = 'background', direction = 'down-right', className = '' }: WedgeProps) {
  const path = direction === 'down-right' ? 'M0,0 L1440,48 L1440,80 L0,80 Z' : 'M0,48 L1440,0 L1440,80 L0,80 Z';
  return (
    <div className={`relative w-full -mb-px leading-[0] ${className}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[40px] md:h-[64px]">
        <path d={path} className={fillMap[color]} />
      </svg>
    </div>
  );
}
