import React from 'react';
import { Phone, Mail, MapPin, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold border border-orange-200">
                  15+ Years of Excellence
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                Your Trusted Partner for
                <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent mt-2">
                  Premium Building Materials
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Specializing in premium plywood, hardware, doors, electrical supplies, plumbing, and windows.
                Quality products, expert service, competitive prices.
              </p>
            </div>

            {/* Business Info */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100/40 to-amber-100/40 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-600 to-amber-500 rounded-full mr-3"></div>
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700 group">
                  <div className="bg-orange-100 p-2 rounded-lg mr-3 group-hover:bg-orange-200 transition-colors">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Business Owner</div>
                    <div className="font-semibold">Venkanna Gundlapplly</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-700 group">
                  <div className="bg-orange-100 p-2 rounded-lg mr-3 group-hover:bg-orange-200 transition-colors">
                    <Phone className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Phone Number</div>
                    <a href="tel:+919133672662" className="font-semibold hover:text-orange-600 transition-colors">
                      +91 9133672662
                    </a>
                  </div>
                </div>
                <div className="flex items-center text-gray-700 group">
                  <div className="bg-orange-100 p-2 rounded-lg mr-3 group-hover:bg-orange-200 transition-colors">
                    <Mail className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Email Address</div>
                    <a href="mailto:balajitraders@gmail.com" className="font-semibold hover:text-orange-600 transition-colors break-all">
                      balajitraders@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919133672662"
                  className="flex-1 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-3.5 rounded-xl font-semibold text-center hover:from-orange-700 hover:to-amber-600 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 bg-white border-2 border-orange-600 text-orange-600 px-6 py-3.5 rounded-xl font-semibold text-center hover:bg-orange-600 hover:text-white transition-all duration-200 hover:shadow-lg"
                >
                  Get Quote
                </button>
              </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center group">
                <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Award className="h-7 w-7 text-orange-600" />
                  </div>
                  <div className="text-2xl font-black text-gray-900 mb-1">15+</div>
                  <div className="text-xs font-medium text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Users className="h-7 w-7 text-orange-600" />
                  </div>
                  <div className="text-2xl font-black text-gray-900 mb-1">5000+</div>
                  <div className="text-xs font-medium text-gray-600">Happy Clients</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Clock className="h-7 w-7 text-orange-600" />
                  </div>
                  <div className="text-2xl font-black text-gray-900 mb-1">Fast</div>
                  <div className="text-xs font-medium text-gray-600">Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-last">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction materials and hardware tools"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 z-0 w-full h-full bg-gradient-to-br from-orange-300 to-amber-300 rounded-2xl opacity-20"></div>
            <div className="absolute -top-6 -left-6 z-0 w-full h-full bg-gradient-to-br from-amber-300 to-orange-300 rounded-2xl opacity-15"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;