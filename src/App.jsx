import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ServicesPage from './components/ServicesPage'
import PackagesPage from './components/PackagesPage'
import BookingPage from './components/BookingPage'
import TestimonialsPage from './components/TestimonialsPage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-source smooth-scroll">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

