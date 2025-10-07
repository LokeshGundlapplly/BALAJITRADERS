import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  User,
  Building
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-3 rounded-xl mr-4 shadow-lg">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Get In Touch
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Contact us for quotes, consultations, or questions about our quality products and services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-amber-500 rounded-full mr-4"></div>
                <h3 className="text-2xl font-black text-gray-900">Contact Information</h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-center group">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <User className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Business Owner</h4>
                    <p className="text-gray-700 font-medium">Venkanna Gundlapplly</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Phone Number</h4>
                    <a href="tel:+919133672662" className="text-orange-600 hover:text-orange-700 transition-colors font-semibold text-lg">
                      +91 9133672662
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Email Address</h4>
                    <a href="mailto:balajitraders@gmail.com" className="text-orange-600 hover:text-orange-700 transition-colors font-semibold break-all">
                      balajitraders@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Building className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Business Name</h4>
                    <p className="text-gray-700 font-medium">Balaji Traders</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Business Hours</h4>
                    <div className="text-gray-700 space-y-1 text-sm">
                      <p className="font-medium">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                      <p className="font-medium">Sunday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+919133672662"
                className="bg-gradient-to-br from-green-600 to-green-500 text-white p-6 rounded-xl text-center hover:from-green-700 hover:to-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <Phone className="h-8 w-8 mx-auto mb-2 group-hover:rotate-12 transition-transform" />
                <span className="font-bold block">Call Now</span>
              </a>
              <a
                href="mailto:balajitraders@gmail.com"
                className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-6 rounded-xl text-center hover:from-blue-700 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <Mail className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-bold block">Email Us</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-br from-orange-600 to-amber-500 p-3 rounded-xl mr-4 shadow-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">
                Send us a Message
              </h3>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                  <option value="">Select a product category</option>
                  <option value="plywood">Plywood</option>
                  <option value="electrical">Electrical Supplies</option>
                  <option value="plumbing">Plumbing Materials</option>
                  <option value="doors">Doors & Frames</option>
                  <option value="windows">Sliding Windows</option>
                  <option value="hardware">Hardware Materials</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white py-4 px-6 rounded-xl font-bold hover:from-orange-700 hover:to-amber-600 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-6 p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border-2 border-orange-100">
              <p className="text-sm text-orange-900 text-center font-medium">
                <strong className="font-bold">Quick Response Guaranteed!</strong> We typically respond within 2-4 hours during business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-20">
          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 rounded-2xl p-12 text-center border-2 border-orange-200 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full -translate-y-32 -translate-x-32"></div>
            <div className="relative z-10">
            <div className="bg-gradient-to-br from-orange-600 to-amber-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MapPin className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">Visit Our Store</h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Visit our showroom to explore our extensive product range firsthand.
              Our expert team is ready to assist with all your construction material needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-10 py-4 rounded-xl font-bold hover:from-orange-700 hover:to-amber-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Directions
              </button>
              <a
                href="tel:+919133672662"
                className="bg-white border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-orange-600 hover:text-white transition-all duration-200 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Before Visit
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
