import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const img1 = "/images/solutions/adfpower1.jpg";
const img2 = "/images/solutions/adfpower2.jpg";

const ADFPowerSetting = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler', path: '/#solutions' },
        { label: 'ADF Güç Ayarı' }
    ];

    return (
        <div className="solution-category-page adf-page">
            <Hero
                title="ADF Güç Ayarı"
                description="ADF Güç Ayarı – geleceğin güç anlayışı!"
                backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Section 1: Title & Image with 6 Items */}
            <section className="split-layout-section">
                <div className="split-top image-left">
                    <div className="split-side-image">
                        <img src={img1} loading="lazy" style={{ borderRadius: '10px' }} alt="ADF Ünitesi" />
                    </div>
                    <div className="split-main-text">
                        <h2>Güç Kusursuz Değildir.</h2>
                        <p>
                            Günümüz endüstrisinin ileri teknolojisi ve ağır süreçleri, elektrik şebekesine yüksek talepler getiriyor ve operasyonları çeşitli sorunlara karşı savunmasız hale getiriyor.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6 Item List Section */}
            <section className="adf-issues-section">
                <div className="adf-section-container">
                    <div className="adf-issues-grid">
                        <div className="adf-issue-item">
                            <span className="adf-issue-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </span>
                            <span>Harmonik Bozulmalar</span>
                        </div>
                        <div className="adf-issue-item">
                            <span className="adf-issue-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M3 3v18h18" />
                                    <path d="M18 17V9" />
                                    <path d="M13 17V5" />
                                    <path d="M8 17v-3" />
                                </svg>
                            </span>
                            <span>Voltaj Dalgalanmaları</span>
                        </div>
                        <div className="adf-issue-item">
                            <span className="adf-issue-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </span>
                            <span>Güç Faktörü Sorunları</span>
                        </div>
                        <div className="adf-issue-item">
                            <span className="adf-issue-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                                    <path d="M12 3v9l4 4" />
                                </svg>
                            </span>
                            <span>Rezonans Riskleri</span>
                        </div>
                        <div className="adf-issue-item">
                            <span className="adf-issue-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
                                    <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
                                    <path d="M12 2v4" />
                                    <path d="M2 12h4" />
                                    <path d="m9 9 6 6" />
                                </svg>
                            </span>
                            <span>Enerji Verimliliği Kayıpları</span>
                        </div>
                        <div className="adf-issue-item">
                            <span className="adf-issue-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                                </svg>
                            </span>
                            <span>Ekipman Arızaları</span>
                        </div>
                    </div>
                    <p className="adf-issues-note">Bu sorunlar, güç kalitesini zayıflatan çeşitli elektriksel bozulmalardan kaynaklanmaktadır.</p>
                </div>
            </section>

            {/* Section 2: Title, Description & 3 Category Cards */}
            <section className="adf-categories-section">
                <div className="adf-section-container">
                    <div className="adf-section-header">
                        <h2>Düşük güç kalitesi için ne ödüyorsunuz?</h2>
                        <p>Güç kalitesini iyileştirmek riski azaltır, verimliliği artırır, işletme maliyetlerini düşürür ve kârlılığınızı artırır.</p>
                        <p>Tesisinizle ilgili karar verme konusunda destek almak için bizimle iletişime geçmekten çekinmeyin.</p>
                    </div>
                    <div className="adf-categories-grid">
                        <div className="adf-category-card">
                            <div className="adf-category-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                            </div>
                            <h3>Düşük Güç Kalitesine En İyi Çözüm</h3>
                            <p>ADF Power Tuning ürünleri, düşük güç kalitesine katkıda bulunan yaygın elektriksel davranışları ortadan kaldırır. Son derece dinamik, dijital olarak kontrol edilen bir dengeleme ve filtreleme yaklaşımı kullanan ADF Power Tuning, akım dalga formunu anında geri yükler, akım akışını düşürür ve yük veya kurulum koşullarındaki değişiklikleri her zaman tam olarak telafi eder.</p>

                        </div>
                        <div className="adf-category-card">
                            <div className="adf-category-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3>Aktif Dinamik Filtreleme</h3>
                            <p>Patentli Aktif Dinamik Filtreleme teknolojimiz, benzersiz harmonik dengeleme, rezonans azaltma ve daha birçok özellik sunmaktadır. ADF teknolojisi ve yetenekleri hakkında detaylı bilgi için Teknoloji sayfalarımızı inceleyebilirsiniz.</p>
                        </div>
                        <div className="adf-category-card">
                            <div className="adf-category-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3>Kesinti sürelerinden kaçının ve uyumluluğu sağlayın.</h3>
                            <p>ADF Güç Ayarlama çözümleriyle yaygın elektrik arızaları ve daha fazlası giderilebilir. Ayrıca, ADF teknolojisi güç kalitesi uyumluluğunu sağlayabilir ve ekipman garantilerini koruyabilir.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Title, Description & Image */}
            <section className="adf-info-section">
                <div className="adf-section-container">
                    <div className="adf-info-content">
                        <div className="adf-info-text">
                            <h2>ÇÖZÜMLERİMİZ</h2>
                            <p>
                                ADF ünitesi, temel olarak, herhangi bir şekil veya formdaki kompanzasyon akımını anında üretebilme özelliğine sahip, çok gelişmiş bir bilgisayar kontrollü akım jeneratörüdür.
                            </p>
                            <p>
                                Her ADF ünitesi, kompanzasyon gerektiren yük ile paralel olarak, şönt olarak bağlanır. Yük ve şebeke arasındaki elektrik akımlarının güç akışları ölçülür ve analiz edilir [1] reaktif yer değiştirme ve/veya harmonikler gibi bozulmaların olup olmadığı belirlenir.
                            </p>
                            <p>
                                Böyle bir durum tespit edilirse, ADF ünitesi, örneğin harmonik ve/veya reaktif yer değiştirmenin tam tersi olan faz akımları [2] enjekte eder. Bu, yük davranışını [3] ortadan kaldırmak için yapılır.
                            </p>
                            <p>
                                Sonuç, minimum güç kaybı ve bozulma ile ideal bir yüktür. Enerji profili, transformatör için ideal görünür.
                            </p>
                        </div>
                        <div className="adf-info-image">
                            <img src={img2} loading="lazy" alt="ADF Teknolojisi" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: 4 Icon Cards - UZAY, PARA, ZAMAN, GÜÇLÜK */}
            <section className="adf-benefits-section">
                <div className="adf-section-container">
                    <div className="adf-benefits-grid">
                        <div className="adf-benefit-card">
                            <div className="adf-benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                                    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
                                </svg>
                            </div>
                            <h3>UZAY</h3>
                            <p>Bir modül birden fazla sürücüyü desteklediği için yerden tasarruf edebilir ve geleceğe yönelik esneklik sağlayabilirsiniz.</p>
                        </div>
                        <div className="adf-benefit-card">
                            <div className="adf-benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
                                    <path d="M12 18V6" />
                                </svg>
                            </div>
                            <h3>MALİYET</h3>
                            <p>Enerji verimliliğini artırırken, yıpranmış ekipmanların değiştirme maliyetini azaltın.</p>
                        </div>
                        <div className="adf-benefit-card">
                            <div className="adf-benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3>ZAMAN</h3>
                            <p>Güç kalitesi sorunlarından etkilenen ekipmanların bakımı veya değiştirilmesi için gereksiz arıza sürelerinden kaçının.</p>
                        </div>
                        <div className="adf-benefit-card">
                            <div className="adf-benefit-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    <path d="M9 12l2 2 4-4" />
                                </svg>
                            </div>
                            <h3>GÜÇLÜK</h3>
                            <p>ADF tipi teknoloji, halihazırda düzenleyici gerekliliklere ve ekipman garantilerine dahil ediliyor ve bu eğilim yalnızca artmaya devam edecek.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ADF Veri Sayfaları */}
            <section className="adf-datasheets-section">
                <div className="adf-section-container">
                    <h2 className='adf-section-header'>ADF Veri Sayfaları</h2>
                    <div className="adf-datasheets-grid">
                        <a href="https://www.ecsintl.com/wp-content/uploads/2018/02/Datasheet_P100_EN_ECS.pdf" className="adf-datasheet-card" target="_blank" rel="noopener noreferrer">
                            <div className="adf-datasheet-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                </svg>
                            </div>
                            <span>ADF P100 İncele</span>
                        </a>
                        <a href="https://www.ecsintl.com/wp-content/uploads/2018/02/Datasheet_P100N_EN_ECS.pdf" className="adf-datasheet-card" target="_blank" rel="noopener noreferrer">
                            <div className="adf-datasheet-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                </svg>
                            </div>
                            <span>ADF P100N İncele</span>
                        </a>
                        <a href="https://www.ecsintl.com/wp-content/uploads/2018/02/Datasheet_P200_EN_ECS.pdf" className="adf-datasheet-card" target="_blank" rel="noopener noreferrer">
                            <div className="adf-datasheet-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                </svg>
                            </div>
                            <span>ADF P200 İncele</span>
                        </a>
                        <a href="https://www.ecsintl.com/wp-content/uploads/2018/02/Datasheet_P300_EN_ECS.pdf" className="adf-datasheet-card" target="_blank" rel="noopener noreferrer">
                            <div className="adf-datasheet-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                </svg>
                            </div>
                            <span>ADF P300 İncele</span>
                        </a>
                        <a href="https://www.ecsintl.com/wp-content/uploads/2018/02/Datasheet_PPM300_EN_ECS.pdf" className="adf-datasheet-card" target="_blank" rel="noopener noreferrer">
                            <div className="adf-datasheet-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                </svg>
                            </div>
                            <span>ADF PPM 300 İncele</span>
                        </a>
                        <a href="https://www.ecsintl.com/wp-content/uploads/2018/02/Datasheet_PPM300v2B_EN_ECS.pdf" className="adf-datasheet-card" target="_blank" rel="noopener noreferrer">
                            <div className="adf-datasheet-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                </svg>
                            </div>
                            <span>ADF PPM 300v2 İncele</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="cta-container">
                        <h2>Detaylı Bilgi ve Teklif İçin</h2>
                        <p>Tesisinize özel ADF çözümleri ve güç analizi için uzman mühendislerimizle iletişime geçin.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
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
                </div>
            </section>
        </div>
    );
};

export default ADFPowerSetting;
