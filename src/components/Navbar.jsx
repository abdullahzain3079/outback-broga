import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About' },
  { path: '/activities', label: 'Activities' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navClass = `navbar ${scrolled || !isHome ? 'navbar--solid' : ''} ${isOpen ? 'navbar--open' : ''}`

  return (
    <header className={navClass}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">🌿</span>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">OUTBACK</span>
            <span className="navbar__logo-sub">Broga Thai Dining</span>
          </div>
        </Link>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/60182883111"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm navbar__cta"
          >
            Reserve Now
          </a>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </button>
      </div>
    </header>
  )
}
