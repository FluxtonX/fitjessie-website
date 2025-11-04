import { useState } from 'react';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing:', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <footer className="bg-primary text-white">
      {/* Mailing List Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8">Join mailing list</h3>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-lg text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            
            <button
              type="submit"
              className="w-full bg-white text-primary hover:bg-neutral-100 font-semibold px-6 py-4 rounded-lg transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm">© 2024. All Rights Reserved.</p>
            
            <div className="flex space-x-6">
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Amazon */}
              <a
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.544.406-3.045.61-4.516.61-2.265 0-4.463-.486-6.588-1.456-2.12-.966-3.817-2.144-5.09-3.53-.107-.124-.166-.23-.166-.31zm23.61-3.018c-.152-.508-.61-.774-1.366-.8l-1.076-.008c-.705 0-1.18.195-1.423.585-.245.39-.168.854.23 1.392l.624.814c.388.51.54.973.464 1.388-.077.415-.416.76-1.017 1.036-1.01.456-2.17.684-3.482.684-1.31 0-2.62-.154-3.93-.461-1.314-.31-2.42-.716-3.323-1.22-.14-.078-.235-.126-.284-.146-.05-.02-.116-.035-.198-.046-.153-.022-.25.05-.294.217l-.082.355c-.06.242.004.43.193.565.93.644 2.028 1.146 3.295 1.51 1.27.36 2.5.544 3.693.544 1.402 0 2.68-.27 3.832-.812.766-.36 1.36-.798 1.78-1.313.423-.516.634-1.048.634-1.597 0-.51-.174-1.006-.523-1.488l-1.448-2.03c-.194-.27-.296-.523-.303-.76-.008-.235.09-.452.29-.647.203-.195.49-.292.864-.292h.732c.66 0 1.063.292 1.208.877.03.134.057.275.08.423.023.15.043.298.06.447.02.15.038.298.056.447.02.15.034.298.047.447.012.15.02.298.025.447.004.15.006.298.006.447 0 .15-.006.298-.02.447-.012.15-.03.298-.05.447-.023.15-.05.298-.08.447-.03.15-.066.298-.106.447z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;