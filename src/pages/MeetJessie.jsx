const MeetJessie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-4 font-display">
            Meet Jessie: Your Guide to Real-Life Wellness
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-neutral-700 leading-relaxed text-lg">
            <p className="text-secondary font-semibold">
              Hi, I'm Jessie—founder of FitJessie, NASM-certified personal trainer, and a passionate 
              advocate for movement, wellness, and self-confidence.
            </p>
            
            <p>
              My journey began with a deep love for dance and a belief that fitness should be joyful, 
              accessible, and empowering. I hold an MFA in Dance from the University of Iowa and a 
              200-hour Hatha Yoga Teacher Certificate from James Miller Yoga, blending science-backed 
              training with creative movement and mindfulness.
            </p>
            
            <p>
              I know what it's like to juggle a busy life, family, and work, all while wanting to feel 
              strong, healthy, and at home in your body. That's why I created FitJessie—to help real 
              people find real results, no matter their starting point.
            </p>
            
            <p>
              Through my programs, you'll find a mix of dance fitness, yoga, strength training, and 
              practical nutrition, all designed to help you move better, feel better, and live better.
            </p>
            
            <p className="font-semibold text-primary">
              My mission is to make wellness simple, fun, and sustainable—so you can glow from the 
              inside out. Whether you're a total beginner or looking to take your routine to the next 
              level, I'm here to support you every step of the way.
            </p>
            
            <p className="text-xl font-bold text-secondary">
              Ready to join the journey? Let's move, breathe, and thrive—together.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                {/* Placeholder for Jessie's image */}
               <img src="/meet.jpeg" alt="" className="w-full h-full object-cover"/>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetJessie;