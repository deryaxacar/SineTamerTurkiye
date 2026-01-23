import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';

import Product1 from './pages/products/Product1';
import Product2 from './pages/products/Product2';
import Product3 from './pages/products/Product3';

import More from './pages/More';

// More Categories
import TechTopics from './pages/more/TechTopics';
import BrochuresPage from './pages/more/Brochures';
import VideosPage from './pages/more/VideosPage';
import AskSineTamer from './pages/more/AskSineTamer';

// Services (Çözümler)
import PowerQualityAnalysis from './pages/solutions/services/PowerQualityAnalysis';
import PowerFactorCorrection from './pages/solutions/services/PowerFactorCorrection';
import TurnkeyTechSolutions from './pages/solutions/services/TurnkeyTechSolutions';
import ADFPowerSetting from './pages/solutions/services/ADFPowerSetting';

// SineTamer
import LALMUnits from './pages/solutions/sinetamer/LALMUnits';
import AdvantageUnits from './pages/solutions/sinetamer/AdvantageUnits';
import MediumVoltageUnits from './pages/solutions/sinetamer/MediumVoltageUnits';
import MVDetails from './pages/solutions/sinetamer/MVDetails';
import DataTelecomUnits from './pages/solutions/sinetamer/DataTelecomUnits';
import IndividualCircuitUnits from './pages/solutions/sinetamer/IndividualCircuitUnits';
import SurgeProtectionDevice from './pages/solutions/sinetamer/SurgeProtectionDevice';
import InstallationPages from './pages/solutions/sinetamer/InstallationPages';
import IndividualCircuitDataSheets from './pages/solutions/sinetamer/IndividualCircuitDataSheets';

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

            {/* Ürünler */}
            <Route path="/urunler/tek-faz" element={<Product1 />} />
            <Route path="/urunler/uc-faz" element={<Product2 />} />
            <Route path="/urunler/dc" element={<Product3 />} />
            {/* Services (Çözümler) */}
            <Route path="/cozumler/hizmetler/guc-kalitesi-analizi" element={<PowerQualityAnalysis />} />
            <Route path="/cozumler/hizmetler/guc-faktoru-duzeltme" element={<PowerFactorCorrection />} />
            <Route path="/cozumler/hizmetler/anahtar-teslimi-teknoloji-cozumleri" element={<TurnkeyTechSolutions />} />
            <Route path="/cozumler/hizmetler/adf-guc-ayari" element={<ADFPowerSetting />} />
            {/* SineTamer */}
            <Route path="/cozumler/sinetamer/la-lm-uniteleri" element={<LALMUnits />} />
            <Route path="/cozumler/sinetamer/avantaj-uniteleri" element={<AdvantageUnits />} />
            <Route path="/cozumler/sinetamer/orta-gerilim-uniteleri" element={<MediumVoltageUnits />} />
            <Route path="/cozumler/sinetamer/mv-detaylari" element={<MVDetails />} />
            <Route path="/cozumler/sinetamer/veri-telekom-uniteleri" element={<DataTelecomUnits />} />
            <Route path="/cozumler/sinetamer/bireysel-devre-uniteleri" element={<IndividualCircuitUnits />} />
            <Route path="/cozumler/sinetamer/bireysel-devre-veri-sayfalari" element={<IndividualCircuitDataSheets />} />
            <Route path="/cozumler/sinetamer/asiri-gerilim-koruma-cihazi" element={<SurgeProtectionDevice />} />
            <Route path="/cozumler/sinetamer/kurulum-sayfalari" element={<InstallationPages />} />
            {/* More Categories */}
            <Route path="/daha-fazlasi" element={<More />} />
            <Route path="/daha-fazlasi/teknoloji-konulari" element={<TechTopics />} />
            <Route path="/daha-fazlasi/brosurler" element={<BrochuresPage />} />
            <Route path="/daha-fazlasi/videolar" element={<VideosPage />} />
            <Route path="/daha-fazlasi/sinetamer-a-sorun" element={<AskSineTamer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
