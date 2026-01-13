import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: 'Adresimiz',
            content: ['Atatürk Cad. No:123', 'Kadıköy, İstanbul', 'Türkiye']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
            ),
            title: 'Telefon',
            content: ['+90 (212) 123 45 67', '+90 (532) 123 45 67']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            title: 'E-posta',
            content: ['info@enerjicozumleri.com', 'destek@enerjicozumleri.com']
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                </svg>
            ),
            title: 'Çalışma Saatleri',
            content: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 09:00 - 14:00', 'Pazar: Kapalı']
        }
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <h1>İletişim</h1>
                    <p>Sorularınız ve talepleriniz için bizimle iletişime geçin</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>İletişim</span>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <h2>Bize Ulaşın</h2>
                            <p>Formu doldurarak bize mesaj gönderin. En kısa sürede size dönüş yapacağız.</p>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Ad Soyad *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Adınız ve soyadınız"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-posta *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="ornek@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">Telefon</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+90 (5XX) XXX XX XX"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Konu *</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Seçiniz</option>
                                            <option value="teklif">Teklif Talebi</option>
                                            <option value="bilgi">Bilgi Talebi</option>
                                            <option value="destek">Teknik Destek</option>
                                            <option value="isbirligi">İş Birliği</option>
                                            <option value="diger">Diğer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Mesajınız *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Mesajınızı buraya yazın..."
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-full">
                                    {isSubmitted ? 'Gönderildi ✓' : 'Mesaj Gönder'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-section">
                            <h2>İletişim Bilgileri</h2>
                            <div className="contact-info-cards">
                                {contactInfo.map((info, index) => (
                                    <div className="info-card" key={index}>
                                        <div className="info-icon">
                                            {info.icon}
                                        </div>
                                        <div className="info-content">
                                            <h3>{info.title}</h3>
                                            {info.content.map((line, idx) => (
                                                <p key={idx}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="social-section">
                                <h3>Sosyal Medyada Bizi Takip Edin</h3>
                                <div className="social-links">
                                    <a href="#" aria-label="Facebook">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Twitter">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="LinkedIn">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="Instagram">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="2" y="2" width="20" height="20" rx="5" />
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                    </a>
                                    <a href="#" aria-label="YouTube">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                                            <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="map-section">
                        <h2>Bizi Ziyaret Edin</h2>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48173.50549637tried869056!2d29.0277!3d40.9906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17ba89d%3A0x8d2c2c26d71291d1!2sKad%C4%B1k%C3%B6y%2C%20Istanbul!5e0!3m2!1sen!2str!4v1234567890"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ofis Konumu"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
