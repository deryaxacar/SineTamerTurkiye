import { Link } from "react-router-dom";
import '../SolutionCategory.css';

const EatonPowerwareUPS = () => {
    const categories = [
        {
            id: "eaton3",
            title: "Eaton 3 Serisi",
            to: "/cozumler/ups-cozumleri/eaton-powerware/3-serisi",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
        },
        {
            id: "eaton5",
            title: "Eaton 5 Serisi",
            to: "/cozumler/ups-cozumleri/eaton-powerware/5-serisi",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="6" rx="2" />
                    <rect x="3" y="14" width="18" height="6" rx="2" />
                    <path d="M7 7h.01M7 17h.01" />
                </svg>
            ),
        },
        {
            id: "eaton9",
            title: "Eaton 9 Serisi",
            to: "/cozumler/ups-cozumleri/eaton-powerware/9-serisi",
            icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="18" height="10" rx="2" />
                    <path d="M22 11v2" />
                    <path d="M7 12h6" />
                </svg>
            ),
        },
    ];

    return (
        <div className="solution-category-page">
            {/* HERO */}
            <section
                className="category-hero"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)" }}
            >
                <div className="category-hero-overlay" />
                <div className="category-hero-content">
                    <h1>Eaton / Powerware UPS Çözümleri</h1>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <Link to="/cozumler/ups-cozumleri">UPS Çözümleri</Link>
                        <span>/</span>
                        <span>Eaton / Powerware</span>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="category-features">
                <div className="eaton-wrap">

                    {/* INTRO */}
                    <div className="eaton-intro">
                        {/* VIDEO */}
                        <div className="eaton-video-card">
                            <div className="eaton-card-head">
                                <p>
                                    Eaton UPS, değerli verilerinizi ve ekipmanlarınızı güç sorunlarından korumak için eksiksiz bir çözüm sunar. </p> <br></br>

                                <p> Eaton, kesintisiz güç sistemleri (UPS), güç yönetimi yazılımı ve dünya standartlarında hizmet sunan eksiksiz bir ürün yelpazesi sunar. Bu ürünler, ağ, PC, finans, endüstri, ses ve veri iletişimi, askeri ve havacılık uygulamaları gibi birçok alanda kullanılır. Günlük operasyonlarınız için kesintisiz güç kaynağına ihtiyacınız varsa, doğru adres biziz.
                                </p><br></br>
                            </div>

                            <div className="eaton-video-frame">
                                <iframe
                                    src="https://www.youtube.com/embed/jbsp8JpLu54"
                                    title="Eaton UPS"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="eaton-side">
                            <div className="eaton-image-card">
                                <img
                                    src="https://www.ecsintl.com/wp-content/uploads/2023/12/11-20-1-1024x538.jpg"
                                    alt="Eaton UPS"
                                />
                            </div>

                            <div className="eaton-text-card">
                                <h3>Arıza Süresinin Maliyeti </h3>
                                <p>Interpose Inc. tarafından hazırlanan bir çalışma, Windows tabanlı sistemlerin Toplam İşletim Maliyetini analiz etmektedir. Çalışmada, işletim maliyetleri Donanım ve Yazılım, Yönetim, Destek, Kesinti Süresi ve diğer birkaç kalem olarak ayrıştırılmıştır. Araştırmaya göre, masaüstü bilgisayarların TCM'si yıllık yaklaşık 7250 dolar civarındadır! İnanılmaz bir rakam! En çok ilgimizi çeken rakam, TCO'nun %20'sinin kesinti süresine ayrılmasıdır! Bu maliyetin %50'sini güçle ilgili olarak tahmin edersek, ağa bağlı bir PC'nin yıllık işletim maliyetinin yaklaşık 725 doları yetersiz güç kaynaklarına atfedilebilir!!!
                                </p>
                                <a
                                    href="https://www.ecsintl.com/wp-content/uploads/2023/12/Cost-and-causes-of-downtime1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="eaton-ref-link"
                                >
                                    Sistem arızalarının maliyetleri ve nedenleri hakkında bu makaleye bir göz atın →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* INTRO ALT METİN (videodan bağımsız) */}
                    <div className="eaton-bottom-note">
                        <p>Üretim sektöründe kesinti süreleri neredeyse kabul edilemez bir durumdur. Ancak Business Week dergisi, “Yılda 26 milyar dolarlık zaman ve gelir kaybının elektrikle ilgili sorunlara atfedilebileceğini” bildirmiştir. Computerworld dergisi ise, ortalama bir şirketin bilgisayar kesinti sürelerinin saat başına maliyetinin 78.191 dolar olduğunu bildirmiştir. Ayrıca, Contingency Planning Research Inc. şirketine göre, ABD'deki bilgisayar kurulumlarında veri kaybının yaklaşık %50'sinin nedeni elektrik sorunlarıdır. Bu nedenle, UPS'in sağlayabileceği sürekli ve kaliteli bir güç kaynağı sağlayan çözümleri değerlendirmek ekonomik açıdan mantıklıdır.
                        </p>
                    </div>

                    {/* CATEGORIES */}
                    <div className="eaton-cats">
                        <div className="eaton-cats-head">
                            <h2>Kategoriler</h2>
                            <p>İlgili ürün grubunu seçerek detaylara ilerleyin.</p>
                        </div>

                        <div className="eaton-cats-grid">
                            {categories.map((c) => (
                                <Link key={c.id} to={c.to} className="eaton-cat-card">
                                    <div className="eaton-cat-icon">{c.icon}</div>
                                    <div>
                                        <h3>{c.title}</h3>
                                        <p>{c.desc}</p>
                                        <span className="eaton-cat-link">İncele →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div >
            </section >
        </div >
    );
};

export default EatonPowerwareUPS;
