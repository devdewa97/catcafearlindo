import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Adopsi Kucing', path: '/adopsi' },
  { name: 'Reservation', path: '/reservation' },
  { name: 'Menu Cafe', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Event Paket', path: '/event-paket' },
  { name: 'Rules', path: '/rules' },
  { name: 'FAQ', path: '/faq' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
            <img
              src="https://medivacare.com/wp-content/uploads/2026/04/LOGO-WEB-CAFE-ARLINDO-FOOTER.png"
              alt="Cat Cafe Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-xs xl:text-sm transition-colors hover:text-primary-500 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-secondary-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden xl:block">
            <Link to="/reservation" className="btn-primary text-sm px-5 py-2.5">
              Reservasi Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-3 rounded-lg hover:bg-secondary-50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-6 flex flex-col justify-between">
              <span className={`block h-1 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-3' : ''
              } bg-secondary-800`} />
              <span className={`block h-1 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              } bg-secondary-800`} />
              <span className={`block h-1 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-3' : ''
              } bg-secondary-800`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Vertical Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden border-t border-secondary-100"
            >
              <div className="py-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`px-4 py-3.5 rounded-xl font-medium text-base transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-secondary-700 hover:bg-secondary-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/reservation"
                  onClick={handleLinkClick}
                  className="btn-primary text-center mt-3 text-base mx-4 py-3"
                >
                  Reservasi Sekarang
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}