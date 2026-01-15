import { Link } from 'react-router-dom';
import './SolutionCategory.css';

const RenewedUPS = () => {
    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 4v6h-6M1 20v-6h6" />
                    <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
                </svg>
            ),
            title: 'Yenilenmiş',
            description: 'Fabrika ayarlarına döndürülmüş, tüm bileşenleri titizlikle kontrol edilmiş sistemler.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
            ),
            title: 'Stokta Mevcut',
            description: 'En popüler modellerimiz depomuzda sevkiyata hazır beklemektedir.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
            ),
            title: 'Ekonomik',
            description: 'Sıfır ekipman maliyetine kıyasla bütçenizi zorlamayan yüksek tasarruflu çözümler.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Güvenilir',
            description: 'Enerji kesintilerine karşı tam koruma sağlayan, garanti kapsamındaki üniteler.'
        }
    ];

    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Güvenilir Güç Koruması için Yenilenmiş UPS Sistemleri</h1>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link to="/cozumler">Çözümler</Link>
                        <span>/</span>
                        <Link to="/cozumler/ups-cozumleri">UPS Çözümleri</Link>
                        <span>/</span>
                        <span>Yenilenmiş UPS</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="category-features">
                <div className="section-header">
                    <p>Energy Control Systems, tek ve üç fazlı yenilenmiş UPS sistemlerinin stokta mevcut olduğunu duyurur.
                        Herkesin yenisini tercih ettiğini biliyoruz, ancak ekonominin mevcut durumu göz önüne alındığında, yeni ürünler her zaman bütçeye uygun olmayabilir. Neyse ki, yine de kaliteli UPS ekipmanları edinebilirsiniz.
                    </p>
                    <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                        İhtiyaçlarınızı <a href="tel:8003836956" style={{ color: 'inherit', textDecoration: 'underline' }}>800-383-6956</a> numaralı telefondan bize bildirebilir veya <a href="mailto:upsrefurb@ecsintl.com" style={{ color: 'inherit', textDecoration: 'underline' }}>upsrefurb@ecsintl.com</a> adresine e-posta gönderebilirsiniz.
                    </p>
                </div>

                <div className="renewed-ups-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default RenewedUPS;
