import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const LARMUnits = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'LA & RM Üniteleri' }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="LA & RM Üniteleri"
                description="SineTamer LA ve RM serisi güç koruma çözümleri."
                backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* YouTube Video Section */}
            <section className="larm-video-section">
                <div className="larm-video-container">
                    <div className="larm-video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/KC4r8f9HoL8"
                            title="LA & RM Üniteleri Tanıtım"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Split Content Section */}
            <section className="larm-split-section">
                <div className="larm-split-container">
                    {/* Left - Title and List */}
                    <div className="larm-split-left">
                        <h2>SINETAMER LA VE RM ÜNİTELERİ</h2>
                        <ul className="larm-feature-list">
                            <li>LA ve RM üniteleri frekans zayıflatmalı, dahili akım ve termal olarak sigortalı ve UL94V sertifikalıdır.</li>
                            <li>LA modeli gerçek bir 10 modlu cihaz iken, RM modeli yedi modlu bir ünitedir.</li>
                            <li>Çeşitli seçenekler ve çeşitli tepe akım değerleri mevcuttur.</li>
                            <li>Bu modellerle ilgili daha fazla bilgi yalnızca ECS Distribütörleri için mevcuttur</li>
                            <li>
                                <a href="https://www.ecsintl.com/la-rm-units/" target="_blank" rel="noopener noreferrer">İngilizce</a>,{' '}
                                <a href="https://sinetamer.lat/" target="_blank" rel="noopener noreferrer">İspanyolca</a>,{' '}
                                <a href="https://sinetamer.br.com/" target="_blank" rel="noopener noreferrer">Portekizce</a>{' '}
                                dillerinde çeviriler mevcuttur.
                            </li>
                        </ul>
                    </div>
                    {/* Right - Image */}
                    <div className="larm-split-right">
                        <img
                            src="/images/sinetamer/larmunits1.jpg"
                            loading='lazy'
                            alt="LA & RM Üniteleri"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="category-cta">
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="cta-container">
                        <h2>Detaylı Bilgi ve Teklif İçin</h2>
                        <p>LA & RM üniteleri hakkında detaylı bilgi almak için bizimle iletişime geçin.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                            <a
                                href="https://www.ecsintl.com/contact-us/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-white"
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

export default LARMUnits;
