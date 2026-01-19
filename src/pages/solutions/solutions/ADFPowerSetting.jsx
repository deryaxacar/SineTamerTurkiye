import { Link } from 'react-router-dom';
import '../SolutionCategory.css';

const img1 = "https://www.ecsintl.com/wp-content/uploads/2023/12/datacenter-1024x228.jpg";

const img2 = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"; // Placeholder
const img3 = "https://images.unsplash.com/photo-1531297461136-82lw8u8u0u?w=800";   // Placeholder
const img4 = "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800";  // Placeholder
const img5 = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800";  // Placeholder

const ADFPowerSetting = () => {
    return (
        <div className="solution-category-page adf-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920)` }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>ADF Güç Ayarı</h1>
                    <p>ADF Güç Ayarı – geleceğin güç anlayışı!</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <span>ADF Güç Ayarı</span>
                    </div>
                </div>
            </section>

            {/* Title, Intro & Feature List */}
            <section className="split-layout-section">
                <div className="split-top image-left">
                    <div className="split-side-image">
                        <img src={img1} alt="ADF Ünitesi" />
                    </div>
                    <div className="split-main-text">
                        <h2>Güç Kusursuz Değildir.</h2>
                        <p>
                            Günümüz endüstrisinin ileri teknolojisi ve ağır süreçleri, elektrik şebekesine yüksek talepler getiriyor ve operasyonları çeşitli sorunlara karşı savunmasız hale getiriyor.
                        </p>
                    </div>
                </div>
            </section>

            {/* Split 2: img2 (Right) */}
            <section className="split-layout-section" style={{ backgroundColor: 'var(--gray-light)', padding: '2rem 0' }}>
                <div className="split-top">
                    <div className="split-main-text">
                        <ul className="custom-list">
                            <li>Harmonik Bozulmalar</li>
                            <li>Voltaj Dalgalanmaları</li>
                            <li>Güç Faktörü Sorunları</li>
                            <li>Rezonans Riskleri</li>
                            <li>Enerji Verimliliği Kayıpları</li>
                            <li>Ekipman Arızaları</li>
                        </ul>
                        <p>Bu sorunlar, güç kalitesini zayıflatan çeşitli elektriksel bozulmalardan kaynaklanmaktadır.</p>
                    </div>
                    <div className="split-side-image" style={{ maxWidth: '450px' }}>
                        <img src={img2} alt="Güç Analiz Ekranı" />
                    </div>
                </div>
            </section>

            {/* Image Grid: img3, img4, img5 */}
            <section className="pfc-image-grid">
                <div className="pfc-grid-item">
                    <img src={img3} alt="Endüstriyel Pano" />
                </div>
                <div className="pfc-grid-item">
                    <img src={img4} alt="Devre Kartı" />
                </div>
                <div className="pfc-grid-item">
                    <img src={img5} alt="Veri Merkezi" />
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="cta-container">
                        <h2>Detaylı Bilgi ve Teklif İçin</h2>
                        <p>Tesisinize özel ADF çözümleri ve güç analizi için uzman mühendislerimizle iletişime geçin.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <a
                                href="https://womner.com/iletisim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-white"
                            >
                                İletişime Geçin
                            </a>
                            <a
                                href="#" // Placeholder link
                                className="btn btn-outline-white"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', marginRight: '8px' }}>
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                Ürün Broşürünü İndirin
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default ADFPowerSetting;
