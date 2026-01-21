// InstallationPages.jsx
import Hero from '../../../components/Hero';
import '../../more/MoreCategory.css';
import '../SolutionCategory.css';

const InstallationPages = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler', path: '/cozumler' },
        { label: 'SineTamer' },
        { label: 'Kurulum Sayfaları' }
    ];

    const installationGuides = [
        {
            id: 1,
            title: 'SineTamer LA Kurulum Kılavuzu',
            description: 'SineTamer LA serisi ürünlerin profesyonel kurulum adımları ve teknik detayları.',
            size: '1.2 MB',
            pages: 8,
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
            url: '/pdfs/installation/la-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 2,
            title: 'SineTamer LM Kurulum Kılavuzu',
            description: 'SineTamer LM serisi cihazların montaj ve bağlantı prosedürleri.',
            size: '1.4 MB',
            pages: 10,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            url: '/pdfs/installation/lm-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 3,
            title: 'Avantaj Serisi Kurulum Kılavuzu',
            description: 'SineTamer Avantaj üniteleri için detaylı kurulum ve devreye alma talimatları.',
            size: '2.1 MB',
            pages: 12,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
            url: '/pdfs/installation/advantage-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 4,
            title: 'Orta Gerilim Üniteleri Kurulum Kılavuzu',
            description: 'Orta gerilim SineTamer üniteleri için güvenli kurulum prosedürleri.',
            size: '2.5 MB',
            pages: 14,
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400',
            url: '/pdfs/installation/mv-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 5,
            title: 'Veri/Telekom Üniteleri Kurulum Kılavuzu',
            description: 'Veri merkezi ve telekomünikasyon tesisatları için özel kurulum rehberi.',
            size: '1.8 MB',
            pages: 10,
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400',
            url: '/pdfs/installation/data-telecom-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 6,
            title: 'Bireysel Devre Üniteleri Kurulum Kılavuzu',
            description: 'Bireysel devre koruma üniteleri için adım adım montaj talimatları.',
            size: '1.3 MB',
            pages: 8,
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400',
            url: '/pdfs/installation/individual-circuit-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 7,
            title: 'Aşırı Gerilim Koruma Cihazı Kurulum Kılavuzu',
            description: 'SPD cihazlarının doğru kurulum ve topraklama prosedürleri.',
            size: '1.6 MB',
            pages: 10,
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400',
            url: '/pdfs/installation/spd-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 8,
            title: 'Panel Montaj Kılavuzu',
            description: 'Elektrik panolarına SineTamer ürünlerinin entegre edilmesi.',
            size: '1.1 MB',
            pages: 6,
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
            url: '/pdfs/installation/panel-mount-guide.pdf',
            color: '#1a2f6e',
        },
        {
            id: 9,
            title: 'Endüstriyel Tesis Kurulum Kılavuzu',
            description: 'Büyük ölçekli endüstriyel tesisler için kapsamlı kurulum rehberi.',
            size: '3.2 MB',
            pages: 18,
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400',
            url: '/pdfs/installation/industrial-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 10,
            title: 'Ticari Bina Kurulum Kılavuzu',
            description: 'Ofis ve ticari binalar için SineTamer kurulum prosedürleri.',
            size: '1.9 MB',
            pages: 12,
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
            url: '/pdfs/installation/commercial-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 11,
            title: 'Hastane ve Sağlık Tesisleri Kurulum Kılavuzu',
            description: 'Kritik sağlık altyapıları için özel kurulum gereksinimleri.',
            size: '2.4 MB',
            pages: 14,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
            url: '/pdfs/installation/healthcare-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 12,
            title: 'Veri Merkezi Kurulum Kılavuzu',
            description: 'Data center altyapıları için yüksek güvenlikli kurulum talimatları.',
            size: '2.8 MB',
            pages: 16,
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
            url: '/pdfs/installation/datacenter-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 13,
            title: 'Telekomünikasyon Altyapısı Kurulum Kılavuzu',
            description: 'Telekom baz istasyonları ve altyapılar için kurulum rehberi.',
            size: '2.0 MB',
            pages: 12,
            image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400',
            url: '/pdfs/installation/telecom-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 14,
            title: 'Yenilenebilir Enerji Sistemleri Kurulum Kılavuzu',
            description: 'Güneş ve rüzgar enerji sistemleri için SineTamer entegrasyonu.',
            size: '2.2 MB',
            pages: 14,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
            url: '/pdfs/installation/renewable-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 15,
            title: 'Genel Kurulum ve Bakım Rehberi',
            description: 'Tüm SineTamer ürünleri için genel kurulum prensipleri ve bakım tavsiyeleri.',
            size: '3.5 MB',
            pages: 20,
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400',
            url: '/pdfs/installation/general-installation-guide.pdf',
            color: '#1a2f6e',
        },
        {
            id: 16,
            title: 'Asansör Sistemleri Kurulum Kılavuzu',
            description: 'Asansör ve yürüyen merdiven sistemleri için aşırı gerilim koruma kurulumu.',
            size: '1.7 MB',
            pages: 10,
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
            url: '/pdfs/installation/elevator-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 17,
            title: 'Petrol ve Gaz Tesisleri Kurulum Kılavuzu',
            description: 'Petrol rafinerileri ve gaz tesisleri için güvenli kurulum prosedürleri.',
            size: '2.6 MB',
            pages: 16,
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400',
            url: '/pdfs/installation/oil-gas-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 18,
            title: 'Fabrika Otomasyon Sistemleri Kurulum Kılavuzu',
            description: 'Endüstriyel otomasyon ve PLC sistemleri için koruma kurulumu.',
            size: '2.3 MB',
            pages: 14,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            url: '/pdfs/installation/automation-installation.pdf',
            color: '#1a2f6e',
        },
        {
            id: 19,
            title: 'Hızlı Başlangıç Rehberi',
            description: 'SineTamer ürünlerinin temel kurulum adımları için hızlı referans kılavuzu.',
            size: '850 KB',
            pages: 4,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
            url: '/pdfs/installation/quick-start-guide.pdf',
            color: '#1a2f6e',
        },
    ];

    const warrantyDocuments = [
        {
            id: 1,
            title: 'SineTamer Standart Garanti Belgesi',
            description: 'Tüm SineTamer ürünleri için geçerli standart garanti koşulları ve şartları.',
            size: '450 KB',
            pages: 4,
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
            url: '/pdfs/warranty/standard-warranty.pdf',
            color: '#0d1b4c',
        },
        {
            id: 2,
            title: 'Uzatılmış Garanti Belgesi',
            description: 'Ek koruma için uzatılmış garanti programı detayları ve başvuru koşulları.',
            size: '520 KB',
            pages: 6,
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400',
            url: '/pdfs/warranty/extended-warranty.pdf',
            color: '#0d1b4c',
        },
    ];

    const downloadDocument = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="more-category-page">
            <Hero
                title="Kurulum Sayfaları"
                description="SineTamer ürünlerinin profesyonel kurulum kılavuzları ve garanti belgeleri"
                backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Installation Guides Grid */}
            <section className="more-content-section">
                <div className="content-container" style={{ maxWidth: '1400px' }}>
                    <div className="content-header">
                        <h2>Kurulum Kılavuzları</h2>
                        <p>Tüm SineTamer ürünleri için detaylı kurulum talimatları</p>
                    </div>

                    <div className="brochures-grid-new">
                        {installationGuides.map((guide) => (
                            <div className="brochure-card-new" key={guide.id}>
                                <div className="brochure-image-new">
                                    <img src={guide.image} alt={guide.title} />
                                    <div
                                        className="brochure-overlay"
                                        style={{
                                            background: `linear-gradient(135deg, ${guide.color}ee 0%, ${guide.color}99 100%)`,
                                        }}
                                    >
                                        <div className="pdf-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                <polyline points="14,2 14,8 20,8" />
                                                <path d="M9 15h6M9 11h6" />
                                            </svg>
                                        </div>
                                        <span className="page-count">{guide.pages} Sayfa</span>
                                    </div>
                                </div>

                                <div className="brochure-content-new">
                                    <h3>
                                        <a
                                            href={guide.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="brochure-title-link"
                                            aria-label={`${guide.title} (yeni sekmede aç)`}
                                        >
                                            {guide.title}
                                        </a>
                                    </h3>

                                    <p>{guide.description}</p>

                                    <div className="brochure-footer">
                                        <span className="file-info">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                <polyline points="14,2 14,8 20,8" />
                                            </svg>
                                            PDF • {guide.size}
                                        </span>

                                        <button className="download-button" onClick={() => downloadDocument(guide.url)}>
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

            {/* Warranty Documents Section */}
            <section className="more-content-section" style={{ backgroundColor: 'var(--gray-light)', paddingTop: '3rem' }}>
                <div className="content-container" style={{ maxWidth: '1400px' }}>
                    <div className="content-header">
                        <h2>Garanti Belgeleri</h2>
                        <p>Ürün garanti koşulları ve belgeler</p>
                    </div>

                    <div className="brochures-grid-new" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                        {warrantyDocuments.map((doc) => (
                            <div className="brochure-card-new" key={doc.id}>
                                <div className="brochure-image-new">
                                    <img src={doc.image} alt={doc.title} />
                                    <div
                                        className="brochure-overlay"
                                        style={{
                                            background: `linear-gradient(135deg, ${doc.color}ee 0%, ${doc.color}99 100%)`,
                                        }}
                                    >
                                        <div className="pdf-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            </svg>
                                        </div>
                                        <span className="page-count">{doc.pages} Sayfa</span>
                                    </div>
                                </div>

                                <div className="brochure-content-new">
                                    <h3>
                                        <a
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="brochure-title-link"
                                            aria-label={`${doc.title} (yeni sekmede aç)`}
                                        >
                                            {doc.title}
                                        </a>
                                    </h3>

                                    <p>{doc.description}</p>

                                    <div className="brochure-footer">
                                        <span className="file-info">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                <polyline points="14,2 14,8 20,8" />
                                            </svg>
                                            PDF • {doc.size}
                                        </span>

                                        <button className="download-button" onClick={() => downloadDocument(doc.url)}>
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

export default InstallationPages;
