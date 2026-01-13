// Newsletter.jsx
import { useState } from "react";
import { Link } from 'react-router-dom';
import "./MoreCategory.css";

const Newsletter = ({ onSubmit }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dışarıdan handler gelirse onu çalıştır
        if (typeof onSubmit === "function") {
            onSubmit(email);
        }

        // Şimdilik sadece reset (istersen kaldır)
        setEmail("");
    };

    return (
        <div className="more-category-page">
            {/* Hero Section */}
            <section className="more-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920)' }}>
                <div className="more-hero-overlay"></div>
                <div className="more-hero-content">
                    <h1>Haber Bülteni</h1>
                    <p>Enerji sektöründeki son gelişmeleri ve özel içeriklerimizi kaçırmayın</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link to="/daha-fazlasi">Daha Fazlası</Link>
                        <span>/</span>
                        <span>Haber Bülteni</span>
                    </div>
                </div>
            </section>

            {/* Newsletter Content Section */}
            <section className="more-content-section">
                <div className="content-container" style={{ maxWidth: '1200px' }}>
                    <div className="newsletter-section">
                        <div className="newsletter-content">
                            <h2>Bültenimize Abone Olun</h2>
                            <p>En güncel haberleri ve teknolojik gelişmeleri doğrudan e-posta adresinize gönderelim.</p>

                            <form className="newsletter-form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="E-posta adresiniz"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn btn-accent">
                                    Abone Ol
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Newsletter;
