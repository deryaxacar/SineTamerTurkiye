export const downloadFile = (url) => {
    if (!url || url === '#' || url.startsWith('http')) {
        if (url && url.startsWith('http')) {
            window.open(url, '_blank');
        } else if (url === '#') {
            console.warn('Download URL is not set.');
        }
        return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
