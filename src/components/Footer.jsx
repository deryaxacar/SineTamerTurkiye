import { Link } from 'react-router-dom';
import logo from '../assets/sinetamer-logo.png';
import logo2 from '../assets/womner-logo.png';
import logo3 from '../assets/ESC-logo.png';

import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Logo */}
                    <div className="footer-section">
                        <div className="footer-logo-group">
                            <a
                                href="https://www.womner.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Wömner Web Sitesi"
                            >
                                <img
                                    src={logo2}
                                    alt="Wömner"
                                    className="footer-logo-image footer-logo-womner"
                                />
                            </a>

                            <a
                                href="https://www.sinetamer.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="SineTamer Web Sitesi"
                            >
                                <img
                                    src={logo}
                                    alt="SineTamer"
                                    className="footer-logo-image footer-logo-sinetamer"
                                />
                            </a>
                        </div>
                    </div>

                    {/* İletişim */}
                    <div className="footer-section">
                        <h3 className="footer-title">Türkiye Ofis :</h3>
                        <ul className="footer-contact">
                            <li>
                                <span><p>Wömner Güç Kalitesi Çözümleri</p></span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>Sanayi Mah. Teknopark Bulvarı No:1/9A
                                    34906 Pendik / İstanbul, Türkiye</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                <span>+90 (216) 999 00 18</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>info@womner.com</span>
                            </li>
                        </ul>
                    </div>
                    {/* İletişim */}
                    <div className="footer-section">
                        <h3 className="footer-title">ABD Merkez :</h3>
                        <ul className="footer-contact">
                            <li>
                                <span><p>ECS – Energy Control Systems</p></span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>ECS – Energy Control Systems 5500 E Loop 820 S #205 Fort Worth, TX 76119</span>
                            </li>
                            <a
                                href="https://www.ecsintl.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ECS – Energy Control Systems"
                            >
                                <img
                                    src={logo3}
                                    alt="ECS"
                                    className="footer-logo-ecs"
                                />
                            </a>

                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Hızlı Linkler</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Ana Sayfa</Link></li>
                            <li><span>Çözümler</span></li>
                            <li><Link to="/urunler">Ürünler</Link></li>
                            <li><Link to="/daha-fazlasi/blog">Blog</Link></li>
                            <li><Link to="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Womner. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
