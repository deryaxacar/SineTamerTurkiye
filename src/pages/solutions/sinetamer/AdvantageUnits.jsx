import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const AdvantageUnits = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'SineTamer' },
        { label: 'Avantaj Üniteleri' }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="SineTamer Avantaj Üniteleri"
                description="Üstün koruma ve performans için geliştirilmiş SineTamer Avantaj serisi."
                backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Main Content Section */}
            <section className="advantage-content-section">
                <div className="advantage-container">
                    {/* Section Header */}
                    <div className="advantage-header">
                        <h2>SineTamer Avantaj Üniteleri</h2>
                        <p>SineTamer Serisi Susturucuların En Üst Düzeyi</p>
                    </div>

                    {/* 2x2 Grid (1 Image + 3 Cards) */}
                    <div className="advantage-grid-2x2">
                        {/* Image Column */}
                        <div className="advantage-image-col">
                            <img
                                src="https://www.ecsintl.com/wp-content/uploads/2023/12/14094145-600x520.jpg"
                                alt="SineTamer Avantaj Üniteleri"
                            />
                        </div>

                        {/* Card 3 */}
                        <div className="advantage-card">
                            <h3>Frekans Dışı Zayıflama</h3>
                            <ul>
                                <li>ST-SSLx: Faz başına 90 ka</li>
                                <li>ST-SKLx: Faz başına 120 ka</li>
                                <li>ST-SDLx: Faz başına 180 ka</li>
                                <li>ST-LSEx: Faz başına 240 ka</li>
                                <li>ST-SMLx: Faz başına 300 ka</li>
                                <li>ST-SILxM: Faz başına 360 ka</li>
                                <li>ST-SHLxM: Faz başına 480 ka</li>
                                <li>ST-SHDLxM: Faz başına 600 ka</li>
                                <li>ST-SMDLxM: Faz başına 720 ka</li>
                                <li>ST-SXDLxM: Faz başına 900 ka</li>
                            </ul>
                        </div>

                        {/* Card 1 */}
                        <div className="advantage-card">
                            <h3>Gerçek 10 modlu özel bileşenler</h3>
                            <ul>
                                <li>UL94V Kompozit muhafazalar</li>
                                <li>Bileşen Seviyesinde Termal Füzyon</li>
                                <li>Patentli Kart Seviyesi Akım Sigortası</li>
                                <li>Bağlantıyı Kesme Seçenekleri</li>
                                <li>DRC Seçenekleri</li>
                                <li>Aşırı Gerilim Sayacı seçenekleri</li>
                                <li>Frekans Zayıflama Ağı modelleri</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="advantage-card">
                            <h3>Frekans Zayıflaması</h3>
                            <ul>
                                <li>ST-CSLx: Faz başına 90 ka</li>
                                <li>ST-CKLx: Faz başına 120 ka</li>
                                <li>ST-CSEx: Faz başına 240 ka</li>
                                <li>ST-CMLx: Faz başına 300 ka</li>
                                <li>ST-CMX: Faz başına 600 ka</li>
                                <li>ST-CMXX: Faz başına 1200 ka</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="cta-container">
                        <h2>Detaylı Bilgi ve Teklif İçin</h2>
                        <p>SineTamer Avantaj üniteleri hakkında detaylı bilgi almak için bizimle iletişime geçin.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <a
                                href="https://www.ecsintl.com/contact-us/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-white"
                            >
                                İletişime Geçin
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdvantageUnits;
