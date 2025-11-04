import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MeetJessie from './pages/MeetJessie';
import Services from './pages/Services';
import Shop from './pages/Shop';
import WellnessClub from './pages/WellnessClub';
import Subscribe from './pages/Subscribe';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (<>
    <ScrollToTop />
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meet-jessie" element={<MeetJessie />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wellness-club" element={<WellnessClub />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;