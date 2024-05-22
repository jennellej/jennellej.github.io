import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <header className="p-10 flex flex-col gap-10">
      <MenuButton onClick={() => setMenuOpen(!menuOpen)} />

      <Link
        to="/"
        className="text-4xl md:text-5xl text-center">
        Jennelle Jagdeo
      </Link>

      {menuOpen && <NavMenu />}
    </header>
  )
}

function MenuButton({ onClick }: { onClick?: () => void }) {
  return (
    <button className="sm:invisible m-2 h-10 w-10 rounded-md
    hover:bg-blue-900 active:bg-blue-800
      transition-colors duration-200 absolute top-0 left-0"
      onClick={onClick}>
      <FontAwesomeIcon icon={faBars} size="lg" />
    </button>
  )
}

function NavMenu({ onClick }: { onClick?: () => void }) {
  return (
    <nav className="flex flex-col sm:flex-row gap-2 sm:gap-12 self-center text-center">
        <Link 
          to="/blog"
          className="text-xl font-bold underline hover:text-slate-200 active:text-slate-300"
        >
          Essays
        </Link>
        <Link 
          to="/blog"
          className="text-xl font-bold underline hover:text-slate-200 active:text-slate-300"
        >
          Creative Work
        </Link>
        <Link 
          to="/blog"
          className="text-xl font-bold underline hover:text-slate-200 active:text-slate-300"
        >
          Articles
        </Link>
        <Link 
          to="/cv"
          className="text-xl font-bold underline hover:text-slate-200 active:text-slate-300"
        >
          CV
        </Link>
        <Link 
          to="/about"
          className="text-xl font-bold underline hover:text-slate-200 active:text-slate-300"
        >
          About
        </Link>
        <Link 
          to="/contact"
          className="text-xl font-bold underline hover:text-slate-200 active:text-slate-300"
        >
          Contact
        </Link>
      </nav>
  )
}