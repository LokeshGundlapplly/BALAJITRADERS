import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Building,
  Clock,
  Users
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-orange-600 via-amber-500 to-orange-700 text-white p-4 rounded-xl mr-4 shadow-lg border-2 border-white/10">
                <div className="flex flex-col items-center">
                  <span className="font-black text-lg leading-none">BT</span>
                  <div className="w-6 h-0.5 bg-white/60 mt-0.5"></div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent tracking-tight">
                  Balaji Traders
                </h3>
                <p className="text-gray-400 font-medium tracking-wide">Hardware and Doors, Electricals</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Your trusted partner for all construction materials. From premium plywood to electrical supplies, 
              we provide quality products that help build strong foundations for your dreams.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Users className="h-5 w-5 text-orange-400 mr-3" />
                <span>Owner: Venkanna Gundlapplly</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Building className="h-5 w-5 text-orange-400 mr-3" />
                <span>15+ Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <nav className="space-y-3">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Info</h4>
            <div className="space-y-4">
              <a
                href="tel:+919133672662"
                className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200 group"
              >
                <Phone className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                +91 9133672662
              </a>
              <a
                href="mailto:balajitraders@gmail.com"
                className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200 group"
              >
                <Mail className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                balajitraders@gmail.com
              </a>
              <div className="flex items-start text-gray-300">
                <Clock className="h-5 w-5 mr-3 mt-1 text-orange-400" />
                <div>
                  <p>Mon-Sat: 8:00 AM - 8:00 PM</p>
                  <p>Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Product Categories</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Premium Plywood',
              'Electrical Supplies',
              'Plumbing Materials',
              'Doors & Frames',
              'Sliding Windows',
              'Hardware Materials'
            ].map((product, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-3 text-center text-sm text-gray-300 hover:bg-gray-700 hover:text-orange-400 transition-all duration-200 cursor-pointer"
              >
                {product}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Balaji Traders. All rights reserved. Built with quality and trust.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow Us:</span>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Twitter, label: 'Twitter' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;