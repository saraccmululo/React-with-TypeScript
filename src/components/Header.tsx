import { type ReactNode } from "react"

interface HeaderProps{
image: {src: string; alt: string};
children: ReactNode,
}

const Header = ({image, children}:HeaderProps) => {
  return (
    <div>
      <img src={image.src} alt={image.alt} /> {/* OR <img {...image} /> ----copying the key-value pairs image.src and image.alt into the prop */}
      {children}
    </div>
  )
}

export default Header