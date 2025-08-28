import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, DollarSign, Star, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

// Import images
import makeupImage from '../assets/gxKv1OFReVnC.jpg'
import skincareImage from '../assets/tIk2sOnslvkG.jpg'
import hairImage from '../assets/lT5aJFwIRr5h.jpg'
import bridalImage from '../assets/QAjlFoiKQpZD.jpg'
import professionalImage from '../assets/YbMnszqsT6gM.jpg'
import facialImage from '../assets/WQ4QtqUfgXRh.jpg'

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const services = [
    {
      id: 1,
      title: 'Bridal Makeup',
      category: 'Makeup',
      description: 'Complete bridal makeup package for your special day with trial session included.',
      image: bridalImage,
      price: 250,
      duration: '3-4 hours',
      rating: 4.9,
      features: ['Trial session', 'Touch-up kit', 'False lashes', 'Long-lasting formula']
    },
    {
      id: 2,
      title: 'Party Makeup',
      category: 'Makeup',
      description: 'Glamorous makeup for parties, events, and special occasions.',
      image: makeupImage,
      price: 120,
      duration: '1.5-2 hours',
      rating: 4.8,
      features: ['Custom look', 'Photo-ready finish', 'Contouring', 'Highlighting']
    },
    {
      id: 3,
      title: 'Professional Makeup',
      category: 'Makeup',
      description: 'Polished, professional makeup for business events and photoshoots.',
      image: professionalImage,
      price: 100,
      duration: '1-1.5 hours',
      rating: 4.7,
      features: ['Natural finish', 'Camera-ready', 'Long-wearing', 'Professional products']
    },
    {
      id: 4,
      title: 'Hydrating Facial',
      category: 'Skincare',
      description: 'Deep hydration treatment to restore moisture and glow to your skin.',
      image: facialImage,
      price: 150,
      duration: '60-75 minutes',
      rating: 4.9,
      features: ['Deep cleansing', 'Hydrating mask', 'Facial massage', 'Moisturizing treatment']
    },
    {
      id: 5,
      title: 'Anti-Aging Treatment',
      category: 'Skincare',
      description: 'Advanced anti-aging facial with peptides and collagen boosting ingredients.',
      image: skincareImage,
      price: 200,
      duration: '75-90 minutes',
      rating: 4.8,
      features: ['Collagen boost', 'Fine line reduction', 'Firming treatment', 'LED therapy']
    },
    {
      id: 6,
      title: 'Acne Treatment',
      category: 'Skincare',
      description: 'Specialized treatment for acne-prone skin with deep pore cleansing.',
      image: facialImage,
      price: 130,
      duration: '60 minutes',
      rating: 4.6,
      features: ['Deep pore cleansing', 'Extraction', 'Antibacterial treatment', 'Soothing mask']
    },
    {
      id: 7,
      title: 'Bridal Hair Styling',
      category: 'Hair',
      description: 'Elegant bridal hairstyles with trial session for your perfect wedding look.',
      image: hairImage,
      price: 180,
      duration: '2-3 hours',
      rating: 4.9,
      features: ['Trial session', 'Hair accessories', 'Long-lasting hold', 'Touch-up service']
    },
    {
      id: 8,
      title: 'Special Event Updo',
      category: 'Hair',
      description: 'Sophisticated updos for special occasions and formal events.',
      image: hairImage,
      price: 80,
      duration: '1-1.5 hours',
      rating: 4.7,
      features: ['Custom styling', 'Hair accessories', 'Strong hold', 'Photo-ready']
    },
    {
      id: 9,
      title: 'Blowout & Styling',
      category: 'Hair',
      description: 'Professional blowout with styling for everyday glamour.',
      image: hairImage,
      price: 60,
      duration: '45-60 minutes',
      rating: 4.5,
      features: ['Wash & condition', 'Heat protection', 'Volume boost', 'Smooth finish']
    },
    {
      id: 10,
      title: 'Eyebrow Shaping',
      category: 'Additional',
      description: 'Professional eyebrow shaping and tinting for perfectly defined brows.',
      image: makeupImage,
      price: 45,
      duration: '30 minutes',
      rating: 4.8,
      features: ['Precision shaping', 'Tinting option', 'Brow mapping', 'Aftercare advice']
    },
    {
      id: 11,
      title: 'Lash Extensions',
      category: 'Additional',
      description: 'Individual lash extensions for natural-looking, fuller lashes.',
      image: makeupImage,
      price: 120,
      duration: '2-2.5 hours',
      rating: 4.7,
      features: ['Individual lashes', 'Natural look', 'Long-lasting', 'Maintenance guide']
    }
  ]

  const categories = ['All', 'Makeup', 'Skincare', 'Hair', 'Additional']

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-32">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-beauty-gold to-beauty-rose text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our comprehensive range of beauty services designed to enhance your natural radiance
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-beauty-gold" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-beauty-gold text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-beauty-cream'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-beauty-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-beauty-charcoal px-3 py-1 rounded-full text-sm font-bold">
                    ${service.price}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-playfair text-xl font-bold text-beauty-charcoal">
                      {service.title}
                    </h3>
                    <div className="flex items-center">
                      <Star className="text-beauty-gold fill-current mr-1" size={16} />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {service.duration}
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-1" />
                      ${service.price}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-beauty-charcoal mb-2 text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-beauty-gold rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/booking" state={{ selectedService: service.title }}>
                    <Button className="btn-primary w-full">
                      Book This Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchTerm('')
                }}
                className="btn-secondary mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-beauty-cream">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-4xl font-bold text-beauty-charcoal mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We offer customized beauty services tailored to your specific needs. 
            Contact us to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-primary">
                Contact Us
              </Button>
            </Link>
            <Link to="/packages">
              <Button className="btn-secondary">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

