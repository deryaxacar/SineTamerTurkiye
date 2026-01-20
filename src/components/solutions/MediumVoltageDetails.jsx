import React from 'react';

const MediumVoltageDetails = ({ pdfs }) => {
    return (
        <>
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
        </>
    );
};

export default MediumVoltageDetails;
