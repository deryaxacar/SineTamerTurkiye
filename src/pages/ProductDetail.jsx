import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    const products = [
        {
            id: 1,
            category: 'solar',
            categoryName: 'Güneş Panelleri',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
                'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600',
                'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600'
            ],
            title: 'Monokristal Güneş Paneli 400W',
            description: 'Yüksek verimli monokristal hücreler ile maksimum enerji üretimi.',
            price: '₺4.500',
            specs: {
                power: '400W',
                efficiency: '%21.5',
                warranty: '25 Yıl',
                dimensions: '1755 x 1038 x 35 mm',
                weight: '21 kg',
                cells: '144 Hücre (Yarım Kesim)'
            },
            features: [
                'Yüksek verimli PERC teknolojisi',
                'Anti-yansıtıcı cam kaplama',
                'IP68 su ve toz koruması',
                'PID dayanıklılığı',
                'Düşük ışık performansı',
                'Sertifikalı: IEC, TÜV, CE'
            ],
            longDescription: `Monokristal Güneş Paneli 400W, en son PERC teknolojisi ile üretilmiş yüksek verimli bir güneş panelidir. %21.5 verimlilik oranı ile sınıfının en iyileri arasında yer alır.

Yarım kesim hücre teknolojisi sayesinde gölgelenme kayıpları minimize edilmiş, düşük ışık koşullarında bile yüksek performans sağlar. Anti-yansıtıcı cam kaplama ile güneş ışınlarının maksimum emilimi gerçekleştirilir.

25 yıl performans garantisi ile uzun vadeli yatırımınızı güvence altına alıyoruz. IP68 koruma sınıfı ile zorlu hava koşullarına dayanıklıdır.`
        },
        {
            id: 2,
            category: 'solar',
            categoryName: 'Güneş Panelleri',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600',
                'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
                'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600'
            ],
            title: 'Polikristal Güneş Paneli 330W',
            description: 'Uygun maliyetli, güvenilir performans sunan panel seçeneği.',
            price: '₺3.200',
            specs: {
                power: '330W',
                efficiency: '%17.8',
                warranty: '20 Yıl',
                dimensions: '1640 x 992 x 35 mm',
                weight: '18.5 kg',
                cells: '72 Hücre'
            },
            features: [
                'Ekonomik çözüm',
                'Güvenilir performans',
                'Uzun ömürlü yapı',
                'Kolay montaj',
                'Yüksek mukavemet',
                'Sertifikalı: IEC, CE'
            ],
            longDescription: `Polikristal Güneş Paneli 330W, uygun fiyatlı ve güvenilir bir enerji çözümü arayanlar için ideal bir seçenektir. Maliyet-performans dengesinde öne çıkar.

72 hücreli yapısı ile konut ve ticari uygulamalar için uygundur. 20 yıl performans garantisi ile uzun vadeli yatırım güvencesi sağlar.

Kaliteli malzeme ve üretim teknikleri ile zorlu hava koşullarına dayanıklı, uzun ömürlü performans sunar.`
        },
        {
            id: 3,
            category: 'solar',
            categoryName: 'Güneş Panelleri',
            image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600',
                'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
                'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600'
            ],
            title: 'Bifacial Güneş Paneli 450W',
            description: 'Çift taraflı enerji toplama ile %30 daha fazla verim.',
            price: '₺6.800',
            specs: {
                power: '450W (Ön) + %30 (Arka)',
                efficiency: '%22.3',
                warranty: '30 Yıl',
                dimensions: '2094 x 1038 x 35 mm',
                weight: '26 kg',
                cells: '144 Hücre Bifacial'
            },
            features: [
                'Çift taraflı enerji üretimi',
                'Premium verimlilik',
                'Cam/cam yapı',
                'Gelişmiş dayanıklılık',
                'Yansıma optimizasyonu',
                'Sertifikalı: IEC, TÜV, CE, MCS'
            ],
            longDescription: `Bifacial Güneş Paneli 450W, çift taraflı enerji üretimi ile geleneksel panellere göre %30'a kadar daha fazla enerji üretir. Premium segment için tasarlanmış en gelişmiş panel teknolojisidir.

Cam/cam yapısı sayesinde 30 yıla kadar performans garantisi sunar. Arka yüzey, zeminden yansıyan ışığı toplayarak toplam enerji üretimini artırır.

%22.3 verimlilik oranı ile en yüksek performanslı paneller arasında yer alır. Büyük ölçekli projeler ve maksimum verim isteyenler için ideal seçimdir.`
        },
        {
            id: 4,
            category: 'inverter',
            categoryName: 'İnverterler',
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
                'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600'
            ],
            title: 'Hibrit İnverter 5kW',
            description: 'Şebeke bağlantılı ve off-grid kullanım için ideal çözüm.',
            price: '₺18.500',
            specs: {
                power: '5kW',
                efficiency: '%97.6',
                warranty: '10 Yıl',
                batteryVoltage: '48V',
                mpptChannels: '2 MPPT',
                display: 'LCD Dokunmatik'
            },
            features: [
                'Şebeke ve off-grid mod',
                'Batarya şarj yönetimi',
                'Akıllı yük yönetimi',
                'WiFi izleme',
                'Sessiz çalışma',
                'IP65 koruma'
            ],
            longDescription: `Hibrit İnverter 5kW, hem şebekeye bağlı hem de bağımsız (off-grid) çalışabilen çok yönlü bir inverterdir. Konutlar için ideal güç kapasitesi sunar.

Entegre batarya şarj yönetimi ile enerji depolama sistemleri ile uyumlu çalışır. Elektrik kesintilerinde otomatik olarak batarya moduna geçer.

WiFi bağlantısı sayesinde enerji üretimini ve tüketimini mobil uygulamadan takip edebilirsiniz. %97.6 dönüşüm verimliliği ile enerji kayıplarını minimize eder.`
        },
        {
            id: 5,
            category: 'inverter',
            categoryName: 'İnverterler',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
                'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
                'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600'
            ],
            title: 'String İnverter 10kW',
            description: 'Ticari sistemler için yüksek kapasiteli inverter.',
            price: '₺32.000',
            specs: {
                power: '10kW',
                efficiency: '%98.4',
                warranty: '10 Yıl',
                inputVoltage: '150-1000V DC',
                mpptChannels: '2 MPPT',
                communication: 'RS485, WiFi, Ethernet'
            },
            features: [
                'Ticari uygulamalar için',
                'Yüksek verimlilik',
                'Geniş voltaj aralığı',
                'Uzaktan izleme',
                'Modüler tasarım',
                'Aktif soğutma sistemi'
            ],
            longDescription: `String İnverter 10kW, orta ve büyük ölçekli ticari güneş enerjisi sistemleri için tasarlanmış yüksek kapasiteli bir inverterdir.

%98.4 dönüşüm verimliliği ile sınıfının en verimli inverterleri arasında yer alır. 2 bağımsız MPPT kanal ile farklı yönlerde konumlandırılmış panel dizilerini optimize eder.

RS485, WiFi ve Ethernet bağlantı seçenekleri ile esnek izleme ve kontrol imkanı sunar. Aktif soğutma sistemi ile yoğun çalışma koşullarında bile performans düşüşü yaşanmaz.`
        },
        {
            id: 6,
            category: 'inverter',
            categoryName: 'İnverterler',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600',
                'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600'
            ],
            title: 'Mikro İnverter 300W',
            description: 'Panel bazlı optimizasyon ile maksimum verimlilik.',
            price: '₺2.800',
            specs: {
                power: '300W',
                efficiency: '%96.5',
                warranty: '25 Yıl',
                inputVoltage: '22-55V DC',
                outputVoltage: '230V AC',
                dimensions: '175 x 175 x 35 mm'
            },
            features: [
                'Panel bazlı MPPT',
                'Gölgelenme toleransı',
                'Kolay kurulum',
                'Uzun garanti',
                'Düşük bakım',
                'Kablosuz izleme'
            ],
            longDescription: `Mikro İnverter 300W, her panel için bağımsız optimize edilen modern bir inverter çözümüdür. Gölgelenme kayıplarını minimize eder.

Her panel kendi inverterine sahip olduğu için bir paneldeki sorun diğer panelleri etkilemez. Bu özellik özellikle kısmi gölgelenme olan çatılarda büyük avantaj sağlar.

25 yıl garanti süresi ile güneş panellerinizle aynı ömür boyu performans sunar. Kablosuz izleme ile her panelin performansını ayrı ayrı takip edebilirsiniz.`
        },
        {
            id: 7,
            category: 'battery',
            categoryName: 'Bataryalar',
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
                'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600'
            ],
            title: 'Lityum Batarya 10kWh',
            description: 'Uzun ömürlü, yüksek kapasiteli enerji depolama çözümü.',
            price: '₺45.000',
            specs: {
                capacity: '10kWh',
                technology: 'LiFePO4',
                warranty: '10 Yıl',
                cycles: '6000+ Döngü',
                efficiency: '%95',
                weight: '120 kg'
            },
            features: [
                'Yüksek enerji yoğunluğu',
                'Uzun döngü ömrü',
                'BMS entegre',
                'Modüler yapı',
                'Hızlı şarj desteği',
                'Güvenlik sertifikaları'
            ],
            longDescription: `Lityum Batarya 10kWh, LiFePO4 teknolojisi ile üretilmiş yüksek kapasiteli bir enerji depolama sistemidir. Evler ve küçük işletmeler için ideal kapasite sunar.

6000+ döngü ömrü ile 10 yıl üzeri kullanım garantisi sağlar. Entegre BMS (Batarya Yönetim Sistemi) ile aşırı şarj, aşırı deşarj ve kısa devre koruması sunar.

Modüler yapısı sayesinde kapasite ihtiyacınıza göre genişletilebilir. %95 gidiş-dönüş verimliliği ile enerji kayıplarını minimize eder.`
        },
        {
            id: 8,
            category: 'battery',
            categoryName: 'Bataryalar',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
                'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
                'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600'
            ],
            title: 'Ev Tipi Batarya 5kWh',
            description: 'Konutlar için kompakt ve verimli depolama sistemi.',
            price: '₺28.000',
            specs: {
                capacity: '5kWh',
                technology: 'LiFePO4',
                warranty: '10 Yıl',
                cycles: '5000+ Döngü',
                efficiency: '%94',
                weight: '65 kg'
            },
            features: [
                'Kompakt tasarım',
                'Duvar montaj',
                'Sessiz çalışma',
                'Akıllı yönetim',
                'App kontrolü',
                'Acil güç modu'
            ],
            longDescription: `Ev Tipi Batarya 5kWh, konutlar için tasarlanmış kompakt ve şık bir enerji depolama çözümüdür. Duvara monte edilebilir tasarımı ile minimum yer kaplar.

Günlük enerji depolama ihtiyaçları için ideal kapasitedir. Akşam saatlerinde gündüz depolanan enerjiyi kullanarak elektrik faturanızı düşürür.

Akıllı uygulama ile şarj/deşarj durumunu izleyebilir, enerji yönetimini optimize edebilirsiniz. Elektrik kesintilerinde otomatik olarak devreye giren acil güç modu sunar.`
        },
        {
            id: 9,
            category: 'accessories',
            categoryName: 'Aksesuarlar',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
                'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600',
                'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600'
            ],
            title: 'Montaj Sistemi - Çatı',
            description: 'Alüminyum çatı montaj kiti, her türlü çatıya uyumlu.',
            price: '₺1.200',
            specs: {
                material: 'Alüminyum 6000 Serisi',
                coating: 'Anodize',
                warranty: '15 Yıl',
                windLoad: '50 m/s',
                snowLoad: '200 kg/m²',
                compatibility: 'Tüm Panel Tipleri'
            },
            features: [
                'Korozyon direnci',
                'Hızlı montaj',
                'Evrensel uyumluluk',
                'Yüksek dayanıklılık',
                'Ayarlanabilir açı',
                'Komple aksesuar seti'
            ],
            longDescription: `Montaj Sistemi - Çatı, yüksek kaliteli anodize alüminyum profillerden üretilmiş, profesyonel güneş paneli montaj çözümüdür.

Her türlü çatı tipine (kiremit, sac, beton) uyumlu modüler tasarıma sahiptir. Ayarlanabilir panel açısı ile optimum güneş yakalama açısını sağlar.

15 yıl garanti ve 50 m/s rüzgar yüküne dayanıklılık sertifikası ile uzun vadeli güvenilirlik sunar. Montaj için gerekli tüm aksesuarlar pakete dahildir.`
        },
        {
            id: 10,
            category: 'accessories',
            categoryName: 'Aksesuarlar',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600',
                'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
                'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600'
            ],
            title: 'Solar Kablo 6mm² (100m)',
            description: 'UV dayanımlı, çift izolasyonlu güneş enerjisi kablosu.',
            price: '₺850',
            specs: {
                crossSection: '6mm²',
                length: '100 metre',
                voltage: '1500V DC',
                temperature: '-40°C ~ +90°C',
                conductor: 'Tinsiz Bakır',
                insulation: 'XLPE + TZE'
            },
            features: [
                'UV ve ozon direnci',
                'Çift izolasyon',
                'Yüksek gerilim dayanımı',
                'Geniş sıcaklık aralığı',
                'TÜV sertifikalı',
                'Esnek yapı'
            ],
            longDescription: `Solar Kablo 6mm², güneş enerjisi sistemleri için özel olarak tasarlanmış yüksek kaliteli bir DC kablodur. 100 metre rulo halinde sunulur.

XLPE+TZE çift izolasyonu ile 1500V DC gerilime kadar dayanıklıdır. UV, ozon ve hava koşullarına karşı yüksek direnç gösterir.

-40°C ile +90°C arasında çalışma sıcaklığı ile zorlu iklim koşullarına uygundur. TÜV sertifikalı, tüm güneş enerjisi sistemlerinde güvenle kullanılabilir.`
        },
        {
            id: 11,
            category: 'accessories',
            categoryName: 'Aksesuarlar',
            image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600',
                'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
                'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600'
            ],
            title: 'MC4 Konnektör Seti',
            description: 'Su geçirmez, hızlı bağlantı konnektörleri.',
            price: '₺350',
            specs: {
                type: 'MC4 Erkek/Dişi',
                quantity: '10 Çift',
                current: '30A',
                voltage: '1000V DC',
                protection: 'IP67',
                material: 'PPO + Bakır'
            },
            features: [
                'Kolay kilitleme',
                'Su geçirmez',
                'Düşük temas direnci',
                'UV dayanıklı',
                'Alevsiz',
                'Sökme aparatı dahil'
            ],
            longDescription: `MC4 Konnektör Seti, güneş panelleri arasında güvenli ve hızlı bağlantı sağlayan standart konnektör sistemidir. 10 çift erkek/dişi konnektör içerir.

IP67 koruma sınıfı ile su ve toz geçirmezdir. 30A akım ve 1000V DC gerilim kapasitesi ile tüm konut ve ticari sistemlere uygundur.

Kilitleme mekanizması ile güvenli bağlantı sağlar, kazara açılmayı önler. Paket içeriğinde sökme aparatı da bulunmaktadır.`
        },
        {
            id: 12,
            category: 'accessories',
            categoryName: 'Aksesuarlar',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800',
            gallery: [
                'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
                'https://images.unsplash.com/photo-1558002038-1055907df827?w=600'
            ],
            title: 'İzleme Sistemi',
            description: 'Mobil uygulamalı uzaktan izleme ve analiz sistemi.',
            price: '₺2.500',
            specs: {
                connectivity: 'WiFi + 4G',
                monitoring: 'Gerçek Zamanlı',
                app: 'iOS & Android',
                history: '10 Yıl Veri',
                alerts: 'E-posta & SMS',
                compatibility: 'Tüm İnverterler'
            },
            features: [
                'Mobil uygulama',
                'Anlık bildirimler',
                'Enerji analizi',
                'Arıza tespiti',
                'Raporlama',
                'Çoklu sistem desteği'
            ],
            longDescription: `İzleme Sistemi, güneş enerjisi sisteminizin performansını uzaktan takip etmenizi sağlayan akıllı bir izleme çözümüdür.

WiFi ve 4G bağlantı seçenekleri ile internet bağlantısı olmayan lokasyonlarda bile çalışır. iOS ve Android uyumlu mobil uygulama ile her an her yerden sisteminizi izleyebilirsiniz.

Anlık enerji üretimi, günlük/aylık/yıllık raporlar, verimlilik analizi ve arıza bildirimleri gibi kapsamlı özellikler sunar. 10 yıla kadar veri geçmişi saklar.`
        }
    ];

    const product = products.find(p => p.id === parseInt(id));
    const relatedProducts = products.filter(p => p.id !== parseInt(id) && p.category === product?.category).slice(0, 3);

    if (!product) {
        return (
            <div className="product-detail-page">
                <div className="container">
                    <div className="not-found">
                        <h2>Ürün Bulunamadı</h2>
                        <p>Aradığınız ürün mevcut değil.</p>
                        <Link to="/urunler" className="btn btn-primary">Ürünlere Dön</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="product-detail-page">
            {/* Hero */}
            <section className="product-detail-hero">
                <div className="product-detail-hero-overlay"></div>
                <div className="product-detail-hero-content">
                    <span className="product-detail-category">{product.categoryName}</span>
                    <h1>{product.title}</h1>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link to="/urunler">Ürünler</Link>
                        <span>/</span>
                        <span>{product.title}</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="product-detail-content">
                <div className="container">
                    <div className="product-detail-grid">
                        {/* Gallery */}
                        <div className="product-gallery">
                            <div className="main-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="thumbnail-grid">
                                {product.gallery.map((img, index) => (
                                    <div className="thumbnail" key={index}>
                                        <img src={img} alt={`${product.title} ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="product-info">
                            <div className="product-price-box">
                                <span className="price-label">Fiyat</span>
                                <span className="price-value">{product.price}</span>
                                <span className="price-note">KDV Dahil</span>
                            </div>

                            <p className="product-short-desc">{product.description}</p>

                            <div className="product-features">
                                <h3>Özellikler</h3>
                                <ul>
                                    {product.features.map((feature, index) => (
                                        <li key={index}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="product-actions">
                                <Link to="/iletisim" className="btn btn-primary">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72" />
                                    </svg>
                                    Teklif Al
                                </Link>
                                <a href="tel:+908501234567" className="btn btn-outline">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Bizi Arayın
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Specs */}
                    <div className="product-specs-section">
                        <h2>Teknik Özellikler</h2>
                        <div className="specs-grid">
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div className="spec-item" key={key}>
                                    <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                                    <span className="spec-value">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="product-description-section">
                        <h2>Ürün Açıklaması</h2>
                        <div className="description-content">
                            {product.longDescription.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Related */}
                    {relatedProducts.length > 0 && (
                        <div className="related-products">
                            <h2>Benzer Ürünler</h2>
                            <div className="related-products-grid">
                                {relatedProducts.map(related => (
                                    <Link to={`/urunler/${related.id}`} className="related-product-card" key={related.id}>
                                        <div className="related-product-image">
                                            <img src={related.image} alt={related.title} />
                                        </div>
                                        <div className="related-product-content">
                                            <h4>{related.title}</h4>
                                            <span className="related-product-price">{related.price}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="back-to-products">
                        <Link to="/urunler" className="btn btn-outline-primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Tüm Ürünlere Dön
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
