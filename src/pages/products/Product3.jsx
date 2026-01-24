import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import './Products.css';

const Product3 = () => {
    const product = {
        image: '/product/SineTamer-DC.jpg',
        title: 'ST-SPT-DC Serisi',
        description: 'ST-SPT-DC Serisi ve RM-VS/VT 210 Serisi Doğru Akım Koruma Çözümleri',
        specs: {
            voltajSPT: '12, 24 veya 48 VDC',
            voltajRM: '2000V DC\'ye kadar',
            devreYapisi: 'Ayrık "Tüm Mod" (IEEE Std. 1100-2005)',
            garanti: '10 Yıl Sınırsız Ücretsiz Değişim',
            teshis: 'Yerel ve Uzaktan Teşhis Özelliği',
            sigortalama: 'Bileşen Seviyesinde Termal Sigortalama'
        },
        features: [
            'Ayrık "Tüm Mod" Devre Yapısı (IEEE Std. 1100-2005)',
            'Sektör Lideri Ölçülmüş Sınırlama Gerilimi Performansı',
            'Yerel ve Uzaktan Teşhis Özelliği',
            'Performans ve Güvenliğin Bağımsız Doğrulaması',
            'Bileşen Seviyesinde Termal Sigortalama',
            '10 Yıl Sınırsız Ücretsiz Değişim Garantisi',
            'Özel "Tüm Mod" Frekans Zayıflatma Ağı',
            'Kapsüllenmiş Optimal Yanıt Ağı'
        ],
        longDescription: `SineTamer DC serisi, 12VDC'den 2000VDC'ye kadar olan uygulamalarda hassas mikroişlemci tabanlı ekipmanlar için üstün koruma sağlar. ST-SPT-DC cihazları, tesis içi geçici gerilimleri sınırlayan kompakt çözümler sunarken; RM-VS/VT 210 serisi, en zorlu endüstriyel koşullarda değerli ekipmanlarınızı darbelere karşı koruyarak kritik sistem sürekliliğini sağlar.`
    };

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Ürünler', path: '/urunler' },
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

            {/* Intro Section */}
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

            {/* Features Section */}
            <section className="product-features-section">
                <div className="container">
                    <div className="product-section-header">
                        <h2>RM-VS/VT 210 Serisi Ana Özellikler</h2>
                        <p>DC serisinin sunduğu teknolojik avantajlar ve koruma parametreleri.</p>
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
                        <p>SineTamer DC sistemleri için performans verileri ve ilgili ürün grupları.</p>
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
                                <img src="/product/SineTamer-Tek-Faz.jpg" alt="SineTamer Tek Faz" />
                            </div>
                            <div className="promo-content">
                                <h3>SineTamer Tek Faz</h3>
                                <p>SineTamer ST-SPT cihazları, türündeki bir cihaz için mevcut en iyi halka dalga geçici korumasını sağlar.</p>
                                <Link to="/urunler/tek-faz" className="btn-promo-action">
                                    Ürünü İncele
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product3;


