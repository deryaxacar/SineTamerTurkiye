import { Link } from 'react-router-dom';
import './SolutionCategory.css';

const SolarEnergy = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            ),
            title: 'Yüksek Verimlilik',
            description: 'En son teknoloji monokristal panellerle %22\'ye varan verimlilik oranları.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
            ),
            title: 'Maliyet Tasarrufu',
            description: 'Elektrik faturalarınızda %70\'e kadar tasarruf sağlayın.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
            ),
            title: '25 Yıl Garanti',
            description: 'Panellerimiz 25 yıl üretici garantisi ile sunulmaktadır.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
            ),
            title: 'Konut Çözümleri',
            description: 'Her bütçeye uygun ev tipi güneş enerjisi sistemleri.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
            ),
            title: 'Ticari Projeler',
            description: 'İşletmeler için büyük ölçekli güneş enerjisi santralleri.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20V10M18 20V4M6 20v-4" />
                </svg>
            ),
            title: 'Akıllı İzleme',
            description: 'Mobil uygulama ile anlık üretim takibi ve raporlama.'
        }
    ];

    const benefits = [
        { title: 'Enerji Bağımsızlığı', description: 'Şebekeye bağımlılığınızı azaltın' },
        { title: 'Çevre Dostu', description: 'Karbon ayak izinizi minimize edin' },
        { title: 'Devlet Teşvikleri', description: 'Yatırım teşviklerinden yararlanın' },
        { title: 'Artan Mülk Değeri', description: 'Gayrimenkulünüzün değerini artırın' }
    ];

    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Güneş Enerjisi Sistemleri</h1>
                    <p>Yenilenebilir enerji ile geleceğe yatırım yapın. Evler ve işletmeler için yüksek verimli güneş paneli çözümlerimizle tanışın.</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link to="/cozumler">Çözümler</Link>
                        <span>/</span>
                        <span>Güneş Enerjisi</span>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="category-features">
                <div className="section-header">
                    <h2>Güneş Enerjisi Avantajları</h2>
                    <p>Güneş enerjisi sistemlerimiz ile enerji maliyetlerinizi düşürün ve çevreye katkıda bulunun.</p>
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
                        <h2>Neden Güneş Enerjisi?</h2>
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
                        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800" alt="Güneş panelleri" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="category-stats">
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Tamamlanan Proje</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">15MW</span>
                        <span className="stat-label">Kurulu Güç</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">%70</span>
                        <span className="stat-label">Tasarruf Oranı</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">25 Yıl</span>
                        <span className="stat-label">Panel Garantisi</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="cta-container">
                    <h2>Ücretsiz Keşif Randevusu Alın</h2>
                    <p>Uzman ekibimiz eviniz veya işletmeniz için en uygun güneş enerjisi çözümünü belirlesin.</p>
                    <Link to="/iletisim" className="btn btn-white">
                        Hemen Başlayın
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SolarEnergy;
