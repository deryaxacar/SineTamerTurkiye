/**
 * Social Media Share Utilities
 */

/**
 * Share URL on Twitter
 * @param {string} url - URL to share
 * @param {string} text - Optional text to include
 */
export const shareOnTwitter = (url, text = '') => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
};

/**
 * Share URL on Facebook
 * @param {string} url - URL to share
 */
export const shareOnFacebook = (url) => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
};

/**
 * Share URL on LinkedIn
 * @param {string} url - URL to share
 */
export const shareOnLinkedIn = (url) => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
};
