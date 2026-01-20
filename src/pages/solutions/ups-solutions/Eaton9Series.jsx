import { Link } from "react-router-dom";
import Hero from "../../../components/Hero";
import '../SolutionCategory.css';

const Eaton9Series = () => {
    const icons = [
        {
            label: "Elektrik Kesintisi", svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        },
        {
            label: "Güç Düşüşü", svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 20V10" />
                    <path d="M12 20V6" />
                    <path d="M18 20V14" />
                </svg>
            )
        },
        {
            label: "Elektrik Dalgalanması", svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12c2.5-6 5.5 6 8 0s5.5 6 8 0 2.5-6 2.5-6" />
                    <path d="M3 12c2.5 6 5.5-6 8 0s5.5-6 8 0 2.5 6 2.5 6" />
                </svg>
            )
        },
        {
            label: "Düşük Voltaj", svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3v18" />
                    <path d="M7 16l5 5 5-5" />
                </svg>
            )
        },
        {
            label: "Aşırı Gerilim", svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21V3" />
                    <path d="M7 8l5-5 5 5" />
                </svg>
            )
        },
        {
            label: "Anahtarlama Geçişi", svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 7h10" />
                    <path d="M7 17h10" />
                    <path d="M10 7v10" />
                    <path d="M14 7v10" />
                </svg>
            )
        },
        {
            label: "Hat Gürültüsü", svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12h4l2-3 4 6 2-3h4" />
                </svg>
            )
        },
        {
            label: "Frekans Değişimi", svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12a9 9 0 1018 0" />
                    <path d="M12 7v5l3 2" />
                </svg>
            )
        },
        {
            label: "Harmonik Bozulma", svg: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 18V6" />
                    <path d="M8 18V10" />
                    <path d="M12 18V6" />
                    <path d="M16 18V14" />
                    <path d="M20 18V8" />
                </svg>
            )
        },
    ];

    const products = [
        {
            title: "9PX Rack/Tower",
            description: "Cisco anahtarları ve sunucuları dahil olmak üzere BT ekipmanları için güvenilir, çok yönlü ve verimli yedek güç kaynağı",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/9px_Rack_Tower-300x2181-1-300x218.jpg",
            docs: [
                { label: "Teknik Özellikler (PDF)", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_9PX_Rack_Tower1.pdf", primary: true },
            ],
        },
        {
            title: "9PX-SP",
            description: "Cisco anahtarları ve sunucuları dahil olmak üzere BT ekipmanları için güvenilir, çok yönlü ve verimli yedek güç kaynağı",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/9PX-236x3001-1-236x300.jpg",
            docs: [
                { label: "Teknik Özellikler (PDF)", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_9PX_SP1.pdf", primary: true },
            ],
        },
        {
            title: "9130-Raf Montajı",
            description: "10/12/16 tarihi itibariyle sınırlı sayıda ürün mevcuttur. Ürün, Eaton tarafından kullanım ömrünün sonuna gelmiş olarak ilan edilmiştir.",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/9130_Rackmount-300x1071-1-300x107.jpg",
            docs: [
                { label: "Teknik Özellikler (PDF)", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_9130_RM1.pdf", primary: true },
            ],
        },
        {
            title: "Eaton 9130 Tower",
            description: "10/12/2016 tarihi itibariyle sınırlı sayıda ürün mevcuttur. Ürün, Eaton tarafından kullanım ömrünün sonuna gelmiş olarak ilan edilmiştir.",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/9130_Tower1-290x341.jpg",
            docs: [
                { label: "Teknik Özellikler (PDF)", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_9130_Tower1.pdf", primary: true },
            ],
        },
        {
            title: "9155 Serisi",
            description: " Bölünmüş faz, çift dönüşümlü çevrimiçi çalışma en yüksek güvenilirliği sunar",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/9155-300x2661-1-300x266.jpg",
            docs: [
                { label: "Teknik Özellikler (PDF)", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_91551.pdf", primary: true },
            ],
        },
        {
            title: "9170+ Serisi",
            description: "Güç ve mantık için N+X yedeklilik, sistem düzeyinde tek hata noktasını ortadan kaldırır.",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/9170_plus-181x3001-1-181x300.jpg",
            docs: [
                { label: "Teknik Özellikler (PDF)", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_91701.pdf", primary: true },
            ],
        },
        {
            title: "Eaton 93E",
            description: "Büyük veri merkezleri ve kritik altyapılar için yüksek güç kapasiteli, modüler UPS.",
            image: "https://www.ecsintl.com/wp-content/uploads/2023/12/93E-200x3001-1-200x300.jpg",
            docs: [
                { label: "93E Serisi", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_93E1.pdf", primary: true },
                { label: "93PM Serisi", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_93PM1.pdf" },
                { label: "9355 Serisi", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_93551.pdf", primary: true },
                { label: "9390 Serisi", url: "https://www.ecsintl.com/wp-content/uploads/2023/12/Eaton_9390IT1.pdf" },
            ],
        },
    ];

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'UPS Çözümleri', path: '/cozumler/ups-cozumleri' },
        { label: 'Eaton / Powerware', path: '/cozumler/ups-cozumleri/eaton-powerware-ups' },
        { label: '9 Serisi' }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Eaton 9 Serisi UPS"
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* CONTENT */}
            <section className="category-features">
                <div className="section-header">
                    <h2>Eaton 9 Serisi Ürünler</h2>
                    <p style={{ fontWeight: "bold" }}>
                        Eaton güç yedekleme felsefesi, belirlenen dokuz güç kalitesi sorununa odaklanmaktadır.
                        9 Serisi çözümler, en yüksek koruma ve süreklilik ihtiyacı olan sistemler için tasarlanmıştır.
                    </p>
                </div>

                <div className="series-wrap">
                    {/* Üst açıklama alanı */}
                    <div className="series-top">
                        <p>
                            Dokuz yaygın güç sorunu türü vardır. Aşağıdaki ikonlar; Eaton 9 Serisi çözümlerinin
                            hedeflediği güç kalitesi problemlerini gösterir.
                        </p>

                        <Link
                            to="/cozumler/ups-cozumleri/eaton-powerware-ups"
                            className="series-back-btn"
                        >
                            ← Önceki Sayfaya Dön
                        </Link>
                    </div>

                    {/* 9 ikon kutusu */}
                    <div className="series-icon-grid">
                        {icons.map((it, idx) => (
                            <div className="series-icon-card" key={idx}>
                                <div className="series-icon">{it.svg}</div>
                                <div className="series-icon-text">{it.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Ürün kartları (Eaton3Series ile aynı yapı) */}
                    {products.map((p, idx) => (
                        <div className="series-product-card" key={idx}>
                            <div className="series-product-image">
                                <img src={p.image} alt={p.title} />
                            </div>

                            <div className="series-product-info">
                                <h2>{p.title}</h2>
                                <p className="series-product-desc">
                                    {p.description}
                                </p>


                                <div className="series-docs">
                                    {p.docs.map((d, dIdx) => (
                                        <a
                                            key={dIdx}
                                            href={d.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`series-doc-btn ${d.primary ? "primary" : ""}`}
                                        >
                                            {d.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Eaton9Series;
