import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import BlogPage from './pages/more/BlogPage';
import BlogDetail from './pages/more/BlogDetail';
import ProductDetail from './pages/ProductDetail';

import More from './pages/More';

// More Categories
import TechTopics from './pages/more/TechTopics';
import BrochuresPage from './pages/more/Brochures';
import VideosPage from './pages/more/VideosPage';
import AskSineTamer from './pages/more/AskSineTamer';

// Solutions Categories
import PowerQualityAnalysis from './pages/solutions/solutions/PowerQualityAnalysis';
import PowerFactorCorrection from './pages/solutions/solutions/PowerFactorCorrection';
import TurnkeyTechSolutions from './pages/solutions/solutions/TurnkeyTechSolutions';
import ADFPowerSetting from './pages/solutions/solutions/ADFPowerSetting';

// SineTamer
import LALMUnits from './pages/solutions/sinetamer/LALMUnits';
import AdvantageUnits from './pages/solutions/sinetamer/AdvantageUnits';
import MediumVoltageUnits from './pages/solutions/sinetamer/MediumVoltageUnits';
import MVDetails from './pages/solutions/sinetamer/MVDetails';
import DataTelecomUnits from './pages/solutions/sinetamer/DataTelecomUnits';
import IndividualCircuitUnits from './pages/solutions/sinetamer/IndividualCircuitUnits';
import SurgeProtectionDevice from './pages/solutions/sinetamer/SurgeProtectionDevice';

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

            <Route path="/daha-fazlasi" element={<More />} />

            {/* Solutions Categories */}


            <Route path="/cozumler/solutions/guc-kalitesi-analizi" element={<PowerQualityAnalysis />} />
            <Route path="/cozumler/solutions/guc-faktoru-duzeltme" element={<PowerFactorCorrection />} />
            <Route path="/cozumler/solutions/anahtar-teslimi-teknoloji-cozumleri" element={<TurnkeyTechSolutions />} />
            <Route path="/cozumler/solutions/adf-guc-ayari" element={<ADFPowerSetting />} />
            {/* SineTamer */}
            <Route path="/cozumler/sinetamer/la-lm-uniteleri" element={<LALMUnits />} />
            <Route path="/cozumler/sinetamer/avantaj-uniteleri" element={<AdvantageUnits />} />
            <Route path="/cozumler/sinetamer/orta-gerilim-uniteleri" element={<MediumVoltageUnits />} />
            <Route path="/cozumler/sinetamer/mv-detaylari" element={<MVDetails />} />
            <Route path="/cozumler/sinetamer/veri-telekom-uniteleri" element={<DataTelecomUnits />} />
            <Route path="/cozumler/sinetamer/bireysel-devre-uniteleri" element={<IndividualCircuitUnits />} />
            <Route path="/cozumler/sinetamer/asiri-gerilim-koruma-cihazi" element={<SurgeProtectionDevice />} />
            {/* More Categories */}
            <Route path="/daha-fazlasi/teknoloji-konulari" element={<TechTopics />} />
            <Route path="/daha-fazlasi/brosurler" element={<BrochuresPage />} />
            <Route path="/daha-fazlasi/videolar" element={<VideosPage />} />
            <Route path="/daha-fazlasi/blog" element={<BlogPage />} />
            <Route path="/daha-fazlasi/sinetamer-a-sorun" element={<AskSineTamer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
