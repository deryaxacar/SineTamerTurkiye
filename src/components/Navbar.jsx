// Navbar.jsx
import { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sinetamer-logo.png';
import logo2 from '../assets/womner-logo.png';
import './css/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveMegaMenu(null);
    setActiveCategory(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar') && !e.target.closest('.mega-menu')) {
        setActiveMegaMenu(null);
        setActiveCategory(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const menuData = {
    solutions: {
      title: 'Çözümler',
      mainPath: '/cozumler',
      categories: [
        {
          id: 'ups',
          label: 'UPS Çözümleri',
          path: '/cozumler/ups-cozumleri',
          items: [
            { path: '/cozumler/ups-cozumleri/gyenilenmis-ups-cozumleri', label: 'Güvenilir Güç Koruması İçin Yenilenmiş UPS Sistemleri' },
            { path: '/cozumler/ups-cozumleri/xtreme-power-serisi', label: 'Xtreme Power Serisi UPS Üniteleri' },
            { path: '/cozumler/ups-cozumleri/eaton-powerware-ups', label: 'Eaton/Powerware UPS' },
            { path: '/cozumler/ups-cozumleri/yaygin-gucluk-sorunlari', label: 'Yaygın Güç Kalitesi Sorunları ve Yanlış Bilinenler' },
            { path: '/cozumler/ups-cozumleri/piller', label: 'Piller' },
            { path: '/cozumler/ups-cozumleri/pil-servis-departmani', label: 'UPS Pil Servis Departmanı' },
          ]
        },
        {
          id: 'storage',
          label: 'Çözümler',
          path: '/cozumler/enerji-depolama',
          items: [
            { path: '/cozumler/ups-cozumleri/pil-servis-departmani', label: 'UPS Pil Servis Departmanı' },
            { path: '/cozumler/solutions/guc-kalitesi-analizi', label: 'Güç Kalitesi Analizi' },
            { path: '/cozumler/solutions/guc-faktoru-duzeltme', label: 'Güç Faktörü Düzeltme' },
            { path: '/cozumler/solutions/anahtar-teslimi-teknoloji-cozumleri', label: 'Anahtar Teslimi Teknoloji Çözümleri' },
            { path: '/cozumler/solutions/adf-guc-ayari', label: 'ADF Güç Ayarı' },
          ]
        },
        {
          id: 'efficiency',
          label: 'SineTamer',
          path: '/cozumler/enerji-verimliligi',
          items: [
            { path: 'https://www.ecsintl.com/sinetamer-product-selector/', label: 'Sinetamer Ürün Seçici', external: true },
            { path: '/cozumler/sinetamer/la-lm-uniteleri', label: 'LA & LM Üniteleri' },
            { path: '/cozumler/sinetamer/avantaj-uniteleri', label: 'SineTamer Avantaj Üniteleri' },
            { path: '/cozumler/sinetamer/orta-gerilim-uniteleri', label: 'Orta Gerilim Üniteleri' },
            { path: '/cozumler/sinetamer/veri-telekom-uniteleri', label: 'Veri/Telekom Üniteleri' },
            { path: '/cozumler/enerji-verimliligi#optimizasyon', label: 'Bireysel Devre Üniteleri' },

            { path: '/cozumler/enerji-verimliligi#secenek-7', label: 'Kurulum Sayfaları' },
            { path: '/cozumler/enerji-verimliligi#secenek-8', label: 'Teknik Makaleler' },
            {
              path: '/daha-fazlasi/sinetamer-a-sorun', label: 'Sinetamer a sor'
            },
            { path: '/cozumler/enerji-verimliligi#secenek-10', label: 'Web semineri eğitimi' },
            { path: '/cozumler/enerji-verimliligi#secenek-11', label: 'Uluslararası Sinetamer Dağıtım Ortakları' },
            { path: '/cozumler/enerji-verimliligi#secenek-12', label: 'Sadece Distribütörler' },
            { path: 'https://www.ecsintl.com/hostpanel/login/webmail', label: 'Web Postası', external: true },
            { path: 'https://www.ecsintl.com/sinetamer-home/', label: 'Sinetamer Ana Sayfa', external: true },
            { path: '/cozumler/enerji-verimliligi#secenek-15', label: 'Sinetamer Müşterileri ' },
            { path: '/daha-fazlasi/teknoloji-konulari', label: 'Teknoloji Konuları' },
            { path: '/cozumler/enerji-verimliligi#secenek-17', label: 'Asansör Altyapınızı Korumak için Asansör Aşırı Gerilim Koruması' },
            { path: '/cozumler/enerji-verimliligi#secenek-18', label: 'Proje Meksika' },
          ]
        },
        {
          id: 'grid',
          label: 'Güç Kalitesi Ürünleri',
          path: '/cozumler/akilli-sebeke',
          items: [
            { path: '/cozumler/akilli-sebeke#entegrasyon', label: 'Aşırı Gerilim Koruması – ABD' },
            { path: '/cozumler/akilli-sebeke#izleme', label: 'Mirus Harmonik Azaltma ile Güç Kalitesini İyileştirin' },
            { path: '/cozumler/akilli-sebeke#izleme', label: 'Tesisinizin İhtiyaçlarına Göre Tasarlanmış Özel Yıldırımdan Korunma Sistemleri' },
            { path: '/cozumler/akilli-sebeke#izleme', label: 'Enerji Verimliliği' },
            { path: '/cozumler/akilli-sebeke#izleme', label: 'NexTek – Koaksiyel, TV, CCTV, Hücresel, Radyo Bastırma' },
          ]
        },
      ]
    },
    products: {
      title: 'Ürünler',
      mainPath: '/urunler',
      categories: [
        {
          id: 'panels',
          label: 'Güneş Panelleri',
          path: '/urunler?cat=solar',
          items: [
            { path: '/urunler/1', label: 'Monokristal Panel 400W' },
            { path: '/urunler/2', label: 'Polikristal Panel 330W' },
            { path: '/urunler/3', label: 'Bifacial Panel 450W' },
          ]
        },
        {
          id: 'inverters',
          label: 'İnverterler',
          path: '/urunler?cat=inverter',
          items: [
            { path: '/urunler/4', label: 'Hibrit İnverter 5kW' },
            { path: '/urunler/5', label: 'String İnverter 10kW' },
            { path: '/urunler/6', label: 'Mikro İnverter 300W' },
          ]
        },
        {
          id: 'batteries',
          label: 'Bataryalar',
          path: '/urunler?cat=battery',
          items: [
            { path: '/urunler/7', label: 'Lityum Batarya 10kWh' },
            { path: '/urunler/8', label: 'Ev Tipi Batarya 5kWh' },
          ]
        },
        {
          id: 'accessories',
          label: 'Aksesuarlar',
          path: '/urunler?cat=accessories',
          items: [
            { path: '/urunler/9', label: 'Montaj Sistemi' },
            { path: '/urunler/10', label: 'Solar Kablo' },
            { path: '/urunler/11', label: 'MC4 Konnektör' },
            { path: '/urunler/12', label: 'İzleme Sistemi' },
          ]
        },
      ]
    }
  };

  const moreDropdown = [
    {
      path: '/daha-fazlasi/sinetamer-a-sorun', label: 'SineTamer \'a sorun'
    },
    { path: '/daha-fazlasi/teknoloji-konulari', label: 'Teknoloji Konuları' },
    { path: '/daha-fazlasi/brosurler', label: 'Broşürler' },
    { path: '/daha-fazlasi/videolar', label: 'Videolar' },
    { path: '/daha-fazlasi/blog', label: 'Blog' },
    { path: 'https://www.ecsintl.com/newsletter/', label: 'Haber bülteni', external: true },
  ];

  const navLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/cozumler', label: 'Çözümler', megaMenu: 'solutions' },
    { path: '/urunler', label: 'Ürünler', megaMenu: 'products' },
    { path: '/daha-fazlasi', label: 'Daha Fazlası', dropdown: moreDropdown },
  ];

  const handleMegaMenuToggle = (menuId) => {
    if (activeMegaMenu === menuId) {
      setActiveMegaMenu(null);
      setActiveCategory(null);
    } else {
      setActiveMegaMenu(menuId);
      setActiveCategory(menuData[menuId]?.categories[0]?.id || null);
    }
  };

  const getCurrentMenuData = () => (activeMegaMenu ? menuData[activeMegaMenu] : null);

  const getCurrentCategoryItems = () => {
    const menu = getCurrentMenuData();
    if (!menu) return [];
    const cat = menu.categories.find(c => c.id === activeCategory);
    return cat ? cat.items : [];
  };

  const isSineTamerTriple =
    activeMegaMenu === 'solutions' && activeCategory === 'efficiency';

  // 3'e eşit böl (mümkün olduğunca)
  const splitTo3 = (arr) => {
    const total = arr.length;
    const base = Math.floor(total / 3);
    const rem = total % 3; // ilk rem kolona +1
    const sizes = [base + (rem > 0 ? 1 : 0), base + (rem > 1 ? 1 : 0), base];
    const a = arr.slice(0, sizes[0]);
    const b = arr.slice(sizes[0], sizes[0] + sizes[1]);
    const c = arr.slice(sizes[0] + sizes[1]);
    return [a, b, c];
  };

  const currentItems = useMemo(() => getCurrentCategoryItems(), [activeMegaMenu, activeCategory]);
  const [col1, col2, col3] = useMemo(() => splitTo3(currentItems), [currentItems]);

  const renderItemList = (items) => (
    <ul className="mega-item-list">
      {items.map((item, idx) => (
        <li key={idx}>
          {item.external ? (
            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="mega-item-link"
              onClick={() => setActiveMegaMenu(null)}
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={item.path}
              className={`mega-item-link ${location.pathname === item.path ||
                location.pathname.startsWith(item.path.split('?')[0])
                ? 'active'
                : ''
                }`}
              onClick={() => setActiveMegaMenu(null)}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logos">
            <Link to="/" className="navbar-logo">
              <img
                src={logo}
                alt="SineTamer"
                className="navbar-logo-image logo-sinetamer"
              />
            </Link>
          </div>

          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <div
                key={link.path}
                className={`navbar-item ${link.dropdown ? 'has-dropdown' : ''}`}
                onMouseEnter={() => link.dropdown && setActiveMegaMenu('dropdown-' + link.path)}
                onMouseLeave={() => link.dropdown && setActiveMegaMenu(null)}
              >
                {link.megaMenu ? (
                  <button
                    className={`navbar-link ${activeMegaMenu === link.megaMenu ? 'open' : ''}`}
                    onClick={() => handleMegaMenuToggle(link.megaMenu)}
                  >
                    {link.label}
                    <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9" />
                    </svg>
                  </button>
                ) : link.dropdown ? (
                  <>
                    <button
                      className={`navbar-link ${activeMegaMenu === 'dropdown-' + link.path ? 'open' : ''}`}
                      onClick={() => setActiveMegaMenu(activeMegaMenu === 'dropdown-' + link.path ? null : 'dropdown-' + link.path)}
                    >
                      {link.label}
                      <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6,9 12,15 18,9" />
                      </svg>
                    </button>
                    <div className={`simple-dropdown ${activeMegaMenu === 'dropdown-' + link.path ? 'active' : ''}`}>
                      {
                        link.dropdown.map((item) => (
                          item.external ? (
                            <a
                              key={item.path}
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="simple-dropdown-item"
                              onClick={() => { setActiveMegaMenu(null); setIsMobileMenuOpen(false); }}
                            >
                              {item.label}
                            </a>
                          ) : (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`simple-dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                              onClick={() => { setActiveMegaMenu(null); setIsMobileMenuOpen(false); }}
                            >
                              {item.label}
                            </Link>
                          )
                        ))
                      }
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav >

      {(activeMegaMenu === 'solutions' || activeMegaMenu === 'products') && (
        <>
          <div className="mega-menu active">
            <button
              className="mega-menu-close"
              onClick={() => { setActiveMegaMenu(null); setActiveCategory(null); }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              Kapat
            </button>

            <div className="mega-menu-inner">
              {/* Sol - Kategoriler */}
              <div className="mega-menu-left">
                <h4>{getCurrentMenuData()?.title}</h4>
                <ul className="mega-category-list">
                  {getCurrentMenuData()?.categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        className={`mega-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                        onMouseEnter={() => setActiveCategory(cat.id)}
                        onClick={() => setActiveCategory(cat.id)}
                      >
                        {cat.label}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9,6 15,12 9,18" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sağ - Alt Kısımlar */}
              {!isSineTamerTriple ? (
                <div className="mega-menu-right">
                  {renderItemList(currentItems)}
                </div>
              ) : (
                <div className="mega-menu-right mega-right-triple">
                  <div className="mega-col">{renderItemList(col1)}</div>
                  <div className="mega-right-divider" />
                  <div className="mega-col">{renderItemList(col2)}</div>
                  <div className="mega-right-divider" />
                  <div className="mega-col">{renderItemList(col3)}</div>
                </div>
              )}
            </div>
          </div>

          <div
            className="mega-overlay active"
            onClick={() => { setActiveMegaMenu(null); setActiveCategory(null); }}
          />
        </>
      )
      }
    </>
  );
};

export default Navbar;
