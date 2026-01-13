import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ image, title, excerpt, date, category, link }) => {
    return (
        <article className="blog-card">
            <div className="blog-image">
                <img src={image} alt={title} />
                <span className="blog-category">{category}</span>
            </div>
            <div className="blog-content">
                <span className="blog-date">{date}</span>
                <h3 className="blog-title">{title}</h3>
                <p className="blog-excerpt">{excerpt}</p>
                <Link to={link || '/blog'} className="blog-link">
                    Devamını Oku
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </article>
    );
};

export default BlogCard;
