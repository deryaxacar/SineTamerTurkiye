import { Link } from 'react-router-dom';
import './SolutionCategory.css';

const SmartGrid = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
            title: 'Akıllı Sayaçlar',
            description: 'Anlık tüketim takibi ve uzaktan okuma.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                    <path d="M12 22.08V12" />
                </svg>
            ),
            title: 'Grid-Tie Inverter',
            description: 'Şebeke ile senkronize enerji yönetimi.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
            ),
            title: 'Demand Response',
            description: 'Yük yönetimi ve talep optimizasyonu.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <path d="M8 21h8M12 17v4" />
                </svg>
            ),
            title: 'SCADA Sistemleri',
            description: 'Merkezi izleme ve kontrol platformu.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            ),
            title: 'Enerji Analitik',
            description: 'Yapay zeka destekli tahmin ve optimizasyon.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Siber Güvenlik',
            description: 'Enerji altyapısı için güvenlik çözümleri.'
        }
    ];

    const benefits = [
        { title: 'Gerçek Zamanlı İzleme', description: 'Anlık enerji akışı takibi' },
        { title: 'Otomatik Optimizasyon', description: 'AI destekli verimlilik artışı' },
        { title: 'Entegre Yönetim', description: 'Tüm enerji kaynaklarını tek platformda' },
        { title: 'Arıza Önleme', description: 'Prediktif bakım ile kesinti azaltma' }
    ];

    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Akıllı Şebeke Çözümleri</h1>
                    <p>Enerji üretim ve tüketiminizi optimize eden akıllı şebeke sistemleri ile verimliliğinizi artırın.</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <span>Akıllı Şebeke</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="category-features">
                <div className="section-header">
                    <h2>Akıllı Şebeke Teknolojileri</h2>
                    <p>Dijital dönüşüm ile enerji yönetiminizi geleceğe taşıyın.</p>
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
                        <h2>Akıllı Şebekenin Avantajları</h2>
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
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" alt="Akıllı şebeke sistemleri" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="category-stats">
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">100+</span>
                        <span className="stat-label">Entegrasyon Projesi</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">%20</span>
                        <span className="stat-label">Verimlilik Artışı</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">%99.9</span>
                        <span className="stat-label">Sistem Güvenilirliği</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">7/24</span>
                        <span className="stat-label">İzleme Desteği</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="cta-container">
                    <h2>Şebekenizi Akıllandırın</h2>
                    <p>Enerji altyapınızı dijital dönüşümle yenileyin.</p>

                </div>
            </section>
        </div>
    );
};

export default SmartGrid;
