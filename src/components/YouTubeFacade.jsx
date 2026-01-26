import { useState } from 'react';

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

export default YouTubeFacade;
