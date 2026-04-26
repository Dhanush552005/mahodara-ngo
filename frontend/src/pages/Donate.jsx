import { useState } from "react";
import { Heart, ShoppingCart, Lock } from "lucide-react";

function Donate() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const finalAmount = customAmount ? Number(customAmount) : amount;

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!phone.trim() || phone.length !== 10) {
      setMessage("Please enter valid phone number.");
      return;
    }

    if (!finalAmount || finalAmount < 1) {
      setMessage("Please enter valid amount.");
      return;
    }

    setLoading(true);
    setMessage("");

    const loaded = await loadRazorpayScript();

    if (!loaded) {
      setMessage("Failed to load payment gateway.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: finalAmount,
          }),
        }
      );

      const order = await response.json();

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID",
        amount: order.amount,
        currency: "INR",
        name: "Mahodara NGO",
        description: "Support Our Cause",
        order_id: order.id,
        handler: function () {
          setMessage("Thank you for your donation ❤️");
          setName("");
          setPhone("");
          setCustomAmount("");
          setAmount(500);
        },
        prefill: {
          name,
          contact: phone,
        },
        theme: {
          color: "#004B8D",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      setMessage("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  const amountButtons = [100, 250, 500, 1000];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-gray-50 px-4 py-8 sm:px-6 sm:py-12 md:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004B8D]">
              Donate to Mahodara NGO
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600">
            Your generous donation helps us create real change in the community.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
          {/* Message Alert */}
          {message && (
            <div className={`p-4 sm:p-5 rounded-lg text-sm sm:text-base font-medium ${
              message.includes('Thank you') 
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleDonate} className="space-y-5 sm:space-y-6">
            {/* Name Input - Mobile Optimized */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B8D] focus:border-transparent transition-all duration-200 bg-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Phone Input - Mobile Optimized */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="10-digit phone number"
                className="w-full text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B8D] focus:border-transparent transition-all duration-200 bg-white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-3 sm:mb-4">
                Donation Amount <span className="text-red-500">*</span>
              </label>

              {/* Preset Amount Buttons - Mobile Optimized with Large Touch Targets */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4">
                {amountButtons.map((value) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => {
                      setAmount(value);
                      setCustomAmount("");
                    }}
                    className={`py-3 sm:py-4 px-3 sm:px-4 rounded-lg sm:rounded-xl border-2 font-bold text-base sm:text-lg transition-all duration-200 active:scale-95 ${
                      amount === value && !customAmount
                        ? "bg-[#004B8D] text-white border-[#004B8D] shadow-md"
                        : "bg-white text-gray-700 border-gray-200 hover:border-[#004B8D]"
                    }`}
                  >
                    ₹{value}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <label className="block text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-3">
                Or enter custom amount
              </label>
              <input
                type="number"
                placeholder="Enter custom amount"
                className="w-full text-base sm:text-lg px-4 sm:px-5 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004B8D] focus:border-transparent transition-all duration-200 bg-white"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>

            {/* Summary Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-200">
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <span className="text-sm sm:text-base text-gray-600">Total Donation:</span>
                <span className="text-2xl sm:text-3xl font-bold text-[#004B8D]">₹{finalAmount}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">Your contribution will directly help those in need.</p>
            </div>

            {/* Security Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 justify-center bg-gray-50 p-3 sm:p-4 rounded-lg">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span>Secure payment via Razorpay</span>
            </div>

            {/* Submit Button - Fixed at Bottom on Mobile */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#004B8D] hover:bg-[#003A68] text-white py-4 sm:py-5 px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Processing Payment...
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  Proceed to Payment
                </>
              )}
            </button>
          </form>

          {/* Trust Section */}
          <div className="pt-4 sm:pt-6 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-600 text-center">
              <span className="font-semibold">100% Secure</span> • Payments encrypted • No spam • Every donation counts
            </p>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#004B8D] mb-2">500+</div>
            <p className="text-xs sm:text-sm text-gray-600">Families Helped</p>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#004B8D] mb-2">10K+</div>
            <p className="text-xs sm:text-sm text-gray-600">Children Supported</p>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md text-center col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-[#004B8D] mb-2">50+</div>
            <p className="text-xs sm:text-sm text-gray-600">Active NGOs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;