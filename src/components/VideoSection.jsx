import './css/VideoSection.css';

const VideoSection = ({ title, subtitle, videoUrl, poster }) => {
    return (
        <section className="video-section">
            <div className="video-container">
                <div className="video-content">
                    <h2 className="video-title">{title}</h2>
                    <p className="video-subtitle">{subtitle}</p>
                </div>
                <div className="video-wrapper">
                    <div className="video-frame">
                        {videoUrl ? (
                            <video
                                controls
                                poster={poster}
                                className="video-player"
                            >
                                <source src={videoUrl} type="video/mp4" />
                                Tarayıcınız video etiketini desteklemiyor.
                            </video>
                        ) : (
                            <div className="video-placeholder">
                                <div className="play-button">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <p>Video yakında eklenecek</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
