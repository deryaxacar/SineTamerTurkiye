import { Link } from 'react-router-dom';

const Home = () => {
    const solutions = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                </svg>
            ),
            title: 'Aşırı Gerilim Koruma',
            description: 'Tesislerinizi ve hassas elektronik cihazlarınızı ani yüksek gerilim ve yıldırım etkilerine karşı koruyan endüstriyel çözümler.',
            link: '/cozumler/sinetamer/asiri-gerilim-koruma-cihazi'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="M18 17l-4-4-3 3-4-4" />
                    <path d="M22 22l-2-2" />
                </svg>
            ),
            title: 'Güç Kalitesi Analizi',
            description: 'Elektriksel sistemlerinizdeki verimsizliği ve riskleri tespit eden kapsamlı ölçüm ve raporlama hizmetleri.',
            link: '/cozumler/hizmetler/guc-kalitesi-analizi'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            ),
            title: 'Harmonik Filtreleme',
            description: 'Harmonik kirliliği temizleyerek enerji kalitesini artıran ve ekipman ömrünü uzatan modern ADF sistemleri.',
            link: '/cozumler/hizmetler/adf-guc-ayari'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            title: 'Teknoloji Çözümleri',
            description: 'Enerji altyapınız için tasarım, mühendislik ve uygulama aşamalarını kapsayan bütünsel teknoloji çözümleri.',
            link: '/cozumler/hizmetler/anahtar-teslimi-teknoloji-cozumleri'
        },
    ];

    const products = [
        {
            image: '/product/SineTamer-Tek-Faz.jpg',
            title: 'SineTamer Tek Faz',
            description: 'Tek fazlı devreler için mevcut en iyi halka dalga geçici korumasını sağlayan endüstriyel çözüm.',
            link: '/urunler/tek-faz'
        },
        {
            image: '/product/SineTamer-3-faz.jpg',
            title: 'SineTamer AC Üç Faz',
            description: 'Yüksek enerji taşıma ve frekans izleme devresine sahip, paralel bağlı profesyonel TVSS.',
            link: '/urunler/uc-faz'
        },
        {
            image: '/product/SineTamer-DC.jpg',
            title: 'SineTamer DC',
            description: 'DC güç sistemleri için optimize edilmiş, hassas ekipmanlarınızı koruyan özel darbe bastırıcı.',
            link: '/urunler/dc'
        }
    ];

    const stats = [
        { number: '15+', label: 'Yıllık Deneyim' },
        { number: '500+', label: 'Tamamlanan Proje' },
        { number: '10K+', label: 'Mutlu Müşteri' },
        { number: '%98', label: 'Müşteri Memnuniyeti' },
    ];

    const blogPosts = [
        {
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
            title: 'Güneş Enerjisi ile Evlerde Tasarruf Nasıl Yapılır?',
            excerpt: 'Güneş panelleri ile evinizin enerji ihtiyacını karşılayarak faturalarınızı nasıl düşürebileceğinizi öğrenin.',
            date: '10 Ocak 2026',
            category: 'Güneş Enerjisi',
            link: '/daha-fazlasi/blog'
        },
        {
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600',
            title: 'Rüzgar Enerjisinin Geleceği: 2026 Trendleri',
            excerpt: 'Rüzgar enerjisi sektöründeki son gelişmeler ve 2026 yılında bizi bekleyen yenilikler.',
            date: '8 Ocak 2026',
            category: 'Rüzgar Enerjisi',
            link: '/daha-fazlasi/blog'
        },
        {
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
            title: 'Enerji Depolama Sistemleri: Kapsamlı Rehber',
            excerpt: 'Ev ve işletmeler için en uygun enerji depolama çözümlerini karşılaştırmalı olarak inceliyoruz.',
            date: '5 Ocak 2026',
            category: 'Depolama',
            link: '/daha-fazlasi/blog'
        },
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <h1 className="hero-title animate-fade-in">
                        Geleceğin Enerjisini<br />
                        <span>Bugünden Üretin</span>
                    </h1>
                    <p className="hero-description animate-fade-in">
                        Sürdürülebilir enerji çözümleri ile çevreyi koruyun, maliyetlerinizi düşürün
                        ve enerji bağımsızlığınızı kazanın.
                    </p>
                </div>
                <div className="hero-scroll">
                    <span>Aşağı Kaydır</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </section>
            {/* Solutions Preview */}
            <section className="solutions-preview section bg-light">
                <div className="container">
                    <h2 className="section-title">Çözümlerimiz</h2>
                    <p className="section-subtitle">
                        Enerji kalitenizi artırmak ve sistemlerinizi korumak için inovatif çözümler sunuyoruz.
                    </p>
                    <div className="solutions-grid">
                        {solutions.map((solution, index) => (
                            <Link to={solution.link} className="solution-card" key={index}>
                                <div className="solution-icon">{solution.icon}</div>
                                <h3 className="solution-title">{solution.title}</h3>
                                <p className="solution-description">{solution.description}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="solutions-external-cta">
                        <p>Daha fazla çözüm için <a href="https://womner.com/cozumler/" target="_blank" rel="noopener noreferrer">www.womner.com</a>'u ziyaret edin.</p>
                    </div>
                </div>
            </section>

            {/* Features CTA */}
            <section className="features-cta">
                <div className="container">
                    <div className="features-cta-grid">
                        <div className="feature-cta-item">
                            <div className="feature-cta-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <span>Güvenlik</span>
                        </div>
                        <div className="feature-cta-item">
                            <div className="feature-cta-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <span>Global Dağıtım Ağı</span>
                        </div>
                        <div className="feature-cta-item">
                            <div className="feature-cta-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                    <polyline points="16 7 22 7 22 13" />
                                </svg>
                            </div>
                            <span>Performans</span>
                        </div>
                        <div className="feature-cta-item">
                            <div className="feature-cta-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <span>Güvenilirlik</span>
                        </div>

                        <div className="feature-cta-item">
                            <div className="feature-cta-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <span>Düşük Maliyet</span>
                        </div>

                        <div className="feature-cta-item">
                            <div className="feature-cta-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <span>Garanti</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Preview */}
            <section className="products-preview section">
                <div className="container">
                    <h2 className="section-title">Ürünlerimiz</h2>
                    <p className="section-subtitle">
                        Endüstriyel standartların üzerinde koruma ve dayanıklılık sunan teknolojik ürün gruplarımız.
                    </p>
                    <div className="products-grid">
                        {products.map((product, index) => (
                            <div className="promo-product-card" key={index}>
                                <span className="promo-tag">ÖNE ÇIKAN ÜRÜN</span>
                                <div className="promo-image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="promo-content">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <Link to={product.link} className="btn-promo-action">
                                        Ürünü İncele
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section 
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div className="stat-item" key={index}>
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>*/}
        </div>
    );
};

export default Home;
