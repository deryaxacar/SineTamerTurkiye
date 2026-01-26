import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import './MoreCategory.css';
import '../solutions/SolutionCategory.css';

const BlogPage = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Daha Fazlası', path: '/daha-fazlasi' },
        { label: 'Blog' }
    ];

    const blogPosts = [
        {
            id: 1,
            title: 'Zamanı Durdurun: %68,9luk İş Durdurma Vergisinden Kurtulun',
            excerpt: 'Tesisinizin çalışmasını sürdürün, KPI larınızı koruyun ve IEEE 1668 uyumluluğunda bir adım önde olun. Beklenmedik kesintilerin %68,9 u buradan başlar.Hazır mısınız? Üretim durduğunda, baskı anında başlar.Operatörler telaşlanır, süpervizörler gösterge panellerini kontrol eder ve yönetim her seferinde aynı soruyu sorar: Tekrar çalışmaya başlamamız ne kadar sürer? Göz önünde saklanan şeyler genellikle plansız kesintilerin bir numaralı nedenidir...',
            image: '',
            date: '10 Eylül 2025',
            author: 'Jeff Edwards',
            category: 'Kategorilenmemiş',
        },
        {
            id: 2,
            title: 'Doğru SPD Montajı',
            excerpt: 'Kablo uzunluğu ve montaj uygulamaları, özellikle kademeli mimarilerde, aşırı gerilim koruma performansının görünmez kahramanları (veya sessiz sabotajcıları)dır. En gelişmiş frekans azaltıcı aşırı gerilim koruyucularının bile performansı, montaj hassas bir şekilde yapılmazsa ciddi şekilde tehlikeye girebilir. Makalenin tamamı için… ayrıntılı teknik analizimize göz atın!',
            image: '',
            date: '27 Haziran 2025',
            author: 'Jeff Edwards',
            category: 'SPD',
        },
        {
            id: 3,
            title: 'Yanlış Sıfır Geçişleri Nedir?',
            excerpt: '2030 ve 2050 hedefleri doğrultusunda Türkiye\'nin enerji dönüşüm yol haritası. Güneş, rüzgar ve hidrojen enerjisi yatırımları hakkında güncel gelişmeler...',
            image: '',
            date: '5 Ocak 2026',
            author: 'Jeff Edwards',
            category: 'Harmonik',
        },
        {
            id: 4,
            title: 'Harmonikleriniz Var mı?',
            excerpt: 'Harmonikleriniz Var mı? Daha fazla Teknoloji Konusu için buraya tıklayın!',
            image: '',
            date: '2 Ocak 2026',
            author: 'bricar77',
            category: 'Harmonik',
        },
        {
            id: 5,
            title: 'Güneş panelleriniz var mı?',
            excerpt: 'Bu haftanın Teknoloji Konusu… Daha fazla Teknoloji Konusu için… YouTube Kanalımızı ziyaret edin!',
            image: '',
            date: '23 Ağustos 2022',
            author: 'bricar77',
            category: 'Güneş Paneli',
        },
        {
            id: 6,
            title: 'Bir tane yeterli mi?',
            excerpt: 'Ana panelde sadece bir SPD ye ihtiyacım var... Değil mi? İzleyin ve görün...',
            image: '',
            date: '9 Ağustos 2022',
            author: 'bricar77',
            category: 'Kategorilenmemiş',
        },
        {
            id: 7,
            title: 'Asansörlerin aşırı gerilim korumasına ihtiyacı var mı?',
            excerpt: 'Genel kanı evet, gerekli! Can güvenliği ve hizmet sürekliliği sizin için önemliyse, bu Teknik Konuya göz atın! Daha fazla Teknik Konu için bizi ziyaret edin... Veya bugün bizimle iletişime geçin!',
            image: '',
            date: '16 Mayıs 2022',
            author: 'bricar77',
            category: 'Asansör',
        },
        {
            id: 8,
            title: 'SPD lere nerede ihtiyacım var?',
            excerpt: 'En basit cevap şu: Her yerde aşırı gerilim korumasına ihtiyacınız var! Ama daha detaylı bilgi için bu haftaki Teknoloji Konusunu izleyin! Daha fazla Teknoloji Konusu için... Abone olun!',
            image: '',
            date: '9 Mayıs 2022',
            author: 'bricar77',
            category: 'SPD',
        },
        {
            id: 9,
            title: 'UPS cihazının boyutu nasıl belirlenir?',
            excerpt: 'UPS cihazının boyutu nasıl belirlenir?',
            image: '',
            date: '11 Mart 2022',
            author: 'İnfo ESC',
            category: 'UPS',
        },
        {
            id: 10,
            title: 'Doğru SPD yi seçmek mi?',
            excerpt: 'Tesisiniz için en iyi veya doğru SPD yi(Ateş Basınçlı Dezenfeksiyon Cihazı) seçmek oldukça kafa karıştırıcı olabilir.Daha fazla bilgi için bu Teknik Konuya göz atın.',
            image: '',
            date: '4 Mart 2022',
            author: 'bricar77',
            category: 'SPD',
        }
    ];

    return (
        <div className="more-category-page">
            <Hero
                title="Blog"
                description="Enerji dünyasından haberler, ipuçları ve rehberler"
                backgroundImage="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Blog Grid */}
            <section className="more-content-section">
                <div className="content-container" style={{ maxWidth: '1400px' }}>
                    <div className="content-header">
                        <h2>Son Yazılar</h2>
                        <p>Enerji sektöründeki gelişmeleri takip edin</p>
                    </div>

                    <div className="blog-grid">
                        {blogPosts.map(post => {
                            const hasImage = !!post.image && post.image.trim().length > 0;

                            return (
                                <article className="blog-card" key={post.id}>
                                    {/* Kategori – her zaman sağ üst */}
                                    <span className="blog-category badge-right">
                                        {post.category}
                                    </span>

                                    {/* Image varsa göster */}
                                    {post.image && post.image.trim() !== '' && (
                                        <div className="blog-card-image">
                                            <img src={post.image} alt={post.title} />
                                        </div>
                                    )}

                                    <div className="blog-card-content">
                                        <div className="blog-meta">
                                            <span className="blog-date">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                    <path d="M16 2v4M8 2v4M3 10h18" />
                                                </svg>
                                                {post.date}
                                            </span>
                                        </div>

                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>

                                        <Link to={`/daha-fazlasi/blog/${post.id}`} className="read-more-btn">
                                            Devamını Oku
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Pagination placeholder */}
                    <div className="blog-pagination">
                        <span className="page-info">Sayfa 1 / 5</span>
                        <div className="pagination-buttons">
                            <button className="pagination-btn active">1</button>
                            <button className="pagination-btn">2</button>
                            <button className="pagination-btn">3</button>
                            <button className="pagination-btn">4</button>
                            <button className="pagination-btn">5</button>
                            <button className="pagination-btn next">
                                Sonraki
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
