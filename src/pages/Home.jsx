import { Link } from 'react-router-dom';
import VideoSection from '../components/VideoSection';
import BlogCard from '../components/BlogCard';
import './Home.css';

const Home = () => {
    const solutions = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
            ),
            title: 'Güneş Enerjisi',
            description: 'Ev ve işletmeler için yüksek verimli güneş paneli sistemleri ile enerji maliyetlerinizi %70\'e kadar düşürün.',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
                </svg>
            ),
            title: 'Rüzgar Enerjisi',
            description: 'Küçük ve büyük ölçekli rüzgar türbinleri ile temiz ve sürdürülebilir enerji üretimi.',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="6" width="18" height="12" rx="2" />
                    <path d="M23 13v-2" />
                </svg>
            ),
            title: 'Enerji Depolama',
            description: 'Modern lityum-iyon batarya sistemleri ile enerjinizi 7/24 kesintisiz kullanın.',
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10M12 20V4M6 20v-6" />
                </svg>
            ),
            title: 'Enerji Verimliliği',
            description: 'Akıllı enerji yönetim sistemleri ile tüketiminizi optimize edin ve tasarruf sağlayın.',
        },
    ];

    const stats = [
        { number: '15+', label: 'Yıllık Deneyim' },
        { number: '500+', label: 'Tamamlanan Proje' },
        { number: '10K+', label: 'Mutlu Müşteri' },
        { number: '%98', label: 'Müşteri Memnuniyeti' },
    ];

    const blogPosts = [
        {
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
            title: 'Güneş Enerjisi ile Evlerde Tasarruf Nasıl Yapılır?',
            excerpt: 'Güneş panelleri ile evinizin enerji ihtiyacını karşılayarak faturalarınızı nasıl düşürebileceğinizi öğrenin.',
            date: '10 Ocak 2026',
            category: 'Güneş Enerjisi',
            link: '/daha-fazlasi/blog'
        },
        {
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600',
            title: 'Rüzgar Enerjisinin Geleceği: 2026 Trendleri',
            excerpt: 'Rüzgar enerjisi sektöründeki son gelişmeler ve 2026 yılında bizi bekleyen yenilikler.',
            date: '8 Ocak 2026',
            category: 'Rüzgar Enerjisi',
            link: '/daha-fazlasi/blog'
        },
        {
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
            title: 'Enerji Depolama Sistemleri: Kapsamlı Rehber',
            excerpt: 'Ev ve işletmeler için en uygun enerji depolama çözümlerini karşılaştırmalı olarak inceliyoruz.',
            date: '5 Ocak 2026',
            category: 'Depolama',
            link: '/daha-fazlasi/blog'
        },
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content">
                    <h1 className="hero-title animate-fade-in">
                        Geleceğin Enerjisini<br />
                        <span>Bugünden Üretin</span>
                    </h1>
                    <p className="hero-description animate-fade-in">
                        Sürdürülebilir enerji çözümleri ile çevreyi koruyun, maliyetlerinizi düşürün
                        ve enerji bağımsızlığınızı kazanın. 15 yıllık tecrübemizle yanınızdayız.
                    </p>
                </div>
                <div className="hero-scroll">
                    <span>Aşağı Kaydır</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </section>

            {/* Solutions Preview */}
            <section className="solutions-preview">
                <div className="container">
                    <h2 className="section-title">Enerji Çözümlerimiz</h2>
                    <p className="section-subtitle">
                        İhtiyaçlarınıza özel, yenilikçi ve sürdürülebilir enerji çözümleri sunuyoruz.
                    </p>
                    <div className="solutions-grid">
                        {solutions.map((solution, index) => (
                            <div className="solution-card" key={index}>
                                <div className="solution-icon">{solution.icon}</div>
                                <h3 className="solution-title">{solution.title}</h3>
                                <p className="solution-description">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="solutions-cta">
                        <Link className="btn btn-primary">
                            Tüm Çözümleri Gör
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div className="stat-item" key={index}>
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <VideoSection
                title="Enerji Dönüşümünüzü İzleyin"
                subtitle="Projelerimizden kesitler ve müşteri deneyimlerini keşfedin."
            />

            {/* Blog Preview */}
            <section className="blog-preview">
                <div className="container">
                    <h2 className="section-title">Blog & Haberler</h2>
                    <p className="section-subtitle">
                        Enerji sektöründeki son gelişmeler ve ipuçları için blogumuzu takip edin.
                    </p>
                    <div className="blog-grid">
                        {blogPosts.map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))}
                    </div>
                    <div className="blog-cta">
                        <Link to="/daha-fazlasi/blog" className="btn btn-secondary">
                            Tüm Yazıları Gör
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
