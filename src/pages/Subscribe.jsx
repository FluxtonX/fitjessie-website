import { useState } from 'react';

const FitJessieSubscription = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-50 to-cyan-100 relative overflow-hidden">
      {/* Decorative dots - top left */}
      <div className="absolute top-0 left-0 w-32 h-32 grid grid-cols-8 gap-1 p-4 opacity-40">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-teal-400 rounded-full"></div>
        ))}
      </div>

      {/* Decorative dots - bottom right */}
      <div className="absolute bottom-0 right-0 w-32 h-64 grid grid-cols-8 gap-1 p-4 opacity-40">
        {[...Array(128)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-teal-400 rounded-full"></div>
        ))}
      </div>

      {/* Large circle decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200 rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-sm font-semibold text-gray-700 tracking-wider">FITJESSIE WELLNESS CLUB</h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Sign Up & Get Free */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">SIGN UP &<br/>GET FOR FREE</h2>
            
            {/* Feature Icons */}
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs font-semibold">Unlimited</div>
                <div className="text-xs text-gray-500">Free YouTube<br/>Workouts</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="text-xs font-semibold">7 Days</div>
                <div className="text-xs text-gray-500">Workout<br/>Activity Tracking</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs font-semibold">5 Days</div>
                <div className="text-xs text-gray-500">Full Access To<br/>All Recipes</div>
              </div>
            </div>

            <p className="text-center text-xs text-gray-600 mb-6">
              Enter Your Details Here To Sign Up.<br/>
              Already Have An Account? <span className="font-semibold text-teal-600 cursor-pointer">Log In</span>
            </p>

            {/* Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="email"
                  name="confirmEmail"
                  placeholder="Confirm Email"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <p className="text-xs text-gray-500">The Password Must Be At Least 6 Characters</p>

              <button
                onClick={handleSubmit}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md transition-colors"
              >
                CREATE ACCOUNT
              </button>

              <p className="text-xs text-center text-gray-600">
                By Signing Up You Agree To Our <span className="font-semibold text-teal-600 cursor-pointer">Terms & Conditions</span>
              </p>
            </div>
          </div>

          {/* Right Column - Subscribe for Full Access */}
          <div className="space-y-6">
            {/* Woman Image */}
            <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-200 rounded-full opacity-30"></div>
              <div className="relative flex justify-center items-center h-64">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                  <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Subscription Plans */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6">SUBSCRIBE<br/>FOR FULL ACCESS</h2>
              
              {/* Feature Icons */}
              <div className="flex justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold">500+</div>
                  <div className="text-xs text-gray-500">Exclusive Real<br/>Time Workouts</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold">20+</div>
                  <div className="text-xs text-gray-500">Programs<br/>And Challenges</div>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold">Unlimited</div>
                  <div className="text-xs text-gray-500">Access To Recipes<br/>And Tracking</div>
                </div>
              </div>

              <p className="text-center text-xs text-gray-600 mb-6">
                Choose Your Plan. Automatically Renews<br/>
                At The End Of Subscription Period. Cancel Anytime.
              </p>

              {/* Monthly Plan */}
              <div className="mb-4 p-4 border-2 border-gray-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Monthly</div>
                    <div className="text-2xl font-bold">$29.99 <span className="text-sm text-gray-500">/MONTH</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">$29.99 (not</div>
                    <div className="text-xs text-gray-500">billed monthly)</div>
                  </div>
                </div>
              </div>

              {/* Semi-Annually Plan */}
              <div className="mb-4 p-4 bg-teal-50 border-2 border-teal-400 rounded-lg relative">
                <div className="absolute top-2 right-2 bg-teal-400 text-white text-xs px-2 py-1 rounded">
                  MOST POPULAR 34% OFF
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Semi-Annually</div>
                    <div className="text-2xl font-bold">$16.67 <span className="text-sm text-gray-500">/MONTH</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">$100.00 (billed as one</div>
                    <div className="text-xs text-gray-500">$100 semi-annual)</div>
                  </div>
                </div>
              </div>

              {/* Annually Plan */}
              <div className="mb-4 p-4 bg-teal-50 border-2 border-teal-400 rounded-lg relative">
                <div className="absolute top-2 right-2 bg-teal-400 text-white text-xs px-2 py-1 rounded">
                  BEST VALUE 58% OFF
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Annually</div>
                    <div className="text-2xl font-bold">$12.50 <span className="text-sm text-gray-500">/MONTH</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">$150.00 (billed as one</div>
                    <div className="text-xs text-gray-500">$150 Annual)</div>
                  </div>
                </div>
              </div>

              {/* Lifetime Plan */}
              <div className="p-4 border-2 border-gray-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Lifetime</div>
                    <div className="text-2xl font-bold">$350.00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">$350.00 (not</div>
                    <div className="text-xs text-gray-500">Billed Once)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitJessieSubscription;