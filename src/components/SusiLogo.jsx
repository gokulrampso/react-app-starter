function SusiLogo({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      style={{ display: "inline-block", verticalAlign: "middle" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circular background */}
      <circle cx="32" cy="32" r="32" fill="#0d6efd" />
      {/* S letter */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".35em"
        fontFamily="Segoe UI, Arial, sans-serif"
        fontWeight="bold"
        fontSize="32"
        fill="#fff"
        style={{ filter: "drop-shadow(0 2px 8px #6610f2)" }}
      >
        S
      </text>
      {/* Clothing hanger (simple line) */}
      <path
        d="M20 40 Q32 20 44 40"
        stroke="#ffe082"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="32" cy="40" r="2" fill="#ffe082" />
    </svg>
  );
}

export default SusiLogo;
