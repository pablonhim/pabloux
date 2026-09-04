export function Hexagon({
  size = 12,
  className = '',
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 1 L22 6.5 V17.5 L12 23 L2 17.5 V6.5 Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}
