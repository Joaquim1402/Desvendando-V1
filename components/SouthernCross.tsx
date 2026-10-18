type Props = { className?: string };

/** As cinco estrelas do Cruzeiro do Sul (posições do vetor oficial do projeto), na cor do texto atual. */
export function SouthernCross({ className }: Props) {
  return (
    <svg viewBox="0 0 227 260" className={className} fill="currentColor" role="img" aria-label="Cruzeiro do Sul">
      <polygon points="112.00,0.40 118.39,18.11 137.20,18.71 122.33,30.26 127.58,48.34 112.00,37.77 96.42,48.34 101.67,30.26 86.80,18.71 105.61,18.11" />
      <polygon points="25.50,77.40 31.89,95.11 50.70,95.71 35.83,107.26 41.08,125.34 25.50,114.77 9.92,125.34 15.17,107.26 0.30,95.71 19.11,95.11" />
      <polygon points="200.90,79.20 207.29,96.91 226.10,97.51 211.23,109.06 216.48,127.14 200.90,116.56 185.32,127.14 190.57,109.06 175.70,97.51 194.51,96.91" />
      <polygon points="115.90,210.70 122.29,228.41 141.10,229.01 126.23,240.56 131.48,258.64 115.90,248.06 100.32,258.64 105.57,240.56 90.70,229.01 109.51,228.41" />
      <polygon points="137.90,116.50 142.60,129.53 156.45,129.97 145.50,138.47 149.36,151.78 137.90,144.00 126.44,151.78 130.30,138.47 119.35,129.97 133.20,129.53" />
    </svg>
  );
}

/** Selo da marca: azul claro com os anéis do logo e o Cruzeiro do Sul em branco. */
export function SouthernCrossBadge({ className }: Props) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Cruzeiro do Sul">
      <defs><clipPath id="badge-clip"><rect width="64" height="64" rx="15" /></clipPath></defs>
      <g clipPath="url(#badge-clip)">
        <rect width="64" height="64" fill="#2aa3ce" />
        <circle cx="44" cy="20" r="58" fill="#3fb0d8" fillOpacity=".55" />
        <circle cx="44" cy="20" r="42" fill="#2aa3ce" />
        <circle cx="44" cy="20" r="27" fill="#3fb0d8" fillOpacity=".55" />
        <circle cx="44" cy="20" r="13" fill="#2aa3ce" />
      </g>
      <g fill="#fff">
      <polygon points="31.70,3.16 33.68,8.66 39.51,8.84 34.90,12.42 36.53,18.03 31.70,14.75 26.87,18.03 28.50,12.42 23.89,8.84 29.72,8.66"/>
      <polygon points="14.40,18.56 16.38,24.06 22.21,24.24 17.60,27.82 19.23,33.43 14.40,30.15 9.57,33.43 11.20,27.82 6.59,24.24 12.42,24.06"/>
      <polygon points="49.48,18.92 51.46,24.42 57.29,24.60 52.68,28.18 54.31,33.79 49.48,30.51 44.65,33.79 46.28,28.18 41.67,24.60 47.50,24.42"/>
      <polygon points="32.48,45.22 34.46,50.72 40.29,50.90 35.68,54.48 37.31,60.09 32.48,56.81 27.65,60.09 29.28,54.48 24.67,50.90 30.50,50.72"/>
      <polygon points="36.88,27.16 38.34,31.19 42.63,31.33 39.24,33.97 40.43,38.09 36.88,35.68 33.33,38.09 34.52,33.97 31.13,31.33 35.42,31.19"/>
      </g>
    </svg>
  );
}
