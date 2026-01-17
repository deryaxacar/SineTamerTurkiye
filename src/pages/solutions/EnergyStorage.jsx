import { Link } from 'react-router-dom';
import './SolutionCategory.css';

const EnergyStorage = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="6" width="18" height="12" rx="2" />
                    <path d="M23 13v-2" />
                </svg>
            ),
            title: 'Lityum-İyon Teknolojisi',
            description: 'En son nesil batarya sistemleri ile yüksek verimlilik.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
            title: 'Anlık Güç Yedekleme',
            description: 'Şebeke kesintilerinde kesintisiz enerji.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            ),
            title: 'Uzun Ömür',
            description: '10-15 yıl batarya ömrü garantisi.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <path d="M8 21h8M12 17v4" />
                </svg>
            ),
            title: 'Akıllı Yönetim',
            description: 'Mobil uygulama ile uzaktan izleme ve kontrol.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
            ),
            title: 'Pik Tıraşlama',
            description: 'Yüksek fiyatlı saatlerde şebeke kullanımını azaltın.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
            ),
            title: 'Modüler Tasarım',
            description: 'İhtiyaca göre genişletilebilir kapasite.'
        }
    ];

    const benefits = [
        { title: 'Enerji Güvenliği', description: 'Kesintisiz güç kaynağı' },
        { title: 'Maliyet Optimizasyonu', description: 'Düşük tarifeli saatlerde şarj' },
        { title: 'Yeşil Enerji Depolama', description: 'Güneş/rüzgar enerjisini saklayın' },
        { title: 'Kompakt Tasarım', description: 'Az yer kaplayan sistemler' }
    ];

    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Enerji Depolama Sistemleri</h1>
                    <p>Ürettiğiniz enerjiyi modern batarya sistemleri ile depolayın ve ihtiyaç duyduğunuzda kullanın.</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <span>Enerji Depolama</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="category-features">
                <div className="section-header">
                    <h2>Enerji Depolama Özellikleri</h2>
                    <p>Tesla Powerwall, BYD ve diğer lider markalardan batarya çözümleri.</p>
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
                        <h2>Neden Enerji Depolama?</h2>
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
                        <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=800" alt="Enerji depolama sistemleri" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="category-stats">
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">200+</span>
                        <span className="stat-label">Sistem Kurulumu</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">5MWh</span>
                        <span className="stat-label">Depolama Kapasitesi</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">%99</span>
                        <span className="stat-label">Çalışma Güvenilirliği</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">15 Yıl</span>
                        <span className="stat-label">Batarya Ömrü</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="cta-container">
                    <h2>Enerji Bağımsızlığınız İçin İlk Adım</h2>
                    <p>Size en uygun enerji depolama çözümünü birlikte belirleyelim.</p>

                </div>
            </section>
        </div>
    );
};

export default EnergyStorage;
