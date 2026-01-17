import { Link } from 'react-router-dom';
import '../SolutionCategory.css';

const Batteries = () => {
    return (
        <div className="solution-category-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)' }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>UPS Pil Çözümleri</h1>
                    <p>Güç koruma sisteminizin en kritik bileşeni: Güvenilir ve uzun ömürlü pil çözümleri.</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <span>Piller</span>
                    </div>
                </div>
            </section>

            {/* Info Cards Section */}
            <section className="info-grid-section">
                <div className="info-cards-container">
                    <div className="info-card">
                        <div className="info-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            </svg>
                        </div>
                        <h4>Elektrik Kesintilerinin Farklı Sektörleri Nasıl Etkilediği</h4>
                        <Link
                            to="https://www.ecsintl.com/wp-content/uploads/2023/12/Impacts_of_Outages.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline">Teknik Belgeyi İndir</Link>
                    </div>

                    <Link to="/cozumler/ups-cozumleri/pil-servis-departmani" className="info-card highlight">
                        <div className="info-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                                <polyline points="17 21 17 13 7 13 7 21" />
                                <polyline points="7 3 7 8 15 8 15 3" />
                            </svg>
                        </div>
                        <h4>Bir daha asla pil satın almanıza gerek kalmaması için bizimle iletişime geçin.</h4>
                        <span className="btn-outline">Departmanı İncele</span>
                    </Link>

                    <div className="info-card">
                        <div className="info-card-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </div>
                        <h4>Aşırı Hava Koşullarının Güç Kaynağınızı Nasıl Etkileyebileceğine Daha Yakından Bakın</h4>
                        <Link
                            to="https://www.ecsintl.com/wp-content/uploads/2023/12/Weather_Stress_Electrical_Supply.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline">Teknik Belgeyi İndir</Link>
                    </div>
                </div>
            </section>

            {/* Detailed Info Section */}
            <section className="detailed-info-section">
                <div className="info-blocks-container">
                    <div className="info-block">
                        <h3>PİL:</h3>
                        <p>
                            Kesintisiz güç kaynaklarında (UPS) pil, en sık arıza noktası olarak kabul edilir. Aynı şekilde, pilin izlenmesi, bakımı ve değiştirilmesi de en kolay elemandır.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Üreticiler, UPS sistemleri için 3-5 yıl arasında pil değişimini önermektedir; ancak, daha kritik yükler veya aşırı ortamlardaki (kir, sıcaklık ve düşük güç kalitesi) sistemler daha sık pil değişiminden fayda sağlayabilir.
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>KENDİNDEN EMİN:</h3>
                        <p>
                            Tüm UPS bataryaları aynı kalitede değildir ve önemli yükleri korumak söz konusu olduğunda, arıza süresi boyunca en önemli unsur UPS bataryalarınızın kalitesi ve durumudur. Energy Control Systems, hem eski hem de yeni UPS sistemleri için uzun yıllardır batarya tedarik etmektedir. Energy Control Systems, müşterilerimize sağladığımız bataryaların aynısını sözleşme kapsamındaki ünitelerimize de yerleştirmektedir – bu da sattığımız bataryaların kalitesine olan güvenimizin bir göstergesidir.
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>KALİTE:</h3>
                        <p>
                            Nihayetinde amaç, UPS sisteminizin elektrik kesintisinden sonra belirli bir süre boyunca yüklerinizi karşılayabilmesidir; güvenemeyeceğiniz pillere kritik süreçlerinizi emanet etmeyin.
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>EKİBİMİZ:</h3>
                        <p>
                            Birçok pil tedarikçisi "bir kere yapıp bitirme" felsefesini benimser. Amaçları, belirli bir zaman diliminde mümkün olduğunca çok kişiye mümkün olduğunca çok pil satmaktır. Bu, kâr marjları için harika olabilir, ancak Energy Control Systems için yeterli değildir. Talebiniz, hesabınıza atanmış bir temsilci tarafından baştan sona alınır ve yönetilir ve periyodik olarak pil ihtiyaçlarınızın karşılandığından emin olmak için takip edilir.
                        </p>
                    </div>

                    <div className="info-block">
                        <h3>VE DAHA FAZLASI:</h3>
                        <p>
                            İster büyük ister küçük olsun, fabrikada eğitim almış teknisyenlerimiz, EPA yönergelerine uygun olarak pillerinizi takmak ve eski pilleri imha etmek için de hizmetinizdedir. Hizmet seçeneklerimiz hakkında temsilcinizden bilgi alabilirsiniz.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Batteries;
