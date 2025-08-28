import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Packages', path: '/packages' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-beauty-charcoal text-white py-2 px-4">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(251) 931460438</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@elegancebeauty.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Mon-Sat: 9AM-7PM | Sun: 10AM-5PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-beauty-gold to-beauty-rose rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-bold text-beauty-charcoal">
                Elegance
              </h1>
              <p className="text-sm text-beauty-rose -mt-1">Beauty House</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-beauty-gold ${
                  location.pathname === item.path
                    ? 'text-beauty-gold border-b-2 border-beauty-gold pb-1'
                    : 'text-beauty-charcoal'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/booking" className="hidden md:block">
              <Button className="btn-primary">
                Book Appointment
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-beauty-charcoal hover:text-beauty-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-3 font-medium transition-colors duration-200 hover:bg-beauty-cream hover:text-beauty-gold ${
                    location.pathname === item.path
                      ? 'text-beauty-gold bg-beauty-cream'
                      : 'text-beauty-charcoal'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-6 py-3">
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  <Button className="btn-primary w-full">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

