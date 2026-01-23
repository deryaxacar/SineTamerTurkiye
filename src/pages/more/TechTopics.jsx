import Hero from "../../components/Hero";
import YouTubeFacade from "../../components/YouTubeFacade";
import "./MoreCategory.css";
import "../solutions/SolutionCategory.css";

const TechTopics = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Daha Fazlası', path: '/daha-fazlasi' },
        { label: 'Teknoloji Konuları' }
    ];

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
            <Hero
                title="Teknoloji Konuları"
                description="Enerji teknolojileri hakkında eğitici videolarla bilginizi artırın"
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

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
                                    <YouTubeFacade
                                        youtubeId={v.youtubeId}
                                        customThumbnail={v.customThumbnail}
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

