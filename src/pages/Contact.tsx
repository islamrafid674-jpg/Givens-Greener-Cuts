import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    clientType: "residential",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        clientType: "residential",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray">
      {/* Page Header */}
      <section className="bg-brand-dark text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
            alt="Contact background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-dark"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight"
          >
            Get a <span className="text-brand-gold">Free Quote</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Ready to elevate your property? Fill out the form below or give us a
            call. We respond to all inquiries within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
            {/* Contact Info & Quick Actions */}
            <div className="lg:w-1/3 space-y-8 md:space-y-10">
              <div>
                <h2 className="text-4xl font-heading font-extrabold text-brand-dark mb-6 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                  For immediate assistance or emergency snow removal, please
                  call or text our main line.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:4025550198"
                  className="flex items-start p-8 bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100"
                >
                  <div className="bg-brand-green/10 p-4 rounded-2xl mr-6 group-hover:bg-brand-green transition-colors duration-300">
                    <Phone className="w-8 h-8 text-brand-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-dark text-xl mb-1">
                      Call Us
                    </h4>
                    <p className="text-gray-600 text-lg">(402) 555-0198</p>
                    <span className="text-sm text-brand-green font-medium mt-2 block uppercase tracking-wider">
                      Mon-Fri, 7am - 6pm
                    </span>
                  </div>
                </a>

                <a
                  href="sms:4025550198"
                  className="flex items-start p-8 bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100"
                >
                  <div className="bg-brand-green/10 p-4 rounded-2xl mr-6 group-hover:bg-brand-green transition-colors duration-300">
                    <MessageSquare className="w-8 h-8 text-brand-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-dark text-xl mb-1">
                      Text Us
                    </h4>
                    <p className="text-gray-600 text-lg">(402) 555-0198</p>
                    <span className="text-sm text-brand-green font-medium mt-2 block uppercase tracking-wider">
                      Fastest response
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@givensgreenercuts.com"
                  className="flex items-start p-8 bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100"
                >
                  <div className="bg-brand-green/10 p-4 rounded-2xl mr-6 group-hover:bg-brand-green transition-colors duration-300">
                    <Mail className="w-8 h-8 text-brand-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-dark text-xl mb-1">
                      Email Us
                    </h4>
                    <p className="text-gray-600">info@givensgreenercuts.com</p>
                  </div>
                </a>

                <div className="flex items-start p-8 bg-brand-dark text-white rounded-[2rem] shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                  <div className="relative z-10 flex items-start">
                    <div className="bg-brand-gold/20 p-4 rounded-2xl mr-6">
                      <MapPin className="w-8 h-8 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-xl mb-2">
                        Service Area
                      </h4>
                      <p className="text-gray-300 font-light">
                        Omaha, Bellevue, Papillion, Bennington, and surrounding
                        areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-6 sm:p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-brand-dark mb-8 md:mb-10 tracking-tight relative z-10">
                  Request a Quote
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-800 p-12 rounded-[2rem] text-center relative z-10"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10 text-green-600 ml-2" />
                    </div>
                    <h4 className="text-3xl font-heading font-bold mb-4">
                      Request Sent Successfully!
                    </h4>
                    <p className="text-lg">
                      Thank you for reaching out. A member of our team will
                      contact you shortly to discuss your project.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-8 relative z-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-bold text-brand-dark mb-3 uppercase tracking-wider"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-brand-gray border-none focus:ring-2 focus:ring-brand-green outline-none transition-all text-base md:text-lg"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-bold text-brand-dark mb-3 uppercase tracking-wider"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-brand-gray border-none focus:ring-2 focus:ring-brand-green outline-none transition-all text-base md:text-lg"
                          placeholder="(402) 555-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-brand-dark mb-3 uppercase tracking-wider"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-brand-gray border-none focus:ring-2 focus:ring-brand-green outline-none transition-all text-base md:text-lg"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="clientType"
                          className="block text-sm font-bold text-brand-dark mb-3 uppercase tracking-wider"
                        >
                          Property Type
                        </label>
                        <select
                          id="clientType"
                          name="clientType"
                          value={formData.clientType}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-brand-gray border-none focus:ring-2 focus:ring-brand-green outline-none transition-all text-base md:text-lg appearance-none"
                        >
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial / HOA</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-bold text-brand-dark mb-3 uppercase tracking-wider"
                      >
                        Property Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-brand-gray border-none focus:ring-2 focus:ring-brand-green outline-none transition-all text-base md:text-lg"
                        placeholder="123 Main St, Omaha, NE"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-bold text-brand-dark mb-3 uppercase tracking-wider"
                      >
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-brand-gray border-none focus:ring-2 focus:ring-brand-green outline-none transition-all text-base md:text-lg appearance-none"
                      >
                        <option value="" disabled>
                          Select a service...
                        </option>
                        <option value="mowing">
                          Lawn Mowing & Maintenance
                        </option>
                        <option value="landscaping">
                          Landscaping & Design
                        </option>
                        <option value="gardening">
                          Gardening & Yard Cleanup
                        </option>
                        <option value="hauling">
                          Hauling & Debris Removal
                        </option>
                        <option value="snow">Snow Removal</option>
                        <option value="other">Other / Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-brand-dark mb-3 uppercase tracking-wider"
                      >
                        Project Details / Notes
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-brand-gray border-none focus:ring-2 focus:ring-brand-green outline-none transition-all resize-none text-base md:text-lg"
                        placeholder="Please describe what you're looking for..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-dark text-white py-5 rounded-2xl font-bold text-xl hover:bg-brand-green transition-colors shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group"
                    >
                      {isSubmitting ? "Sending Request..." : "Submit Request"}
                      {!isSubmitting && (
                        <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                    </button>
                    <p className="text-sm text-gray-500 text-center mt-6 font-light">
                      By submitting this form, you agree to be contacted by
                      Givens Greener Cuts regarding your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
