import { Link } from 'react-router-dom';
import './SolutionCategory.css';

const XtremePowerUPS = () => {
    const products = [
        {
            id: 'x60',
            title: 'X60 Serisi UPS',
            description: 'Ev ve küçük ofisler için ideal, ekonomik ve güvenilir standby UPS çözümü. Kompakt tasarımı ile yerden tasarruf sağlar.',
            image: 'https://images.unsplash.com/photo-1558494949-ef8b565698fa?w=400',
            datasheet: 'https://www.xpcc.com/wp-content/uploads/2021/03/X60-Datasheet.pdf'
        },
        {
            id: 'p90',
            title: 'P90 Serisi Online UPS',
            description: 'Kritik sistemler için çift çevrimli online teknoloji. Yüksek güç faktörü ve esnek montaj seçenekleri sunar.',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400',
            datasheet: 'https://www.xpcc.com/wp-content/uploads/2021/04/P90-Datasheet.pdf'
        },
        {
            id: 't90',
            title: 'T90 Serisi UPS',
            description: 'Kule tipi tasarım, yüksek verimlilik ve gelişmiş kontrol özellikleri. Sunucu odaları için mükemmel koruma.',
            image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400',
            datasheet: 'https://www.xpcc.com/wp-content/uploads/2021/03/T90-Datasheet.pdf'
        },
        {
            id: 'p91',
            title: 'P91 Serisi Modüler UPS',
            description: 'Ölçeklenebilir güç ve yedeklilik için modüler yapı. Veri merkezleri için yüksek kullanılabilirlik sağlar.',
            image: 'https://images.unsplash.com/photo-1504148455328-497c5ef215d0?w=400',
            datasheet: 'https://www.xpcc.com/wp-content/uploads/2021/04/P91-Datasheet.pdf'
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
                        <Link to="/cozumler">Çözümler</Link>
                        <span>/</span>
                        <Link to="/cozumler/ups-cozumleri">UPS Çözümleri</Link>
                        <span>/</span>
                        <span>Xtreme Power Serisi</span>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="category-features">
                <div className="section-header">
                    <h2>Ürün Portföyümüz</h2>
                    <p>İhtiyacınıza uygun Xtreme Power UPS modellerini keşfedin.</p>
                </div>

                <div className="product-list-vertical">
                    {products.map((product) => (
                        <div className="product-item-horizontal" key={product.id}>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-info">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
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
                                    Data Sheet (PDF)
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default XtremePowerUPS;
