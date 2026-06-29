import { ReactNode } from 'react';

interface DisplayHeadingProps {
  /** dark part of the two-tone heading */
  lead: ReactNode;
  /** gold/yellow part of the two-tone heading */
  accent: ReactNode;
  className?: string;
  /** size scale */
  size?: 'md' | 'lg' | 'xl';
  as?: 'h1' | 'h2';
  align?: 'left' | 'center';
  /** use light colors for dark backgrounds */
  light?: boolean;
}

const sizeMap = {
  md: 'text-3xl sm:text-4xl md:text-5xl',
  lg: 'text-4xl sm:text-5xl md:text-6xl',
  xl: 'text-5xl sm:text-6xl md:text-7xl',
};

export default function DisplayHeading({
  lead,
  accent,
  className = '',
  size = 'lg',
  as = 'h2',
  align = 'left',
  light = false,
}: DisplayHeadingProps) {
  const Tag = as;
  return (
    <Tag
      className={`display ${sizeMap[size]} ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      <span className={light ? 'text-white' : 'text-navy-accent'}>{lead}</span>{' '}
      <span className={light ? 'text-enactus-yellow' : 'text-gold-accent'}>{accent}</span>
    </Tag>
  );
}
