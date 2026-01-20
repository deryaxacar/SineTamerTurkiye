import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const SurgeProtectionDevice = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'SineTamer' },
        { label: 'Aşırı Gerilim Koruma Cihazı' },
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Aşırı Gerilim Koruma Cihazı (SPD)"
                description="Hassas elektronik sistemlerinizi şebeke kirliliğinden ve ani voltaj darbelerinden koruyan SineTamer teknolojisi."
                backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            <section style={{ padding: '5rem 0', backgroundColor: 'var(--white)' }}>
                <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>

                    {/* ================= SECTION TITLE ================= */}
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2
                            style={{
                                fontSize: '3rem',
                                color: 'var(--primary)',
                                fontWeight: '800',
                                lineHeight: '1.2',
                                marginBottom: '1rem',
                            }}
                        >
                            SineTamer Aşırı Gerilim Koruma Ürünleri
                        </h2>
                    </div>

                    {/* ================= INTRODUCTION GRID ================= */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.1fr',
                            gap: '3rem',
                            alignItems: 'center',
                            marginBottom: '2rem',
                        }}
                    >
                        {/* TEXT */}
                        <div>
                            <ul
                                style={{
                                    fontSize: '1.05rem',
                                    lineHeight: '1.85',
                                    color: '#555',
                                    marginBottom: '2.5rem',
                                    paddingLeft: '1.5rem',
                                    listStyle: 'disc',
                                    maxWidth: '680px',
                                }}
                            >
                                <li>Üretim kesintilerinden kaynaklanan stres ve zaman kaybını azaltır</li>
                                <li>Rastgele oluşan elektronik arızaların önüne geçer</li>
                                <li>VFD ve PLC kilitlenmelerini proaktif olarak engeller</li>
                                <li>Plansız duruşları minimize ederek operasyonel süreklilik sağlar</li>
                                <li>Elektronik bakım maliyetlerini %50’ye varan oranlarda düşürür</li>
                                <li>
                                    Daha fazla teknik detay için{' '}
                                    <Link
                                        to="#"
                                        style={{
                                            color: 'var(--primary)',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            borderBottom: '1px solid var(--primary)',
                                        }}
                                    >
                                        makaleler sayfamıza
                                    </Link>{' '}
                                    göz atabilir, size uygun çözümler için{' '}
                                    <Link
                                        to="/cozumler/sinetamer/la-lm-uniteleri"
                                        style={{
                                            color: 'var(--primary)',
                                            fontWeight: '700',
                                            textDecoration: 'none',
                                            borderBottom: '1px solid var(--primary)',
                                        }}
                                    >
                                        ürün sayfalarımızı
                                    </Link>{' '}
                                    inceleyebilirsiniz.
                                </li>
                            </ul>
                        </div>

                        {/* IMAGE */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/images/Sinetimer2-637x242.jpg"
                                alt="SPD Technology"
                                style={{
                                    width: '100%',
                                    maxWidth: '580px',
                                    height: 'auto',
                                    borderRadius: '12px',
                                    boxShadow: 'var(--shadow-lg)',
                                }}
                            />
                        </div>

                    </div>

                    {/* ================= RESOURCES SECTION ================= */}
                    <div
                        className="resources-footer-section"
                        style={{
                            borderTop: '1px solid #eee',
                            paddingTop: '6rem',
                        }}
                    >
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2
                                style={{
                                    fontSize: '2.5rem',
                                    color: 'var(--primary)',
                                    marginBottom: '1.5rem',
                                    fontWeight: '800',
                                }}
                            >
                                Sinetamer'a ihtiyacınız var!
                            </h2>

                            <Link
                                to="https://www.ecsintl.com/technical-articles/#el-440fe677"
                                target="_blank"
                                style={{
                                    fontSize: '1.2rem',
                                    color: 'var(--accent)',
                                    textDecoration: 'none',
                                    fontWeight: '700',
                                    borderBottom: '2px solid var(--accent)',
                                    paddingBottom: '4px',
                                }}
                            >
                                Teknik Makalelerimizi İnceleyin →
                            </Link>

                            <div style={{ marginTop: '4rem' }}>
                                <p
                                    style={{
                                        color: '#888',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        fontWeight: '700',
                                        fontSize: '0.9rem',
                                        marginBottom: '1.5rem',
                                    }}
                                >
                                    Global Sitelerimizi Ziyaret Edin
                                </p>

                                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                                    <a
                                        href="https://www.sinetamer.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '0.8rem 2rem',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            textDecoration: 'none',
                                            color: '#555',
                                            fontWeight: '600',
                                        }}
                                    >
                                        sinetamer.com
                                    </a>

                                    <a
                                        href="https://sinetamer.lat/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '0.8rem 2rem',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            textDecoration: 'none',
                                            color: '#555',
                                            fontWeight: '600',
                                        }}
                                    >
                                        sinetamer.lat
                                    </a>

                                    <a
                                        href="https://sinetamer.br.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '0.8rem 2rem',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            textDecoration: 'none',
                                            color: '#555',
                                            fontWeight: '600',
                                        }}
                                    >
                                        sinetamer.br.com
                                    </a>

                                    <a
                                        href="https://www.ecsintl.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '0.8rem 2rem',
                                            borderRadius: '8px',
                                            border: '1px solid #ddd',
                                            textDecoration: 'none',
                                            color: '#555',
                                            fontWeight: '600',
                                        }}
                                    >
                                        ecsintl.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================= BOTTOM INFO SECTION ================= */}
                    <div
                        style={{
                            paddingTop: '4rem',
                            borderTop: '1px solid #eee',
                            textAlign: 'center',
                            maxWidth: '900px',
                            marginInline: 'auto',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '2.2rem',
                                color: 'var(--primary)',
                                fontWeight: '800',
                                marginBottom: '1rem',
                            }}
                        >
                            SINETAMER AŞIRI GERİLİM KORUMA CİHAZLARI
                        </h3>

                        <p
                            style={{
                                fontSize: '1.15rem',
                                lineHeight: '1.9',
                                color: '#666',
                            }}
                        >
                            SINETAMER® ÇÖZÜMÜ, 4. NESİL TEKNOLOJİYE SAHİP BİR AŞIRI GERİLİM VE GEÇİCİ GERİLİM KORUMA SİSTEMİNİN KULLANIMINI KAPSAMAKTADIR. DÜNYA ÇAPINDA ELEKTRİK PANOLARINDA BULUNAN TIPİK BİR YILDIRIM KORUYUCUSUNDAN ÇOK DAHA FAZLASIYIZ. SINETAMER®, MİKROİŞLEMCİ TABANLI CİHAZLARIN TÜM ÇEŞİTLERİNİN ULTRA HASSAS YAPISI İÇİN TASARLANMIŞ BİR MÜHENDİSLİK ÇÖZÜMÜDÜR.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default SurgeProtectionDevice;
