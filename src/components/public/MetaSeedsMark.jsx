import React from 'react';

export const MetaSeedsMark = ({ className = "w-9 h-9" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
        {/* Glow Filters */}
        <defs>
          <filter id="yellowGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="silverGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="25%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* Double S Circuit Line */}
        <path
          d="M72 16 C38 16, 26 40, 50 60 C74 80, 62 104, 28 104"
          stroke="url(#lineGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        <path
          d="M72 16 C38 16, 26 40, 50 60 C74 80, 62 104, 28 104"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />

        {/* Node 1: Top Right (Yellow) */}
        <circle cx="72" cy="16" r="6" fill="#fbbf24" filter="url(#yellowGlow)" />
        <circle cx="72" cy="16" r="3" fill="#ffffff" />

        {/* Node 2: Top Left (Green) */}
        <circle cx="28" cy="38" r="6" fill="#22c55e" filter="url(#greenGlow)" />
        <circle cx="28" cy="38" r="3" fill="#ffffff" />

        {/* Node 3: Center (Silver/White) */}
        <circle cx="50" cy="60" r="6.5" fill="#cbd5e1" filter="url(#silverGlow)" />
        <circle cx="50" cy="60" r="3.5" fill="#ffffff" />

        {/* Node 4: Bottom Right (Cyan) */}
        <circle cx="72" cy="82" r="6" fill="#06b6d4" filter="url(#cyanGlow)" />
        <circle cx="72" cy="82" r="3" fill="#ffffff" />

        {/* Node 5: Bottom Left (Red) */}
        <circle cx="28" cy="104" r="6" fill="#ef4444" filter="url(#redGlow)" />
        <circle cx="28" cy="104" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
};
