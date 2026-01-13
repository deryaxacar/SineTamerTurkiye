import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Logo ve Açıklama */}
                    <div className="footer-section">
                        <Link to="/" className="footer-logo">
                            <div className="footer-logo-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span>Enerji Çözümleri</span>
                        </Link>
                        <p className="footer-description">
                            Sürdürülebilir enerji çözümleri ile geleceğe yatırım yapın.
                            Profesyonel ekibimiz ile enerji verimliliğinizi artırın.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Hızlı Linkler */}
                    <div className="footer-section">
                        <h3 className="footer-title">Hızlı Linkler</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Ana Sayfa</Link></li>
                            <li><Link to="/cozumler">Çözümler</Link></li>
                            <li><Link to="/urunler">Ürünler</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/iletisim">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Çözümlerimiz */}
                    <div className="footer-section">
                        <h3 className="footer-title">Çözümlerimiz</h3>
                        <ul className="footer-links">
                            <li><Link to="/cozumler">Güneş Enerjisi</Link></li>
                            <li><Link to="/cozumler">Rüzgar Enerjisi</Link></li>
                            <li><Link to="/cozumler">Enerji Depolama</Link></li>
                            <li><Link to="/cozumler">Akıllı Şebekeler</Link></li>
                            <li><Link to="/cozumler">Enerji Verimliliği</Link></li>
                        </ul>
                    </div>

                    {/* İletişim */}
                    <div className="footer-section">
                        <h3 className="footer-title">İletişim</h3>
                        <ul className="footer-contact">
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>Atatürk Cad. No:123<br />İstanbul, Türkiye</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                                <span>+90 (212) 123 45 67</span>
                            </li>
                            <li>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>info@enerjicozumleri.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Enerji Çözümleri. Tüm hakları saklıdır.</p>
                    <div className="footer-bottom-links">
                        <Link to="/daha-fazlasi">Gizlilik Politikası</Link>
                        <Link to="/daha-fazlasi">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
