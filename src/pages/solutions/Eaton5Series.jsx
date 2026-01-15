import { Link } from "react-router-dom";
import "./SolutionCategory.css";

const Eaton5Series = () => {
    const products = [
        {
            id: "E1",
            title: "Eaton 5P Kulesi",
            description:
                "750va – 3000va",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/5P_Tower-243x3001-1-243x300.jpg",
            techPdf: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_5P_Tower1.pdf",
            videoId: "gPZg0l1h5r0",
        },
        {
            id: "E2",
            title: "Eaton 5P Raf Montajı",
            description:
                "1400va – 3000va 20 – 240v seçenekleri",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/5P_Rack-300x831-1-300x83.jpg",
            techPdf: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_5P_Tower1-1.pdf",
            videoId: "KSDz3RM923c",
        },
        {
            id: "E3",
            title: "Eaton 5S",
            description:
                "550va – 1500, 120 ve 240V versiyonları",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/5S-197x3001-1-197x300.jpg",
            techPdf: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_5S-11.pdf",
            videoId: "DViqSGC-kCQ",
        },
        {
            id: "E4",
            title: "Eaton 5SC",
            description:
                "500va – 1440va",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/5SC-300x1961-1-300x196.jpg",
            techPdf: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_5S-11.pdf",
            videoId: "80VpLMOn-oA",
        },
        {
            id: "E5",
            title: "Eaton 5PX",
            description:
                "Raf/Kule Kombinasyonları 1000-3000va",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/5PX-300x1631-1-300x163.jpg",
            techPdf: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_5PX1.pdf",
            videoId: "RNPIWzxLdR0",
        },
    ];

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
                    <h1>Eaton 5 Serisi UPS</h1>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <Link>UPS Çözümleri</Link>
                        <span>/</span>
                        <Link to="/cozumler/ups-cozumleri/eaton-powerware-ups">
                            Eaton / Powerware
                        </Link>
                        <span>/</span>
                        <span>5 Serisi</span>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="category-features">
                <div className="section-header">
                    <p style={{ fontWeight: "bold" }}>
                        Seri 5 üniteleri, iyi iletişim seçenekleri sunan ofis ortamları ve
                        sunucular için mükemmel bir ara çözümdür. Hat etkileşimli modda
                        çalışan bu UPS'ler, en yaygın beş güç sorununa karşı koruma sağlar.
                    </p>
                </div>

                <div className="series-wrap">
                    {/* Üst açıklama + geri dön */}
                    <div className="series-top">
                        <p>
                            Aşağıdaki tabloda gösterildiği gibi, dokuz yaygın güç sorunu türü
                            vardır. 3-5-9 konsepti, hangi tür sorunların hangi çözümlerle
                            önlenebileceğini ve her çözümün hangi ortamda en faydalı olduğunu
                            açıklığa kavuşturmaktadır.
                        </p>

                        <Link
                            to="/cozumler/ups-cozumleri/eaton-powerware-ups"
                            className="series-back-btn"
                        >
                            ← Önceki Sayfaya Dön
                        </Link>
                    </div>

                    {/* 5 ikon kutusu */}
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
                            <div className="series-icon-text">Güç Dalgalanması</div>
                        </div>

                        <div className="series-icon-card">
                            <div className="series-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2v20" />
                                    <path d="M7 7l5-5 5 5" />
                                    <path d="M7 17l5 5 5-5" />
                                </svg>
                            </div>
                            <div className="series-icon-text">Düşük Voltaj</div>
                        </div>

                        <div className="series-icon-card">
                            <div className="series-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 3v6" />
                                    <path d="M9 9h6" />
                                    <path d="M5 12h14" />
                                    <path d="M7 19l5-5 5 5" />
                                </svg>
                            </div>
                            <div className="series-icon-text">Aşırı Gerilim</div>
                        </div>
                        <div className="series-icon-card series-icon-card--link">
                            <a
                                href="https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_5_Series_Overview1.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="series-icon-link"
                            >
                                <div className="series-icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                        <polyline points="14,2 14,8 20,8" />
                                        <path d="M16 13H8M16 17H8M10 9H8" />
                                    </svg>
                                </div>
                                <div className="series-icon-text">Genel Bakış Broşürü</div>
                            </a>
                        </div>
                    </div>

                    {/* ✅ 5 ürün + sağda video listesi */}
                    <div className="series-list">
                        {products.map((p) => (
                            <div key={p.id} className="series-row">
                                {/* SOL: ürün kartı */}
                                <div className="series-product-card series-product-card--compact">
                                    <div className="series-product-image series-product-image--contain">
                                        <img src={p.image} alt={p.title} />
                                    </div>

                                    <div className="series-product-info">
                                        <h2>{p.title}</h2>

                                        {/* ✅ DESCRIPTION (başlığın altına) */}
                                        {p.description && (
                                            <p className="series-product-desc">{p.description}</p>
                                        )}

                                        <div className="series-docs series-docs--row2">
                                            <a
                                                href={p.techPdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="series-doc-btn primary"
                                            >
                                                Teknik Özellikler
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* SAĞ: video kartı */}
                                <div className="series-video-card">
                                    <div className="series-video-frame">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${p.videoId}`}
                                            title={`${p.title} Video`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* /series-list */}
                </div>
            </section>
        </div>
    );
};

export default Eaton5Series;
