import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import './Products.css';

const Product1 = () => {
    const product = {
        image: '/product/SineTamer-Tek-Faz.jpg',
        title: 'SineTamer Tek Faz',
        description: 'SineTamer ST-SPT cihazları, türündeki bir cihaz için mevcut en iyi halka dalga geçici korumasını sağlar.',
        specs: {
            voltaj: '120/240/380/480 VAC',
            kapasite: '120kA Tepe Darbe Akımı',
            garanti: '25 Yıl Sınırsız',
            koruma: 'ANSI/IEEE Kategori A',
            Uyumluluk: 'CSA, UL1283, CE',
            uygulama: 'Tek Faz Devre Uygulamaları'
        },
        features: [
            'Faz başına 120kA tepe darbe akımı kapasitesi',
            'Kapsüllenmiş Optimal Yanıt Ağı',
            'Tüm mod Frekans Zayıflatma Ağı',
            'Bağımsız darbe bastırma cihazı',
            'Kompakt boyut - kolay kurulum',
            '25 yıl sınırsız ücretsiz değişim garantisi',
            'CSA, UL1283 ve CE Uyumlu',
            'Özel muhafaza gerektirmez'
        ],
        longDescription: `SineTamer ST-SPT, tek fazlı 120, 240, 380 ve 480 VAC devrelerde hassas ve kritik ekipmanlar için yüksek performanslı geçici gerilim koruması sağlar.
Faz başına 120 kA tepe darbe akımı kapasitesi ile tesis kaynaklı ani gerilim darbelerini etkili biçimde sınırlar ve mikroişlemci tabanlı sistemlerin güvenliğini artırır.
Bağımsız darbe bastırma cihazı olarak tasarlanan ST-SPT, harici muhafaza gerektirmeyen kompakt yapısı sayesinde kolay kurulum sunar.
“Tüm mod” Frekans Zayıflatma Ağı ve kapsüllenmiş Optimal Yanıt Ağı ile uzun ömürlü, güvenilir ve sektörde öne çıkan bir koruma çözümüdür.`
    };

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Ürünler', path: '/#products' },
        { label: product.title }
    ];

    return (
        <div className="product-detail-page">
            <Hero
                title={product.title}
                description={product.description}
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Intro Section - Split Layout */}
            <section className="product-intro-section">
                <div className="product-intro-container">
                    <div className="product-intro-grid">
                        <div className="product-info-text">
                            <div className="product-header-card">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                            </div>
                            <div className="adf-info-text">
                                <p>{product.longDescription}</p>
                            </div>
                            <div className="product-actions">
                                <Link to="/" className="btn-adf-back">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                    Ana Sayfaya Dön
                                </Link>
                                <a href="tel:+902169990018" className="btn-primary-adf">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l2.21-2.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                    Bizimle İletişime Geçin
                                </a>
                            </div>
                        </div>
                        <div className="product-image-box">
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Benefit Cards Style */}
            <section className="product-features-section">
                <div className="container">
                    <div className="product-section-header">
                        <h2>Öne Çıkan Özellikler</h2>
                        <p>Endüstriyel standartların üzerinde koruma ve dayanıklılık sunan teknolojik avantajlar.</p>
                    </div>
                    <div className="product-features-grid">
                        {product.features.map((feature, index) => (
                            <div className="product-benefit-card" key={index}>
                                <div className="benefit-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <div className="benefit-content">
                                    <h3>{feature}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specs & Promo Section */}
            <section className="product-specs-section">
                <div className="product-specs-container">
                    <div className="product-section-header">
                        <h2>Teknik Karşılaştırma & Ek Çözümler</h2>
                        <p>SineTamer Tek Faz teknolojisinin detaylı performans verileri ve ilgili ürün grupları.</p>
                    </div>

                    <div className="specs-promo-grid">
                        {/* Teknik Özellikler - Sol Taraf */}
                        <div className="product-specs-card">
                            <div className="specs-table">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div className="spec-row" key={key}>
                                        <span className="spec-label">
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        </span>
                                        <span className="spec-value">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Diğer Ürün Promosyonu - Sağ Taraf */}
                        <div className="promo-product-card">
                            <span className="promo-tag">İlgili Çözüm</span>
                            <div className="promo-image">
                                <img src="/product/SineTamer-3-faz.jpg" alt="SineTamer Üç Faz" />
                            </div>
                            <div className="promo-content">
                                <h3>SineTamer Üç Fazlı Üniteler</h3>
                                <p>Tek fazlı devreler için gelişmiş geçici voltaj darbe bastırıcı.</p>
                                <Link to="/urunler/uc-faz" className="btn-promo-action">
                                    Ürünü İncele
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Product1;
