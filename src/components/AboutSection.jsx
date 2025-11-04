import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-20 w-48 h-48 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="dots-left">
              <stop offset="0%" stopColor="#00E5CC" />
              <stop offset="100%" stopColor="#00E5CC" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 200}
              cy={Math.random() * 200}
              r="2"
              fill="url(#dots-left)"
            />
          ))}
        </svg>
      </div>

      <div className="absolute right-0 bottom-20 w-48 h-48 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="dots-right">
              <stop offset="0%" stopColor="#00E5CC" />
              <stop offset="100%" stopColor="#00E5CC" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[...Array(50)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 200}
              cy={Math.random() * 200}
              r="2"
              fill="url(#dots-right)"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-8 font-display">
          UNLEASH YOUR POTENTIAL
        </h1>
        
        <p className="text-lg sm:text-xl text-neutral-600 max-w-4xl mx-auto mb-10 leading-relaxed">
          At FitJessie, we believe that fitness should be accessible, fun, and empowering. 
          Whether you're looking to build strength, increase flexibility, dance your heart out, 
          or find relaxation, you'll find it here.
        </p>

        <Link
          to="/meet-jessie"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;