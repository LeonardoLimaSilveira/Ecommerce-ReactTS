const IconPrevious = ({
  className,
  onClick
}: {
  className?: string | undefined
  onClick?: React.MouseEventHandler<SVGSVGElement> | undefined
}) => {
  return (
    <svg
      width="12"
      height="18"
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1 3 9l8 8"
        stroke="#1D2026"
        stroke-width="3"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default IconPrevious
