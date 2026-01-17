import { Link } from 'react-router-dom';
import '../SolutionCategory.css';

const XtremePowerUPS = () => {
    const products = [
        {
            id: 'x60',
            title: 'TX90 6kVA ve 10kVA Çevrimiçi Kule UPS',
            description: 'İzole çevrimiçi UPS, en zorlu koşullarda en temiz gücü sağlar. TX90 galvanik izolasyon transformatörü, tipik transformatörsüz çevrimiçi tasarımlarda maruz kalan ortak mod gürültüsünü önler. İzole çevrimiçi uygulamalar arasında perakende, endüstriyel ortamlar, laboratuvarlar ve topraklama veya gürültü sorunları olan tüm kurulumlar bulunur.TX90, çok çeşitli gereksinimleri karşılamak için çift çıkış voltajı ve programlanabilir çıkış frekansı sağlar.',
            image: 'https://www.ecsintl.com/wp-content/uploads/2023/12/P90-front-Large1-1024x683.png',
            datasheet: 'https://www.ecsintl.com/wp-content/uploads/2017/11/tx6-10_flyer.pdf'
        },
        {
            id: 'p80',
            title: 'P80 UPS',
            description: 'P80, kritik verileri ve ekipmanları güç sorunlarından korurken temiz ve güvenilir ağ sınıfı güç sağlayan saf sinüs dalgalı hat etkileşimli bir UPS dir. P80 üniteleri, mevcut en yüksek verimliliğe sahiptir ve tüm yük seviyelerinde elektrik maliyetlerinde tasarruf sağlar. P80 tasarımı, kule, raf veya isteğe bağlı duvar montajı dahil olmak üzere esnek montaj imkanı sunar. P80 unity ve 0,90 Güç Faktörü modelleri, yüksek yoğunluklu yükler için daha fazla güç sağlar.',
            image: 'https://www.ecsintl.com/wp-content/uploads/2023/12/P80-front-right-Large1-1024x290.png',
            datasheet: 'https://www.ecsintl.com/wp-content/uploads/2023/12/p80_flyer1.pdf'
        },
        {
            id: 'p90l',
            title: 'P90L UPS',
            description: 'P90L, uygun uzatılmış pil paketlerine veya büyük harici sistemlere bağlanmak için dahili yüksek kapasiteli şarj cihazına sahip gerçek bir çevrimiçi UPS dir. P90L, kule, raf ve duvara montaj seçenekleri sunar.Ekipmanınızı elektrik kesintilerinden, voltaj düşüşlerinden, voltaj dalgalanmalarından ve aşırı voltajlardan korur.P90L, enerji maliyetlerini azaltarak ve ısı çıkışını düşürerek en düşük toplam sahip olma maliyetini sunar.',
            image: 'https://www.ecsintl.com/wp-content/uploads/2025/07/p90l_front-e1702829462438-1000x553.jpg',
            datasheet: ' '
        },
        {
            id: 'j60',
            title: 'Xtreme J60',
            description: 'Xtreme J60 gelişmiş tasarımı, lityum iyon güç kaynağına sahip UPS ve gelişmiş aşırı gerilim bastırma teknolojisinin avantajlarını bir araya getirir. İnce form faktörü (sadece 1,25 inç), duvara montaj ve kolay erişilebilir prizler, J60 ı oteller, restoranlar, hastaneler, kampüsler, havaalanları ve diğer ticari alanlarda kullanılan ince ekranların arkasına monte etmek için ideal hale getirir. J60 ın kompakt tasarımı dijital tabela endüstrisi için çekici olmakla birlikte, kiosklar, oyun makineleri, bilgisayarlar, satış noktası ekipmanları ve küçük yazıcılar için de mükemmel koruma sağlar. J60, geleneksel UPS lerin sığamayacağı yerlere kolayca sığar.',
            image: 'https://www.ecsintl.com/wp-content/uploads/2023/12/J60-oblique-Large1-1024x683.png',
            datasheet: 'https://www.ecsintl.com/wp-content/uploads/2023/12/J60-flyer.pdf'
        }
    ];

    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Xtreme Power Serisi UPS Üniteleri</h1>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <Link >UPS Çözümleri</Link>
                        <span>/</span>
                        <span>Xtreme Power Serisi</span>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="category-features">
                <div className="product-list-vertical">
                    {products.map((product) => (
                        <div className="product-item-horizontal" key={product.id}>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                {product.datasheet?.trim() && (
                                    <a
                                        href={product.datasheet}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem' }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                            <polyline points="14,2 14,8 20,8" />
                                            <path d="M16 13H8M16 17H8M10 9H8" />
                                        </svg>
                                        Tüm Detaylar
                                    </a>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default XtremePowerUPS;
