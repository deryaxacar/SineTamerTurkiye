import { Link } from 'react-router-dom';
import './SolutionCategory.css';

const EnergyEfficiency = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
            ),
            title: 'Enerji Denetimi',
            description: 'Detaylı enerji tüketim analizi ve raporlama.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
            ),
            title: 'LED Dönüşümü',
            description: 'Aydınlatmada %80\'e varan tasarruf.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M3 9h18M9 21V9" />
                </svg>
            ),
            title: 'HVAC Optimizasyonu',
            description: 'Isıtma ve soğutma sistemleri verimliliği.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
            ),
            title: 'Akıllı Bina',
            description: 'Otomasyon sistemleri ile akıllı enerji yönetimi.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14,2 14,8 20,8" />
                    <path d="M16 13H8M16 17H8M10 9H8" />
                </svg>
            ),
            title: 'Enerji Sertifikası',
            description: 'Bina enerji kimlik belgesi hazırlama.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
            ),
            title: 'ROI Analizi',
            description: 'Yatırım geri dönüş hesaplama ve raporlama.'
        }
    ];

    const benefits = [
        { title: 'Maliyet Düşürme', description: 'Enerji faturalarında önemli tasarruf' },
        { title: 'Karbon Azaltma', description: 'Çevresel ayak izinizi küçültün' },
        { title: 'Yasal Uyum', description: 'Enerji verimliliği mevzuatına uygunluk' },
        { title: 'Rekabet Avantajı', description: 'Operasyonel maliyetleri düşürün' }
    ];

    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Enerji Verimliliği Danışmanlığı</h1>
                    <p>İşletmenizin enerji tüketimini analiz ediyor, tasarruf potansiyelinizi belirliyor ve uygulama desteği sunuyoruz.</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <span>Enerji Verimliliği</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="category-features">
                <div className="section-header">
                    <h2>Enerji Verimliliği Hizmetleri</h2>
                    <p>Kapsamlı analiz ve danışmanlık hizmetleri ile enerji maliyetlerinizi optimize edin.</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="category-benefits">
                <div className="benefits-container">
                    <div className="benefits-content">
                        <h2>Verimlilik Neden Önemli?</h2>
                        <div className="benefits-list">
                            {benefits.map((benefit, index) => (
                                <div className="benefit-item" key={index}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20,6 9,17 4,12" />
                                    </svg>
                                    <div>
                                        <h4>{benefit.title}</h4>
                                        <p>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="benefits-image">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800" alt="Enerji verimliliği danışmanlığı" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="category-stats">
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">300+</span>
                        <span className="stat-label">Denetlenen Tesis</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">%35</span>
                        <span className="stat-label">Ortalama Tasarruf</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">50M₺</span>
                        <span className="stat-label">Toplam Tasarruf</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">2 Yıl</span>
                        <span className="stat-label">Geri Dönüş Süresi</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="cta-container">
                    <h2>Ücretsiz Enerji Analizi</h2>
                    <p>İşletmenizin enerji tasarruf potansiyelini ücretsiz keşfedin.</p>

                </div>
            </section>
        </div>
    );
};

export default EnergyEfficiency;
