import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const SurgeProtectionDevice = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'Aşırı Gerilim Koruma Cihazı' },
    ];

    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
            title: 'Stres ve Zaman Tasarrufu',
            description: 'Üretim kesintilerinden kaynaklanan stres ve zaman kaybını azaltır'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Elektronik Koruma',
            description: 'Rastgele oluşan elektronik arızaların önüne geçer'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            title: 'VFD & PLC Koruması',
            description: 'VFD ve PLC kilitlenmelerini proaktif olarak engeller'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
            title: 'Kesintisiz Çalışma',
            description: 'Plansız duruşları minimize ederek operasyonel süreklilik sağlar'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            title: '%50 Maliyet Düşüşü',
            description: 'Elektronik bakım maliyetlerini %50\'ye varan oranlarda düşürür'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
            ),
            title: 'Teknik Dokümantasyon',
            description: 'Detaylı teknik makaleler ve ürün bilgileri'
        }
    ];

    const globalSites = [
        { name: 'sinetamer.com', url: 'https://www.sinetamer.com' },
        { name: 'sinetamer.lat', url: 'https://sinetamer.lat/' },
        { name: 'sinetamer.br.com', url: 'https://sinetamer.br.com/' },
        { name: 'ecsintl.com', url: 'https://www.ecsintl.com' },
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Aşırı Gerilim Koruma Cihazı"
                description=""
                backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Main Content Section */}
            <section className="spd-main-section">
                <div className="spd-container">

                    {/* Section Title */}
                    <div className="spd-header">
                        <h2>SineTamer Aşırı Gerilim Koruma Ürünleri</h2>
                        <p>4. Nesil teknolojiye sahip mikroişlemci tabanlı koruma sistemi</p>
                    </div>

                    {/* Features Grid */}
                    <div className="spd-features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="spd-feature-card">
                                <div className="spd-feature-icon">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Info Section */}
                    <div className="spd-bottom-info">
                        <div className="spd-bottom-badge">4. NESİL TEKNOLOJİ</div>
                        <h3>SINETAMER AŞIRI GERİLİM KORUMA CİHAZLARI</h3>
                        <p>
                            SINETAMER® ÇÖZÜMÜ, 4. NESİL TEKNOLOJİYE SAHİP BİR AŞIRI GERİLİM VE GEÇİCİ GERİLİM KORUMA
                            SİSTEMİNİN KULLANIMINI KAPSAMAKTADIR. DÜNYA ÇAPINDA ELEKTRİK PANOLARINDA BULUNAN TIPİK BİR
                            YILDIRIM KORUYUCUSUNDAN ÇOK DAHA FAZLASIYIZ. SINETAMER®, MİKROİŞLEMCİ TABANLI CİHAZLARIN
                            TÜM ÇEŞİTLERİNİN ULTRA HASSAS YAPISI İÇİN TASARLANMIŞ BİR MÜHENDİSLİK ÇÖZÜMÜDÜR.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="spd-quick-links">
                        <Link
                            to="https://www.ecsintl.com/technical-articles/"
                            target="_blank"
                            className="spd-link-card"
                        >
                            <div className="spd-link-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                            </div>
                            <div className="spd-link-text">
                                <h4>Teknik Makaleler</h4>
                                <p>Detaylı teknik bilgiler ve makaleler</p>
                            </div>
                            <svg className="spd-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>

                        <Link
                            to="/cozumler/sinetamer/la-rm-uniteleri"
                            className="spd-link-card"
                        >
                            <div className="spd-link-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                </svg>
                            </div>
                            <div className="spd-link-text">
                                <h4>Ürün Sayfaları</h4>
                                <p>Tüm SineTamer ürünlerini inceleyin</p>
                            </div>
                            <svg className="spd-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    {/* Resources Section */}
                    <div className="spd-resources-section">
                        <div className="spd-resources-header">
                            <h2>Sinetamer'a İhtiyacınız Var!</h2>
                            <Link
                                to="https://www.ecsintl.com/technical-articles/#el-440fe677"
                                target="_blank"
                                className="spd-articles-link"
                            >
                                Teknik Makalelerimizi İnceleyin →
                            </Link>
                        </div>

                        <div className="spd-global-sites">
                            <p className="spd-global-title">Global Sitelerimizi Ziyaret Edin</p>
                            <div className="spd-sites-grid">
                                {globalSites.map((site, index) => (
                                    <a
                                        key={index}
                                        href={site.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="spd-site-btn"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="2" y1="12" x2="22" y2="12" />
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        {site.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default SurgeProtectionDevice;
