import { Link } from 'react-router-dom';
import './SolutionCategory.css';

const Eaton9Series = () => {
    return (
        <div className="solution-category-page">
            <section className="category-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)' }}>
                <div className="category-hero-overlay" />
                <div className="category-hero-content">
                    <h1>Eaton 9 Serisi UPS</h1>
                    <div className="breadcrumb">
                        <Link to="/">Ana Sayfa</Link>
                        <span>/</span>
                        <Link to="/cozumler">Çözümler</Link>
                        <span>/</span>
                        <Link to="/cozumler/ups-cozumleri">UPS Çözümleri</Link>
                        <span>/</span>
                        <Link to="/cozumler/ups-cozumleri/eaton-powerware-ups">Eaton / Powerware</Link>
                        <span>/</span>
                        <span>9 Serisi</span>
                    </div>
                </div>
            </section>

            <section className="category-features">
                <div className="container" style={{ padding: '4rem 2rem' }}>
                    <div className="product-placeholder" style={{ border: '2px dashed #ccc', padding: '5rem', borderRadius: '12px', textAlign: 'center' }}>
                        <h2>Eaton 9 Serisi Ürün İçeriği</h2>
                        <p style={{ color: '#666', marginTop: '1rem' }}>Ürün detaylarını ve teknik özellikleri buraya ekleyebilirsiniz.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Eaton9Series;
