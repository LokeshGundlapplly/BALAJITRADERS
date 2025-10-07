import React from 'react';
import {
  Layers,
  Zap,
  Wrench,
  DoorOpen,
  Square,
  Settings,
  ArrowRight,
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Layers,
      title: 'Premium Plywood',
      description: 'High-quality plywood for all construction needs. Waterproof, termite-resistant, and durable.',
      image: 'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['BWR & BWP Grade', 'IS:303 Certified', 'Multiple Thickness', 'Brand Warranty']
    },
    {
      icon: Zap,
      title: 'Electrical Supplies',
      description: 'Complete range of electrical items including wires, switches, panels, and accessories.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['ISI Marked Products', 'Top Brands', 'Safety Certified', 'Complete Range']
    },
    {
      icon: Wrench,
      title: 'Plumbing Materials',
      description: 'Pipes, fittings, valves, and all plumbing essentials from trusted manufacturers.',
      image: 'https://images.pexels.com/photos/8961327/pexels-photo-8961327.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['CPVC & PVC Pipes', 'Brass Fittings', 'Sanitaryware', 'Water Solutions']
    },
    {
      icon: DoorOpen,
      title: 'Doors & Frames',
      description: 'Wide variety of doors including flush doors, panel doors, and designer options.',
      image: 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Flush Doors', 'Panel Doors', 'Steel Frames', 'Custom Sizes']
    },
    {
      icon: Square,
      title: 'Sliding Windows',
      description: 'Modern sliding windows with superior quality aluminum profiles and glass options.',
      image: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Aluminum Profiles', 'UPVC Options', 'Security Features', 'Energy Efficient']
    },
    {
      icon: Settings,
      title: 'Hardware Materials',
      description: 'Complete hardware solutions including hinges, locks, handles, and building hardware.',
      image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Door Hardware', 'Window Fittings', 'Security Solutions', 'Quality Guarantee']
    }
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-3 rounded-xl mr-4 shadow-lg">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Our Product Range
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From premium plywood to electrical supplies, we offer an extensive range of quality construction materials.
            Everything you need for your projects under one roof.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-orange-200"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl shadow-lg">
                  <product.icon className="h-6 w-6 text-orange-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white py-3.5 px-4 rounded-xl font-semibold hover:from-orange-700 hover:to-amber-600 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg group-hover:scale-105"
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 rounded-2xl p-10 border-2 border-orange-100 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Contact us for custom requirements, bulk orders, or special products.
              We source quality materials from trusted manufacturers nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919133672662"
                className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-10 py-4 rounded-xl font-bold hover:from-orange-700 hover:to-amber-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call for Custom Quote
              </a>
              <a
                href="mailto:balajitraders@gmail.com"
                className="bg-white border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-xl font-bold hover:bg-orange-600 hover:text-white transition-all duration-200 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Requirements
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;