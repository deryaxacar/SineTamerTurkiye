// InstallationPages.jsx
import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const InstallationPages = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler', path: '/#solutions' },
        { label: 'Kurulum Sayfaları' }
    ];

    const installationGuides = [
        { title: 'Bölünmüş Faz 120/240 volt üniteler', size: '44.8 KB', path: '/setup-pages/1sx-f-install2013.pdf' },
        { title: 'Üç Fazlı WYE/STAR bağlantılı üniteler: Tüm Voltajlar3Yx Kurulum Sayfası', size: '44.8 KB', path: '/setup-pages/1sx-f-install2013.pdf' },
        { title: 'Üç fazlı Delta bağlantılı üniteler: Tüm standart gerilimler', size: '272 KB', path: '/setup-pages/3nx-installation2013.pdf' },
        { title: 'ST-(F)SPT üniteleri, seri ünite tipindedir.', size: '71.3 KB', path: '/setup-pages/st-spt-install-rev2013.pdf' },
        { title: 'Tek fazlı üniteler, 120 veya 240 voltluk üniteler.', size: '90.2 KB', path: '/setup-pages/1px-f-install2013.pdf' },
        { title: 'Telefon PDB üniteleri', size: '154 KB', path: '/setup-pages/s-pdbn-xx-v-20rev-20date-2001-18-06.pdf' },
        { title: 'ST-TC üniteleri', size: '71.3 KB', path: '/setup-pages/st-spt-install-rev2013.pdf' },
        { title: 'ST-C(F)Din klima üniteleri', size: '71.3 KB', path: '/setup-pages/st-spt-install-rev2013_1.pdf' },
        { title: 'ST-Koaksiyel üniteler', size: '113 KB', path: '/setup-pages/st-n-coax-20-20install-20instructions.pdf' },
        { title: 'ST-SPT üniteleri', size: '71.3 KB', path: '/setup-pages/st-spt-install-rev2013_1-1.pdf' },
        { title: 'ST-CLCxxnx-B', size: '113 KB', path: '/setup-pages/st-20clcxxnx-b-20install-20rev-20date-2003-22-2011.pdf' },
        { title: 'ST-CLPxxnxDIN-B', size: '146 KB', path: '/setup-pages/st-20clpxxnx-b-20install-20rev-20date-2001-14-2011.pdf' },
        { title: 'ST-CLPxxnx-B', size: '146 KB', path: '/setup-pages/st-20clpxxnx-b-20install-20rev-20date-2001-14-2011_1.pdf' },
        { title: 'ST-S-TD-8-12-16', size: '103 KB', path: '/setup-pages/st-20s-tdxx-8-12-16x-20install-20rev-20date-2012-23-2010.pdf' },
        { title: 'ST-CxxDM4 - Veri Birimi', size: '147 KB', path: '/setup-pages/ST-CxxDM4_Install_sheet.pdf' },
        { title: 'Orta Gerilim, Üç Fazlı Delta, 7200 volt, 3 kablo + topraklama (üç faz ve topraklama): 3N7200', size: '65.4 KB', path: '/setup-pages/3n7200-20med-20voltage-20model-20install-20rev-20date-2009-19-2008.pdf' },
        { title: 'Orta Gerilim, Üç Fazlı Delta, 3 telli + topraklamalı Bastırıcılar (üç faz ve topraklama): 3Nx Orta Gerilim', size: '272 KB', path: '/setup-pages/3nx-20med-20voltage-20models-20install-20rev-20date-2009-19-2008.pdf' },
        { title: 'Sinetamer Seçenekleri Kurulum Talimatları', size: '157 KB', path: '/setup-pages/stoptions-20install-20rev-20date-2008-02-2011.pdf' },
        { title: 'DC Panel Kurulumu', size: '29.9 KB', path: '/setup-pages/dc-panel-install-rev-7-29-2013-1.pdf' },
    ];

    const warrantyDocuments = [
        { title: 'Genel Garanti Bilgi Formu Panel Üniteleri', size: '50.8 KB', path: '/setup-pages/General-ST-warranty_2021-1.pdf' },
        { title: 'Genel Garanti Bilgi Formu Panel Üniteleri - İspanyolca', size: '54.5 KB', path: '/setup-pages/General-ST-Warranty-Espanol_2021.pdf' },
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Kurulum Sayfaları"
                description="SineTamer ürünlerinin profesyonel kurulum kılavuzları ve garanti belgeleri"
                backgroundImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Installation Guides Section */}
            <section className="mv-detail-section">
                <div className="mv-container">
                    <div className="mv-detail-header">
                        <h2>Kurulum Kılavuzları</h2>
                        <p>Tüm SineTamer ürünleri için detaylı kurulum talimatları</p>
                    </div>
                </div>
            </section>

            <section className="mv-pdf-section">
                <div className="mv-container">
                    <div className="pdf-grid-mv">
                        {installationGuides.map((pdf, index) => (
                            <div key={index} className="pdf-card-mv">
                                <div className="pdf-icon-mv">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                        <polyline points="14,2 14,8 20,8" />
                                        <path d="M9 15h6M9 11h6" />
                                    </svg>
                                </div>
                                <div className="pdf-info-mv">
                                    <h3>
                                        <a
                                            href={pdf.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pdf-title-link-mv"
                                        >
                                            {pdf.title}
                                        </a>
                                    </h3>
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

            {/* Warranty Documents Section */}
            <section className="mv-detail-section" style={{ backgroundColor: 'var(--gray-light)', paddingTop: '3rem' }}>
                <div className="mv-container">
                    <div className="mv-detail-header">
                        <h2>Garanti Bilgileri</h2>
                        <p>Ürün garanti koşulları ve belgeler</p>
                    </div>
                </div>
            </section>

            <section className="mv-pdf-section" style={{ backgroundColor: 'var(--gray-light)' }}>
                <div className="mv-container">
                    <div className="pdf-grid-mv">
                        {warrantyDocuments.map((pdf, index) => (
                            <div key={index} className="pdf-card-mv">
                                <div className="pdf-icon-mv">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <div className="pdf-info-mv">
                                    <h3>
                                        <a
                                            href={pdf.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pdf-title-link-mv"
                                        >
                                            {pdf.title}
                                        </a>
                                    </h3>
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

export default InstallationPages;
