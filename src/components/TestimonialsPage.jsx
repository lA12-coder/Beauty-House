import React from 'react'
import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      service: 'Bridal Package',
      rating: 5,
      date: 'June 2024',
      text: 'Absolutely amazing experience! The team at Elegance Beauty House made me feel like a queen on my wedding day. The makeup was flawless and lasted all day and night. I received so many compliments! The trial session was perfect for getting everything just right.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Emily Chen',
      service: 'Skincare Treatment',
      rating: 5,
      date: 'May 2024',
      text: 'The hydrating facial treatment was incredible. My skin has never looked better! The aesthetician was so knowledgeable and explained every step of the process. I left feeling refreshed and glowing. Definitely booking my next appointment soon.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      service: 'Party Makeup & Hair',
      rating: 5,
      date: 'April 2024',
      text: 'Professional, friendly, and talented. I always leave feeling beautiful and confident. The makeup artist understood exactly what I wanted and created the perfect look for my anniversary dinner. The hair styling was gorgeous too!',
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Jessica Williams',
      service: 'Anti-Aging Treatment',
      rating: 5,
      date: 'March 2024',
      text: 'I\'ve been coming here for months now and the results are amazing. The anti-aging treatments have really improved my skin texture and reduced fine lines. The staff is always professional and the atmosphere is so relaxing.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'Amanda Davis',
      service: 'Bridal Hair Styling',
      rating: 5,
      date: 'February 2024',
      text: 'My bridal hair was absolutely perfect! The stylist listened to all my ideas and created something even better than I imagined. It stayed in place all day despite the wind and dancing. Thank you for making my day so special!',
      image: '/api/placeholder/80/80'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      service: 'Professional Makeup',
      rating: 5,
      date: 'January 2024',
      text: 'Needed makeup for a corporate photoshoot and they delivered exactly what I needed. Professional, polished, and camera-ready. The makeup artist was punctual and efficient. Will definitely use their services again.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 7,
      name: 'Rachel Green',
      service: 'Lash Extensions',
      rating: 4,
      date: 'December 2023',
      text: 'Love my lash extensions! They look so natural and have saved me so much time in my morning routine. The technician was gentle and professional. The lashes have lasted well with proper care.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 8,
      name: 'Nicole Brown',
      service: 'Eyebrow Shaping',
      rating: 5,
      date: 'November 2023',
      text: 'Finally found someone who can shape my eyebrows perfectly! The precision and attention to detail is outstanding. My brows have never looked better. The tinting service is also excellent.',
      image: '/api/placeholder/80/80'
    },
    {
      id: 9,
      name: 'Stephanie Wilson',
      service: 'Party Package',
      rating: 5,
      date: 'October 2023',
      text: 'Booked the party package for my birthday celebration and it was worth every penny. The makeup and hair were stunning, and I felt absolutely gorgeous all night. The team was so much fun to work with!',
      image: '/api/placeholder/80/80'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '4.9', label: 'Average Rating' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '95%', label: 'Return Clients' }
  ]

  return (
    <div className="pt-32">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-beauty-gold to-beauty-rose text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Read what our satisfied clients have to say about their beauty experiences
          </p>
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

      {/* Testimonials Grid */}
      <section className="section-padding bg-beauty-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-beauty-charcoal mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every review tells a story of transformation, confidence, and beauty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="text-beauty-gold" size={32} />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-beauty-gold fill-current" size={18} />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="border-t pt-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-beauty-gold to-beauty-rose rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-beauty-charcoal">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-beauty-rose">
                          {testimonial.service}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-beauty-gold/10 to-beauty-rose/10">
              <CardContent className="p-12 text-center">
                <Quote className="text-beauty-gold mx-auto mb-6" size={48} />
                <blockquote className="text-2xl md:text-3xl font-playfair text-beauty-charcoal mb-8 italic leading-relaxed">
                  "Elegance Beauty House doesn't just provide beauty services – they create experiences that make you feel absolutely radiant. Every visit is a journey of transformation."
                </blockquote>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-beauty-gold fill-current" size={24} />
                  ))}
                </div>
                <div className="text-beauty-charcoal font-semibold text-lg">
                  Sarah M., Loyal Client
                </div>
                <div className="text-beauty-rose">
                  Regular Client for 2+ Years
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-beauty-charcoal mb-6">
              Reviews by Service
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-beauty-gold font-playfair mb-2">
                  4.9/5
                </div>
                <div className="text-beauty-charcoal font-semibold mb-2">
                  Bridal Services
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-beauty-gold fill-current" size={16} />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  Based on 150+ reviews
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-beauty-gold font-playfair mb-2">
                  4.8/5
                </div>
                <div className="text-beauty-charcoal font-semibold mb-2">
                  Skincare Treatments
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-beauty-gold fill-current" size={16} />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  Based on 200+ reviews
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-beauty-gold font-playfair mb-2">
                  4.9/5
                </div>
                <div className="text-beauty-charcoal font-semibold mb-2">
                  Hair Styling
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-beauty-gold fill-current" size={16} />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  Based on 120+ reviews
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-beauty-gold font-playfair mb-2">
                  4.7/5
                </div>
                <div className="text-beauty-charcoal font-semibold mb-2">
                  Additional Services
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-beauty-gold fill-current" size={16} />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  Based on 80+ reviews
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-beauty-gold to-beauty-rose text-white">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have experienced the Elegance Beauty House difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="btn-primary bg-white text-beauty-charcoal hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-medium transition-colors">
              Book Your Appointment
            </a>
            <a href="/contact" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-beauty-charcoal text-lg px-8 py-4 rounded-lg font-medium transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage

