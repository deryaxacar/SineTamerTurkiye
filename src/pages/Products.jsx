import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Tümü' },
        { id: 'solar', name: 'Güneş Panelleri' },
        { id: 'inverter', name: 'İnverterler' },
        { id: 'battery', name: 'Bataryalar' },
        { id: 'accessories', name: 'Aksesuarlar' },
    ];

    const products = [
        {
            id: 1,
            category: 'solar',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
            title: 'Monokristal Güneş Paneli 400W',
            description: 'Yüksek verimli monokristal hücreler ile maksimum enerji üretimi.',
            price: '₺4.500',
        },
        {
            id: 2,
            category: 'solar',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600',
            title: 'Polikristal Güneş Paneli 330W',
            description: 'Uygun maliyetli, güvenilir performans sunan panel seçeneği.',
            price: '₺3.200',
        },
        {
            id: 3,
            category: 'solar',
            image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600',
            title: 'Bifacial Güneş Paneli 450W',
            description: 'Çift taraflı enerji toplama ile %30 daha fazla verim.',
            price: '₺6.800',
        },
        {
            id: 4,
            category: 'inverter',
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
            title: 'Hibrit İnverter 5kW',
            description: 'Şebeke bağlantılı ve off-grid kullanım için ideal çözüm.',
            price: '₺18.500',
        },
        {
            id: 5,
            category: 'inverter',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
            title: 'String İnverter 10kW',
            description: 'Ticari sistemler için yüksek kapasiteli inverter.',
            price: '₺32.000',
        },
        {
            id: 6,
            category: 'inverter',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600',
            title: 'Mikro İnverter 300W',
            description: 'Panel bazlı optimizasyon ile maksimum verimlilik.',
            price: '₺2.800',
        },
        {
            id: 7,
            category: 'battery',
            image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600',
            title: 'Lityum Batarya 10kWh',
            description: 'Uzun ömürlü, yüksek kapasiteli enerji depolama çözümü.',
            price: '₺45.000',
        },
        {
            id: 8,
            category: 'battery',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
            title: 'Ev Tipi Batarya 5kWh',
            description: 'Konutlar için kompakt ve verimli depolama sistemi.',
            price: '₺28.000',
        },
        {
            id: 9,
            category: 'accessories',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600',
            title: 'Montaj Sistemi - Çatı',
            description: 'Alüminyum çatı montaj kiti, her türlü çatıya uyumlu.',
            price: '₺1.200',
        },
        {
            id: 10,
            category: 'accessories',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600',
            title: 'Solar Kablo 6mm² (100m)',
            description: 'UV dayanımlı, çift izolasyonlu güneş enerjisi kablosu.',
            price: '₺850',
        },
        {
            id: 11,
            category: 'accessories',
            image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600',
            title: 'MC4 Konnektör Seti',
            description: 'Su geçirmez, hızlı bağlantı konnektörleri.',
            price: '₺350',
        },
        {
            id: 12,
            category: 'accessories',
            image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600',
            title: 'İzleme Sistemi',
            description: 'Mobil uygulamalı uzaktan izleme ve analiz sistemi.',
            price: '₺2.500',
        },
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="products-page">
            {/* Hero Section */}
            <section className="products-hero">
                <div className="products-hero-overlay"></div>
                <div className="products-hero-content">
                    <h1>Ürünlerimiz</h1>
                    <p>Yüksek kaliteli enerji ekipmanları ve aksesuarları</p>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <span>Ürünler</span>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-section">
                <div className="container">
                    {/* Category Filter */}
                    <div className="products-filter">
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

                    {/* Products Grid */}
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div className="product-item" key={product.id}>
                                <ProductCard
                                    image={product.image}
                                    title={product.title}
                                    description={product.description}
                                    category={categories.find(c => c.id === product.category)?.name}
                                    link={`/urunler/${product.id}`}
                                />
                                <div className="product-price">{product.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="products-info">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-card">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3>Garanti</h3>
                            <p>Tüm ürünlerimiz resmi distribütör garantisi altındadır.</p>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                            <h3>Hızlı Teslimat</h3>
                            <p>Türkiye genelinde 3-5 iş günü içinde kapınızda.</p>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72" />
                                </svg>
                            </div>
                            <h3>Teknik Destek</h3>
                            <p>7/24 teknik destek hattımız ile yanınızdayız.</p>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3>Uygun Fiyat</h3>
                            <p>Piyasadaki en rekabetçi fiyatlarla hizmet veriyoruz.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="products-cta">
                <div className="container">
                    <div className="products-cta-content">
                        <h2>Toptan Sipariş mi Vermek İstiyorsunuz?</h2>
                        <p>Kurumsal müşterilerimize özel fiyatlar ve ödeme seçenekleri sunuyoruz.</p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
