import React from 'react'

const IconNext = ({
  className,
  onClick
}: {
  className?: string | undefined
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}) => {
  const [color, setColor] = React.useState('')

  return (
    <div
      className="w-12 h-12 cursor-pointer bg-LightGrayishBlue absolute -right-5 top-[50%] rounded-full flex items-center justify-center "
      onClick={onClick}
      onMouseEnter={() => {
        setColor('hsl(26, 100%, 55%)')
      }}
      onMouseLeave={() => {
        setColor('#1D2026')
      }}
    >
      <svg
        width="13"
        height="18"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2 1 8 8-8 8"
          stroke={`${color || '#1D2026'}`}
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default IconNext
