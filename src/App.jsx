import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import BlogPage from './pages/more/BlogPage';
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
import Newsletter from './pages/more/Newsletter';
import AskSineTamer from './pages/more/AskSineTamer';

// UPS Solutions
import RenewedUPS from './pages/solutions/RenewedUPS';
import XtremePowerUPS from './pages/solutions/XtremePowerUPS';
import EatonPowerwareUPS from './pages/solutions/EatonPowerwareUPS';
import Eaton3Series from './pages/solutions/Eaton3Series';
import Eaton5Series from './pages/solutions/Eaton5Series';
import Eaton9Series from './pages/solutions/Eaton9Series';
import PowerQualityProblems from './pages/solutions/PowerQualityProblems';
import Batteries from './pages/solutions/Batteries';
import BatteryService from './pages/solutions/BatteryService';
import PowerQualityAnalysis from './pages/solutions/PowerQualityAnalysis';

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
            <Route path="/blog" element={<BlogPage />} />
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
            <Route path="/cozumler/ups-cozumleri/eaton-powerware-ups" element={<EatonPowerwareUPS />} />
            <Route path="/cozumler/ups-cozumleri/eaton-powerware/3-serisi" element={<Eaton3Series />} />
            <Route path="/cozumler/ups-cozumleri/eaton-powerware/5-serisi" element={<Eaton5Series />} />
            <Route path="/cozumler/ups-cozumleri/eaton-powerware/9-serisi" element={<Eaton9Series />} />
            <Route path="/cozumler/ups-cozumleri/yaygin-gucluk-sorunlari" element={<PowerQualityProblems />} />
            <Route path="/cozumler/ups-cozumleri/piller" element={<Batteries />} />
            <Route path="/cozumler/ups-cozumleri/pil-servis-departmani" element={<BatteryService />} />
            <Route path="/cozumler/ups-cozumleri/guc-kalitesi-analizi" element={<PowerQualityAnalysis />} />
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
