import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';
import More from './pages/More';

// Solutions Categories
import SolarEnergy from './pages/solutions/SolarEnergy';
import WindEnergy from './pages/solutions/WindEnergy';
import EnergyStorage from './pages/solutions/EnergyStorage';
import EnergyEfficiency from './pages/solutions/EnergyEfficiency';
import SmartGrid from './pages/solutions/SmartGrid';

// More Categories
import TechTopics from './pages/more/TechTopics';
import BrochuresPage from './pages/more/Brochures';
import VideosPage from './pages/more/VideosPage';
import BlogPage from './pages/more/BlogPage';
import Newsletter from './pages/more/Newsletter';
import AskSineTamer from './pages/more/AskSineTamer';

// UPS Solutions
import RenewedUPS from './pages/solutions/RenewedUPS';
import XtremePowerUPS from './pages/solutions/XtremePowerUPS';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cozumler" element={<Solutions />} />
            <Route path="/urunler" element={<Products />} />
            <Route path="/urunler/:id" element={<ProductDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/daha-fazlasi" element={<More />} />

            {/* Solutions Categories */}
            <Route path="/cozumler/gunes-enerjisi" element={<SolarEnergy />} />
            <Route path="/cozumler/ruzgar-enerjisi" element={<WindEnergy />} />
            <Route path="/cozumler/enerji-depolama" element={<EnergyStorage />} />
            <Route path="/cozumler/enerji-verimliligi" element={<EnergyEfficiency />} />
            <Route path="/cozumler/akilli-sebeke" element={<SmartGrid />} />

            {/* More Categories */}
            <Route path="/cozumler/ups-cozumleri/gyenilenmis-ups-cozumleri" element={<RenewedUPS />} />
            <Route path="/cozumler/ups-cozumleri/xtreme-power-serisi" element={<XtremePowerUPS />} />
            <Route path="/daha-fazlasi/teknoloji-konulari" element={<TechTopics />} />
            <Route path="/daha-fazlasi/brosurler" element={<BrochuresPage />} />
            <Route path="/daha-fazlasi/videolar" element={<VideosPage />} />
            <Route path="/daha-fazlasi/blog" element={<BlogPage />} />
            <Route path="/daha-fazlasi/haber-bulteni" element={<Newsletter />} />
            <Route path="/daha-fazlasi/sinetamer-a-sorun" element={<AskSineTamer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
