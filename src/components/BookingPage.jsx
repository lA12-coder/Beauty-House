import React, { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })

  const services = [
    'Bridal Makeup',
    'Party Makeup',
    'Professional Makeup',
    'Hydrating Facial',
    'Anti-Aging Treatment',
    'Acne Treatment',
    'Bridal Hair Styling',
    'Special Event Updo',
    'Blowout & Styling',
    'Eyebrow Shaping',
    'Lash Extensions'
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM'
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Booking submitted:', formData)
    alert('Thank you! Your booking request has been submitted. We will contact you shortly to confirm your appointment.')
  }

  return (
    <div className="pt-32">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-r from-beauty-gold to-beauty-rose ">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Schedule your beauty transformation with our expert team
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <h2 className="font-playfair text-3xl font-bold text-beauty-charcoal mb-4">
                  Schedule Your Beauty Session
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll contact you to confirm your
                  appointment
                </p>
              </CardHeader>

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="flex items-center text-beauty-charcoal font-medium"
                      >
                        <User size={16} className="mr-2" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-beauty-gold focus:ring-beauty-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center text-beauty-charcoal font-medium"
                      >
                        <Mail size={16} className="mr-2" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="border-gray-300 focus:border-beauty-gold focus:ring-beauty-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="flex items-center text-beauty-charcoal font-medium"
                    >
                      <Phone size={16} className="mr-2" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="border-gray-300 focus:border-beauty-gold focus:ring-beauty-gold"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="service"
                      className="text-beauty-charcoal font-medium"
                    >
                      Select Service *
                    </Label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-beauty-gold focus:ring-beauty-gold focus:ring-1"
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="date"
                        className="flex items-center text-beauty-charcoal font-medium"
                      >
                        <Calendar size={16} className="mr-2" />
                        Preferred Date *
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="border-gray-300 focus:border-beauty-gold focus:ring-beauty-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="time"
                        className="flex items-center text-beauty-charcoal font-medium"
                      >
                        <Clock size={16} className="mr-2" />
                        Preferred Time *
                      </Label>
                      <select
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-beauty-gold focus:ring-beauty-gold focus:ring-1"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="flex items-center text-beauty-charcoal font-medium"
                    >
                      <MessageSquare size={16} className="mr-2" />
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any special requests or additional information..."
                      rows={4}
                      className="border-gray-300 focus:border-beauty-gold focus:ring-beauty-gold"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="btn-primary w-full text-lg py-4"
                    >
                      Submit Booking Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="section-padding bg-beauty-cream">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl font-bold text-beauty-charcoal mb-6">
                Booking Information
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-beauty-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-beauty-charcoal mb-2">
                    Advance Booking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We recommend booking at least 48 hours in advance to secure
                    your preferred time slot.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-beauty-rose rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-beauty-charcoal mb-2">
                    Confirmation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We'll contact you within 24 hours to confirm your
                    appointment and discuss any special requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-beauty-sage rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-beauty-charcoal mb-2">
                    Need Help?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Call us at +251-931460438 if you need immediate assistance
                    or have questions about our services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingPage

