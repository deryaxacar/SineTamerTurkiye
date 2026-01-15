import { useParams, Link } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = () => {
    const { id } = useParams();

    // Blog verileri
    const blogPosts = [
        {
            id: 1,
            category: 'Kategorilenmemiş',
            image: 'https://www.ecsintl.com/wp-content/uploads/2023/12/5500ECS.jpg',
            title: 'Kategorilenmemiş',
            excerpt: 'Tesisinizin çalışmasını sürdürün, KPI larınızı koruyun ve IEEE 1668 uyumluluğunda bir adım önde olun. Beklenmedik kesintilerin %68,9 u buradan başlar.Hazır mısınız? Üretim durduğunda, baskı anında başlar.Operatörler telaşlanır, süpervizörler gösterge panellerini kontrol eder ve yönetim her seferinde aynı soruyu sorar: Tekrar çalışmaya başlamamız ne kadar sürer? Göz önünde saklanan şeyler genellikle plansız kesintilerin bir numaralı nedenidir.',
            date: '10 Eylül 2025',
            author: 'Jeff Edwards',
            content: `
                <p>Tesisinizin sorunsuz çalışmasını sağlayın, performans göstergelerinizi koruyun ve
IEEE 1668 uyumluluğunun önünde kalın.</p>
                
                <figure class="article-image">
                    <img src="https://www.ecsintl.com/wp-content/uploads/2023/12/5500ECS.jpg" alt="Çatı üzerinde güneş panelleri" />
                </figure>
                
                <h2>Beklenmedik arıza sürelerinin %68,9'u buradan başlıyor
. Hazır mısınız?</h2>
                <p>Üretim durduğunda, baskı hemen başlar.
Operatörler telaşlanır, süpervizörler gösterge panellerini kontrol eder ve
yönetim her seferinde aynı soruyu sorar: "
Tekrar çalışmaya başlamamız ne kadar sürer?" Göz önünde saklanan
nedenler genellikle planlanmamış duruşların bir numaralı nedenidir.
Son sektör verilerine göre, beklenmedik
endüstriyel duruşların %68,9'u mekanik arızalar veya operatör hataları değil,
gerilim düşüşü olayları tarafından tetiklenmektedir.</p>

                <p style="margin-top: 28px;">
                    <a href="https://www.ecsintl.com/wp-content/uploads/2025/09/August-2025-English.pdf" class="read-more-link">Devamını Oku</a>
                </p>
                
            `
        },
        {
            id: 2,
            category: 'SPD',
            image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200',
            title: 'SPD Montaj',
            excerpt: 'Rüzgar enerjisi sektöründeki son gelişmeler ve 2026 yılında bizi bekleyen yenilikler.',
            date: '8 Ocak 2026',
            author: 'Jeff Edwards',
            content: `
                <p>Kesinti Süresi Azaltma | Güç Kalitesi | Aşırı Gerilim Koruması</p>
                <h2>Doğru SPD Montajı</h2>
                <p>Kablo uzunluğu ve montaj uygulamaları , özellikle kademeli mimaride , aşırı gerilim koruma performansının görünmez kahramanları (veya sessiz sabotajcıları) dır . En gelişmiş frekans azaltıcı aşırı gerilim koruyucularının bile performansı, montaj hassasiyetle yapılmazsa ciddi şekilde tehlikeye girebilir.</p>
                
                <p style="margin-top: 28px;">
                    <a href="https://www.ecsintl.com/wp-content/uploads/2025/06/ECS-Lead-Length-and-Installation-2025.pdf" class="read-more-link">Devamını Oku</a>
                </p>
            `
        },
        {
            id: 3,
            category: 'Harmonik',
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1200',
            title: 'Harmonik',
            excerpt: 'Harmonik',
            date: '12 Haziran 2025',
            author: 'Jeff Edwards',
            content: `  
                <h2>Yanlış Sıfır Geçişleri Nedir?</h2>
                <p>Yanlış sıfır geçişleri, kontrolörün bir sıfır geçiş olayı algıladığını düşündüğü, ancak aslında gerçek bir sıfır geçişine değil, geçici veya harmonik bozulmaya tepki verdiği durumlardır.</p>

                <p>Kelepçeleme ile frekans zayıflama dalgalanma bastırma arasındaki farkları göz önünde bulundurduğumuzda, yanlış sıfır geçişleri, temel dalgalanma bastırmanın çarpıcı bir şekilde başarısız olduğu ve yüksek performanslı dalga formu izlemenin değerini kanıtladığı mükemmel bir örnek haline gelir. Makalenin tamamını okumak için tıklayın!</p>
                
            `
        },
        {
            id: 4,
            category: 'Harmonik',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200',
            title: 'Harmonik',
            excerpt: 'Ama Gerçekten Öyle mi?',
            date: '2 Ocak 2026',
            author: 'bricar77',
            content: `
                <h2>Harmonikleriniz var mı?</h2>
                <p>Ama Gerçekten Öyle mi?</p>
                
                <figure class="article-image">
                    <div class="video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/TdKHF4Qilrw"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </figure>

                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },

        {
            id: 5,
            category: 'Güneş Paneli',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200',
            title: 'Güneş panelleriniz var mı?',
            excerpt: 'Güneş panelleriniz var mı?',
            date: '23 Ağustos 2022',
            author: 'bricar77',
            content: `
                <h2>Güneş panelleriniz var mı?</h2>
                <p>Bu haftanın Teknoloji Konusu…</p>
                
                <figure class="article-image">
                    <div class="video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/VY73sum-Vqg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </figure>

                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },
        {
            id: 6,
            category: 'Kategorilenmemiş',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200',
            title: 'Bir tane yeterli mi?',
            excerpt: 'Kategorilenmemiş',
            date: '9 Ağustos 2022',
            author: 'bricar77',
            content: `
                <h2>Bir tane yeterli mi?</h2>
                <p>Ana panelde sadece bir SPD'ye ihtiyacım var... değil mi? İzleyin ve görün...</p>
                
                <figure class="article-image">
                    <div class="video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/iYQbjIG29xg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </figure>

                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },
        {
            id: 7,
            category: 'Asansör',
            image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200',
            title: 'Asansörlerin aşırı gerilim korumasına ihtiyacı var mı?',
            excerpt: '',
            date: '16 Mayıs 2022',
            author: 'bricar77',
            content: `
                <h2>Asansörlerin aşırı gerilim korumasına ihtiyacı var mı?</h2>
                <p>Genel kanı evet, haklılar! Can güvenliği ve hizmet sürekliliği önemliyse, bu Teknoloji Konusuna göz atın!</p>
                
                <figure class="article-image">
                    <div class="video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/nmcNuGU4j6E"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </figure>

                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },
        {
            id: 8,
            category: 'SPD',
            image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200',
            title: 'SPD lere nerede ihtiyacım var?',
            excerpt: '',
            date: '11 Mart 2022',
            author: 'İnfo ECS',
            content: `
                <h2>SPD'lere nerede ihtiyacım var?</h2>
                <figure class="article-image">
                    <div class="video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/i80AMgvWhMI"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </figure>

                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },
        {
            id: 9,
            category: '',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200',
            title: 'UPS cihazının boyutu nasıl belirlenir?',
            excerpt: '',
            date: '',
            author: '',
            content: `
                <h2>UPS cihazının boyutu nasıl belirlenir?</h2>
                
                <figure class="article-image">
                    <div class="video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/i80AMgvWhMI?start=4"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </figure>

                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        },
        {
            id: 10,
            category: '',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200',
            title: 'Doğru SPD yi seçmek mi?',
            excerpt: '',
            date: '',
            author: '',
            content: `
                <h2>Doğru SPD yi seçmek mi?</h2>
                <p>Tesisiniz için en iyi veya doğru SPD'yi (Ateş Basınçlı Dezenfeksiyon Cihazı) seçmek oldukça kafa karıştırıcı olabilir. Daha fazla bilgi için bu Teknik Konuya göz atın.</p>
                
                <figure class="article-image">
                    <div class="video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/epTfzDsSnQk?start=1"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </figure>

                <p style="margin-top: 28px;">
                    <a href="https://www.youtube.com/c/sinetamer" class="read-more-link" target="_blank" rel="noopener noreferrer">Daha Fazla içerik</a>
                </p>
            `
        }
    ];

    const post = blogPosts.find(p => p.id === parseInt(id));

    // İlgili yazılar
    const relatedPosts = blogPosts
        .filter(p => p.id !== parseInt(id) && p.category === post?.category)
        .slice(0, 3);

    if (!post) {
        return (
            <div className="blog-detail-page">
                <div className="container">
                    <div className="not-found">
                        <h2>Yazı Bulunamadı</h2>
                        <p>Aradığınız blog yazısı mevcut değil.</p>
                        <Link to="/daha-fazlasi/blog" className="btn btn-primary">Blog'a Dön</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-detail-page">
            {/* Hero Section */}
            <section className="blog-detail-hero" style={{ backgroundImage: `url(${post.image})` }}>
                <div className="blog-detail-hero-overlay"></div>
                <div className="blog-detail-hero-content">
                    <span className="blog-detail-category">{post.category}</span>
                    <h1>{post.title}</h1>
                    <div className="blog-detail-meta">
                        <span className="meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="7" r="4" />
                                <path d="M5.5 21a7.5 7.5 0 0115 0" />
                            </svg>
                            {post.author}
                        </span>
                        <span className="meta-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            {post.date}
                        </span>
                    </div>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link to="/daha-fazlasi/blog">Blog</Link>
                        <span>/</span>
                        <span>{post.title.substring(0, 30)}...</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="blog-detail-content">
                <div className="container">
                    <article className="blog-article">
                        <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />


                        {/* Share Section */}
                        <div className="share-section">
                            <h4>Bu Yazıyı Paylaşın</h4>
                            <div className="share-buttons">
                                <button className="share-btn twitter">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </button>
                                <button className="share-btn facebook">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </button>
                                <button className="share-btn linkedin">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <button className="share-btn copy">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="related-posts">
                            <h3>İlgili Yazılar</h3>
                            <div className="related-posts-grid">
                                {relatedPosts.map(related => (
                                    <Link to={`/blog/${related.id}`} className="related-post-card" key={related.id}>
                                        <div className="related-post-image">
                                            <img src={related.image} alt={related.title} />
                                        </div>
                                        <div className="related-post-content">
                                            <span className="related-post-date">{related.date}</span>
                                            <h4>{related.title}</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Back to Blog */}
                    <div className="back-to-blog">
                        <Link to="/daha-fazlasi/blog" className="btn btn-outline-primary">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Tüm Yazılara Dön
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
