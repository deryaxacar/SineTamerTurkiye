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
          id: 'storage',
          label: 'Çözümler',
          path: '/cozumler/enerji-depolama',
          items: [
            { path: '/cozumler/hizmetler/guc-kalitesi-analizi', label: 'Güç Kalitesi Analizi' },
            { path: '/cozumler/hizmetler/guc-faktoru-duzeltme', label: 'Güç Faktörü Düzeltme' },
            { path: '/cozumler/hizmetler/anahtar-teslimi-teknoloji-cozumleri', label: 'Anahtar Teslimi Teknoloji Çözümleri' },
            { path: '/cozumler/hizmetler/adf-guc-ayari', label: 'ADF Güç Ayarı' },
          ]
        },
        {
          id: 'efficiency',
          label: 'SineTamer',
          path: '/cozumler/enerji-verimliligi',
          items: [
            { path: 'https://www.ecsintl.com/sinetamer-product-selector/', label: 'Sinetamer Ürün Seçici', external: true },
            { path: '/cozumler/sinetamer/la-rm-uniteleri', label: 'LA & RM Üniteleri' },
            { path: '/cozumler/sinetamer/avantaj-uniteleri', label: 'SineTamer Avantaj Üniteleri' },
            { path: '/cozumler/sinetamer/orta-gerilim-uniteleri', label: 'Orta Gerilim Üniteleri' },
            { path: '/cozumler/sinetamer/veri-telekom-uniteleri', label: 'Veri/Telekom Üniteleri' },
            { path: '/cozumler/sinetamer/bireysel-devre-uniteleri', label: 'Bireysel Devre Üniteleri' },
            { path: '/cozumler/sinetamer/kurulum-sayfalari', label: 'Kurulum Sayfaları' },

            { path: 'https://www.ecsintl.com/technical-articles/#el-ba9f3153', label: 'Teknik Makaleler', external: true },
            { path: 'https://www.ecsintl.com/hostpanel/login/webmail', label: 'Web Postası', external: true },
            { path: 'https://www.ecsintl.com/sinetamer-home/', label: 'Sinetamer Global', external: true },
            { path: '/cozumler/sinetamer/musteriler', label: 'SineTamer Müşterileri' },
            { path: '/daha-fazlasi/teknoloji-konulari', label: 'Teknoloji Konuları' },
            { path: '/cozumler/sinetamer/asansor-korumasi', label: 'Asansör Aşırı Gerilim Koruması' },

          ]
        },
      ]
    },
    products: {
      title: 'Ürünler',
      mainPath: '/urunler',
      categories: [
        {
          id: 'sinetamer-products',
          label: 'SineTamer Ürünleri',
          path: '/urunler',
          items: [
            { path: '/urunler/tek-faz', label: 'SineTamer Tek Faz' },
            { path: '/urunler/uc-faz', label: 'SineTamer AC Üç Faz' },
            { path: '/urunler/dc', label: 'SineTamer DC' },
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

  const productsDropdown = [
    { path: '/urunler/tek-faz', label: 'SineTamer Tek Faz' },
    { path: '/urunler/uc-faz', label: 'SineTamer AC Üç Faz' },
    { path: '/urunler/dc', label: 'SineTamer DC' },
  ];

  const navLinks = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/cozumler', label: 'Çözümler', megaMenu: 'solutions' },
    { path: '/urunler', label: 'Ürünler', dropdown: productsDropdown },
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
    const rem = total % 3;

    // Eğer 13 öğe varsa orta kolonu 5 yap (4-5-4), aksi takdirde standart bölme
    let sizes;
    if (total === 13) {
      sizes = [5, 5, 3];
    } else {
      sizes = [base + (rem > 0 ? 1 : 0), base + (rem > 1 ? 1 : 0), base];
    }

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

      {activeMegaMenu === 'solutions' && (
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
