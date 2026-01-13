import { Link } from 'react-router-dom';
import VideoSection from '../components/VideoSection';
import './More.css';

const More = () => {
    const brochures = [
        {
            id: 1,
            title: 'Kurumsal Tanıtım Broşürü',
            description: 'Şirketimiz, hizmetlerimiz ve değerlerimiz hakkında kapsamlı bilgi.',
            size: '2.4 MB',
            format: 'PDF',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400'
        },
        {
            id: 2,
            title: 'Güneş Enerjisi Çözümleri',
            description: 'Güneş paneli sistemleri ve uygulamaları hakkında detaylı katalog.',
            size: '3.8 MB',
            format: 'PDF',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400'
        },
        {
            id: 3,
            title: 'Enerji Depolama Rehberi',
            description: 'Batarya sistemleri ve enerji depolama çözümleri teknik dokümanı.',
            size: '1.9 MB',
            format: 'PDF',
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400'
        },
        {
            id: 4,
            title: 'Ürün Kataloğu 2026',
            description: 'Tüm ürünlerimizin güncel fiyat listesi ve teknik özellikleri.',
            size: '5.2 MB',
            format: 'PDF',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400'
        }
    ];

    const faqs = [
        {
            question: 'Güneş enerjisi sistemi kurulumu ne kadar sürer?',
            answer: 'Konut tipi sistemler için ortalama 2-3 gün, ticari sistemler için ise projenin büyüklüğüne göre 1-4 hafta sürebilir. Keşif ve planlama aşaması ayrıca değerlendirilir.'
        },
        {
            question: 'Güneş panellerinin ömrü ne kadardır?',
            answer: 'Kaliteli güneş panelleri 25-30 yıl arası verimli şekilde enerji üretir. Panellerimiz 25 yıl üretici garantisi ile birlikte sunulmaktadır.'
        },
        {
            question: 'Sistemin geri dönüş süresi ne kadardır?',
            answer: 'Ortalama olarak güneş enerjisi sistemleri 4-7 yıl içinde kendini amorti eder. Bu süre elektrik fiyatları, sistem büyüklüğü ve tüketime göre değişebilir.'
        },
        {
            question: 'Bakım gereksinimleri nelerdir?',
            answer: 'Güneş panelleri minimal bakım gerektirir. Yılda 2-4 kez temizlik ve yıllık teknik kontrol yeterlidir. Profesyonel bakım paketlerimiz ile sisteminizi koruma altına alabilirsiniz.'
        },
        {
            question: 'Şebeke bağlantısı nasıl çalışır?',
            answer: 'On-grid sistemlerde üretilen fazla enerji şebekeye satılabilir. Bu sayede elektrik faturanızdan düşüm sağlanır veya enerji kredisi oluşturulur.'
        },
        {
            question: 'Finansman seçenekleri sunuyor musunuz?',
            answer: 'Evet, anlaşmalı bankalarımız aracılığıyla %0 faizli taksit seçenekleri ve 60 aya varan ödeme planları sunmaktayız.'
        }
    ];

    const certifications = [
        { name: 'ISO 9001', description: 'Kalite Yönetim Sistemi' },
        { name: 'ISO 14001', description: 'Çevre Yönetim Sistemi' },
        { name: 'ISO 45001', description: 'İş Sağlığı ve Güvenliği' },
        { name: 'TÜV', description: 'Ürün Kalite Sertifikası' }
    ];

    const downloadBrochure = (brochureTitle) => {
        // Simulated download - in production, this would link to actual PDF files
        alert(`"${brochureTitle}" indiriliyor...`);
    };

    return (
        <div className="more-page">
            {/* Hero Section */}
            <section className="more-hero">
                <div className="more-hero-overlay"></div>
                <div className="more-hero-content">
                    <h1>Daha Fazlası</h1>
                    <p>Hakkımızda bilgi edinin, broşürlerimizi indirin ve sorularınıza yanıt bulun</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Daha Fazlası</span>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2>Hakkımızda</h2>
                            <p className="about-lead">
                                2010 yılından bu yana sürdürülebilir enerji çözümleri sunarak
                                Türkiye'nin enerji dönüşümüne katkıda bulunuyoruz.
                            </p>
                            <p>
                                Enerji Çözümleri olarak, evler, işletmeler ve endüstriyel tesisler için
                                yenilikçi enerji sistemleri tasarlıyor, kurulum yapıyor ve bakım hizmetleri
                                sunuyoruz. 15 yılı aşkın tecrübemiz ve 500'den fazla tamamlanmış projemizle
                                sektörün lider firmalarından biriyiz.
                            </p>
                            <p>
                                Misyonumuz, müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunarak
                                enerji bağımsızlığı kazanmalarına yardımcı olmaktır. Yenilenebilir enerji
                                kaynaklarının yaygınlaşması için çalışıyor, çevreye duyarlı çözümler geliştiriyoruz.
                            </p>
                            <div className="about-values">
                                <div className="value-item">
                                    <span className="value-icon">🎯</span>
                                    <div>
                                        <h4>Kalite Odaklılık</h4>
                                        <p>En yüksek standartlarda ürün ve hizmet</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <span className="value-icon">🤝</span>
                                    <div>
                                        <h4>Müşteri Memnuniyeti</h4>
                                        <p>%98 müşteri memnuniyet oranı</p>
                                    </div>
                                </div>
                                <div className="value-item">
                                    <span className="value-icon">🌱</span>
                                    <div>
                                        <h4>Sürdürülebilirlik</h4>
                                        <p>Çevreye duyarlı çözümler</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800" alt="Ekibimiz" />
                            <div className="experience-badge">
                                <span className="years">15+</span>
                                <span className="text">Yıllık Deneyim</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brochures Section */}
            <section className="brochures-section">
                <div className="container">
                    <h2 className="section-title">Broşür İndir</h2>
                    <p className="section-subtitle">
                        Ürün ve hizmetlerimiz hakkında detaylı bilgi almak için broşürlerimizi indirebilirsiniz.
                    </p>
                    <div className="brochures-grid">
                        {brochures.map(brochure => (
                            <div className="brochure-card" key={brochure.id}>
                                <div className="brochure-image">
                                    <img src={brochure.image} alt={brochure.title} />
                                    <div className="brochure-format">{brochure.format}</div>
                                </div>
                                <div className="brochure-content">
                                    <h3>{brochure.title}</h3>
                                    <p>{brochure.description}</p>
                                    <div className="brochure-meta">
                                        <span className="file-size">{brochure.size}</span>
                                        <button
                                            className="download-btn"
                                            onClick={() => downloadBrochure(brochure.title)}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                            </svg>
                                            İndir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <VideoSection
                title="Tanıtım Videomuz"
                subtitle="Şirketimizi ve projelerimizi daha yakından tanıyın."
            />

            {/* Certifications Section */}
            <section className="certifications-section">
                <div className="container">
                    <h2 className="section-title">Sertifikalarımız</h2>
                    <p className="section-subtitle">
                        Uluslararası standartlarda kalite ve güvenilirlik garantisi sunuyoruz.
                    </p>
                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <div className="cert-card" key={index}>
                                <div className="cert-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="8" r="6" />
                                        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                                    </svg>
                                </div>
                                <h3>{cert.name}</h3>
                                <p>{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Sıkça Sorulan Sorular</h2>
                    <p className="section-subtitle">
                        Merak ettiğiniz soruların yanıtlarını burada bulabilirsiniz.
                    </p>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <details className="faq-item" key={index}>
                                <summary>
                                    <span>{faq.question}</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="6,9 12,15 18,9" />
                                    </svg>
                                </summary>
                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="more-cta">
                <div className="container">
                    <div className="more-cta-content">
                        <h2>Daha Fazla Bilgi mi İstiyorsunuz?</h2>
                        <p>
                            Uzman ekibimiz sorularınızı yanıtlamak için burada.
                            Şimdi bizimle iletişime geçin.
                        </p>
                        <Link to="/iletisim" className="btn btn-white">
                            Bizimle İletişime Geçin
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default More;
