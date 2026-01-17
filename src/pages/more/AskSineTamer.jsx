import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./MoreCategory.css";

const AskSineTamer = () => {
    const videos = [
        { id: 1, youtubeId: "hzqhDs1cv24" },
        { id: 2, youtubeId: "PQIOBi-jxII" },
        { id: 3, youtubeId: "J5cIR1QoukA" },
        { id: 4, youtubeId: "tmTtl-HoDC0" },
        { id: 5, youtubeId: "AViVVLpwlHQ" },
        { id: 6, youtubeId: "O7qQeO9KLcU" },
        { id: 7, youtubeId: "zUJwxRNmctg" },
        { id: 8, youtubeId: "X7gy21fY1xE" },
        { id: 9, youtubeId: "kQWcrJu7U7s" },
        { id: 10, youtubeId: "WA13baO2TUA" },
        { id: 11, youtubeId: "yJhyZOmEZ2k" },
        { id: 12, youtubeId: "RfP2B6kTamU" },
        { id: 13, youtubeId: "doy6xCzQ-3M" },
        { id: 14, youtubeId: "jsgA-lUzkPQ" },
        { id: 15, youtubeId: "rNy7GJirL6o" },
        { id: 16, youtubeId: "OJixfFMtK9A" },
        { id: 17, youtubeId: "2Ib9UaWKtSE" },
        { id: 18, youtubeId: "Zf5VWXvpZqk" },
        { id: 19, youtubeId: "tmMKLWW28jE" },
        { id: 20, youtubeId: "nxrsW22kM3c" },
        { id: 21, youtubeId: "wHEW9zYv24Q" },

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
                    <h1>SineTamer'a Sorun</h1>
                    <p>Sıkça Merak Edilen konuları Sizin İçin Topladık</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link>Daha Fazlası</Link>
                        <span>/</span>
                        <span>SineTamer'a Sorun</span>
                    </div>
                </div>
            </section>

            {/* Videos */}
            <section className="more-content-section">
                <div className="content-container" style={{ maxWidth: "1400px" }}>
                    <div className="content-header">
                        <h2>Sorularınızın Cevabı Burada Olabilir</h2>
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

export default AskSineTamer;
