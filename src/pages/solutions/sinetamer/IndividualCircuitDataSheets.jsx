import Hero from '../../../components/Hero';
import SEO from '../../../components/SEO';
import { downloadFile } from '../../../utils/downloadHelper';
import '../SolutionCategory.css';

const IndividualCircuitDataSheets = () => {
    const pdfs = [
        { title: 'ST-SPIU2-Rev Mar2014', size: '60.6 KB', path: '/individual-circuit/st-spiu2.pdf' },
        { title: 'ST-SPIU6C_RevMar2014', size: '90 KB', path: '/individual-circuit/st-spiu6c.pdf' },
        { title: 'ST-SPT Serisi', size: '302.1 KB', path: '/individual-circuit/spt-series.pdf' },
        { title: 'ST-FSP2-P Serisi', size: '81.6 KB', path: '/individual-circuit/st-fsp2-p.pdf' },
        { title: 'ST-FSPT serisi', size: '60.3 KB', path: '/individual-circuit/st-fspt.pdf' },
        { title: 'ST-FSP-2Nx-P Serisi', size: '99.7 KB', path: '/individual-circuit/st-fsp-2nx-p.pdf' },
        { title: 'SPT-DC-P Serisi', size: '106.8 KB', path: '/individual-circuit/spt-dc-p.pdf' },
        { title: 'SPT-DC Serisi', size: '107.7 KB', path: '/individual-circuit/spt-dc.pdf' },
        { title: 'SPT-DIN Serisi', size: '103.6 KB', path: '/individual-circuit/spt-din.pdf' },
        { title: 'ST-ICPS', size: '66.9 KB', path: '/individual-circuit/st-icps.pdf' },
        { title: 'SPW Serisi', size: '95.8 KB', path: '/individual-circuit/spw-series.pdf' },
        { title: 'ST-RSE-3N Serisi', size: '111.6 KB', path: '/individual-circuit/st-rse-3n.pdf' },
        { title: 'SPT-RJ Serisi', size: '90 KB', path: '/individual-circuit/spt-rj.pdf' },
        { title: 'S-SPT120-15-1T1V', size: '158.7 KB', path: '/individual-circuit/s-spt120.pdf' },
        { title: 'ST-CLL240P', size: '112.6 KB', path: '/individual-circuit/st-cll240p.pdf' },
        { title: 'ST-CDI', size: '132.7 KB', path: '/individual-circuit/st-cdi.pdf' },
        { title: 'ST-FDIN', size: '128.6 KB', path: '/individual-circuit/st-fdin.pdf' },
        { title: 'SPT-DC Serisi Esp', size: '194 KB', path: '/individual-circuit/spt-dc-esp.pdf' },
        { title: 'FSPT Serisi İspanyolca', size: '126.3 KB', path: '/individual-circuit/fspt-espanol.pdf' },
        { title: 'SPTSeries İspanyolca', size: '317.4 KB', path: '/individual-circuit/spt-series-espanol.pdf' },
    ];

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler', path: '/#solutions' },
        { label: 'Bireysel Devre', path: '/cozumler/sinetamer/bireysel-devre-uniteleri' },
        { label: 'Veri' }
    ];

    return (
        <div className="solution-category-page">
            <SEO
                title="Bireysel Devre Üniteleri Veri Sayfası"
                description="SineTamer bireysel devre koruma üniteleri teknik dökümanları ve PDF veri sayfaları."
                url="/cozumler/sinetamer/bireysel-devre-veri-sayfalari"
                breadcrumbs={[
                    { name: 'Ana Sayfa', url: '/' },
                    { name: 'Çözümler', url: '/#solutions' },
                    { name: 'Bireysel Devre Üniteleri', url: '/cozumler/sinetamer/bireysel-devre-uniteleri' },
                    { name: 'Veri Sayfası' }
                ]}
            />
            <Hero
                title="Bireysel Devre Üniteleri Veri Sayfası"
                description="Bireysel devre üniteleri için teknik veri sayfaları ve ürün özellikleri"
                backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Detail Section */}
            <section className="mv-detail-section">
                <div className="mv-container">
                    <div className="mv-detail-header">
                        <h2>Bireysel Devre Üniteleri Veri Sayfası</h2>
                        <p>Detay sayfalarımızı okuyabilir veya indirebilirsiniz.</p>
                    </div>
                </div>
            </section>

            {/* PDF Downloads Section */}
            <section className="mv-pdf-section">
                <div className="mv-container">
                    <div className="pdf-grid-mv single-line-titles">
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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        downloadFile(pdf.path);
                                    }}
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

export default IndividualCircuitDataSheets;
