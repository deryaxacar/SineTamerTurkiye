// BrochuresPage.jsx
import { Link } from 'react-router-dom';
import './MoreCategory.css';

const BrochuresPage = () => {
    const brochures = [
        {
            id: 1,
            title: 'Global Teknoloji Devrimi',
            description: 'Küresel dijital dönüşümün elektronik altyapılar üzerindeki etkilerini ele alan bu broşür, güç kalitesi kaynaklı riskleri ve bu risklere karşı geliştirilen SineTamer® çözümlerini genel hatlarıyla tanıtmaktadır.',
            size: '467 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
            url: '/pdfs/GlobalTechnologyRev7.pdf',
            color: '#1a2f6e',
        },
        {
            id: 2,
            title: 'SineTamer Broşürü',
            description: 'Bu broşür, SineTamer® aşırı gerilim koruma teknolojisinin endüstriyel ve ticari tesislerde elektronik sistemlerin sürekliliğini ve operasyonel güvenilirliğini etkin biçimde nasıl artırdığını özetler.',
            size: '1.264 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400',
            url: '/pdfs/ecsbrochure12-1.pdf',
            color: '#1a2f6e',
        },
        {
            id: 3,
            title: 'Dalgalanma Bastırma Broşürü',
            description: 'Elektronik sistemleri ani gerilim darbelerine karşı korumaya yönelik geliştirilen Surge Suppression çözümlerini ele alan bu broşür, endüstriyel ve ticari uygulamalar için sunulan teknolojileri özetler.',
            size: '460 KB',
            pages: 4,
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400',
            url: '/pdfs/ssi-prodbrochure.pdf',
            color: '#1a2f6e',
        },
        {
            id: 4,
            title: 'SineTamer Petrol Broşürü',
            description: 'Petrol ve enerji üretim tesislerinde elektronik altyapıları ani gerilim darbelerine karşı korumaya yönelik geliştirilen SineTamer® çözümlerini ele alan bu broşür, operasyonel süreklilik ve sistem güvenilirliği üzerine odaklanır.',
            size: '1.126 KB',
            pages: 4,
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400',
            url: '/pdfs/sinetamerpetroleum-1.pdf',
            color: '#1a2f6e',
        },
        {
            id: 5,
            title: 'SineTamer Portekizce Broşürü',
            description: 'Elektronik sistemlerin ani gerilim ve geçici dalgalanmalara karşı korunmasına yönelik geliştirilen SineTamer® surge protection çözümlerini ele alan bu broşür, endüstriyel ve ticari uygulamalar için koruma teknolojilerini özetler.',
            size: '1.908 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            url: '/pdfs/portuguese-web.pdf',
            color: '#1a2f6e',
        },
        {
            id: 6,
            title: 'Aşırı Gerilim Koruma Ürünü Kullanım Kılavuzu',
            description: 'Misyon kritik elektronik sistemleri yıldırım ve ani gerilim darbelerine karşı korumak için geliştirilen Advantage® serisi aşırı gerilim koruma çözümlerini tanıtan bu broşür, temel performans özelliklerini özetler.',
            size: '1.624 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400',
            url: '/pdfs/ssiproductinsert.pdf',
            color: '#1a2f6e',
        },
        {
            id: 7,
            title: 'SineTamer Katalog Broşürü 2012',
            description: 'SineTamer® ürün ailesinin aşırı gerilim koruma çözümlerini, uygulama alanlarını ve teknik özelliklerini ele alan bu broşür, endüstriyel ve ticari sistemler için sunulan ürün seçeneklerini özetler.',
            size: '4.5 MB',
            pages: 12,
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400',
            url: '/pdfs/sinetamer-catalog-brochure-2012.pdf',
            color: '#1a2f6e',
        },
        {
            id: 8,
            title: 'Enerji Kontrol Sistemleri Teklifleri',
            description: 'Güç kalitesi, UPS sistemleri, aşırı gerilim koruma ve batarya çözümlerini kapsayan bu broşür, ECS’in endüstriyel ve ticari tesisler için sunduğu mühendislik odaklı enerji çözümlerini özetler.',
            size: '1.444 KB',
            pages: 4,
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
            url: '/pdfs/ECS_2020.pdf',
            color: '#1a2f6e',
        },
    ];

    // Gerçek indirme (public içindeki dosyayı indirir)
    const downloadBrochure = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="more-category-page">
            {/* Hero Section */}
            <section
                className="more-hero"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920)',
                }}
            >
                <div className="more-hero-overlay"></div>
                <div className="more-hero-content">
                    <h1>Broşürler</h1>
                    <p>Ürün ve hizmetlerimiz hakkında detaylı bilgi için broşürlerimizi indirin</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link>Daha Fazlası</Link>
                        <span>/</span>
                        <span>Broşürler</span>
                    </div>
                </div>
            </section>

            {/* Brochures Grid */}
            <section className="more-content-section">
                <div className="content-container" style={{ maxWidth: '1400px' }}>
                    <div className="content-header">
                        <h2>İndirilebilir Broşürler</h2>
                        <p>Tüm katalog ve dökümanlarımıza buradan ulaşabilirsiniz</p>
                    </div>

                    <div className="brochures-grid-new">
                        {brochures.map((brochure) => (
                            <div className="brochure-card-new" key={brochure.id}>
                                <div className="brochure-image-new">
                                    <img src={brochure.image} alt={brochure.title} />
                                    <div
                                        className="brochure-overlay"
                                        style={{
                                            background: `linear-gradient(135deg, ${brochure.color}ee 0%, ${brochure.color}99 100%)`,
                                        }}
                                    >
                                        <div className="pdf-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                <polyline points="14,2 14,8 20,8" />
                                                <path d="M9 15h6M9 11h6" />
                                            </svg>
                                        </div>
                                        <span className="page-count">{brochure.pages} Sayfa</span>
                                    </div>
                                </div>

                                <div className="brochure-content-new">
                                    {/* Başlığa tıklayınca PDF webde (yeni sekme) açılır */}
                                    <h3>
                                        <a
                                            href={brochure.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="brochure-title-link"
                                            aria-label={`${brochure.title} (yeni sekmede aç)`}
                                        >
                                            {brochure.title}
                                        </a>
                                    </h3>

                                    <p>{brochure.description}</p>

                                    <div className="brochure-footer">
                                        <span className="file-info">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                <polyline points="14,2 14,8 20,8" />
                                            </svg>
                                            PDF • {brochure.size}
                                        </span>

                                        <button className="download-button" onClick={() => downloadBrochure(brochure.url)}>
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
        </div>
    );
};

export default BrochuresPage;
