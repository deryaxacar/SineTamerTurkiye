import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const { pathname, hash, key } = useLocation();

    useEffect(() => {
        // If there is no hash, scroll to top
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            // Wait for potential content loading
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [pathname, hash, key]); // Trigger on any location change

    return null;
};

export default ScrollToHash;
