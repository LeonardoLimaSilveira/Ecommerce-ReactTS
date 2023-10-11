import React from 'react'

const IconClose = ({
  className,
  onClick
}: {
  className?: string | undefined
  onClick?: React.MouseEventHandler<SVGSVGElement> | undefined
}) => {
  const [color, setColor] = React.useState('')
  return (
    <svg
      width="16"
      height="17"
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => {
        setColor('hsl(26, 100%, 55%)')
      }}
      onMouseLeave={() => {
        setColor('#69707D')
      }}
    >
      <path
        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
        fill={`${color || '#69707D'}`}
        fillRule="evenodd"
      />
    </svg>
  )
}

export default IconClose
