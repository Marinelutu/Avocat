const OrnamentalDivider = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center py-8 ${className}`}>
    <svg width="280" height="24" viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
      <path d="M140 4C130 4 125 12 115 12C105 12 100 4 90 4C80 4 75 12 65 12C55 12 52 8 45 6" stroke="hsl(43, 52%, 54%)" strokeWidth="1" fill="none" />
      <path d="M140 4C150 4 155 12 165 12C175 12 180 4 190 4C200 4 205 12 215 12C225 12 228 8 235 6" stroke="hsl(43, 52%, 54%)" strokeWidth="1" fill="none" />
      <path d="M140 20C130 20 125 12 115 12" stroke="hsl(43, 52%, 54%)" strokeWidth="1" fill="none" />
      <path d="M140 20C150 20 155 12 165 12" stroke="hsl(43, 52%, 54%)" strokeWidth="1" fill="none" />
      <circle cx="140" cy="12" r="3" fill="hsl(43, 52%, 54%)" />
      <circle cx="45" cy="6" r="2" fill="hsl(43, 52%, 54%)" />
      <circle cx="235" cy="6" r="2" fill="hsl(43, 52%, 54%)" />
      <line x1="0" y1="12" x2="38" y2="12" stroke="hsl(43, 52%, 54%)" strokeWidth="0.5" opacity="0.4" />
      <line x1="242" y1="12" x2="280" y2="12" stroke="hsl(43, 52%, 54%)" strokeWidth="0.5" opacity="0.4" />
    </svg>
  </div>
);

export default OrnamentalDivider;
