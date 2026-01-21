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
            title: 'Bölünmüş Faz 120/240 volt üniteler',
            size: '44.8 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/1sx-f-install2013.pdf',
            color: '#1a2f6e',
        },
        {
            id: 2,
            title: 'Üç Fazlı WYE/STAR bağlantılı üniteler: Tüm Voltajlar3Yx Kurulum Sayfası',
            size: '44.8 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/1sx-f-install2013.pdf',
            color: '#1a2f6e',
        },
        {
            id: 3,
            title: 'Üç fazlı Delta bağlantılı üniteler: Tüm standart gerilimler',
            size: '272 KB',
            pages: 3,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/3nx-installation2013.pdf',
            color: '#1a2f6e',
        },
        {
            id: 4,
            title: 'ST-(F)SPT üniteleri, seri ünite tipindedir.',
            size: '71.3 KB',
            pages: 3,
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/st-spt-install-rev2013.pdf',
            color: '#1a2f6e',
        },
        {
            id: 5,
            title: 'Tek fazlı üniteler, 120 veya 240 voltluk üniteler.',
            size: '90.2 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/1px-f-install2013.pdf',
            color: '#1a2f6e',
        },
        {
            id: 6,
            title: 'Telefon PDB üniteleri',
            size: '154 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/s-pdbn-xx-v-20rev-20date-2001-18-06.pdf',
            color: '#1a2f6e',
        },
        {
            id: 7,
            title: 'ST-TC üniteleri',
            size: '71.3 KB',
            pages: 3,
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/st-spt-install-rev2013.pdf',
            color: '#1a2f6e',
        },
        {
            id: 8,
            title: 'ST-C(F)Din klima üniteleri',
            size: '71.3 KB',
            pages: 3,
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/st-spt-install-rev2013_1.pdf',
            color: '#1a2f6e',
        },
        {
            id: 9,
            title: 'ST-Koaksiyel üniteler',
            size: '113 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/st-n-coax-20-20install-20instructions.pdf',
            color: '#1a2f6e',
        },
        {
            id: 10,
            title: 'ST-SPT üniteleri',
            size: '71.3 KB',
            pages: 3,
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/st-spt-install-rev2013_1-1.pdf',
            color: '#1a2f6e',
        },
        {
            id: 11,
            title: 'ST-CLCxxnx-B',
            size: '113 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/st-20clcxxnx-b-20install-20rev-20date-2003-22-2011.pdf',
            color: '#1a2f6e',
        },
        {
            id: 12,
            title: 'ST-CLPxxnxDIN-B',
            size: '146 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/st-20clpxxnx-b-20install-20rev-20date-2001-14-2011.pdf',
            color: '#1a2f6e',
        },
        {
            id: 13,
            title: 'ST-CLPxxnx-B',
            size: '146 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/st-20clpxxnx-b-20install-20rev-20date-2001-14-2011_1.pdf',
            color: '#1a2f6e',
        },
        {
            id: 14,
            title: 'ST-S-TD-8-12-16',
            size: '103 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/st-20s-tdxx-8-12-16x-20install-20rev-20date-2012-23-2010.pdf',
            color: '#1a2f6e',
        },
        {
            id: 15,
            title: 'ST-CxxDM4 - Veri Birimi',
            size: '147 KB',
            pages: 1,
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/ST-CxxDM4_Install_sheet.pdf',
            color: '#1a2f6e',
        },
        {
            id: 16,
            title: 'Orta Gerilim, Üç Fazlı Delta, 7200 volt, 3 kablo + topraklama (üç faz ve topraklama): 3N7200',
            size: '65.4 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/3n7200-20med-20voltage-20model-20install-20rev-20date-2009-19-2008.pdf',
            color: '#1a2f6e',
        },
        {
            id: 17,
            title: 'Orta Gerilim, Üç Fazlı Delta, 3 telli + topraklamalı Bastırıcılar (üç faz ve topraklama): 3Nx Orta Gerilim',
            size: '272 KB',
            pages: 3,
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/3nx-20med-20voltage-20models-20install-20rev-20date-2009-19-2008.pdf',
            color: '#1a2f6e',
        },
        {
            id: 18,
            title: 'Sinetamer Seçenekleri Kurulum Talimatları',
            size: '157 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/stoptions-20install-20rev-20date-2008-02-2011.pdf',
            color: '#1a2f6e',
        },
        {
            id: 19,
            title: 'DC Panel Kurulumu',
            size: '29.9 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/dc-panel-install-rev-7-29-2013-1.pdf',
            color: '#1a2f6e',
        },
    ];

    const warrantyDocuments = [
        {
            id: 1,
            title: 'Genel Garanti Bilgi Formu Panel Üniteleri',
            size: '50.8 KB',
            pages: 1,
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/General-ST-warranty_2021-1.pdf',
            color: '#0d1b4c',
        },
        {
            id: 2,
            title: 'Genel Garanti Bilgi Formu Panel Üniteleri - İspanyolca',
            size: '54.5 KB',
            pages: 1,
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400',
            url: 'https://www.ecsintl.com/wp-content/uploads/2023/12/General-ST-Warranty-Espanol_2021.pdf',
            color: '#0d1b4c',
        },
    ];

    const downloadDocument = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
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
                        <h2>Garanti Bilgileri</h2>
                        <p>Ürün garanti koşulları ve belgeler</p>
                    </div>

                    <div className="brochures-grid-new warranty-grid">
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
