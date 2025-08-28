import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Studio',
      details: ['German CityMall 3rd Floor', 'Adama City, Ethiopia'],
      color: 'text-beauty-gold'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['(251) 931460438', 'Available Mon-Sat 9AM-7PM'],
      color: 'text-beauty-rose'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@elegancebeauty.com', 'We respond within 24 hours'],
      color: 'text-beauty-sage'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 5:00 PM' }
  ]

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ]

  return (
    <div className="pt-32">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-beauty-gold to-beauty-rose text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for appointments, questions, or just to say
            hello
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center card-hover"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      info.color === "text-beauty-gold"
                        ? "bg-beauty-gold"
                        : info.color === "text-beauty-rose"
                        ? "bg-beauty-rose"
                        : "bg-beauty-sage"
                    }`}
                  >
                    <info.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-beauty-charcoal mb-4">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className={`${
                        idx === 0
                          ? "font-semibold text-beauty-charcoal"
                          : "text-gray-600"
                      } ${idx === 1 ? "text-sm" : ""}`}
                    >
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className='space-y-5'>
              <Card className="border-0 shadow-xl h-fit">
                <CardHeader>
                  <h2 className="font-playfair text-3xl font-bold text-beauty-charcoal mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Have a question or want to schedule a consultation? Fill out
                    the form below and we'll get back to you soon.
                  </p>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-beauty-charcoal font-medium"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="border-gray-300 focus:border-beauty-gold focus:ring-beauty-gold"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-beauty-charcoal font-medium"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="border-gray-300 focus:border-beauty-gold focus:ring-beauty-gold"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-beauty-charcoal font-medium"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                          className="border-gray-300 focus:border-beauty-gold focus:ring-beauty-gold"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="subject"
                          className="text-beauty-charcoal font-medium"
                        >
                          Subject *
                        </Label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-beauty-gold focus:ring-beauty-gold focus:ring-1"
                        >
                          <option value="">Select a subject</option>
                          <option value="appointment">
                            Appointment Inquiry
                          </option>
                          <option value="services">Services Information</option>
                          <option value="pricing">Pricing Questions</option>
                          <option value="packages">Package Information</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-beauty-charcoal font-medium"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        className="border-gray-300 focus:border-beauty-gold focus:ring-beauty-gold"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="btn-primary w-full text-lg py-4"
                    >
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Location Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="font-playfair text-2xl font-bold text-beauty-charcoal">
                    Find Us
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin size={48} className="mx-auto mb-4" />
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">
                        123 Beauty Street, Elegance City
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      <strong>Parking:</strong> Free parking available in front
                      of the building
                    </p>
                    <p>
                      <strong>Public Transit:</strong> Bus routes 15, 22, and 45
                      stop nearby
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Contact Form */}

            {/* Business Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="font-playfair text-2xl font-bold text-beauty-charcoal flex items-center">
                    <Clock className="mr-3 text-beauty-gold" size={24} />
                    Business Hours
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-beauty-charcoal">
                          {schedule.day}
                        </span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-beauty-cream rounded-lg">
                    <p className="text-sm text-beauty-charcoal">
                      <strong>Note:</strong> We're closed on major holidays.
                      Emergency appointments may be available by special
                      arrangement.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="font-playfair text-2xl font-bold text-beauty-charcoal">
                    Follow Us
                  </h3>
                  <p className="text-gray-600">
                    Stay updated with our latest work and beauty tips
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-gradient-to-br from-beauty-gold to-beauty-rose rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                        aria-label={social.label}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-600 mb-2">Follow us for:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Behind-the-scenes content</li>
                      <li>• Beauty tips and tutorials</li>
                      <li>• Client transformations</li>
                      <li>• Special offers and promotions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-beauty-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-beauty-charcoal mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-beauty-charcoal mb-2">
                  How far in advance should I book?
                </h3>
                <p className="text-gray-600">
                  We recommend booking at least 48 hours in advance for regular
                  services. For bridal services and special events, we suggest
                  booking 2-4 weeks ahead.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-beauty-charcoal mb-2">
                  Do you offer consultations?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer complimentary consultations for all new clients.
                  This helps us understand your needs and recommend the best
                  services for you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-beauty-charcoal mb-2">
                  What should I bring to my appointment?
                </h3>
                <p className="text-gray-600">
                  Just bring yourself! We provide all necessary products and
                  tools. For makeup services, you may want to bring any specific
                  products you'd like us to use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage

