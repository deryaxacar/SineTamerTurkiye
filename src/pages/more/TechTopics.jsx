import { Link } from "react-router-dom";
import "./MoreCategory.css";

const TechTopics = () => {
    const videos = [
        { id: 1, youtubeId: "heqbxfgQWE0" },
        { id: 2, youtubeId: "r2Mss7-HtyU" },
        { id: 3, youtubeId: "5KaOy4YjzFo" },
        { id: 4, youtubeId: "4UIk6s5YDTM" },
        { id: 5, youtubeId: "VJBuvoUxjzE" },
        { id: 6, youtubeId: "xaYwGdJiE4s" },
        { id: 7, youtubeId: "rEOZtrLwb9I" },
        { id: 8, youtubeId: "63WN7E_JUog" },
        { id: 9, youtubeId: "yx4YF3Xphoc" },
        { id: 10, youtubeId: "hyzgQweFsnY" },
        { id: 11, youtubeId: "ZxIod2leynM" },
    ];

    return (
        <div className="more-category-page">
            {/* Hero */}
            <section
                className="more-hero"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)",
                }}
            >
                <div className="more-hero-overlay"></div>
                <div className="more-hero-content">
                    <h1>Teknoloji Konuları</h1>
                    <p>Enerji teknolojileri hakkında eğitici videolarla bilginizi artırın</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link>Daha Fazlası</Link>
                        <span>/</span>
                        <span>Teknoloji Konuları</span>
                    </div>
                </div>
            </section>

            {/* Videos */}
            <section className="more-content-section">
                <div className="content-container" style={{ maxWidth: "1400px" }}>
                    <div className="content-header">
                        <h2>Teknoloji Konulu Videolarımız</h2>
                    </div>

                    <div className="video-row">
                        {videos.map((v) => (
                            <div className="video-card-embed" key={v.id}>
                                <div className="youtube-embed">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0&modestbranding=1`}
                                        title={v.title}
                                        frameBorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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

export default TechTopics;
