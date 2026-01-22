import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const PowerQualityAnalysis = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'Güç Kalitesi Analizi' }
    ];

    return (
        <div className="solution-category-page pqa-page">
            <Hero
                title="Güç Kalitesi Analizi"
                description="Tesisinizin enerji altyapısını optimize edin, verimliliği artırın ve maliyetleri düşürün."
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Section 1: Intro with Image */}
            <section className="pqa-intro-section">
                <div className="pqa-container">
                    <div className="pqa-intro-grid">
                        <div className="pqa-intro-text">
                            <h2>Güç Kalitesi Analizi ve İzleme Çözümleri</h2>
                            <p className="pqa-lead">
                                Elektrik enerjisinin kalitesi, aşağıdaki gibi parametrelerin değerleri kümesi olarak tanımlanabilir:
                            </p>
                            <div className="pqa-params-list">
                                <div className="pqa-param-item">
                                    <span className="pqa-param-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 6v6l4 2" />
                                        </svg>
                                    </span>
                                    <span>Hizmetin sürekliliği</span>
                                </div>
                                <div className="pqa-param-item">
                                    <span className="pqa-param-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                        </svg>
                                    </span>
                                    <span>Gerilim büyüklüğündeki değişim</span>
                                </div>
                                <div className="pqa-param-item">
                                    <span className="pqa-param-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                        </svg>
                                    </span>
                                    <span>Geçici gerilimler ve akımlar</span>
                                </div>
                                <div className="pqa-param-item">
                                    <span className="pqa-param-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 3v18h18" />
                                            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                                        </svg>
                                    </span>
                                    <span>Dalga biçimlerindeki harmonik içerik</span>
                                </div>
                            </div>
                        </div>
                        <div className="pqa-intro-image">
                            <img src="https://www.ecsintl.com/wp-content/uploads/2023/12/wpa7722ee5_0f-240x300-1-240x300.jpg" alt="Güç Kalitesi Ölçümü" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Info Content */}
            <section className="pqa-info-section">
                <div className="pqa-container">
                    <div className="pqa-info-card">
                        <p>
                            Uzman mühendis ekibimiz, tesisinize özel ölçüm cihazları yerleştirerek verileri gerçek zamanlı olarak toplar. Elde edilen veriler, uluslararası standartlara (IEEE, IEC) göre değerlendirilerek detaylı bir rapor sunulur.
                        </p>
                        <p>
                            Bu güç kalitesi sorunlarının her birinin farklı bir nedeni vardır. Bazı sorunlar paylaşılan altyapıdan kaynaklanır. Örneğin, şebekedeki bir arıza, bazı müşterileri etkileyecek bir gerilim düşüşüne neden olabilir ve arıza seviyesi ne kadar yüksekse, etkilenen müşteri sayısı da o kadar fazla olur.
                        </p>
                        <p>
                            Harmonikler gibi diğer sorunlar, müşterinin kendi tesisatında ortaya çıkar ve şebekeye yayılabilir veya yayılmayabilir, dolayısıyla diğer müşterileri etkileyebilir. Harmonik sorunları, iyi tasarım uygulamaları ve kanıtlanmış azaltma ekipmanlarının bir kombinasyonuyla çözülebilir.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: Benefits */}
            <section className="pqa-benefits-section">
                <div className="pqa-container">
                    <h2 className="pqa-section-title">Güç Kalitesi Analizinin Faydaları</h2>
                    <div className="pqa-benefits-grid">
                        <div className="pqa-benefit-card">
                            <div className="pqa-benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3>Arıza Önleme</h3>
                            <p>Ekipmanlarınızın ömrünü uzatın ve beklenmedik duruşları minimize edin.</p>
                        </div>
                        <div className="pqa-benefit-card">
                            <div className="pqa-benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                                </svg>
                            </div>
                            <h3>Maliyet Tasarrufu</h3>
                            <p>Gereksiz enerji kayıplarını önleyerek faturalarınızı düşürün.</p>
                        </div>
                        <div className="pqa-benefit-card">
                            <div className="pqa-benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                            <h3>Güvenlik</h3>
                            <p>Elektriksel yangın risklerini ve sistem aşırı ısınmalarını ortadan kaldırın.</p>
                        </div>
                        <div className="pqa-benefit-card">
                            <div className="pqa-benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18M9 21V9" />
                                </svg>
                            </div>
                            <h3>Uyumluluk</h3>
                            <p>Şebeke yönetmeliklerine ve kalite standartlarına tam uyum sağlayın.</p>
                        </div>
                    </div>
                    <p className="pqa-closing-text">
                        Güç kalitesi sorunlarınızı profesyonel bir bakış açısıyla çözmek ve tesisinizin enerji sağlığını korumak için bizimle iletişime geçin.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="cta-container">
                        <h2>Analiz Yaptırmak İster Misiniz?</h2>
                        <p>Tesisinizin enerji kalitesini profesyonelce analiz ettirmek için bizimle iletişime geçin.</p>
                        <a
                            href="https://womner.com/iletisim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-white"
                        >
                            İletişime Geçin
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PowerQualityAnalysis;

