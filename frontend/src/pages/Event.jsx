import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Users, ChevronRight, Heart } from 'lucide-react';

function Event() {
  const events = [
    {
      id: 1,
      title: 'Food Distribution Drive',
      location: 'Surathkal, Karnataka',
      date: '2024-10-30',
      image: '/asset/food.png',
      description: 'Successfully distributed food packets to 40+ underprivileged families in rural communities',
      participants: 40,
      label: 'beneficiaries served'
    },
    {
      id: 2,
      title: 'Food Distribution Drive',
      location: 'Surathkal, Karnataka',
      date: '2025-02-8',
      image: '/asset/education.png',
      description: 'Successfully distributed food packets to 50+ underprivileged families in rural communities',
      participants: 50,
      label: 'participants engaged'
    },
    {
      id: 3,
      title: 'Environmental Awareness Campaign',
      location: 'Surathkal, Karnataka',
      date: '2025-10-27',
      image: '/asset/medical.png',
      description: 'picked around 4 bags of plastic bottles from beach and dumped in dustbin',
      participants: 30,
      label: 'people received care'
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-gray-50 px-4 py-8 sm:px-6 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004B8D] mb-3 sm:mb-4">
            Our Past Events
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the community programs and initiatives we've successfully organized to create lasting positive impact in the lives of those we serve.
          </p>
        </div>

        {/* Events Grid - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-105 relative"
            >
              {/* Completed Badge */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 shadow-md z-10">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                Completed
              </div>

              {/* Event Image */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
                <img
                  src={event.image}
                  alt={`${event.title} event`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Event';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Event Details */}
              <div className="p-5 sm:p-6 md:p-7 space-y-4 sm:space-y-5">
                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#004B8D] line-clamp-2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                  {event.description}
                </p>

                {/* Meta Information - Mobile Optimized */}
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  {/* Location */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#004B8D] flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#004B8D] flex-shrink-0" />
                    <span>{new Date(event.date).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}</span>
                  </div>

                  {/* Participants / Beneficiaries */}
                  <div className="flex items-center gap-3 text-gray-700">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#004B8D] flex-shrink-0" />
                    <span>{event.participants} {event.label}</span>
                  </div>
                </div>

                {/* Call to Action Button - Large Touch Target */}
                <Link
                  to="/donate"
                  className="mt-4 sm:mt-6 w-full bg-[#004B8D] hover:bg-[#003A68] text-white py-3 sm:py-4 px-4 rounded-lg sm:rounded-lg font-semibold text-base sm:text-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  Donate Now
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-white rounded-lg sm:rounded-2xl shadow-lg p-8 sm:p-10 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#004B8D] mb-8 sm:mb-10 md:mb-12">
            Our Collective Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#004B8D] mb-2">100+</div>
              <p className="text-base sm:text-lg text-gray-600">Lives Touched</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#004B8D] mb-2">3</div>
              <p className="text-base sm:text-lg text-gray-600">Major Initiatives</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#004B8D] mb-2">100%</div>
              <p className="text-base sm:text-lg text-gray-600">Community Focus</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-[#004B8D] to-blue-700 rounded-lg sm:rounded-2xl p-8 sm:p-10 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Want to Support Our Next Initiative?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Your contribution helps us continue making a meaningful difference. Join our mission to uplift communities and transform lives.
          </p>
          <Link
            to="/donate"
            className="inline-block bg-[#FFDE73] text-[#004B8D] py-3 sm:py-4 px-8 sm:px-10 rounded-lg sm:rounded-lg font-bold text-base sm:text-lg hover:bg-yellow-300 active:scale-95 transition-all duration-200 shadow-lg"
          >
            Contribute Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Event;