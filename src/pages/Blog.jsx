import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import './Blog.css';

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Tümü' },
        { id: 'solar', name: 'Güneş Enerjisi' },
        { id: 'wind', name: 'Rüzgar Enerjisi' },
        { id: 'storage', name: 'Enerji Depolama' },
        { id: 'efficiency', name: 'Verimlilik' },
        { id: 'news', name: 'Haberler' },
    ];

    const blogPosts = [
        {
            id: 1,
            category: 'solar',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
            title: 'Güneş Enerjisi ile Evlerde Tasarruf Nasıl Yapılır?',
            excerpt: 'Güneş panelleri ile evinizin enerji ihtiyacını karşılayarak faturalarınızı nasıl düşürebileceğinizi öğrenin. Detaylı maliyet analizi ve yatırım getirisi hesaplaması.',
            date: '10 Ocak 2026',
        },
        {
            id: 2,
            category: 'wind',
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600',
            title: 'Rüzgar Enerjisinin Geleceği: 2026 Trendleri',
            excerpt: 'Rüzgar enerjisi sektöründeki son gelişmeler ve 2026 yılında bizi bekleyen yenilikler. Offshore rüzgar santralleri ve teknolojik ilerleme.',
            date: '8 Ocak 2026',
        },
        {
            id: 3,
            category: 'storage',
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
            title: 'Enerji Depolama Sistemleri: Kapsamlı Rehber',
            excerpt: 'Ev ve işletmeler için en uygun enerji depolama çözümlerini karşılaştırmalı olarak inceliyoruz. Lityum-iyon vs. katı hal bataryalar.',
            date: '5 Ocak 2026',
        },
        {
            id: 4,
            category: 'efficiency',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600',
            title: 'İşletmelerde Enerji Verimliliği Nasıl Artırılır?',
            excerpt: 'Enerji maliyetlerinizi düşürmek için uygulanabilir stratejiler ve akıllı enerji yönetimi sistemleri hakkında bilmeniz gerekenler.',
            date: '2 Ocak 2026',
        },
        {
            id: 5,
            category: 'news',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
            title: 'Türkiye\'nin Yenilenebilir Enerji Hedefleri ve Son Gelişmeler',
            excerpt: '2030 hedefleri doğrultusunda Türkiye\'nin yenilenebilir enerji yatırımları ve teşvik politikalarındaki son durumu inceliyoruz.',
            date: '28 Aralık 2025',
        },
        {
            id: 6,
            category: 'solar',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600',
            title: 'Çatı Tipi Güneş Paneli Kurulumu: A\'dan Z\'ye Rehber',
            excerpt: 'Evinize güneş paneli kurdurma sürecinde dikkat etmeniz gereken tüm detaylar. İzinler, montaj ve bakım hakkında bilgiler.',
            date: '25 Aralık 2025',
        },
        {
            id: 7,
            category: 'storage',
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600',
            title: 'Ev Tipi Batarya Sistemleri: Yatırıma Değer mi?',
            excerpt: 'Ev tipi enerji depolama sistemlerinin maliyet-fayda analizi. Tesla Powerwall ve alternatiflerin karşılaştırması.',
            date: '20 Aralık 2025',
        },
        {
            id: 8,
            category: 'efficiency',
            image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600',
            title: 'Akıllı Ev Sistemleri ile Enerji Tasarrufu',
            excerpt: 'IoT cihazları ve akıllı ev sistemleri kullanarak enerji tüketiminizi nasıl optimize edebilirsiniz?',
            date: '15 Aralık 2025',
        },
        {
            id: 9,
            category: 'news',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
            title: 'Yeni Teşvik Paketi: Güneş Enerjisi Yatırımcıları İçin Fırsatlar',
            excerpt: '2026 yılı itibariyle yürürlüğe giren yeni teşvik paketi ile güneş enerjisi yatırımlarında sağlanan avantajlar.',
            date: '10 Aralık 2025',
        },
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="blog-hero-overlay"></div>
                <div className="blog-hero-content">
                    <h1>Blog & Haberler</h1>
                    <p>Enerji sektöründeki son gelişmeler, ipuçları ve rehberler</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Blog</span>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="blog-content-section">
                <div className="container">
                    {/* Search and Filter */}
                    <div className="blog-filters">
                        <div className="search-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Yazı ara..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="category-filter">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="blog-grid">
                            {filteredPosts.map(post => (
                                <BlogCard
                                    key={post.id}
                                    image={post.image}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    date={post.date}
                                    category={categories.find(c => c.id === post.category)?.name}
                                    link={`/blog/${post.id}`}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <h3>Sonuç Bulunamadı</h3>
                            <p>Arama kriterlerinize uygun yazı bulunamadı. Lütfen farklı bir arama deneyin.</p>
                        </div>
                    )}

                    {/* Newsletter */}
                    <div className="newsletter-section">
                        <div className="newsletter-content">
                            <h2>Bültenimize Abone Olun</h2>
                            <p>Enerji sektöründeki son gelişmeleri ve özel içeriklerimizi e-posta ile alın.</p>
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="E-posta adresiniz" required />
                                <button type="submit" className="btn btn-accent">Abone Ol</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
