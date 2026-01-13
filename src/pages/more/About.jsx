import { Link } from 'react-router-dom';
import './MoreCategory.css';

const About = () => {
    const values = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22,4 12,14.01 9,11.01" />
                </svg>
            ),
            title: 'Kalite Odaklılık',
            description: 'En yüksek standartlarda ürün ve hizmet sunmayı taahhüt ediyoruz.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
            ),
            title: 'Müşteri Memnuniyeti',
            description: '%98 müşteri memnuniyet oranı ile sektörde lider konumdayız.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: 'Güvenilirlik',
            description: '15 yıllık tecrübe ile güvenilir çözümler sunuyoruz.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
            ),
            title: 'Sürdürülebilirlik',
            description: 'Çevreye duyarlı çözümlerle geleceği koruyoruz.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
            ),
            title: 'Yenilikçilik',
            description: 'En son teknolojileri takip ediyor ve uyguluyoruz.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
            ),
            title: 'Uygun Fiyat',
            description: 'En kaliteli ürünleri en rekabetçi fiyatlarla sunuyoruz.'
        }
    ];

    return (
        <div className="more-category-page">
            {/* Hero Section */}
            <section className="more-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920)' }}>
                <div className="more-hero-overlay"></div>
                <div className="more-hero-content">
                    <h1>Hakkımızda</h1>
                    <p>2010 yılından bu yana sürdürülebilir enerji çözümleri sunarak Türkiye'nin enerji dönüşümüne katkıda bulunuyoruz.</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link to="/daha-fazlasi">Daha Fazlası</Link>
                        <span>/</span>
                        <span>Hakkımızda</span>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="two-column-section">
                <div className="two-column-grid">
                    <div className="column-content">
                        <h2>Hikayemiz</h2>
                        <p>
                            Enerji Çözümleri, 2010 yılında yenilenebilir enerji sektörüne öncülük etmek
                            amacıyla kuruldu. İlk günden bu yana, evler, işletmeler ve endüstriyel
                            tesisler için yenilikçi enerji sistemleri tasarlıyor, kurulum yapıyor ve
                            bakım hizmetleri sunuyoruz.
                        </p>
                        <p>
                            15 yılı aşkın tecrübemiz ve 500'den fazla tamamlanmış projemizle sektörün
                            lider firmalarından biriyiz. Misyonumuz, müşterilerimize en kaliteli ürünleri
                            en uygun fiyatlarla sunarak enerji bağımsızlığı kazanmalarına yardımcı olmaktır.
                        </p>
                        <p>
                            Vizyonumuz, Türkiye'nin enerji ihtiyacının %100 yenilenebilir kaynaklardan
                            karşılandığı bir gelecek için çalışmaktır.
                        </p>
                    </div>
                    <div className="column-image">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" alt="Ekibimiz" />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="more-content-section">
                <div className="content-container">
                    <div className="content-header">
                        <h2>Değerlerimiz</h2>
                        <p>Bizi biz yapan temel değerler ve ilkelerimiz</p>
                    </div>
                    <div className="cards-grid">
                        {values.map((value, index) => (
                            <div className="info-card" key={index}>
                                <div className="info-card-icon">{value.icon}</div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="more-cta-section">
                <h2>Bizimle Çalışmak İster misiniz?</h2>
                <p>Ekibimize katılın veya projeleriniz için bizimle iletişime geçin.</p>
                <Link to="/iletisim" className="btn btn-white">
                    İletişime Geçin
                </Link>
            </section>
        </div>
    );
};

export default About;
