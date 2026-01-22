import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import "./MoreCategory.css";
import "../solutions/SolutionCategory.css";

const VideosPage = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Daha Fazlası', path: '/daha-fazlasi' },
        { label: 'Videolar' }
    ];

    const sections = [
        {
            title: "Neden Sinetamer? Teknoloji fark yaratıyor.",
            description: "Bu sayfadaki videolarımıza göz atarak Sinetamer teknolojisinin şirketiniz için neler yapabileceğini öğrenin. Kaskadlı aşırı gerilim koruma cihazları hakkında bilgi edinin ve UPS üniteleri üzerindeki testleri ve geçici akım dalgalanmalarını nasıl azalttıklarını görün.",
            videos: [
                { id: 1, youtubeId: "JIcHa0iK6As" },
                { id: 2, youtubeId: "17XGmLY8vw4" },
                { id: 3, youtubeId: "ZxIod2leynM" },
            ],
        },
        {
            title: "Neden Kaskad Aşırı Gerilim Koruması?",
            videos: [
                { id: 4, youtubeId: "xaYwGdJiE4s" },
                { id: 5, youtubeId: "qiwRK2OOqeM" },
            ],
        },
    ];

    return (
        <div className="more-category-page">
            <Hero
                title="Videolar"
                description="Youtube videolarımızın detaylı bilgilerini burada bulabilirsiniz."
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Sections */}
            {sections.map((section, sectionIndex) => (
                <section
                    key={sectionIndex}
                    className={`video-section ${sectionIndex % 2 === 1 ? "alt-bg" : ""}`}
                >
                    <div className="content-container">
                        <div className="section-header-left">
                            <h2>{section.title}</h2>
                            <p>{section.description}</p>
                        </div>

                        <div className="video-row">
                            {section.videos.map((video) => (
                                <div className="video-card-embed" key={video.id}>
                                    <div className="youtube-embed">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                                            title={`YouTube video ${video.youtubeId}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            ))}
            {/* CTA Section */}
            <section className="more-cta-section">
                <h2>Daha Fazla Video İçin</h2>
                <p>YouTube kanalımıza abone olun ve yeni içeriklerden haberdar olun.</p>
                <a
                    href="https://www.youtube.com/c/sinetamer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-white"
                >
                    YouTube Kanalımız
                </a>
            </section>
        </div>
    );
};

export default VideosPage;
