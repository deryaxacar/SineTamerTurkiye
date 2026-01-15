import { Link } from "react-router-dom";
import "./SolutionCategory.css";

const Eaton3Series = () => {
    return (
        <div className="solution-category-page">
            {/* HERO */}
            <section
                className="category-hero"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)",
                }}
            >
                <div className="category-hero-overlay" />
                <div className="category-hero-content">
                    <h1>Eaton 3 Serisi UPS</h1>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <Link >UPS Çözümleri</Link>
                        <span>/</span>
                        <Link to="/cozumler/ups-cozumleri/eaton-powerware-ups">
                            Eaton / Powerware
                        </Link>
                        <span>/</span>
                        <span>3 Serisi</span>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="category-features">
                <div className="section-header">
                    <p style={{ fontWeight: 'bold' }}>

                        Eaton güç yedekleme felsefesi, belirlenen dokuz güç kalitesi sorununa odaklanmaktadır. Koruma ve yedekleme 3-5-9 kadar kolay!
                    </p>
                </div>
                <div className="series-wrap">
                    {/* Üst açıklama (her sayfada aynı olacak) */}
                    <div className="series-top">
                        <p>
                            Eaton güç yedekleme felsefesi, belirlenen dokuz güç kalitesi sorununa odaklanmaktadır.  Koruma ve yedekleme 3-5-9 kadar kolaydır!</p>
                        <p>
                            Dokuz yaygın güç sorunu türü vardır. 3-5-9 kavramı, hangi çözümlerle hangi tür sorunların önlenebileceğini ve her bir çözümün hangi ortamda en yararlı olduğunu açıklığa kavuşturur.

                            Dokuz güç sorunundan üçüne karşı kritik olmayan donanım ve verileri koruyan temel bir çözüm. Bu UPS'ler bekleme modunda çalışır.
                        </p>

                        <Link
                            to="/cozumler/ups-cozumleri/eaton-powerware-ups"
                            className="series-back-btn"
                        >
                            ← Önceki Sayfaya Dön
                        </Link>
                    </div>

                    {/* 3 ikon kutusu */}
                    <div className="series-icon-grid">
                        <div className="series-icon-card">
                            <div className="series-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <div className="series-icon-text">Elektrik Kesintisi</div>
                        </div>

                        <div className="series-icon-card">
                            <div className="series-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 20v-6" />
                                    <path d="M6 20V10" />
                                    <path d="M18 20V4" />
                                </svg>
                            </div>
                            <div className="series-icon-text">Güç Düşüşü</div>
                        </div>

                        <div className="series-icon-card">
                            <div className="series-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 12c2.5-6 5.5 6 8 0s5.5 6 8 0 2.5-6 2.5-6" />
                                    <path d="M3 12c2.5 6 5.5-6 8 0s5.5-6 8 0 2.5 6 2.5 6" />
                                </svg>
                            </div>
                            <div className="series-icon-text">Elektrik Akımı Dalgalanması</div>
                        </div>
                    </div>

                    {/* Ürün alanı: resim + dokümanlar */}
                    <div className="series-product-card">
                        <div className="series-product-image">
                            {/* Ürün görseli burası */}
                            <img
                                src="https://www.ecsintl.com/wp-content/uploads/2023/12/3S_2-130x3001-1-130x150.jpg"
                                alt="Eaton 3 Serisi UPS"
                            />
                        </div>

                        <div className="series-product-info">
                            <h2>Eaton 3 Serisi</h2>

                            <div className="series-docs">
                                <a
                                    href="https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_3S1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="series-doc-btn primary"
                                >
                                    Teknik Özellikler (PDF)
                                </a>

                                <a
                                    href="http://ecsintl.com/wp-content/uploads/2023/12/Eaton_3SBrochure1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="series-doc-btn"
                                >
                                    Broşür (PDF)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Eaton3Series;
