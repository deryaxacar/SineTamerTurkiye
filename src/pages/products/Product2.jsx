import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import './Products.css';

const Product2 = () => {
    const product = {
        image: '/product/SineTamer-3-faz.jpg',
        title: 'SineTamer AC Üç Faz',
        description: 'Yüksek enerji taşıma ve frekans izleme devresine sahip, darbe ve halka dalgası geçicilerini bastıran paralel bağlı TVSS.',
        specs: {
            voltaj: '120/240/380/480 VAC',
            kapasite: '120kA Tepe Darbe Akımı',
            garanti: '25 Yıl Sınırsız',
            koruma: 'ANSI/IEEE Kategori A',
            Uyumluluk: 'CSA, UL1283, CE',
            uygulama: 'Tek Faz Devre Uygulamaları'
        },
        features: [
            'Faz başına 120kA tepe darbe akımı kapasitesi',
            'Kapsüllenmiş Optimal Yanıt Ağı',
            'Tüm mod Frekans Zayıflatma Ağı',
            'Bağımsız darbe bastırma cihazı',
            'Kompakt boyut - kolay kurulum',
            '25 yıl sınırsız ücretsiz değişim garantisi',
            'CSA, UL1283 ve CE Uyumlu',
            'Özel muhafaza gerektirmez'
        ],
        longDescription: `SineTamer ST-SPT, tek fazlı 120, 240, 380 ve 480 VAC devrelerde hassas ve kritik ekipmanlar için yüksek performanslı geçici gerilim koruması sağlar.
Faz başına 120 kA tepe darbe akımı kapasitesi ile tesis kaynaklı ani gerilim darbelerini etkili biçimde sınırlar ve mikroişlemci tabanlı sistemlerin güvenliğini artırır.
Bağımsız darbe bastırma cihazı olarak tasarlanan ST-SPT, harici muhafaza gerektirmeyen kompakt yapısı sayesinde kolay kurulum sunar.
“Tüm mod” Frekans Zayıflatma Ağı ve kapsüllenmiş Optimal Yanıt Ağı ile uzun ömürlü, güvenilir ve sektörde öne çıkan bir koruma çözümüdür.`,
        series: [
            {
                title: 'CPxxLAY2-N4 Serisi',
                content: 'SineTamer CP serisi üniteleri, olağanüstü yüksek enerjili darbe bastırmayı, Frequency Attenuation Network sistemimizle sağlanan benzersiz geçici darbe filtreleme korumasıyla birleştirir. Bu dayanıklı cihaz, motor-jeneratör setlerinin ana hatlarına bağlanmak üzere tasarlanmıştır. Kompakt boyutu ve metal olmayan muhafaza tasarımı, doğrudan jeneratör ekipmanlarının ana kesicileri içine kurulmasına da olanak tanır. Dahili kurulum, mümkün olan en kısa kablo uzunluğunu ve optimum performansı sağlar.',
                description: 'Yüksek enerji taşıma ve frekans izleme devresini kullanan, darbe ve halka dalgası tipi geçicilerin neredeyse tamamen ortadan kaldırılmasını sağlayan paralel bağlı geçici gerilim darbe bastırıcı (TVSS)',
                application: 'ANSI/IEEE Kategori C, B ve A ile IEC 61643 Kategori 1, 2 ve 3 maruziyet seviyelerinde kullanım için tasarlanmıştır. Dağıtım panoları, tali panolar ve/veya bireysel ekipman panolarından beslenen hassas/kritik yükleri korumak üzere tasarlanmıştır.',
                warranty: '25 Yıl Sınırsız Ücretsiz Değişim',
                attributes: 'ANSI/UL 1449-2006 (4. Baskı) standardına göre UL tarafından listelenmiştir. ML kaydı: E363345; CSA dosyası: 259700, UL1283* ve CE Uyumlu (* Sadece Tip 2 SPD’ler) ISO 9001:2008, ANSI C62.72-2007, IEC 61643-11 Sınıf 2, Tek Port SPD'
            },
            {
                title: 'LA Serisi',
                content: 'SineTamer LA serisi üniteleri, olağanüstü yüksek enerjili “impuls” bastırmayı, Frequency Attenuation Network® ile sağlanan eşsiz “halka dalgası” geçici koruma ile birleştirir. Bu dayanıklı cihaz, genel amaçlı ve hassas/kritik yük uygulamaları için tasarlanmıştır. Kompakt boyutu ve metal olmayan muhafaza tasarımı, doğrudan elektrik panoları ve bireysel ekipman kesicileri içine kurulmasına da olanak tanır. Dahili kurulum, mümkün olan en kısa kablo uzunluğunu ve optimum performansı sağlar. LA-ST serisi, içeride oluşan geçici olayları sınırlamada son derece etkilidir ve ofis alanlarını ve/veya mikroişlemci tabanlı ekipmanları besleyen panolarda kesinlikle gereklidir.',
                description: 'Yüksek enerji taşıma ve frekans izleme devresini kullanan, darbe ve halka dalgası tipi geçicilerin neredeyse tamamen ortadan kaldırılmasını sağlayan paralel bağlı geçici voltaj darbe bastırıcı cihaz',
                application: 'ANSI/IEEE Kategori C, B ve A ile IEC 61643 Kategori 1, 2 ve 3 maruziyet seviyelerinde kullanım için tasarlanmıştır. Dağıtım panoları, tali panolar ve/veya bireysel ekipman panolarından beslenen hassas/kritik yükleri korumak üzere tasarlanmıştır.',
                warranty: '20 Yıl Sınırsız Ücretsiz Değişim',
                attributes: 'ANSI/UL 1449-2006 (4. Baskı) standardına göre UL tarafından listelenmiştir. ML kaydı: E363345; CSA dosyası: 259700, UL1283* ve CE Uyumlu (* Sadece Tip 2 SPD’ler) ISO 9001:2008, ANSI C62.72-2007, IEC 61643-11 Sınıf 2, Tek Port SPD'
            },
            {
                title: 'RM Serisi',
                content: 'SineTamer RM serisi üniteleri, olağanüstü yüksek enerjili “impuls” bastırmayı ve Frequency Attenuation Network® ile sağlanan üstün “halka dalgası” geçici koruma ile birleştirir. Bu dayanıklı cihaz, genel amaçlı ve hassas/kritik yük uygulamaları için tasarlanmıştır. RM-STxx modeli genellikle küçük ve orta büyüklükteki servis girişleri, dağıtım ve tali panolara kurulur. Kompakt boyutu ve metal olmayan muhafaza tasarımı, doğrudan elektrik panoları ve bireysel ekipman kesicileri içine kurulmasına da olanak tanır. Dahili kurulum, mümkün olan en kısa kablo uzunluğunu ve optimum performansı sağlar.',
                description: 'Yüksek enerji taşıma ve AC sinüs dalgasını aktif olarak izleyen sinüs izleme devresini kullanan, impuls ve halka dalgası tipi geçicilerin neredeyse tamamen ortadan kaldırılmasını sağlayan paralel bağlı geçici voltaj darbe bastırıcı cihaz',
                application: 'ANSI/IEEE Kategori C, B ve A maruziyet seviyelerinde kullanım için tasarlanmıştır. Dağıtım panoları, tali panolar ve/veya bireysel ekipman panolarından beslenen hassas/kritik yükleri korumak üzere tasarlanmıştır.',
                warranty: '15 Yıl Sınırsız Ücretsiz Değişim',
                attributes: 'ANSI/UL 1449-2006 (4. Baskı) standardına göre UL tarafından listelenmiştir. ML kaydı: E363345; CSA dosyası: 259700, UL1283* ve CE Uyumlu (* Sadece Tip 2 SPD’ler) ISO 9001:2008, ANSI C62.72-2007, IEC 61643-1 Sınıf 2 ve 3'
            },
            {
                title: 'RM-VS/VT210 Serisi',
                content: 'RM-VS/VT210 serisi, müşterilerden gelen çok çeşitli taleplere yanıt vermek amacıyla geliştirilmiştir. Bu cihaz, 800V AC’ye kadar endüstriyel uygulamaların zorluklarına dayanabilecek kadar sağlam olup, içeride oluşabilecek geçici olaylara karşı koruma sağlar.',
                description: 'Ayrık “Tüm Modlarda” Devre Yapısı: IEEE Std. 1100-2005’e göre doğrudan bağlı koruma elemanları. Sektör Lideri Let-through Performansı.',
                application: 'Dağıtım panoları, tali panolar ve/veya bireysel ekipman panolarından beslenen hassas/kritik yükleri korumak üzere tasarlanmıştır.',
                warranty: '10 Yıl Sınırsız Ücretsiz Değişim',
                attributes: 'ANSI/UL 1449-2006 (4. Baskı), IEEE Std. 1100-2005'
            },
            {
                title: 'ST-TDF3xx-DINx',
                content: 'Uluslararası DIN SPD/TDF, DIN Rayı Montajlı Darbe Koruma Cihazı ve Geçici Bozulma Filtresi. TDF ailesi cihazları, mevcut en iyi halka dalgası ve osilatuvar geçici korumayı sağlamanın yanı sıra sağlam impuls geçici koruma da sunar. Bu cihazlar, hassas / kritik öneme sahip ekipmanları besleyen çok fazlı uygulamalarda kullanılmak üzere tasarlanmıştır.',
                description: 'DIN rayı montajlı darbe koruma cihazı, günümüzün elektriksel ortamında karşılaşılan tüm darbe türlerine karşı koruma sağlayacak şekilde tasarlanmış olup sadece dağıtım sisteminden kaynaklanan impuls darbelere karşı değil, tüm darbe spektrumuna karşı etkilidir.',
                features: [
                    'DIN rayına monte edilebilir',
                    'Güç frekansı – 50-60 Hz',
                    'Darbe akımı kapasitesi 50 kA 8/20 μs Sınıf 2',
                    'Frequency Attenuation Network™ ile düşük gerilim koruma seviyesi',
                    'Kolay değişim için takılabilir Sınıf 2 SPD modülü',
                    'Küresel patentli termal ayırıcı tasarım'
                ],
                warranty: 'Beş Yıl Garanti'
            }
        ]
    };

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Ürünler' },
        { label: product.title }
    ];

    return (
        <div className="product-detail-page">
            <Hero
                title={product.title}
                description={product.description}
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Intro Section */}
            <section className="product-intro-section">
                <div className="product-intro-container">
                    <div className="product-intro-grid">
                        <div className="product-info-text">
                            <div className="product-header-card">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                            </div>
                            <div className="adf-info-text">
                                <p>{product.longDescription}</p>
                            </div>
                            <div className="product-actions">
                                <Link to="/" className="btn-adf-back">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M19 12H5M12 19l-7-7 7-7" />
                                    </svg>
                                    Ana Sayfaya Dön
                                </Link>
                                <a href="tel:+908501234567" className="btn-primary-adf">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l2.21-2.21a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                    Uzmanımızla İletişime Geçin
                                </a>
                            </div>
                        </div>
                        <div className="product-image-box">
                            <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Series Section */}
            <section className="product-series-section">
                <div className="container">
                    <div className="product-section-header">
                        <h2>SineTamer Serileri</h2>
                        <p>Uygulama alanına ve ihtiyaca göre optimize edilmiş profesyonel koruma çözümleri.</p>
                    </div>
                    <div className="series-grid">
                        {product.series.map((s, idx) => (
                            <div className="series-card" key={idx}>
                                <div className="series-header">
                                    <h3>{s.title}</h3>
                                    <span className="series-warranty-badge">{s.warranty}</span>
                                </div>
                                <div className="series-body">
                                    <p className="series-content">{s.content}</p>
                                    <div className="series-details-box">
                                        {s.description && (
                                            <div className="s-detail">
                                                <strong>Tanım:</strong> <span>{s.description}</span>
                                            </div>
                                        )}
                                        {s.application && (
                                            <div className="s-detail">
                                                <strong>Uygulama:</strong> <span>{s.application}</span>
                                            </div>
                                        )}
                                        {s.attributes && (
                                            <div className="s-detail">
                                                <strong>Nitelikler:</strong> <span className="s-attr">{s.attributes}</span>
                                            </div>
                                        )}
                                        {s.features && (
                                            <div className="s-features-inline">
                                                {s.features.map((f, i) => (
                                                    <span key={i} className="s-tag">{f}</span>
                                                ))}
                                            </div>
                                        )}
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

export default Product2;
