import { useState } from "react";
import Hero from "../../components/Hero";
import "./MoreCategory.css";
import "../solutions/SolutionCategory.css";

// YouTube Facade Component - Tıklanana kadar sadece thumbnail gösterir
const YouTubeFacade = ({ youtubeId, customThumbnail }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [quality, setQuality] = useState('maxresdefault');

    // Quality'ye göre thumbnail URL'i oluştur
    const getThumbnailUrl = (q) => `https://img.youtube.com/vi/${youtubeId}/${q}.jpg`;

    // Thumbnail yüklenemezse alternatif kalitelere geç
    const handleThumbnailError = () => {
        if (quality === 'maxresdefault') {
            setQuality('sddefault');
        } else if (quality === 'sddefault') {
            setQuality('hqdefault');
        } else if (quality === 'hqdefault') {
            setQuality('default');
        }
        // 'default' her zaman var, daha fazla fallback gerekmez
    };

    if (isLoaded) {
        return (
            <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autoplay=1`}
                title={`YouTube video ${youtubeId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
            />
        );
    }

    // Custom thumbnail varsa onu kullan, yoksa quality'ye göre oluştur
    const thumbnailUrl = customThumbnail || getThumbnailUrl(quality);

    return (
        <button
            className="youtube-facade"
            onClick={() => setIsLoaded(true)}
            aria-label="Video oynat"
            style={{
                backgroundImage: `url(${thumbnailUrl})`,
            }}
        >
            {/* Görünmez img elementi ile thumbnail yükleme hatası yakalanır */}
            <img
                src={thumbnailUrl}
                alt=""
                style={{ display: 'none' }}
                onError={handleThumbnailError}
            />
            <div className="youtube-play-btn">
                <svg viewBox="0 0 68 48" width="68" height="48">
                    <path
                        fill="#f00"
                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                    />
                    <path fill="#fff" d="M 45,24 27,14 27,34" />
                </svg>
            </div>
        </button>
    );
};

const VideosPage = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Daha Fazlası' },
        { label: 'Videolar' }
    ];

    const sections = [
        {
            title: "Neden Sinetamer? Teknoloji fark yaratıyor.",
            description: "Bu sayfadaki videolarımıza göz atarak Sinetamer teknolojisinin şirketiniz için neler yapabileceğini öğrenin. Kaskadlı aşırı gerilim koruma cihazları hakkında bilgi edinin ve UPS üniteleri üzerindeki testleri ve geçici akım dalgalanmalarını nasıl azalttıklarını görün.",
            videos: [
                { id: 1, youtubeId: "JIcHa0iK6As", customThumbnail: "https://i.ytimg.com/vi/JIcHa0iK6As/hqdefault.jpg" },
                { id: 2, youtubeId: "17XGmLY8vw4" },
                { id: 3, youtubeId: "ZxIod2leynM" },
            ],
        },
        {
            title: "Neden Kaskad Aşırı Gerilim Koruması?",
            videos: [
                { id: 4, youtubeId: "xaYwGdJiE4s" },
                { id: 5, youtubeId: "qiwRK2OOqeM", customThumbnail: "https://i.ytimg.com/vi/qiwRK2OOqeM/hqdefault.jpg" },
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
                                        <YouTubeFacade
                                            youtubeId={video.youtubeId}
                                            customThumbnail={video.customThumbnail}
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
