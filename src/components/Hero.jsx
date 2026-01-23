import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Reusable Hero component for various pages.
 * 
 * @param {Object} props
 * @param {string} props.title - The main heading of the hero section.
 * @param {string} [props.description] - The sub-heading or description text.
 * @param {string} props.backgroundImage - The URL of the background image.
 * @param {Array<{label: string, path?: string}>} props.breadcrumbItems - List of breadcrumb items.
 */
const Hero = ({ title, description, backgroundImage, breadcrumbItems }) => {
    return (
        <section className="category-hero">
            <img
                src={backgroundImage}
                alt=""
                className="hero-bg-image"
                loading="lazy"
            />
            <div className="category-hero-overlay"></div>
            <div className="category-hero-content">
                <h1>{title}</h1>
                {description && <p>{description}</p>}

                <div className="breadcrumb">
                    {breadcrumbItems.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.path ? (
                                <Link to={item.path}>{item.label}</Link>
                            ) : (
                                <span>{item.label}</span>
                            )}
                            {index < breadcrumbItems.length - 1 && <span>/</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    backgroundImage: PropTypes.string.isRequired,
    breadcrumbItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            path: PropTypes.string
        })
    ).isRequired
};

export default Hero;
