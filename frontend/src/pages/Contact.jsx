import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.message) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess("Message sent successfully.");
      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-gray-50 px-4 py-8 sm:px-6 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004B8D] mb-2 sm:mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Contact Info Cards - Mobile Optimized */}
          <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#004B8D] flex-shrink-0 mt-1" />
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-[#004B8D] mb-1 sm:mb-2">Phone</h3>
                <p className="text-sm sm:text-base text-gray-600 break-all">+91 88612 16449</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#004B8D] flex-shrink-0 mt-1" />
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-[#004B8D] mb-1 sm:mb-2">Email</h3>
                <p className="text-sm sm:text-base text-gray-600 break-all">mahodara.ngo@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#004B8D] flex-shrink-0 mt-1" />
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-[#004B8D] mb-1 sm:mb-2">Location</h3>
                <p className="text-sm sm:text-base text-gray-600">Surathkal, Karnataka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - Mobile Optimized */}
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          {/* Alerts with Better Mobile Spacing */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg sm:rounded-lg p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-800 text-sm sm:text-base mb-1">Error</h3>
                <p className="text-red-700 text-sm sm:text-base">{error}</p>
              </div>
            </div>
          )}

          {success && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg sm:rounded-lg p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-green-800 text-sm sm:text-base mb-1">Success</h3>
                <p className="text-green-700 text-sm sm:text-base">{success}</p>
              </div>
            </div>
          )}

          {/* Form Fields - Mobile Optimized with Large Touch Targets */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B8D] focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="10-digit phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B8D] focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B8D] focus:border-transparent transition-all duration-200 bg-white"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="6"
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className="w-full text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B8D] focus:border-transparent transition-all duration-200 bg-white resize-none"
              />
            </div>

            {/* Submit Button - Large Touch Target for Mobile */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#004B8D] hover:bg-[#003A68] text-white py-4 sm:py-5 px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
