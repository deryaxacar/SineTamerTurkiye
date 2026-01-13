import { Link } from 'react-router-dom';
import './SolutionCategory.css';

const WindEnergy = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
                </svg>
            ),
            title: 'Yüksek Kapasite',
            description: '100kW\'dan MW seviyesine kadar türbin seçenekleri.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                </svg>
            ),
            title: '7/24 Üretim',
            description: 'Gece gündüz kesintisiz enerji üretimi.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                </svg>
            ),
            title: 'Profesyonel Kurulum',
            description: 'Deneyimli ekibimizle anahtar teslim projeler.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: '20 Yıl Garanti',
            description: 'Türbin sistemleri için uzun süreli garanti.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M3 9h18M9 21V9" />
                </svg>
            ),
            title: 'Hibrit Sistemler',
            description: 'Güneş enerjisi ile entegre çözümler.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
            ),
            title: 'Arazi Analizi',
            description: 'Detaylı rüzgar potansiyeli analizi ve fizibilite.'
        }
    ];

    const benefits = [
        { title: 'Yüksek Üretim Kapasitesi', description: 'Büyük ölçekli enerji ihtiyaçları için ideal' },
        { title: 'Düşük İşletme Maliyeti', description: 'Minimal bakım gereksinimi' },
        { title: 'Arazi Kullanımı', description: 'Tarım arazileriyle uyumlu kullanım' },
        { title: 'Karbon Sıfır', description: 'Sıfır emisyonlu enerji üretimi' }
    ];

    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Rüzgar Enerjisi Sistemleri</h1>
                    <p>Rüzgarın gücünü kullanarak sürdürülebilir enerji üretin. Küçük ölçekli türbinlerden endüstriyel santrallere kadar çözümler.</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link to="/cozumler">Çözümler</Link>
                        <span>/</span>
                        <span>Rüzgar Enerjisi</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="category-features">
                <div className="section-header">
                    <h2>Rüzgar Enerjisi Avantajları</h2>
                    <p>Modern rüzgar türbinleri ile yüksek verimli ve güvenilir enerji üretimi.</p>
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
                        <h2>Rüzgar Enerjisinin Gücü</h2>
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
                        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800" alt="Rüzgar türbinleri" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="category-stats">
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">50+</span>
                        <span className="stat-label">Türbin Kurulumu</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">25MW</span>
                        <span className="stat-label">Toplam Kapasite</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">%95</span>
                        <span className="stat-label">Çalışma Süresi</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">20 Yıl</span>
                        <span className="stat-label">Sistem Ömrü</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="cta-container">
                    <h2>Rüzgar Potansiyelinizi Keşfedin</h2>
                    <p>Arazinizin rüzgar potansiyelini analiz edelim ve size özel çözüm sunalım.</p>
                    <Link to="/iletisim" className="btn btn-white">
                        Ücretsiz Analiz İsteyin
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WindEnergy;
