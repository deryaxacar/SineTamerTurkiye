import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const PowerQualityAnalysis = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'Güç Kalitesi Analizi' }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Güç Kalitesi Analizi"
                description="Tesisinizin enerji altyapısını optimize edin, verimliliği artırın ve maliyetleri düşürün."
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Section 1: Split Layout (Image Right) */}
            <section className="split-layout-section" style={{ padding: '6rem 0 0 0' }}>
                <div className="split-top" style={{ marginBottom: 0 }}>
                    <div className="split-main-text">
                        <h2>Güç Kalitesi Analizi ve İzleme Çözümleri</h2>
                        <h3>Elektrik enerjisinin kalitesi, aşağıdaki gibi parametrelerin değerleri kümesi olarak tanımlanabilir:</h3>
                        <ul className="problem-list" style={{ marginTop: '1.5rem' }}>
                            <li>Hizmetin sürekliliği</li>
                            <li>Gerilim büyüklüğündeki değişim</li>
                            <li>Geçici gerilimler ve akımlar</li>
                            <li>Dalga biçimlerindeki harmonik içerik</li>
                        </ul>
                    </div>
                    <div className="split-side-image small">
                        <img src="https://www.ecsintl.com/wp-content/uploads/2023/12/wpa7722ee5_0f-240x300-1-240x300.jpg" alt="Güç Kalitesi Ölçümü" />
                    </div>
                </div>
            </section>

            {/* Section 2: Full Width Layout (Image Removed) */}
            <section className="detailed-info-section" style={{ backgroundColor: 'var(--gray-light)', padding: '3rem 0 4rem 0' }}>
                <div className="info-blocks-container">
                    <div className="info-block" style={{ borderLeft: 'none', paddingLeft: 0 }}>
                        <p>
                            Uzman mühendis ekibimiz, tesisinize özel ölçüm cihazları yerleştirerek verileri gerçek zamanlı olarak toplar. Elde edilen veriler, uluslararası standartlara (IEEE, IEC) göre değerlendirilerek detaylı bir rapor sunulur.
                        </p><br></br>
                        <p>
                            Bu güç kalitesi sorunlarının her birinin farklı bir nedeni vardır. Bazı sorunlar paylaşılan altyapıdan kaynaklanır. Örneğin, şebekedeki bir arıza, bazı müşterileri etkileyecek bir gerilim düşüşüne neden olabilir ve arıza seviyesi ne kadar yüksekse, etkilenen müşteri sayısı da o kadar fazla olur; veya bir müşterinin tesisindeki bir sorun, aynı alt sistemdeki diğer tüm müşterileri etkileyen bir geçici duruma neden olabilir. Harmonikler gibi diğer sorunlar, müşterinin kendi tesisatında ortaya çıkar ve şebekeye yayılabilir veya yayılmayabilir, dolayısıyla diğer müşterileri etkileyebilir. Harmonik sorunları, iyi tasarım uygulamaları ve kanıtlanmış azaltma ekipmanlarının bir kombinasyonuyla çözülebilir.
                        </p>
                        <ul className="problem-list" style={{ marginTop: '2rem' }}>
                            <li><strong>Arıza Önleme:</strong> Ekipmanlarınızın ömrünü uzatın ve beklenmedik duruşları minimize edin.</li>
                            <li><strong>Maliyet Tasarrufu:</strong> Gereksiz enerji kayıplarını önleyerek faturalarınızı düşürün.</li>
                            <li><strong>Güvenlik:</strong> Elektriksel yangın risklerini ve sistem aşırı ısınmalarını ortadan kaldırın.</li>
                            <li><strong>Uyumluluk:</strong> Şebeke yönetmeliklerine ve kalite standartlarına tam uyum sağlayın.</li>
                        </ul>
                        <p style={{ marginTop: '2rem' }}>
                            Güç kalitesi sorunlarınızı profesyonel bir bakış açısıyla çözmek ve tesisinizin enerji sağlığını korumak için bizimle iletişime geçin.
                        </p>
                    </div>
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
