import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Star, Crown, Heart, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Import images
import bridalImage from '../assets/QAjlFoiKQpZD.jpg'
import partyImage from '../assets/gxKv1OFReVnC.jpg'
import skincareImage from '../assets/tIk2sOnslvkG.jpg'

const PackagesPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null)

  const packages = [
    {
      id: 1,
      name: 'Bridal Bliss Package',
      category: 'Bridal',
      price: 450,
      originalPrice: 550,
      duration: '5-6 hours',
      image: bridalImage,
      popular: true,
      description: 'Complete bridal beauty package for your perfect wedding day',
      services: [
        'Bridal makeup with trial session',
        'Bridal hair styling with trial',
        'Eyebrow shaping and tinting',
        'Lash extensions',
        'Touch-up kit for the day',
        'Complimentary consultation'
      ],
      features: [
        'Two trial sessions included',
        'On-location service available',
        'Professional photography makeup',
        'Long-lasting formulas',
        'Emergency touch-up kit',
        'Bridal party discounts available'
      ],
      savings: 100
    },
    {
      id: 2,
      name: 'Party Glam Package',
      category: 'Party',
      price: 200,
      originalPrice: 250,
      duration: '2-3 hours',
      image: partyImage,
      description: 'Get party-ready with our glamorous makeup and hair package',
      services: [
        'Party makeup application',
        'Hair styling (updo or blowout)',
        'Eyebrow touch-up',
        'Complimentary lip touch-up'
      ],
      features: [
        'Photo-ready finish',
        'Long-lasting wear',
        'Custom color matching',
        'Style consultation included'
      ],
      savings: 50
    },
    {
      id: 3,
      name: 'Skincare Renewal Package',
      category: 'Skincare',
      price: 320,
      originalPrice: 400,
      duration: '3 sessions',
      image: skincareImage,
      description: 'Comprehensive skincare package for healthy, glowing skin',
      services: [
        'Deep cleansing facial',
        'Anti-aging treatment',
        'Hydrating mask therapy',
        'LED light therapy',
        'Custom skincare consultation',
        'Take-home skincare kit'
      ],
      features: [
        'Three treatment sessions',
        'Personalized skincare routine',
        'Professional-grade products',
        'Progress tracking',
        'Home care instructions',
        'Follow-up consultation'
      ],
      savings: 80
    },
    {
      id: 4,
      name: 'Monthly Maintenance',
      category: 'Maintenance',
      price: 150,
      originalPrice: 180,
      duration: 'Monthly',
      image: partyImage,
      description: 'Regular beauty maintenance to keep you looking your best',
      services: [
        'Monthly facial treatment',
        'Eyebrow shaping',
        'Lash tint and curl',
        'Basic makeup touch-up'
      ],
      features: [
        'Consistent monthly appointments',
        'Member pricing on additional services',
        'Priority booking',
        'Seasonal skin adjustments'
      ],
      savings: 30
    },
    {
      id: 5,
      name: 'Special Occasion Package',
      category: 'Events',
      price: 280,
      originalPrice: 340,
      duration: '3-4 hours',
      image: partyImage,
      description: 'Perfect for graduations, anniversaries, and special celebrations',
      services: [
        'Professional makeup',
        'Hair styling',
        'Nail care and polish',
        'Eyebrow grooming',
        'Style consultation'
      ],
      features: [
        'Event-appropriate styling',
        'Photo-ready finish',
        'Color coordination advice',
        'Confidence boost guarantee'
      ],
      savings: 60
    },
    {
      id: 6,
      name: 'Teen Beauty Package',
      category: 'Teen',
      price: 120,
      originalPrice: 150,
      duration: '2 hours',
      image: partyImage,
      description: 'Age-appropriate beauty services for teens and young adults',
      services: [
        'Natural makeup application',
        'Skincare consultation',
        'Eyebrow shaping',
        'Hair styling tips'
      ],
      features: [
        'Age-appropriate products',
        'Skincare education',
        'Natural, fresh look',
        'Confidence building'
      ],
      savings: 30
    }
  ]

  const customPackageFeatures = [
    'Choose your own services',
    'Flexible scheduling',
    'Personalized consultation',
    'Custom pricing based on selection',
    'Add-on services available',
    'Group booking discounts'
  ]

  return (
    <div className="pt-32">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-beauty-gold to-beauty-rose text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Beauty Packages
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Save more with our carefully curated beauty packages designed for every occasion
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`card-hover border-0 shadow-lg overflow-hidden relative ${
                  pkg.popular ? 'ring-2 ring-beauty-gold' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-beauty-gold text-white">
                      <Crown size={14} className="mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {pkg.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-playfair text-xl font-bold text-beauty-charcoal">
                      {pkg.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-beauty-gold">
                        ${pkg.price}
                      </div>
                      {pkg.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          ${pkg.originalPrice}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {pkg.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-beauty-rose font-medium">
                      Duration: {pkg.duration}
                    </span>
                    {pkg.savings && (
                      <Badge variant="outline" className="text-beauty-gold border-beauty-gold">
                        Save ${pkg.savings}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-beauty-charcoal mb-3 flex items-center">
                      <Sparkles size={16} className="mr-2 text-beauty-gold" />
                      Included Services
                    </h4>
                    <ul className="space-y-2">
                      {pkg.services.map((service, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <Check size={16} className="mr-2 text-beauty-gold flex-shrink-0 mt-0.5" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-beauty-charcoal mb-3 flex items-center">
                      <Heart size={16} className="mr-2 text-beauty-rose" />
                      Package Features
                    </h4>
                    <ul className="space-y-1">
                      {pkg.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-beauty-rose rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Link to="/booking" state={{ selectedPackage: pkg.name }}>
                      <Button className="btn-primary w-full">
                        Book This Package
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="w-full border-beauty-gold text-beauty-gold hover:bg-beauty-gold hover:text-white"
                      onClick={() => setSelectedPackage(selectedPackage === pkg.id ? null : pkg.id)}
                    >
                      {selectedPackage === pkg.id ? 'Hide Details' : 'View Details'}
                    </Button>
                  </div>

                  {/* Expanded Details */}
                  {selectedPackage === pkg.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-beauty-charcoal mb-3">
                        Complete Package Features
                      </h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <Star size={14} className="mr-2 text-beauty-gold flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package Section */}
      <section className="section-padding bg-beauty-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-beauty-gold to-beauty-rose rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-white" size={24} />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-beauty-charcoal mb-4">
                    Create Your Custom Package
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Don't see exactly what you need? Let us create a personalized beauty package 
                    tailored specifically to your requirements and budget.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-beauty-charcoal mb-4">
                      Custom Package Benefits
                    </h3>
                    <ul className="space-y-3">
                      {customPackageFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check size={16} className="mr-3 text-beauty-gold flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-beauty-gold/10 to-beauty-rose/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-beauty-charcoal mb-4">
                      How It Works
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-beauty-gold text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          1
                        </div>
                        <span className="text-gray-600 text-sm">
                          Schedule a consultation to discuss your needs
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-beauty-gold text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          2
                        </div>
                        <span className="text-gray-600 text-sm">
                          We'll create a custom package with pricing
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-beauty-gold text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          3
                        </div>
                        <span className="text-gray-600 text-sm">
                          Book your personalized beauty experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link to="/contact">
                    <Button className="btn-primary text-lg px-8 py-4">
                      Request Custom Package
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-beauty-charcoal mb-6">
              Package FAQs
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-beauty-charcoal mb-2">
                  Can I modify a package?
                </h3>
                <p className="text-gray-600">
                  Yes! All our packages can be customized to better suit your needs. 
                  Contact us to discuss modifications and pricing adjustments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-beauty-charcoal mb-2">
                  Do you offer group discounts?
                </h3>
                <p className="text-gray-600">
                  We offer special group rates for bridal parties, events, and group bookings. 
                  Contact us for custom group pricing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-beauty-charcoal mb-2">
                  What's your cancellation policy?
                </h3>
                <p className="text-gray-600">
                  We require 48 hours notice for cancellations. Packages can be rescheduled 
                  within 30 days of the original booking date.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PackagesPage

