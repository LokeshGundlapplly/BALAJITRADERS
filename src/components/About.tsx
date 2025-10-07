import React from 'react';
import { 
  CheckCircle, 
  Award, 
  Users, 
  Truck, 
  Shield, 
  Clock,
  Target,
  Heart
} from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Only ISI marked and certified products from reputed manufacturers'
    },
    {
      icon: Truck,
      title: 'Timely Delivery',
      description: 'Efficient logistics network ensuring on-time delivery to your doorstep'
    },
    {
      icon: Shield,
      title: 'Warranty Support',
      description: 'Comprehensive warranty coverage on all products with after-sales service'
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Professional consultation to help you choose the right materials'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-quality construction materials at competitive prices while maintaining exceptional customer service standards.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Built on trust, transparency, and commitment to excellence. We believe in long-term relationships with our customers.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-3 rounded-xl mr-4 shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            About Balaji Traders
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience in hardware and electrical supplies,
            we have built a reputation for reliability, premium quality, and exceptional customer service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Extensive Product Range</h4>
                    <p className="text-gray-600">From basic construction materials to premium finishes, we have everything under one roof.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h4>
                    <p className="text-gray-600">Direct relationships with manufacturers ensure best prices without compromising quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Professional Service</h4>
                    <p className="text-gray-600">Our experienced team provides expert advice and personalized solutions for your projects.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Trusted Relationships</h4>
                    <p className="text-gray-600">Building lasting partnerships with contractors, builders, and homeowners across the region.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Info */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Venkanna Gundlapplly</h4>
                  <p className="text-orange-600 font-medium">Founder & Owner</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Our commitment is to provide quality materials that help build strong foundations for your dreams. 
                Every customer is family to us, and their satisfaction is our success."
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Construction materials warehouse"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white p-3 rounded-lg mr-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;