import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const BatteryService = () => {
    const paragraphs = [
        "Temel ünite değişimi hizmetlerinden, tüm tesis kapsamlı hizmetlere (parça ve işçilik dahil) ve tek yıldan çok yıla kadar değişen süreli her şey dahil nihai koruma planlarına kadar çeşitli hizmet planları sunarak.",
        "Gelecek planları arasında, Servis Departmanının kapsamını hem yurt içinde hem de yurt dışında genişletmek, jeneratör hizmetleri, güç kalitesi analizi ve genişletilmiş pil hizmetleri sunumları ile ilgili kapasiteyi artırmak yer almaktadır. Henüz listelenmemiş ek ürün ve hizmet sunumları hakkında bilgi almak için satış uzmanlarımızdan birine danışın.",
        "Teknisyenlerimizin ve satış personelimizin engin deneyimi sayesinde, Energy Control Systems 30 yılı aşkın süredir yurt içi ve yurt dışı güç kalitesi ürünleri konusunda sizin kaynağınız olmuştur ve artık güç kalitesi ile ilgili bakım, kurulum, onarım ve servis hizmetleri konusunda da sizin çıkış noktanız olabiliriz.",
        "Gelecekteki tüm güç kalitesi projelerinizde sizinle birlikte çalışmayı sabırsızlıkla bekliyoruz."
    ];

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'Servis Departmanı' }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="UPS Pil Servis Departmanı"
                description="Pillerinizin ömrünü uzatmak ve performansını optimize etmek için profesyonel servis çözümleri."
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Split Section - Restored */}
            <section className="split-layout-section">
                <div className="split-top">
                    <div className="split-main-text">
                        <h2>Pil Servis Departmanımız</h2>
                        <p>
                            Müşterilerimize üstün müşteri hizmeti sunma taahhüdüne bağlı olan ECS, tek ve 3 fazlı UPS teknolojisinde uzmanlaşmış, ülke çapında hizmet veren tam kapsamlı bir servis departmanı sunmaktadır. Güç Kalitesi sektöründe ortalama 15 yıllık deneyime sahip olan her teknisyen, UPS sistemleri ve piller dahil olmak üzere güç kalitesi ekipmanlarının kurulumu, onarımı ve genel servisi konusunda zengin bilgi ve uzmanlık birikimini masaya yatırmaktadır.
                        </p>
                        <p>
                            In addition to services regarding these aforementioned units and products, ECS's Service Department also offers one time service sales of preventative maintenance, battery installs, corrective service calls, evaluation visits and also site surveys.
                        </p>
                    </div>
                    <div className="split-side-image">
                        <img src="https://www.ecsintl.com/wp-content/uploads/2023/12/x_0_0_0_14108764_800-800x534.jpg" alt="Professional Tech" />
                    </div>
                </div>
            </section>

            {/* Testimonial Brochure Section */}
            <section className="category-cta">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="info-card horizontal">
                        <div className="info-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ marginBottom: '0.5rem' }}>Müşterilerimizden birinin hizmetimiz hakkında söylediklerini okuyun.</h4>
                            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Hizmet kalitemiz hakkında kullanıcı deneyimlerini inceleyin.</p>
                        </div>
                        <Link
                            to="https://www.ecsintl.com/wp-content/uploads/2023/12/ECS_how-enterprise-products-partners-benefits-from-energy-control-system-solutions1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline">Okumak İçin Tıklayın
                        </Link>
                    </div>
                </div>
            </section>

            {/* Detailed Content Paragraphs */}
            <section className="detailed-info-section">
                <div className="info-blocks-container">
                    <div className="info-block" style={{ borderLeft: 'none', paddingLeft: 0 }}>
                        {paragraphs.map((p, idx) => (
                            <p key={idx} style={{ marginBottom: '1.5rem' }}>{p}</p>
                        ))}
                    </div>
                </div>
            </section>
            {/* Info Cards Section (Service Version) */}
            <section className="info-grid-section">
                <div className="info-cards-container">
                    <div className="info-card">
                        <div className="info-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </svg>
                        </div>
                        <h4>ECS Servis Departmanı</h4>
                        <Link
                            to="https://www.ecsintl.com/wp-content/uploads/2023/12/1ECS_Service_Department1-1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline">Bilgi Formunu İndir
                        </Link>
                    </div>

                    <div className="info-card highlight">
                        <div className="info-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                                <line x1="12" y1="11" x2="12" y2="17" />
                                <line x1="9" y1="14" x2="15" y2="14" />
                            </svg>
                        </div>
                        <h4>ECS UPS Pil Satışları</h4>
                        <Link
                            to="https://www.ecsintl.com/wp-content/uploads/2023/12/1ECS_UPS_Battery_Sales1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline">Bilgi Formunu İndir
                        </Link>
                    </div>

                    <div className="info-card">
                        <div className="info-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                            </svg>
                        </div>
                        <h4>ECS Tek Seferlik Hizmet Sözleşmeleri</h4>
                        <Link
                            to="https://www.ecsintl.com/wp-content/uploads/2023/12/Service-Contracts1.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline">Bilgi Formunu İndir
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BatteryService;
