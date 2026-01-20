import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const DataTelecomUnits = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'SineTamer' },
        { label: 'Veri/Telekom Üniteleri' }
    ];

    const whySineTamer = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            title: "Ultra-Hızlı Tepki Süresi",
            description: "Nanosaniye mertebesinde tepki süresi ile en hassas veri kayıplarını bile önler."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            ),
            title: "Frekans Zayıflatma",
            description: "Sadece voltaj doruklarını değil, yıkıcı yüksek frekanslı gürültüleri de temizler."
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
            ),
            title: "Maliyet Tasarrufu",
            description: "Beklenmedik duruşları engelleyerek bakım ve parça değişim maliyetlerini minimize eder."
        }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Veri / Telekom Üniteleri"
                description="Kritik veri ve iletişim altyapılarınız için dünyanın en gelişmiş aşırı gerilim koruma çözümleri."
                backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Introduction Section - Two Column Layout */}
            <section className="category-features">
                <div className="container">
                    <div className="section-header">
                        <h2>SineTamer Veri / Telekom Üniteleri</h2>
                        <p>Telekomünikasyon Cihazları - Endüstriyel, 25 Yıl Garantili</p>
                    </div>

                    <div className="category-grid-styled">
                        <div className="category-text-content">
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '700' }}>
                                Telekomünikasyon Cihazları. Endüstriyel, 25 Yıl Garantili
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '2rem' }}>
                                SineTamer® ürün yelpazesi, birçoğu UL497A veya B onaylı olan eksiksiz bir telekomünikasyon ve veri üniteleri yelpazesini de kapsamaktadır. Veri ünitelerimiz, tek/çoklu çift 4/20mA'den tek kullanım noktası veya 19" raf tipi uygulamalar için Cat6 korumasına kadar uzanmaktadır.
                            </p>
                            <Link to="/cozumler/sinetamer/mv-detaylari" className="btn btn-primary" style={{ padding: '1rem 2.5rem', display: 'inline-block' }}>
                                Veri / Telekom Üniteleri Detayları
                            </Link>
                        </div>

                        <div className="vertical-divider"></div>

                        <div className="category-visual">
                            <div style={{ position: 'relative', width: '100%' }}>
                                <img
                                    src="https://www.ecsintl.com/wp-content/uploads/2023/12/solutionbanner-700x178-1-700x178.jpg"
                                    alt="Modern Veri Merkezi"
                                    style={{ width: '100%', borderRadius: '10px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Data Table Section */}
            <section className="category-table-section" style={{ padding: '0 0 4rem 0' }}>
                <div className="container">
                    <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>Yeni # UL497B</h2>
                    </div>

                    <div style={{ maxWidth: '1200px', margin: '0 auto', overflowX: 'auto', borderRadius: '8px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--gray)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f1f4f9', color: 'var(--primary)', textAlign: 'center' }}>
                                    <th style={{ padding: '0.75rem 1rem', fontWeight: '700', borderRight: '1px solid var(--gray)', fontSize: '0.95rem' }}>Model</th>
                                    <th style={{ padding: '0.75rem 1rem', fontWeight: '700', fontSize: '0.95rem' }}>Açıklama</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { model: 'ST-TC130D2-B: TC130D2-B', desc: '1 Çift, 2 İletken, Terminal Şeridi' },
                                    { model: 'ST-TC130D4-B: ST-TC130D4-B', desc: '2 Çift, 4 İletken, Terminal Şeridi' },
                                    { model: 'ST-TC140D6-B: ST-TC130D6-B', desc: '3 Çift, 6 İletken, Terminal Şeridi' },
                                    { model: 'ST-TC130D8-B: ST-TC130D8-B', desc: '4 Çift, 8 İletken, Terminal Şeridi' },
                                    { model: 'ST-TC130D2DIN-B: ST-TC130D2DIN-B', desc: '1 Çift, 2 İletken, DIN rayına montaj' },
                                    { model: 'ST-TC130D4DIN-B: ST-TC130D4DIN-B', desc: '2 Çift, 4 İletken, DIN rayına montaj' },
                                    { model: 'ST-TC130D6DIN-B: ST-TC130D6DIN-B', desc: '4 Çift, 8 İletken, DIN rayına montaj' },
                                    { model: 'ST-TRJ14130D4-B: ST-TRJ14130D4-B', desc: '2 Çift, RJ14, Mod 8 Pin RJ Giriş/Çıkış Jakları' },
                                    { model: 'ST-T66130D10-B: ST-T66130D10-B', desc: '5 çift, standart telekom, bağlantı bloğu' },
                                    { model: 'ST-T66130D20-B: ST-T66130D20-B', desc: '2 - PDB5 + DIN montajı + topraklama kiti' },
                                    { model: 'ST-T66130D30-B: ST-T66130D30-B', desc: '3 - PDB5 + DIN montajı + topraklama kiti' },
                                    { model: 'ST-T66130D40-B: ST-T66130D40-B', desc: '4 - PDB5 + DIN montajı + topraklama kiti' },
                                    { model: 'ST-T66130D50-B: ST-T66130D50-B', desc: '5 - PDB5 + DIN montajı + topraklama kiti' },
                                    { model: 'ST-CXF60F1-B: ST-CXF60F1-B', desc: 'Koaksiyel -F- Konnektör' },
                                    { model: 'ST-CXBNC60F1-B: ST-CXBNC60F1-B', desc: 'Koaksiyel -BNC- Konnektör' },
                                    { model: 'ST-CXF##E2-B: ST-CXF##E2-B', desc: 'HP Koaksiyel Üniteler' },
                                    { model: 'ST-CXNxxFx-B', desc: 'Koaksiyel -N- Konnektör' },
                                ].map((row, idx) => (
                                    <tr key={idx} style={{
                                        borderBottom: '1px solid var(--gray)',
                                        backgroundColor: idx % 2 === 0 ? 'white' : '#f1f4f9',
                                        transition: 'background-color 0.2s ease',
                                        textAlign: 'center'
                                    }}>
                                        <td style={{ padding: '0.75rem 1rem', fontWeight: '700', color: 'var(--primary)', borderRight: '1px solid var(--gray)', fontSize: '0.9rem' }}>{row.model}</td>
                                        <td style={{ padding: '0.75rem 1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>{row.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Second Technical Data Table Section */}
            <section className="category-table-section" style={{ padding: '0 0 6rem 0' }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>Veri Terminali Şerit Bastırıcıları - Endüstriyel</h2>
                    </div>

                    <div style={{ maxWidth: '1200px', margin: '0 auto', overflowX: 'auto', borderRadius: '8px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--gray)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                            <tbody>
                                {[
                                    { isHeader: true, title: '# = 5, 15, 24, 53, 140 voltluk voltaj', subtitle: '10 Mb/sn, çift başına 10 kb/sn Tepe Akımı' },
                                    { model: 'ST-DP233A4-B: ST-DP2##A4-B', desc: '4 iletken' },
                                    { model: 'ST-DP233A8-B: ST-DP2##A8-B', desc: '8 iletken' },

                                    { isHeader: true, title: '# = 5, 15, 33, 53, 140 voltluk voltaj', subtitle: '100 Mb/sn, çift başına 0,1 kb/sn Tepe Akımı' },
                                    { model: 'ST-DP2##B4-B: ST-DP2##B4-B', desc: '4 iletken' },
                                    { model: 'ST-DP2##B8-B: ST-DP2##B8-B', desc: '8 iletken' },

                                    { isHeader: true, title: '# = 5, 15, 33, 53, 140 voltluk voltaj', subtitle: '100 Mb/sn, çift başına 0,1 kb/sn Tepe Akımı' },
                                    { model: 'ST-DP2##B4-B: ST-DP2##B4-B', desc: '4 iletken' },
                                    { model: 'ST-DP2##B8-B: ST-DP2##B8-B', desc: '8 iletken' },

                                    { isHeader: true, title: '# = 5, 15, 33, 53, 140 voltluk voltaj', subtitle: 'Hız Spesifikasyonu' },
                                    { model: 'ST-DP2##C4-B: ST-DP2##C4-B', desc: '4 iletken' },
                                    { model: 'ST-DP2##C8-B: ST-DP2##C8-B', desc: '8 iletken' },
                                ].map((row, idx) => {
                                    if (row.isHeader) {
                                        return (
                                            <tr key={idx} style={{ backgroundColor: '#edf2f7', color: 'var(--primary)' }}>
                                                <td colSpan="2" style={{ padding: '0.75rem 1rem', fontWeight: '800', fontSize: '0.85rem', textAlign: 'center', borderBottom: '1px solid var(--gray)' }}>
                                                    <div style={{ textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>{row.title}</div>
                                                    <div style={{ fontWeight: '500', color: 'var(--text-light)', fontSize: '0.75rem' }}>{row.subtitle}</div>
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return (
                                        <tr key={idx} style={{
                                            borderBottom: '1px solid var(--gray)',
                                            backgroundColor: idx % 2 === 0 ? 'white' : '#f8faff',
                                            transition: 'background-color 0.2s ease',
                                            textAlign: 'center'
                                        }}>
                                            <td style={{ padding: '0.75rem 1rem', fontWeight: '700', color: 'var(--primary)', borderRight: '1px solid var(--gray)', fontSize: '0.9rem' }}>{row.model}</td>
                                            <td style={{ padding: '0.75rem 1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>{row.desc}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Third Section: Miscellaneous Data Suppressors (Dual Column) */}
            <section className="category-misc-section" style={{ padding: '4rem 0 6rem 0', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div className="category-grid-styled">
                        {/* Text and List Content on Left */}
                        <div className="category-text-content" style={{ textAlign: 'left' }}>
                            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '0.5rem', fontWeight: '800' }}>
                                ÇEŞİTLİ VERİ GİZLEYİCİLER
                            </h2>
                            <p style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '2rem', fontWeight: '600' }}>
                                x = 5, 12, 24, 48, 140°C gerilim, Cat 5, 100mb
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {[
                                    { model: 'ST-DRJ45##C8-B: ST-DRJ45##C8-B', desc: '' },
                                    { model: 'ST-DRJ45##C12PORTSID-B: ST-DRJ45##C12PORTSID-B', desc: '12 portlu raf tipi montaj aparatı' },
                                    { model: 'ST-DRJ45##C24PORTSID-B: ST-DRJ45##C24PORTSID-B', desc: '24 portlu raf tipi montaj' },
                                    { model: 'ST-RS232-DB25: ST-RS232-DB25', desc: 'DB25 - 25 pinli bağlantı' },
                                    { model: 'ST-RS232 // ST-RS485 ST-RS232 // ST-RS485', desc: '' },
                                    { model: 'ST-T66###A10-B: ST-T66###A10-B', desc: "5 pr Veri 2 bit'e kadar ve x = Voltaj" },
                                    { model: 'ST-RJ45-Cat5 Ethernet Cat5', desc: '' },
                                    { model: 'ST-RJ45-Cat6', desc: 'Ethernet 1000Base T, RJ45' },
                                    { model: 'ST-RJ45-Cat5POE', desc: 'Cat5 100 BaseT 48v POE özellikli' },
                                    { model: 'ST-RJ45-Cat6POE Cat6 1000 BaseT, 1000BaseTX 48v POE özellikli', desc: '' },
                                ].map((item, idx) => (
                                    <div key={idx} style={{
                                        paddingBottom: '0.6rem',
                                        borderBottom: '1px solid var(--gray)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.15rem'
                                    }}>
                                        <span style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '0.92rem', lineHeight: '1.4' }}>{item.model}</span>
                                        {item.desc && <span style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: '1.4' }}>{item.desc}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gap and Image Content on Right */}
                        <div className="vertical-divider"></div>

                        <div className="category-visual">
                            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                                <img
                                    src="https://www.ecsintl.com/wp-content/uploads/2023/12/05-07.jpg"
                                    alt="Networking Equipment and Patch Panels"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '600px',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        boxShadow: 'var(--shadow-xl)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fourth Technical Data Table Section */}
            <section className="category-table-section" style={{ padding: '0 0 6rem 0' }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>VERİ TERMİNAL ŞERİDİ 4/120MA DÖNGÜ AKIM ÜNİTELERİ <br></br> (5, 12, 24, 48, 140 V)</h2>
                    </div>

                    <div style={{ maxWidth: '1200px', margin: '0 auto', overflowX: 'auto', borderRadius: '8px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--gray)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                            <tbody>
                                {[
                                    { isHeader: true, title: '2 Kablolu, Akım Döngüsü, 12, 24, 48, 140V Nominal' },
                                    { model: 'ST-CLC##A2-B: ST-CLC##A2-B', desc: '' },
                                    { model: 'ST-CLW24A2P-B: ST-CLW24A2P-B', desc: '2 telli paslanmaz çelik, kapaklı, 24V' },
                                    { model: 'ST-CLW48A2P-B: ST-CLW48A2P-B', desc: '2 telli paslanmaz çelik, kapaklı, 48V' },

                                    { isHeader: true, title: '## – Voltaj, z soneki – veri hızı (X=10Mbps ve C=100Mbps)' },
                                    { model: 'ST-CLP##A2DIN-B: ST-CLP##A2DIN-B', desc: '1 Çift, 2 İletken, DIN rayına montaj, 2 Mbps' },
                                    { model: 'ST-CLP##A4DIN-B: ST-CLP##A4DIN-B', desc: '2 Çift, 4 İletken, DIN rayına montaj, 2 Mbps' },
                                    { model: 'ST-CLP##A6DIN-B: ST-CLP##A6DIN-B', desc: '3 Çift, 6 İletken, DIN rayına montaj, 2 Mbps' },
                                    { model: 'ST-CLP##A2-B: ST-CLP##A2-B', desc: '1 çift, montaj ayakları, 2 Mbps' },
                                    { model: 'ST-CLP##A4-B: ST-CLP##A4-B', desc: '2 çift, montaj ayakları, 2 Mbps' },
                                    { model: 'ST-CLP##A6-B: ST-CLP##A6-B', desc: '3 çift, montaj ayakları, 2 Mbps' },
                                    { model: 'ST-CLP##Ax-B', desc: '1-3 çift, montaj ayakları – 100 Mbps' },
                                    { model: 'ST-T66##B50-B: ST-T66##B50-B', desc: '2 telli Akım Döngüsü 24/48- 25pr. PDB' },
                                ].map((row, idx) => {
                                    if (row.isHeader) {
                                        return (
                                            <tr key={idx} style={{ backgroundColor: '#edf2f7', color: 'var(--primary)' }}>
                                                <td colSpan="2" style={{ padding: '1rem', fontWeight: '800', fontSize: '0.85rem', textAlign: 'center', borderBottom: '1px solid var(--gray)' }}>
                                                    <div style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>{row.title}</div>
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return (
                                        <tr key={idx} style={{
                                            borderBottom: '1px solid var(--gray)',
                                            backgroundColor: idx % 2 === 0 ? 'white' : '#f8faff',
                                            transition: 'background-color 0.2s ease',
                                            textAlign: 'center'
                                        }}>
                                            <td style={{ padding: '0.75rem 1rem', fontWeight: '700', color: 'var(--primary)', borderRight: '1px solid var(--gray)', fontSize: '0.9rem' }}>{row.model}</td>
                                            <td style={{ padding: '0.75rem 1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>{row.desc}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Final Technical Data Table Section: Video & Combined */}
            <section className="category-table-section" style={{ padding: '0 0 8rem 0' }}>
                <div className="container">
                    <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>VİDEO ÜNİTELERİ VE KOMBİNE VERİLER</h2>
                    </div>

                    <div style={{ maxWidth: '1200px', margin: '0 auto', overflowX: 'auto', borderRadius: '8px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--gray)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
                            <tbody>
                                {[
                                    'Veri ve video için koaksiyel üniteler',
                                    'UTP (4 telli) üzerinden birleşik DC ve Video',
                                    'UTP (8 telli) üzerinden birleşik DC, VERİ ve Video'
                                ].map((item, idx) => (
                                    <tr key={idx} style={{
                                        borderBottom: idx === 2 ? 'none' : '1px solid var(--gray)',
                                        backgroundColor: idx % 2 === 0 ? 'white' : '#f8faff',
                                        transition: 'background-color 0.2s ease',
                                        textAlign: 'center'
                                    }}>
                                        <td style={{ padding: '1.25rem 1.5rem', fontWeight: '700', color: 'var(--primary)', fontSize: '1rem' }}>{item}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default DataTelecomUnits;
