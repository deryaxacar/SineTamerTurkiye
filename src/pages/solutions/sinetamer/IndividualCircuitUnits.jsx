import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const IndividualCircuitUnits = () => {
    const [activeTab, setActiveTab] = useState(0);

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'SineTamer' },
        { label: 'Bireysel Devre Üniteleri' }
    ];

    const tabData = [
        {
            title: 'BİREYSEL EKİPMAN SUSTURUCULARI',
            description: (
                <>
                    Bu cihazlar, hassas/kritik ekipmanları besleyen yerlerdeki tek fazlı 120 ila 480 VAC veya 5 ila 240 VDC devre uygulamaları için tasarlanmıştır. Bağımsız bir{' '}
                    <Link to="/cozumler/sinetamer/asiri-gerilim-koruma-cihazi" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', borderBottom: '1px solid var(--primary)' }}>
                        aşırı gerilim koruma cihazı
                    </Link>{' '}
                    olarak tasarlanmış olmaları ve mevcut bir muhafaza veya kabin dışında kullanıldıklarında özel bir muhafaza gerektirmemeleri bakımından benzersizdirler. Kompakt boyutları kurulumu kolaylaştırır ve garanti sektördeki en iyisidir. Şimdi tüm bunlara, özel "tüm mod" korumasını da ekleyin ve etkili ve güvenilir aşırı gerilim korumasını tanımlayan bir cihaz elde edersiniz. Üniteler, Frekans Zayıflama Ağı™ veya sadece kapsüllenmiş Optimal Yanıt Ağı ile birlikte mevcuttur.
                </>
            ),
            points: [
                'SPT Serisi – Gelişmiş Sinüs Dalga Takibi™ – Klima üniteleri.',
                'SPT-RJ Serisi – Gelişmiş Sinüs Dalga Takibi™ – RJ14 korumalı AC üniteleri dahildir.',
                'SPT-DIN Serisi – Gelişmiş Sinüs Dalga İzleme™ – DIN rayına monte edilebilen klima üniteleri.',
                'SPT-DC serisi – Gelişmiş Sinüs Dalga Takibi™ – DC üniteleri.',
                'SPW Serisi – Sabit Bağlantılı Gelişmiş Sinüs Dalga İzleme™ – 120 ila 480 Vac arası AC üniteleri',
                'FSPT Serisi – Optimal Yanıt Ağı – Klima üniteleri.',
                'ST-PIU2 / ST-SPIU2',
                'ST-PIU6C / ST-SPIU6C'
            ]
        },
        {
            title: 'OEM/KONUT',
            description: 'ST-LL240P - 240 Volt, 3 Kablolu, Paralel ünite, Frekans Zayıflaması ile veya Zayıflaması Olmadan.',
            points: [

            ]
        },
        {
            title: 'ICPS AİLESİ',
            description: 'ICPS Ailesi, endüstriyel kontrol ve güç sistemleri için kapsamlı bir koruma çözümü sunar. Ağır hizmet koşullarında bile kesintisiz çalışma ve maksimum ekipman ömrü sağlamak üzere en gelişmiş SineTamer teknolojisi ile donatılmıştır.',
            points: [
                'ST-ICPS – Gelişmiş Sinüs Dalga Takibi (alanın kritik ve sınırlı olduğu durumlarda).',
                'ST-RSE-3N serisi Bunlar, SPT üniteleriyle aynı muhafazada bulunan Üç (3) fazlı ünitelerdir.',
                'ST-FDINxx-20 – 35 mm DIN raylı muhafaza ünitesi. 120 veya 240 volt tek fazlı – termal/akım sigortalı! Standart sıkıştırma performansı',
            ]
        }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Bireysel Devre Üniteleri"
                description="Hassas ekipmanlarınızın bireysel devre seviyesinde en üst düzey korunması."
                backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Interactive Selector Section */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--white)' }}>
                <div className="container">

                    {/* Tab Selector */}
                    <div className="units-tab-selector">
                        {tabData.map((tab, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`units-tab-btn ${activeTab === idx ? 'active' : ''}`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Content Display Area */}
                    <div className="units-content-wrapper">
                        <div className="tab-text-content">
                            <p className="units-description">
                                {tabData[activeTab].description}
                            </p>

                            <ul className="units-points-list">
                                {tabData[activeTab].points.map((point, pIdx) => (
                                    <li key={pIdx} className="units-point-item">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Split CTA Section */}
                    <div className="units-split-cta">
                        <div className="units-cta-content">
                            <h2>Veri Sayfamızı İnceleyin</h2>
                            <p>
                                Ürünlerimizin detaylı teknik özelliklerini ve uygulama şemalarını içeren dökümanları inceleyebilirsiniz.
                            </p>
                            <a href="/cozumler/sinetamer/bireysel-devre-veri-sayfalari" className="units-pdf-btn">
                                Bireysel Veri Sayfası Detay
                            </a>
                        </div>
                        <div className="units-cta-image-wrapper">
                            <img
                                src="/images/Sinetimer2-637x242.jpg"
                                alt="SineTamer Application Area"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndividualCircuitUnits;
