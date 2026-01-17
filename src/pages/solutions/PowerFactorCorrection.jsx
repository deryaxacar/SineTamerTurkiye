import { Link } from 'react-router-dom';
import './SolutionCategory.css';

// Image URLs provided by the user
const img1 = "https://www.ecsintl.com/wp-content/uploads/2023/12/g1-300x223-1-300x223.jpg";
const img2 = "https://www.ecsintl.com/wp-content/uploads/2023/12/pf_meter-225x300-1-225x300.jpg";
const img3 = "https://www.ecsintl.com/wp-content/uploads/2023/12/g2-267x300-1-267x300.jpg";
const img4 = "https://www.ecsintl.com/wp-content/uploads/2023/12/11-288x258.jpg";
const img5 = "https://www.ecsintl.com/wp-content/uploads/2023/12/g3-288x258.jpg";

const PowerFactorCorrection = () => {
    return (
        <div className="solution-category-page pfc-page">
            {/* Hero Section */}
            <section className="category-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920)` }}>
                <div className="category-hero-overlay"></div>
                <div className="category-hero-content">
                    <h1>Güç Faktörü Düzeltme</h1>
                    <p>Enerji verimliliğinizi artırın, reaktif güç cezalarından kurtulun ve tesis kapasitenizi optimize edin.</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Çözümler</span>
                        <span>/</span>
                        <span>Güç Faktörü Düzeltme</span>
                    </div>
                </div>
            </section>

            {/* Title & Intro */}
            <section className="pfc-full-text" style={{ paddingBottom: '1rem' }}>
                <h1>Güç Faktörü Düzeltmesi Nedir?</h1>
                <p>
                    Verimsiz ekipmanlar, ihtiyaç duyduklarından daha fazla akım talep eder ve bu da elektrik dağıtım şirketinin tesisinize sağladığı güç miktarını artırmasına neden olur. Bu durum, elektrik dağıtım şirketine altyapı ve inşaat maliyetlerinde artışa yol açar ve Güç Faktörü Cezaları bu maliyetleri dengelemek için tasarlanmıştır. İzin verilen minimum Güç Faktörü, elektrik dağıtım şirketi veya yerel yönetim tarafından belirlenebilir. Floresan lambalar, elektrik motorları, değişken hızlı sürücüler, bilgisayarlar, asansörler ve HVAC ekipmanları, binanızın Güç Faktörünü düşürür ve elektrik faturanızı artırır. Güç Faktörü 0,82 olan orta ölçekli bir sanayi tesisi, sadece 5 yıl içinde 31.000 dolardan fazla Güç Faktörü Cezası biriktirecektir. Büyük bir tüketici ise aynı süre içinde 180.000 dolarlık ceza ödeyecektir. Bu grafik, Güç Faktörü Problemlerini çözmenin yatırım getirisini ne kadar hızlı sağlayabileceğini göstermektedir.
                </p>
            </section>

            {/* Split 1: img1 (Left) */}
            <section className="split-layout-section" style={{ padding: '1rem 0' }}>
                <div className="split-top image-left">
                    <div className="split-side-image small">
                        <img src={img1} alt="Güç Faktörü Kontrol Ünitesi" />
                    </div>
                    <div className="split-main-text">
                        <p>
                            Şirketiniz çevre dostu olmak ve enerjiyi daha verimli kullanmak istiyor ve biz  ECS olarak  bu çabalarınızı takdir ediyoruz. Ancak rüzgar türbinleri ve güneş panelleri kurmanın çoğu şirket için maliyet açısından çok yüksek olduğunu da biliyoruz. Öyleyse neden toplam tesis enerji verimliliğini düzeltmekle başlamayasınız? Tesisinize Güç Faktörü Düzeltme teknolojisi ekipmanı kurdurarak, yalnızca ödediğiniz maliyetli Güç Faktörü Cezalarından kurtulmakla kalmayacak, aynı zamanda genel olarak daha az enerji tüketecek ve gelecekte büyüme ve genişleme için daha fazla alan yaratacaksınız!
                        </p>
                    </div>

                </div>
            </section>

            {/* Split 2: img2 (Right) */}
            <section className="split-layout-section" style={{ backgroundColor: 'var(--gray-light)', padding: '2rem 0' }}>
                <div className="split-top">
                    <div className="split-main-text">
                        <p>
                            Tesislerinizdeki verimsiz ekipmanlarla mücadele etmek için Güç Faktörünü düzeltin. Tipik Güç Faktörü, sorunlu ekipmanda bulunan elektrik bileşenlerinin oluşturduğu endüktif akım miktarını azaltarak en az 0,97'ye düzeltilebilir.
                        </p>
                        <p>
                            Bu, tesisinizin tamamının enerji verimliliğini artıracak,  enerji faturalarınızı düşürecek , güç faktörü cezalarını ortadan kaldıracak, tesisinizdeki hat kayıplarını azaltacak ve özellikle birçok cihazda bulunan motorlar olmak üzere elektrikli ekipmanlarınızın ömrünü iki katına çıkaracaktır.s
                        </p>
                        <p>
                            Güç Faktörü Düzeltme (PFC) yatırımının geri dönüş süresi 6 ay ile 3 yıl arasında değişebilir, ancak 18 aydan daha uzun sürdüğünü nadiren gördük. En iyi yanı ise, ekipman kendini amorti ettikten sonra, tasarruflar doğrudan işletmenizin karlılığını artırmaya yöneliktir… Hem de ömür boyu.
                        </p>
                    </div>
                    <div className="split-side-image" style={{ maxWidth: '450px' }}>
                        <img src={img2} alt="Güç Faktörü Ölçer" />
                    </div>
                </div>
            </section>

            {/* Image Grid: img3, img4, img5 */}
            <section className="pfc-image-grid">
                <div className="pfc-grid-item">
                    <img src={img3} alt="Kompanzasyon Panosu" />
                </div>
                <div className="pfc-grid-item">
                    <img src={img4} alt="Güç Elektroniği Bileşenleri" />
                </div>
                <div className="pfc-grid-item">
                    <img src={img5} alt="Teknik Analiz Grafiği" />
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="cta-container">
                        <h2>Analiz Yaptırmak İster Misiniz?</h2>
                        <p>Tesisinizin güç faktörü ve enerji kalitesini profesyonelce analiz ettirmek için bizimle iletişime geçin.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <a
                                href="https://womner.com/iletisim/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-white"
                            >
                                İletişime Geçin
                            </a>
                            <a
                                href="/pdfs/ssi-prodbrochure.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-white"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', marginRight: '8px' }}>
                                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                Kataloğu İndir (PDF)
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PowerFactorCorrection;
