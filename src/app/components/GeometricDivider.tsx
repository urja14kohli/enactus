interface GeometricDividerProps {
  variant?: 'diagonal-down' | 'diagonal-up' | 'angular' | 'wedge';
  color?: 'yellow' | 'background' | 'secondary';
  flip?: boolean;
}

export default function GeometricDivider({ 
  variant = 'diagonal-down', 
  color = 'background',
  flip = false 
}: GeometricDividerProps) {
  const colorClasses = {
    yellow: 'fill-enactus-yellow',
    background: 'fill-background',
    secondary: 'fill-background-secondary',
  };

  const paths = {
    'diagonal-down': 'M0,0 L1440,0 L1440,100 L0,40 Z',
    'diagonal-up': 'M0,40 L1440,100 L1440,0 L0,0 Z',
    'angular': 'M0,0 L1440,0 L1440,60 L720,100 L0,60 Z',
    'wedge': 'M0,100 L720,0 L1440,100 L1440,0 L0,0 Z',
  };

  return (
    <div className={`relative w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 100"
        className="w-full h-auto"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={paths[variant]} className={colorClasses[color]} />
      </svg>
    </div>
  );
}
