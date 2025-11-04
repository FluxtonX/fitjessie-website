const Hero = () => {
  return (
    <div className="relative min-h-[600px] bg-gradient-to-br from-neutral-50 to-white overflow-hidden">
      {/* Decorative Wave Pattern - Left */}
      <div className="absolute left-0 top-0 bottom-0 w-32 opacity-30">
        <svg viewBox="0 0 100 1000" className="h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="wave-left" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#00E5CC" />
            </pattern>
          </defs>
          <rect width="100" height="1000" fill="url(#wave-left)" />
          <path d="M 0,500 Q 50,400 0,300 Q 50,200 0,100 L 0,1000 L 100,1000 Q 50,900 100,800 Q 50,700 100,600 Q 50,500 100,400 Z" 
                fill="#00E5CC" opacity="0.1"/>
        </svg>
      </div>

      {/* Decorative Wave Pattern - Right */}
      <div className="absolute right-0 top-0 bottom-0 w-32 opacity-30">
        <svg viewBox="0 0 100 1000" className="h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="wave-right" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#00E5CC" />
            </pattern>
          </defs>
          <rect width="100" height="1000" fill="url(#wave-right)" />
          <path d="M 100,500 Q 50,400 100,300 Q 50,200 100,100 L 100,1000 L 0,1000 Q 50,900 0,800 Q 50,700 0,600 Q 50,500 0,400 Z" 
                fill="#00E5CC" opacity="0.1"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-neutral-800">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
               src="https://www.youtube.com/embed/a8EBj8ncqDg?si=L_FdKuf1NQSL_2kk"
                title="Welcome to Fitjessie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Overlay Title */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <h2 className="text-lg font-semibold text-neutral-800">Welcome to Fitjessie</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;