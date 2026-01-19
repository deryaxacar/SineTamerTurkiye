import { Link } from 'react-router-dom';
import '../SolutionCategory.css';

const MediumVoltageUnits = () => {
    const pdfs = [
        { title: 'ST-CMV-AC', size: '134 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/st-cmv-acrevaug2014CC88D50383FC.pdf' },
        { title: 'ST-SILA MV-AC', size: '73,8 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/ST-SILAMV-D1F.pdf' },
        { title: 'ST-SHLA MV-AC', size: '73,8 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/ST-SHLAMV-D1F.pdf' },
        { title: 'ST-MV-AC7200', size: '71,5 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/st-mv-ac7200-rev-date-09-19-2008.pdf' },
        { title: 'ST-LSEA MV-AC', size: '75,2 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/ST-LSEA-MV_RevAug2014.pdf' },
    ];

    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Orta Gerilim Üniteleri</h1>
                    <p>SineTamer Orta Gerilim Üniteleri Ve Detayları</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <span>SineTamer</span>
                        <span>/</span>
                        <span>Orta Gerilim Üniteleri</span>
                    </div>
                </div>
            </section>

            {/* Split Section (Image + Text) */}
            <section className="mv-split-section">
                <div className="mv-container">
                    <div className="mv-split-grid">
                        <div className="mv-split-image">
                            <img
                                src="https://www.ecsintl.com/wp-content/uploads/2023/12/TVSS-ENC7-Medium-225x300-1-225x300.jpg"
                                alt="Orta Gerilim Üniteleri"
                            />
                        </div>
                        <div className="mv-split-content">
                            <h2>SineTamer Orta Gerilim Üniteleri</h2>
                            <p>
                                Lütfen bu sitenin Mozilla Firefox ve Google Chrome tarayıcıları için optimize edildiğini unutmayın. Microsoft Internet Explorer kullanıyorsanız, siteye giriş yaptıktan sonra korumalı içeriğe erişimde sorun yaşayabilirsiniz. Firefox'u indirmek için bu bağlantıyı veya Chrome'u indirmek için bu bağlantıyı ziyaret edin.
                            </p>
                            <p>
                                ST-CMV-AC, orta gerilim aşırı gerilim korumasında en yeni teknolojiyi sunuyor! Daha küçük kasa, ekonomik sigortalama ve daha uzun garanti süresi!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detail Section */}
            <section className="mv-detail-section">
                <div className="mv-container">
                    <div className="mv-detail-header">
                        <h2>Orta Gerilim Üniteleri Detayı</h2>
                        <p>Detay sayfalarımızı okuyabilir veya indirebilirsiniz.</p>
                    </div>
                </div>
            </section>

            {/* PDF Downloads Section */}
            <section className="mv-pdf-section">
                <div className="mv-container">
                    <div className="pdf-grid-mv">
                        {pdfs.map((pdf, index) => (
                            <div key={index} className="pdf-card-mv">
                                <div className="pdf-icon-mv">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                        <polyline points="14,2 14,8 20,8" />
                                        <path d="M9 15h6M9 11h6" />
                                    </svg>
                                </div>
                                <div className="pdf-info-mv">
                                    <h3>{pdf.title}</h3>
                                    <span>{pdf.size} (PDF)</span>
                                </div>
                                <a
                                    href={pdf.path}
                                    className="pdf-download-btn-mv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    İndir
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediumVoltageUnits;
