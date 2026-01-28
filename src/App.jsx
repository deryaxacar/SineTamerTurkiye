import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';

// Lazy loading components
const Home = lazy(() => import('./pages/Home'));
const Solutions = lazy(() => import('./pages/Solutions'));
const More = lazy(() => import('./pages/More'));

// Products
const Product1 = lazy(() => import('./pages/products/Product1'));
const Product2 = lazy(() => import('./pages/products/Product2'));
const Product3 = lazy(() => import('./pages/products/Product3'));

// More Categories
const TechTopics = lazy(() => import('./pages/more/TechTopics'));
const BrochuresPage = lazy(() => import('./pages/more/Brochures'));
const VideosPage = lazy(() => import('./pages/more/VideosPage'));
const AskSineTamer = lazy(() => import('./pages/more/AskSineTamer'));
const BlogPage = lazy(() => import('./pages/more/BlogPage'));
const BlogDetail = lazy(() => import('./pages/more/BlogDetail'));

// Services (Çözümler)
const PowerQualityAnalysis = lazy(() => import('./pages/solutions/services/PowerQualityAnalysis'));
const PowerFactorCorrection = lazy(() => import('./pages/solutions/services/PowerFactorCorrection'));
const TurnkeyTechSolutions = lazy(() => import('./pages/solutions/services/TurnkeyTechSolutions'));
const ADFPowerSetting = lazy(() => import('./pages/solutions/services/ADFPowerSetting'));

// SineTamer
const LARMUnits = lazy(() => import('./pages/solutions/sinetamer/LARMUnits'));
const AdvantageUnits = lazy(() => import('./pages/solutions/sinetamer/AdvantageUnits'));
const MediumVoltageUnits = lazy(() => import('./pages/solutions/sinetamer/MediumVoltageUnits'));
const MVDetails = lazy(() => import('./pages/solutions/sinetamer/MVDetails'));
const DataTelecomUnits = lazy(() => import('./pages/solutions/sinetamer/DataTelecomUnits'));
const IndividualCircuitUnits = lazy(() => import('./pages/solutions/sinetamer/IndividualCircuitUnits'));
const SurgeProtectionDevice = lazy(() => import('./pages/solutions/sinetamer/SurgeProtectionDevice'));
const InstallationPages = lazy(() => import('./pages/solutions/sinetamer/InstallationPages'));
const IndividualCircuitDataSheets = lazy(() => import('./pages/solutions/sinetamer/IndividualCircuitDataSheets'));
const SineTamerCustomers = lazy(() => import('./pages/solutions/sinetamer/SineTamerCustomers'));
const ElevatorSurgeProtection = lazy(() => import('./pages/solutions/sinetamer/ElevatorSurgeProtection'));
const TechnicalArticles = lazy(() => import('./pages/solutions/sinetamer/TechnicalArticles'));

import './App.css';

// Loading fallback component
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-spinner"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Statik render için render-event fırlatılması
    // Bu, prerenderer'ın sayfa tam yüklendiğinde snapshot almasını sağlar
    document.dispatchEvent(new Event('render-event'));
  }, []);

  return (
    <Router>
      <ScrollToHash />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/cozumler/sinetamer/la-rm-uniteleri" element={<LARMUnits />} />
              <Route path="/cozumler/sinetamer/avantaj-uniteleri" element={<AdvantageUnits />} />
              <Route path="/cozumler/sinetamer/orta-gerilim-uniteleri" element={<MediumVoltageUnits />} />
              <Route path="/cozumler/sinetamer/mv-detaylari" element={<MVDetails />} />
              <Route path="/cozumler/sinetamer/veri-telekom-uniteleri" element={<DataTelecomUnits />} />
              <Route path="/cozumler/sinetamer/bireysel-devre-uniteleri" element={<IndividualCircuitUnits />} />
              <Route path="/cozumler/sinetamer/bireysel-devre-veri-sayfalari" element={<IndividualCircuitDataSheets />} />
              <Route path="/cozumler/sinetamer/asiri-gerilim-koruma-cihazi" element={<SurgeProtectionDevice />} />
              <Route path="/cozumler/sinetamer/kurulum-sayfalari" element={<InstallationPages />} />
              <Route path="/cozumler/sinetamer/musteriler" element={<SineTamerCustomers />} />
              <Route path="/cozumler/sinetamer/asansor-korumasi" element={<ElevatorSurgeProtection />} />
              <Route path="/cozumler/teknik-makaleler" element={<TechnicalArticles />} />

              {/* More Categories */}
              <Route path="/daha-fazlasi" element={<More />} />
              <Route path="/daha-fazlasi/teknoloji-konulari" element={<TechTopics />} />
              <Route path="/daha-fazlasi/brosurler" element={<BrochuresPage />} />
              <Route path="/daha-fazlasi/videolar" element={<VideosPage />} />
              <Route path="/daha-fazlasi/sinetamer-a-sorun" element={<AskSineTamer />} />
              <Route path="/daha-fazlasi/blog" element={<BlogPage />} />
              <Route path="/daha-fazlasi/blog/:id" element={<BlogDetail />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
