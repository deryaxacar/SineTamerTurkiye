import { Link } from 'react-router-dom';
import '../SolutionCategory.css';

const TurnkeyTechSolutions = () => {
    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Anahtar Teslimi Teknoloji Çözümleri</h1>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <span>Anahtar Teslimi Teknoloji Çözümleri</span>
                    </div>
                </div>
            </section>

            {/* Content Section: Title + 3 Paragraphs */}
            <section className="detailed-info-section" style={{ padding: '5rem 0 3rem 0' }}>
                <div className="info-blocks-container">
                    <div className="info-block" style={{ borderLeft: '4px solid var(--primary)' }}>
                        <h3>Enerji Kontrol Sistemlerinin Anahtar Teslim Teknoloji Çözümleri</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            ECS, sattığımız ürünleri tamamlayan ve destekleyen eksiksiz bir Teknoloji Çözümleri platformu sunmaktan gurur duyar. Günümüzün karmaşık, teknolojik olarak gelişmiş ürünleriyle , karmaşık iş ihtiyaçlarını çözmek ve ele almak için size doğru araçları ve hizmetleri sağlamak başarı için çok önemlidir. Sektörde, karmaşık ve kullanıcı tanımlı uygulamaları sunmak için benzersiz bir konumda bulunan az sayıdaki distribütörden biri olarak nadir bulunuyoruz. Tesisiniz, dinamik iş taleplerine yanıt vermek için esnek ve dayanıklı bir altyapıya ihtiyaç duyar. ECS Anahtar Teslim Teknoloji Çözümleri, yapılandırılmış bir teslimat yöntemiyle proje ürün ve hizmet tedarikini, envanter yönetimini, dağıtım programlarını, varlık etiketlemesini ve dinamik depolamayı planlamanıza ve karşılamanıza yardımcı olabilir; teknoloji ve hizmet uzmanlığı ile çevik proje yönetimi sunar.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Energy Control System'in Anahtar Teslim Teknoloji Çözümleri, karmaşık altyapı yükseltmeleri, yenilemeleri, genişletmeleri ve konsolidasyonlarında yardımcı olarak, "Sıfır Kesinti Süresiyle Tamamlama Stratejilerimiz" ile işlerinizi aksatmadan sürdürürken temel iş girişimlerinizin yerine getirilmesini hızlandırmanıza yardımcı olabilir.
                        </p>
                        <p>
                            Ödüllü müşteri hizmetlerimizle özelleştirilmiş hizmet teklifleri sunarak, sipariş karşılama kanalınız ve stratejik sipariş karşılama ortağınız olmaya hazırız.
                        </p>
                    </div>
                </div>
            </section>

            {/* Split Section: List (Left) + PDF Card (Right) */}
            <section className="split-layout-section" style={{ paddingBottom: '5rem' }}>
                <div className="split-top">
                    {/* Left: Hizmet Kapsamımız */}
                    <div className="split-main-text">
                        <h3 style={{ color: 'var(--text-dark)', marginBottom: '2rem', fontSize: '1.75rem', fontWeight: '800' }}>Hizmet Kapsamımız</h3>
                        <div className="benefits-list" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                            {[
                                'Web Kartı Kurulumu ve Yapılandırması',
                                'Raf Bileşenlerinin Oluşturulması ve Hazırlanması',
                                'Büyük Projelerin Dağıtımı ve Depolanması',
                                'Anahtar Teslim Veri Merkezi Yenileme ve Yükseltmeleri',
                                'Sıfır Kesinti Süresiyle Çalışma Stratejileri',
                                'Proje Geliştirme Desteği'
                            ].map((item, index) => (
                                <div key={index} className="benefit-item" style={{ background: 'var(--white)', padding: '1.25rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--gray)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span style={{ fontWeight: '600', color: 'var(--text-dark)' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: PDF Card */}
                    <div className="split-side-image small" style={{ display: 'block', border: 'none', boxShadow: 'none', background: 'transparent' }}>
                        <div style={{ textAlign: 'center', padding: '2.5rem 2rem', background: 'var(--white)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray)' }}>
                            <div className="feature-icon" style={{ margin: '0 auto 1.5rem auto' }}>
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Aşırı Hava Koşulları ve Güç Kaynağı</h3>
                            <p style={{ marginBottom: '2rem', fontSize: '0.95rem' }}>
                                AŞIRI HAVA KOŞULLARININ GÜÇ KAYNAĞINIZI NASIL ETKİLEYEBİLECEĞİNE DAHA YAKINDAN BAKIN
                            </p>
                            <a
                                href="https://www.ecsintl.com/wp-content/uploads/2023/12/Weather_Stress_Electrical_Supply.pdf"
                                target="_blank"
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.85rem 1.75rem',
                                    width: '100%',
                                    justifyContent: 'center'
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                İndir
                            </a>
                        </div>

                        <div style={{ textAlign: 'center', padding: '2.5rem 2rem', background: 'var(--white)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--gray)', marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>İletişime Geçin</h3>
                            <a
                                href="https://womner.com/iletisim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.85rem 1.75rem',
                                    width: '100%',
                                    justifyContent: 'center',
                                    background: 'transparent',
                                    border: '1px solid var(--primary)',
                                    color: 'var(--primary)'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'var(--primary)';
                                    e.currentTarget.style.color = 'var(--white)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--primary)';
                                }}
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

export default TurnkeyTechSolutions;
