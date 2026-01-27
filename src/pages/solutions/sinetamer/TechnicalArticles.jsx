import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import { downloadFile } from '../../../utils/downloadHelper';
import '../../more/MoreCategory.css';
import '../SolutionCategory.css';

const TechnicalArticles = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler', path: '/#solutions' },
        { label: 'Teknik Makaleler' }
    ];

    const articles = [
        {
            id: 1,
            title: 'Akıllı Şebeke ve 4. Nesil Koruma',
            size: '331 KB',
            pages: 9,
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
            url: '/technical-articles/smart-grid-4th-gen.pdf',
            color: '#1a2f6e',
        },
        {
            id: 2,
            title: 'Değişken Frekanslı Sürücüler için Kaskat Koruması',
            size: '2.9 MB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400',
            url: '/technical-articles/cascade-protection.pdf',
            color: '#1a2f6e',
        },
        {
            id: 3,
            title: 'Gerçek On Modlu Korumayı Anlamak',
            size: '2.9 MB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
            url: '/technical-articles/true-ten-mode.pdf',
            color: '#1a2f6e',
        },
        {
            id: 4,
            title: 'Geçici Varlıklar Dünyasına Hoş Geldiniz',
            size: '113 KB',
            pages: 5,
            image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400',
            url: '/technical-articles/world-of-transients.pdf',
            color: '#1a2f6e',
        },
        {
            id: 5,
            title: 'On modlu, yedi modlu ve dört modlu TVSS tasarımları',
            size: '113 KB',
            pages: 5,
            image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400',
            url: '/technical-articles/world-of-transients.pdf',
            color: '#1a2f6e',
        },
        {
            id: 6,
            title: 'Teknolojide Cesur ve Yepyeni Bir Yön!',
            size: '75 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=400',
            url: '/technical-articles/bold-new-direction.pdf',
            color: '#1a2f6e',
        },
        {
            id: 7,
            title: 'Sine Tamer Genel Bakış',
            size: '31 MB',
            pages: 10,
            image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=400',
            url: '/technical-articles/sinetamer-overview.pdf',
            color: '#1a2f6e',
        },
        {
            id: 8,
            title: 'Petrol Kuyusu Üretimi',
            size: '545 KB',
            pages: 5,
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400',
            url: '/technical-articles/oil-well-production.pdf',
            color: '#1a2f6e',
        },
        {
            id: 9,
            title: 'VFD\'leri Korumak',
            size: '239 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1517420704952-d9f39e99b43b?w=400',
            url: '/technical-articles/protecting-vfds.pdf',
            color: '#1a2f6e',
        },
        {
            id: 10,
            title: 'Programlanabilir Mantık Denetleyicisi Koruması',
            size: '1.9 MB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
            url: '/technical-articles/plc-protection.pdf',
            color: '#1a2f6e',
        },
        {
            id: 11,
            title: 'Endüstri 4.0 Bilgileri İçin Mükemmel Ek Site',
            size: 'External',
            pages: '-',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400',
            url: 'https://instrktiv.com/en/industry-40/',
            color: '#1a2f6e',
        },
        {
            id: 12,
            title: 'Tavan Vinçleri ve SineTamer',
            size: '265 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
            url: '/technical-articles/overhead-cranes.pdf',
            color: '#1a2f6e',
        },
        {
            id: 13,
            title: 'Asansör Koruma 2020',
            size: '229 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1466611653911-95282fc3656b?w=400',
            url: '/technical-articles/elevator-protection-2020.pdf',
            color: '#1a2f6e',
        },
        {
            id: 14,
            title: 'SineTamer Broşürü',
            size: '1.2 MB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
            url: '/technical-articles/sinetamer-brochure.pdf',
            color: '#1a2f6e',
        },
        {
            id: 15,
            title: 'SineTamer Petrol Broşürü',
            size: '1.1 MB',
            pages: 4,
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400',
            url: '/technical-articles/sinetamer-petroleum-brochure.pdf',
            color: '#1a2f6e',
        },
        {
            id: 16,
            title: 'Aşırı Gerilim Koruma Cihazlarının Evrimi',
            size: '587 KB',
            pages: 11,
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400',
            url: '/technical-articles/spd-evolution.pdf',
            color: '#1a2f6e',
        },
        {
            id: 17,
            title: 'Otomatik Transfer Anahtarını Neden Korumalıyız?',
            size: '64 KB',
            pages: 1,
            image: 'https://images.unsplash.com/photo-1550985543-f47f38aee62e?w=400',
            url: '/technical-articles/ats-protection.pdf',
            color: '#1a2f6e',
        },
        {
            id: 18,
            title: 'TVSS Değişken Frekans Sürücüleri Uygulama Notları',
            size: '93 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400',
            url: '/technical-articles/vfd-app-notes.pdf',
            color: '#1a2f6e',
        },
        {
            id: 19,
            title: 'Geçici konakçıların ortak belirtileri',
            size: '861 KB',
            pages: 1,
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400',
            url: '/technical-articles/transient-symptoms.pdf',
            color: '#1a2f6e',
        },
        {
            id: 20,
            title: 'Güç Kalitesiyle İlgili Yanlış Bilinenler',
            size: '1.6 MB',
            pages: 1,
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
            url: '/technical-articles/power-quality-myths.pdf',
            color: '#1a2f6e',
        },
        {
            id: 21,
            title: 'Kurşun uzunluğunun TVSS performansına etkisi',
            size: '128 KB',
            pages: 3,
            image: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=400',
            url: '/technical-articles/lead-length-effect.pdf',
            color: '#1a2f6e',
        },
        {
            id: 22,
            title: 'Yıldırım Hakkında Gerçekler ve Yanlış Bilgiler',
            size: '96 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
            url: '/technical-articles/lightning-facts.pdf',
            color: '#1a2f6e',
        },
        {
            id: 23,
            title: 'Afrika Madencilik Dergisi, Haziran 2015',
            size: '112 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400',
            url: '/technical-articles/africa-mining-2015.pdf',
            color: '#1a2f6e',
        },
        {
            id: 24,
            title: 'Asansör Koruması',
            size: '252 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400',
            url: '/technical-articles/elevator-protection.pdf',
            color: '#1a2f6e',
        },
        {
            id: 25,
            title: 'Endüstri 4.0',
            size: '252 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=400',
            url: '/technical-articles/industry-4-0.pdf',
            color: '#1a2f6e',
        },
        {
            id: 26,
            title: 'Beklenmeyen Kesintilerin Nedenleri',
            size: '4.0 MB',
            pages: 1,
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400',
            url: '/technical-articles/unexpected-downtime.pdf',
            color: '#1a2f6e',
        },
        {
            id: 27,
            title: 'Veri Merkezleri ve Güç Kalitesi',
            size: '391 KB',
            pages: 2,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
            url: '/technical-articles/data-centers-pq.pdf',
            color: '#1a2f6e',
        },
        {
            id: 28,
            title: 'Duraksama Sürelerinin Yönetimi',
            size: '9.7 MB',
            pages: 3,
            image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400',
            url: '/technical-articles/managing-downtime.pdf',
            color: '#1a2f6e',
        }
    ];

    const downloadArticle = (url) => {
        downloadFile(url);
    };

    return (
        <div className="more-category-page">
            <Hero
                title="Teknik Makaleler"
                description="Güç kalitesi ve aşırı gerilim koruma üzerine dökümanlarımız"
                backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            <section className="more-content-section">
                <div className="content-container" style={{ maxWidth: '1400px' }}>
                    <div className="content-header">
                        <h2>Teknik Makaleler</h2>
                        <p>Teknik bilgi birikimimizi ve saha tecrübelerimizi paylaştığımız dökümanlar</p>
                    </div>

                    <div className="brochures-grid-new">
                        {articles.map((article) => (
                            <div className="brochure-card-new" key={article.id}>
                                <div className="brochure-image-new">
                                    <img src={article.image} alt={article.title} />
                                    <div
                                        className="brochure-overlay"
                                        style={{
                                            background: `linear-gradient(135deg, ${article.color}ee 0%, ${article.color}99 100%)`,
                                        }}
                                    >
                                        <div className="pdf-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                <polyline points="14,2 14,8 20,8" />
                                                <path d="M9 15h6M9 11h6" />
                                            </svg>
                                        </div>
                                        <span className="page-count">{article.pages} Sayfa</span>
                                    </div>
                                </div>

                                <div className="brochure-content-new">
                                    <h3>
                                        <a
                                            href={article.url}
                                            onClick={(e) => {
                                                if (article.url === '#') e.preventDefault();
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="brochure-title-link"
                                            aria-label={`${article.title} (yeni sekmede aç)`}
                                        >
                                            {article.title}
                                        </a>
                                    </h3>

                                    <div className="brochure-footer">
                                        <span className="file-info">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                <polyline points="14,2 14,8 20,8" />
                                            </svg>
                                            PDF • {article.size}
                                        </span>

                                        <button className="download-button" onClick={() => downloadArticle(article.url)}>
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

export default TechnicalArticles;
