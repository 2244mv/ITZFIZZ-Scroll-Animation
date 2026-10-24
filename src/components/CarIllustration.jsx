export default function CarIllustration() {
  return (
    <svg
      className="car-svg"
      viewBox="0 0 900 340"
      role="img"
      aria-label="Stylized silver sports car"
    >
      <defs>
        <linearGradient id="carBody" x1="0" y1="0" x2=".2" y2="1">
          <stop offset="0%" stopColor="#fbfff8" />
          <stop offset="38%" stopColor="#c7d0ca" />
          <stop offset="72%" stopColor="#77827c" />
          <stop offset="100%" stopColor="#29322e" />
        </linearGradient>
        <linearGradient id="carGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a5050" />
          <stop offset="100%" stopColor="#101819" />
        </linearGradient>
        <linearGradient id="carGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b6ff70" stopOpacity="0" />
          <stop offset="50%" stopColor="#b6ff70" />
          <stop offset="100%" stopColor="#b6ff70" stopOpacity="0" />
        </linearGradient>
        <filter id="carShadow" x="-20%" y="-30%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
      <ellipse
        cx="456"
        cy="279"
        rx="340"
        ry="23"
        fill="#10201a"
        opacity=".24"
        filter="url(#carShadow)"
      />
      <path
        d="M100 226 C130 205 189 197 260 185 L342 115 C366 95 402 83 451 83 L548 85 C590 88 629 116 666 153 L755 177 C790 186 813 204 823 229 L813 254 L733 267 L167 267 L96 251 Z"
        fill="url(#carBody)"
        stroke="#65716b"
        strokeWidth="3"
      />
      <path
        d="M292 180 L361 122 C382 106 407 99 448 99 L510 101 L551 176 Z"
        fill="url(#carGlass)"
        stroke="#b5c0b9"
        strokeWidth="3"
      />
      <path
        d="M526 102 L548 104 C582 108 609 131 640 166 L566 174 Z"
        fill="url(#carGlass)"
        stroke="#8d9b96"
        strokeWidth="3"
      />
      <path
        d="M104 227 C169 212 225 210 293 207 L624 205 C693 205 767 216 818 231 L811 245 L743 251 L173 251 L103 243 Z"
        fill="#1e2927"
        opacity=".72"
      />
      <path d="M128 225 L211 216 L263 219 L240 230 L126 236 Z" fill="#f2f5e9" />
      <path d="M704 211 L787 226 L775 236 L702 229 Z" fill="#ff684f" />
      <path
        d="M338 184 L572 184 M302 198 C394 193 520 194 647 201"
        stroke="#e7efea"
        strokeWidth="2"
        opacity=".65"
        fill="none"
      />
      <path
        d="M263 218 L282 250 M649 207 L676 250"
        stroke="#27322f"
        strokeWidth="3"
      />
      {[
        [376, 252],
        [697, 252],
      ].map(([cx, cy]) => (
        <g key={cx}>
          <path
            d={`M${cx - 61} 266 C${cx - 59} 224 ${cx - 25} 205 ${cx + 14} 211 C${cx + 51} 217 ${cx + 66} 244 ${cx + 61} 270`}
            fill="#151b1a"
            stroke="#89938e"
            strokeWidth="4"
          />
          <circle
            cx={cx}
            cy={cy}
            r="36"
            fill="#131918"
            stroke="#75807b"
            strokeWidth="5"
          />
          <circle
            cx={cx}
            cy={cy}
            r="22"
            fill="#69736e"
            stroke="#c3cbc6"
            strokeWidth="3"
          />
          <circle cx={cx} cy={cy} r="8" fill="#1b2321" />
          <path
            d={`M${cx - 12} ${cy - 20} L${cx + 12} ${cy + 20} M${cx + 20} ${cy - 14} L${cx - 20} ${cy + 14} M${cx - 24} ${cy - 1} L${cx + 24} ${cy - 1}`}
            stroke="#e4e9e5"
            strokeWidth="3"
          />
        </g>
      ))}
      <path
        d="M171 267 L743 267"
        stroke="#b6ff70"
        strokeWidth="3"
        opacity=".9"
      />
      <path d="M176 280 L729 280" stroke="url(#carGlow)" strokeWidth="2" />
    </svg>
  );
}
