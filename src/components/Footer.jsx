import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-beauty-charcoal text-white py-5">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-beauty-gold to-beauty-rose rounded-full flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold">Elegance</h3>
                <p className="text-sm text-beauty-gold -mt-1">Beauty House</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transform your beauty with our professional makeup, skincare
              treatments, and hair styling services. Your beauty journey starts
              here.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-beauty-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-beauty-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-beauty-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-beauty-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-beauty-gold transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-beauty-gold transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="text-gray-300 hover:text-beauty-gold transition-colors text-sm"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-300 hover:text-beauty-gold transition-colors text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-beauty-gold transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-beauty-gold">
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Bridal Makeup</li>
              <li className="text-gray-300 text-sm">Party Makeup</li>
              <li className="text-gray-300 text-sm">Skincare Treatments</li>
              <li className="text-gray-300 text-sm">Hair Styling</li>
              <li className="text-gray-300 text-sm">Lash Extensions</li>
              <li className="text-gray-300 text-sm">Eyebrow Shaping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-playfair text-lg font-semibold text-beauty-gold">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={16}
                  className="text-beauty-gold mt-1 flex-shrink-0"
                />
                <div className="text-gray-300 text-sm">
                  <p>Adama Postoffice, German CityMall 3rd floor</p>
                  <p>Adama, Ethiopia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-beauty-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">+251-931460438</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-beauty-gold flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  info@elegancebeauty.com
                </span>
              </div>
            </div>
            <div className="pt-2">
              <h5 className="font-semibold text-beauty-gold text-sm mb-2">
                Business Hours
              </h5>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-3 flex items-center w-full justify-between mt-3">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Elegance Beauty House. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-beauty-gold transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-beauty-gold transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

