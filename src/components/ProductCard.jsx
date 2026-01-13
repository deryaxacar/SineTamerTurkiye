import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ image, title, description, category, link }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={title} />
                <span className="product-category">{category}</span>
            </div>
            <div className="product-content">
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <Link to={link || '/urunler'} className="product-link">
                    Detayları Gör
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
