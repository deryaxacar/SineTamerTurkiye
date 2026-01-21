import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const AdvantageUnits = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'SineTamer' },
        { label: 'Avantaj Üniteleri' }
    ];

    const specCards = [
        {
            title: 'Frekans Dışı Zayıflama',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
            items: [
                { model: 'ST-SSLx', value: '90 kA' },
                { model: 'ST-SKLx', value: '120 kA' },
                { model: 'ST-SDLx', value: '180 kA' },
                { model: 'ST-LSEx', value: '240 kA' },
                { model: 'ST-SMLx', value: '300 kA' },
                { model: 'ST-SILxM', value: '360 kA' },
                { model: 'ST-SHLxM', value: '480 kA' },
                { model: 'ST-SHDLxM', value: '600 kA' },
                { model: 'ST-SMDLxM', value: '720 kA' },
                { model: 'ST-SXDLxM', value: '900 kA' }
            ]
        },
        {
            title: 'Frekans Zayıflaması',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            ),
            items: [
                { model: 'ST-CSLx', value: '90 kA' },
                { model: 'ST-CKLx', value: '120 kA' },
                { model: 'ST-CSEx', value: '240 kA' },
                { model: 'ST-CMLx', value: '300 kA' },
                { model: 'ST-CMX', value: '600 kA' },
                { model: 'ST-CMXX', value: '1200 kA' }
            ]
        }
    ];

    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
            ),
            title: 'UL94V Kompozit Muhafazalar',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            ),
            title: 'Bileşen Seviyesinde Termal Füzyon',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Patentli Kart Seviyesi Akım Sigortası',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
                </svg>
            ),
            title: 'Bağlantıyı Kesme Seçenekleri',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 9h6v6H9z" />
                </svg>
            ),
            title: 'DRC Seçenekleri',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
                </svg>
            ),
            title: 'Aşırı Gerilim Sayacı Seçenekleri',
        }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="SineTamer Avantaj Üniteleri"
                description="SineTamer serisi susturucuların en üst düzeyi. Gerçek 10 modlu özel bileşenler ile üstün koruma ve performans."
                backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Introduction Section */}
            <section className="adv-intro-section">
                <div className="adv-intro-container">
                    <div className="adv-intro-content">
                        <div className="adv-intro-text">
                            <h2>SineTamer Avantaj Serisi</h2>
                            <p className="adv-intro-lead">
                                SineTamer Avantaj üniteleri, endüstriyel ve ticari uygulamalar için tasarlanmış
                                en gelişmiş güç koruma çözümlerini sunar. Gerçek 10 modlu yapısı sayesinde
                                tüm güç kalitesi sorunlarına karşı kapsamlı koruma sağlar.
                            </p>
                            <div className="adv-highlight-box">
                                <div className="adv-highlight-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <div className="adv-highlight-content">
                                    <h4>Gerçek 10 Modlu Koruma</h4>
                                    <p>Tüm faz-faz, faz-nötr ve faz-toprak kombinasyonlarında tam koruma</p>
                                </div>
                            </div>
                        </div>
                        <div className="adv-intro-image">
                            <img
                                src="https://www.ecsintl.com/wp-content/uploads/2023/12/14094145-600x520.jpg"
                                alt="SineTamer Avantaj Üniteleri"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="adv-features-section">
                <div className="adv-features-container">
                    <div className="adv-section-header">
                        <h2>Öne Çıkan Özellikler</h2>
                        <p>SineTamer Avantaj serisi, endüstri standartlarının ötesinde teknoloji sunar</p>
                    </div>
                    <div className="adv-features-grid">
                        {features.map((feature, index) => (
                            <div className="adv-feature-card" key={index}>
                                <div className="adv-feature-icon">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="adv-specs-section">
                <div className="adv-specs-container">
                    <div className="adv-section-header">
                        <h2>Teknik Özellikler</h2>
                        <p>Her model faz başına belirtilen akım değerlerini destekler</p>
                    </div>
                    <div className="adv-specs-grid">
                        {specCards.map((card, index) => (
                            <div className="adv-spec-card" key={index}>
                                <div className="adv-spec-header">
                                    <div className="adv-spec-icon">{card.icon}</div>
                                    <h3>{card.title}</h3>
                                </div>
                                <div className="adv-spec-table">
                                    <div className="adv-spec-row adv-spec-row-header">
                                        <span>Model</span>
                                        <span>Faz Başına</span>
                                    </div>
                                    {card.items.map((item, idx) => (
                                        <div className="adv-spec-row" key={idx}>
                                            <span className="adv-model-name">{item.model}</span>
                                            <span className="adv-model-value">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdvantageUnits;
