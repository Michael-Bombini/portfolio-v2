interface Props{
  rotate?: number;
}

export default function Wave({rotate} : Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`${rotate ? 'rotate-180' : ''}`}>
    <path
      fill="#08090b"
      d="m0 192 48 21.3C96 235 192 277 288 250.7 384 224 480 128 576 117.3 672 107 768 181 864 208s192 5 288-26.7c96-32.3 192-74.3 240-96l48-21.3V0H0Z"
    />
  </svg>
  )
}