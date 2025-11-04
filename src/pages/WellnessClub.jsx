import { useState } from 'react';

const WellnessClub = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });

  const [selectedPlan, setSelectedPlan] = useState('semi-annually');

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
      <div className="absolute top-0 left-0 w-24 h-24 grid grid-cols-6 gap-1.5 p-3 opacity-50">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
        ))}
      </div>

      {/* Decorative dots - bottom right */}
      <div className="absolute bottom-0 right-0 w-24 h-48 grid grid-cols-6 gap-1.5 p-3 opacity-50">
        {[...Array(72)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
        ))}
      </div>

      {/* Large circle decoration - behind woman */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-200 rounded-full opacity-30"></div>

      <div className="max-w-6xl mx-auto px-4 py-6 relative z-10">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xs font-bold text-gray-700 tracking-widest">
            FITJESSIE WELLNESS CLUB
          </h1>
        </div>

        {/* Woman Image - Centered at Top */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-96 h-80 relative">
              <img
                src="/firjessiedesign.png"
                alt="Fitness Woman"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex gap-6 items-start justify-center max-w-5xl mx-auto">
          {/* Sign Up Section */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-center mb-4">
              SIGN UP &<br />
              GET FOR FREE
            </h2>

            {/* Feature Icons */}
            <div className="flex justify-center gap-6 mb-4">
              <div className="text-center">
                <div className="w-7 h-7 mx-auto mb-1 flex items-center justify-center bg-gray-100 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth={2}/>
                    <path d="M16 3v4M8 3v4" strokeWidth={2} strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-xs font-bold">Unlimited</div>
                <div className="text-xs text-gray-500 leading-tight">
                  Free YouTube<br />Workouts
                </div>
              </div>
              <div className="text-center">
                <div className="w-7 h-7 mx-auto mb-1 flex items-center justify-center bg-gray-100 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-xs font-bold">7 Days</div>
                <div className="text-xs text-gray-500 leading-tight">
                  Workout<br />Activity Tracking
                </div>
              </div>
              <div className="text-center">
                <div className="w-7 h-7 mx-auto mb-1 flex items-center justify-center bg-gray-100 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs font-bold">5 Days</div>
                <div className="text-xs text-gray-500 leading-tight">
                  Full Access To<br />All Recipes
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-gray-600 mb-4 leading-tight">
              Enter Your Details Here To Sign Up.<br />
              Already Have An Account?{' '}
              <span className="font-bold text-gray-800 cursor-pointer underline">Log In</span>
            </p>

            {/* Form */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <input
                  type="email"
                  name="confirmEmail"
                  placeholder="Confirm Email"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <p className="text-xs text-gray-500">
                The Password Must Be At Least 6 Characters
              </p>

              <button
                onClick={handleSubmit}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm py-2.5 rounded transition-colors"
              >
                CREATE ACCOUNT
              </button>

              <p className="text-xs text-center text-gray-600 leading-tight">
                By Signing Up You Agree To Our{' '}
                <span className="font-bold text-gray-800 cursor-pointer underline">
                  Terms & Conditions
                </span>
              </p>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-center mb-4">
              SUBSCRIBE<br />
              FOR FULL ACCESS
            </h2>

            {/* Feature Icons */}
            <div className="flex justify-center gap-6 mb-4">
              <div className="text-center">
                <div className="w-7 h-7 mx-auto mb-1 flex items-center justify-center bg-gray-100 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth={2}/>
                  </svg>
                </div>
                <div className="text-xs font-bold">500+</div>
                <div className="text-xs text-gray-500 leading-tight">
                  Exclusive Real<br />Time Workouts
                </div>
              </div>
              <div className="text-center">
                <div className="w-7 h-7 mx-auto mb-1 flex items-center justify-center bg-gray-100 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div className="text-xs font-bold">20+</div>
                <div className="text-xs text-gray-500 leading-tight">
                  Programs<br />And Challenges
                </div>
              </div>
              <div className="text-center">
                <div className="w-7 h-7 mx-auto mb-1 flex items-center justify-center bg-gray-100 rounded">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-xs font-bold">Unlimited</div>
                <div className="text-xs text-gray-500 leading-tight">
                  Access To Recipes<br />And Tracking
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-gray-600 mb-4 leading-tight">
              Choose Your Plan. Automatically Renews<br />
              At The End Of Subscription Period. Cancel Anytime.
            </p>

            {/* Monthly Plan */}
            <div 
              onClick={() => setSelectedPlan('monthly')}
              className={`mb-3 p-3 rounded-lg bg-pink-50 cursor-pointer transition-all ${
                selectedPlan === 'monthly' 
                  ? 'border-2 border-teal-500 shadow-md' 
                  : 'border border-gray-300'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Monthly</div>
                  <div className="text-xl font-bold">
                    $29.99 <span className="text-xs text-gray-500 font-normal">/MONTH</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">$29.99 (not</div>
                  <div className="text-xs text-gray-500">billed monthly)</div>
                </div>
              </div>
            </div>

            {/* Semi-Annually Plan */}
            <div 
              onClick={() => setSelectedPlan('semi-annually')}
              className={`mb-3 p-3 bg-teal-100 rounded-lg relative cursor-pointer transition-all ${
                selectedPlan === 'semi-annually' 
                  ? 'border-2 border-teal-500 shadow-md' 
                  : 'border-2 border-teal-400'
              }`}
            >
              <div className="absolute -top-2 right-2 bg-teal-400 text-white text-xs font-bold px-2 py-0.5 rounded">
                MOST POPULAR 34% OFF
              </div>
              <div className="flex justify-between items-start mt-1">
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Semi-Annually</div>
                  <div className="text-xl font-bold">
                    $16.67 <span className="text-xs text-gray-500 font-normal">/MONTH</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">$100.00 (billed as one</div>
                  <div className="text-xs text-gray-500">$100 semi-annual)</div>
                </div>
              </div>
            </div>

            {/* Annually Plan */}
            <div 
              onClick={() => setSelectedPlan('annually')}
              className={`mb-3 p-3 bg-teal-100 rounded-lg relative cursor-pointer transition-all ${
                selectedPlan === 'annually' 
                  ? 'border-2 border-teal-500 shadow-md' 
                  : 'border-2 border-teal-400'
              }`}
            >
              <div className="absolute -top-2 right-2 bg-teal-400 text-white text-xs font-bold px-2 py-0.5 rounded">
                BEST VALUE 58% OFF
              </div>
              <div className="flex justify-between items-start mt-1">
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Annually</div>
                  <div className="text-xl font-bold">
                    $12.50 <span className="text-xs text-gray-500 font-normal">/MONTH</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">$150.00 (billed as one</div>
                  <div className="text-xs text-gray-500">$150 Annual)</div>
                </div>
              </div>
            </div>

            {/* Lifetime Plan */}
            <div 
              onClick={() => setSelectedPlan('lifetime')}
              className={`p-3 rounded-lg bg-pink-50 cursor-pointer transition-all ${
                selectedPlan === 'lifetime' 
                  ? 'border-2 border-teal-500 shadow-md' 
                  : 'border border-gray-300'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-gray-600 mb-0.5">Lifetime</div>
                  <div className="text-xl font-bold">$350.00</div>
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
  );
};

export default WellnessClub;