import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="p-3 px-4 flex flex-col">
      <div className="flex flex-row gap-3 flex-nowrap items-center">
        <MenuButton onClick={() => setMenuOpen(!menuOpen)} />

        <h1 className="font-honeypirls_regular text-4xl md:text-5xl">
          Jennelle's Portfolio
        </h1>
      </div>

      {menuOpen && <NavMenu onClick={() => setMenuOpen(!menuOpen)} />}
    </header>
  )
}

function MenuButton({ onClick }: { onClick?: () => void }) {
  return (
    <button className="m-2 h-10 w-10 rounded-md
    hover:bg-blue-900 active:bg-blue-800
      transition-colors duration-200"
      onClick={onClick}>
      <FontAwesomeIcon icon={faBars} size="lg" />
    </button>
  )
}

function NavMenu({ onClick }: { onClick?: () => void }) {
  return (
    <nav className="flex flex-col gap-y-2 pl-5">
      <Link to="/" onClick={onClick}>Home</Link>
      <Link to="/blog" onClick={onClick}>Blog</Link>
      <a href="#">About</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
    </nav>
  )
}