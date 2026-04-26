import React from "react";
import { Link } from "react-router-dom";
import { Heart, Users, TrendingUp, Zap } from "lucide-react";

function Home() {
  const Gallary = [
    { image: "/asset/img2.png" },
    { image: "/asset/img3.png" },
    { image: "/asset/img4.png" },
    { image: "/asset/img5.png" },
  ];

  const features = [
    {
      icon: Heart,
      title: "Easy Donation",
      description: "Contribute to verified NGOs with just a few taps"
    },
    {
      icon: Users,
      title: "Volunteer Together",
      description: "Connect with meaningful causes in your community"
    },
    {
      icon: TrendingUp,
      title: "Track Impact",
      description: "See the real difference your support makes"
    },
    {
      icon: Zap,
      title: "Instant Connection",
      description: "Get involved immediately and change lives today"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section - Mobile First */}
      <section className="relative w-full min-h-screen pt-0 flex flex-col justify-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/asset/img1.png')`,
            backgroundSize: 'cover',
            filter: 'brightness(0.5) blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 py-6 text-center">
          <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeIn">
              Welcome to <span className="text-[#FFDE73]">Mahodara NGO</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed animate-fadeInUp">
              Building a compassionate, sustainable world through kindness and environmental responsibility
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Link
                to="/donate"
                className="flex-1 bg-[#FFDE73] text-[#004B8D] py-3 sm:py-4 px-6 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 active:scale-95 transition-all duration-200 shadow-lg"
              >
                Donate Now
              </Link>
              <Link
                to="/event"
                className="flex-1 bg-white text-[#004B8D] py-3 sm:py-4 px-6 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-lg"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#004B8D] mb-8 sm:mb-12">
            Why Choose Mahodara NGO?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex flex-col items-start gap-4">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#004B8D] flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#004B8D] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section - Mobile First */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#004B8D] mb-8 sm:mb-12">
            Our Impact Gallery
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {Gallary.map((val, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  <img
                    src={val.image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300?text=Image';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Mobile First Stack */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="/asset/img1.png"
                alt="About Mahodara NGO"
                className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/500x400';
                }}
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004B8D]">
                About Mahodara NGO
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  <strong>Mahodara NGO</strong>, founded in 2024 and based in Surathkal, Karnataka, is dedicated to bringing together individuals from all walks of life to create a future where kindness and sustainability go hand in hand.
                </p>
                <p>
                  Our mission is to foster a world where social responsibility and environmental protection are the cornerstones of progress. We specialize in charity, philanthropy, welfare, inclusivity, humanism, and environmentalism.
                </p>
                <p>
                  Join us in making a lasting impact—together, we can build a more compassionate, sustainable world for all.
                </p>
              </div>

              <Link
                to="/donate"
                className="inline-block bg-[#004B8D] text-white py-3 px-6 sm:px-8 rounded-lg font-bold text-base sm:text-lg hover:bg-[#003A68] active:scale-95 transition-all duration-200 shadow-md"
              >
                Get Involved Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-[#004B8D] to-blue-700 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Ready to Make a Difference?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
            Join thousands of supporters making real change in their communities
          </p>
          <Link
            to="/donate"
            className="inline-block bg-[#FFDE73] text-[#004B8D] py-3 sm:py-4 px-8 sm:px-12 rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Start Contributing Now
          </Link>
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
}

export default Home;
