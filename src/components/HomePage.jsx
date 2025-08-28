import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Sparkles, Heart, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Import images
import heroImage from '../assets/eLKUmtUejrIk.jpeg'
import makeupImage from '../assets/gxKv1OFReVnC.jpg'
import skincareImage from '../assets/tIk2sOnslvkG.jpg'
import hairImage from '../assets/lT5aJFwIRr5h.jpg'

const HomePage = () => {
  const featuredServices = [
    {
      title: 'Professional Makeup',
      description: 'Transform your look with our expert makeup artists for any occasion.',
      image: makeupImage,
      price: 'From $80',
      features: ['Bridal Makeup', 'Party Looks', 'Professional Events']
    },
    {
      title: 'Skincare Treatments',
      description: 'Rejuvenate your skin with our advanced skincare treatments.',
      image: skincareImage,
      price: 'From $120',
      features: ['Facial Treatments', 'Anti-Aging', 'Acne Solutions']
    },
    {
      title: 'Hair Styling',
      description: 'Complete your look with our professional hair styling services.',
      image: hairImage,
      price: 'From $60',
      features: ['Updos', 'Blowouts', 'Special Occasions']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely amazing experience! The team made me feel like a queen on my wedding day.',
      service: 'Bridal Package'
    },
    {
      name: 'Emily Chen',
      rating: 5,
      text: 'The skincare treatment was incredible. My skin has never looked better!',
      service: 'Facial Treatment'
    },
    {
      name: 'Maria Rodriguez',
      rating: 5,
      text: 'Professional, friendly, and talented. I always leave feeling beautiful and confident.',
      service: 'Makeup & Hair'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Services Offered' },
    { number: '98%', label: 'Satisfaction Rate' }
  ]

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional Beauty Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <div className="fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
              Elegance
              <span className="block text-3xl md:text-4xl font-normal mt-2">
                Beauty House
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your beauty with our professional makeup, skincare treatments, 
              and hair styling services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="btn-primary font-semibold! text-lg px-8 py-4">
                  Book Appointment
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button className="btn-secondary text-lg px-8 py-4 bg-white/20 border-whit font-semibold! hover:bg-white hover:text-beauty-charcoal">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-beauty-gold font-playfair mb-2">
                  {stat.number}
                </div>
                <div className="text-beauty-charcoal font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-beauty-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="flex items-center mb-6">
                <Sparkles className="text-beauty-gold mr-3" size={24} />
                <span className="text-beauty-rose font-medium">About Us</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-beauty-charcoal mb-6">
                Your Beauty Journey Starts Here
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Elegance Beauty House, we believe that every person deserves to feel beautiful 
                and confident. Our team of skilled professionals is dedicated to enhancing your 
                natural beauty through personalized services and treatments.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                With years of experience and a passion for beauty, we offer a comprehensive range 
                of services from makeup artistry to advanced skincare treatments, all in a 
                luxurious and welcoming environment.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Award className="text-beauty-gold mr-2" size={20} />
                  <span className="text-beauty-charcoal font-medium">Certified Professionals</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-beauty-rose mr-2" size={20} />
                  <span className="text-beauty-charcoal font-medium">Personalized Care</span>
                </div>
              </div>
              <Link to="/contact">
                <Button className="btn-primary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="slide-in-right">
              <div className="relative">
                <img 
                  src={makeupImage} 
                  alt="Professional makeup application" 
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-beauty-gold font-playfair">5+</div>
                  <div className="text-beauty-charcoal font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="text-beauty-gold mr-3" size={24} />
              <span className="text-beauty-rose font-medium">Our Services</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-beauty-charcoal mb-6">
              Featured Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our most popular beauty services designed to enhance your natural radiance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-beauty-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-beauty-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-beauty-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                    <Button className="btn-secondary w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="btn-primary text-lg px-8 py-4">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-beauty-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Star className="text-beauty-gold mr-3" size={24} />
              <span className="text-beauty-rose font-medium">Testimonials</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-beauty-charcoal mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Read the experiences of our satisfied clients who trust us with their beauty needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-beauty-gold fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-beauty-charcoal">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-beauty-rose">
                      {testimonial.service}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button className="btn-secondary">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-beauty-gold to-beauty-ros">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our expert team help you discover your most beautiful self
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button className="bg-white text-beauty-charcoal hover:bg-gray-100 text-lg px-8 py-4">
                Book Now
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="border-2 border-white hover:bg-white hover:text-black text-lg px-8 py-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

