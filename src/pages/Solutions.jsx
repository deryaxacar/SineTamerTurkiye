import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import VideoSection from '../components/VideoSection';
import './Solutions.css';
import './solutions/SolutionCategory.css';

const Solutions = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler', path: '/#solutions' }
    ];

    const solutions = [
        {
            id: 1,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            ),
            title: 'Güneş Enerjisi Sistemleri',
            description: 'Ev, işletme ve endüstriyel tesisler için yüksek verimli güneş paneli çözümleri sunuyoruz. Fotovoltaik sistemlerimiz ile enerji maliyetlerinizi %70\'e kadar düşürebilirsiniz.',
            features: [
                'Mono ve polikristal panel seçenekleri',
                'On-grid ve off-grid sistem tasarımı',
                'Profesyonel montaj ve kurulum',
                '25 yıl panel garantisi',
                'Uzaktan izleme ve raporlama'
            ],
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800'
        },
        {
            id: 2,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
                </svg>
            ),
            title: 'Rüzgar Enerjisi Çözümleri',
            description: 'Küçük ölçekli ev tipi türbinlerden endüstriyel rüzgar santrallerine kadar geniş bir yelpazedeçözümler sunuyoruz.',
            features: [
                'Dikey ve yatay eksenli türbinler',
                'Hibrit sistemler',
                'Rüzgar analizi ve fizibilite',
                'Bakım ve onarım hizmetleri',
                '20 yıl işletme garantisi'
            ],
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800'
        },
        {
            id: 3,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="6" width="18" height="12" rx="2" />
                    <path d="M23 13v-2" />
                </svg>
            ),
            title: 'Enerji Depolama Sistemleri',
            description: 'Ürettiğiniz enerjiyi modern lityum-iyon batarya sistemleri ile depolayarak 7/24 kesintisiz kullanın.',
            features: [
                'Tesla Powerwall ve BYD çözümleri',
                '10-15 yıl batarya ömrü',
                'Akıllı enerji yönetimi',
                'Şebeke kesintilerinde süreklilik',
                'Uzaktan izleme ve kontrol'
            ],
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800'
        },
        {
            id: 4,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
            ),
            title: 'Enerji Verimliliği Danışmanlığı',
            description: 'İşletmenizin enerji tüketimini analiz ediyor, tasarruf potansiyelinizi belirliyoruz.',
            features: [
                'Detaylı enerji analizi',
                'LED aydınlatma dönüşümü',
                'HVAC optimizasyonu',
                'Akıllı bina sistemleri',
                'Enerji tüketim raporlaması'
            ],
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800'
        },
        {
            id: 5,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
            title: 'Akıllı Şebeke Çözümleri',
            description: 'Enerji üretim ve tüketiminizi optimize eden akıllı şebeke sistemleri ile verimliliğinizi artırın.',
            features: [
                'Akıllı sayaç sistemleri',
                'Demand response yönetimi',
                'Grid-tie inverterler',
                'Enerji analiz platformu',
                'Anlık tüketim takibi'
            ],
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
        },
        {
            id: 6,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
            ),
            title: 'Konut Enerji Paketleri',
            description: 'Evler için özel tasarlanmış komple enerji çözümleri ile bağımsız enerji üretimine geçin.',
            features: [
                'Güneş + depolama paketi',
                'Ücretsiz keşif ve analiz',
                'Uygun ödeme seçenekleri',
                'Devlet teşvikleri desteği',
                'Anahtar teslim kurulum'
            ],
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800'
        }
    ];

    return (
        <div className="solutions-page">
            <SEO
                title="Çözümlerimiz"
                description="Yenilikçi enerji çözümleri, aşırı gerilim koruma, güç kalitesi analizi ve kesintisiz güç sistemleri."
                url="/cozumler"
                breadcrumbs={[
                    { name: 'Ana Sayfa', url: '/' },
                    { name: 'Çözümler' }
                ]}
            />
            <Hero
                title="Çözümlerimiz"
                description="İhtiyaçlarınıza özel, yenilikçi ve sürdürülebilir enerji çözümleri"
                backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Solutions List */}
            <section className="solutions-list">
                <div className="container">
                    {solutions.map((solution, index) => (
                        <div
                            className={`solution-item ${index % 2 === 1 ? 'reverse' : ''}`}
                            key={solution.id}
                        >
                            <div className="solution-image">
                                <img src={solution.image} alt={solution.title} />
                            </div>
                            <div className="solution-content">
                                <div className="solution-icon-large">
                                    {solution.icon}
                                </div>
                                <h2>{solution.title}</h2>
                                <p className="solution-desc">{solution.description}</p>
                                <ul className="solution-features">
                                    {solution.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20,6 9,17 4,12" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Video Section */}
            <VideoSection
                title="Projelerimizden Kesitler"
                subtitle="Tamamladığımız projeleri ve müşteri deneyimlerini izleyin."
            />

            {/* CTA Section */}
            <section className="solutions-cta">
                <div className="container">
                    <div className="solutions-cta-content">
                        <h2>Hangi Çözüm Size Uygun?</h2>
                        <p>
                            Ücretsiz danışmanlık hizmetimiz ile ihtiyaçlarınıza en uygun
                            enerji çözümünü birlikte belirleyelim.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
