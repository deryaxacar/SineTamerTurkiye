import { Helmet } from 'react-helmet-async';

/**
 * Professional SEO Component - Kapsamlı meta taglar ve yapılandırılmış veri
 * 
 * @param {string} title - Sayfa başlığı
 * @param {string} description - Sayfa açıklaması (max 160 karakter önerilir)
 * @param {string} keywords - Anahtar kelimeler (virgülle ayrılmış)
 * @param {string} image - Open Graph görseli URL'i
 * @param {string} url - Canonical URL
 * @param {string} type - Open Graph tipi (website, article, product vb.)
 * @param {object} article - Blog yazıları için ek bilgiler
 * @param {object} product - Ürün sayfaları için ek bilgiler
 * @param {array} breadcrumbs - Breadcrumb navigasyonu için [{name, url}]
 * @param {object} structuredData - Özel JSON-LD yapılandırılmış veri
 * @param {boolean} noIndex - Arama motorlarından gizle
 */
const SEO = ({
    title = 'SineTamer Türkiye',
    description = 'Aşırı gerilim koruma ve güç kalitesi çözümlerinde Türkiye\'nin lider markası. Endüstriyel ve ticari tesisler için profesyonel SPD çözümleri.',
    keywords = 'aşırı gerilim koruma, SPD, surge protection, güç kalitesi, SineTamer, TVSS, yıldırım koruma, endüstriyel koruma',
    image = '/og-image.jpg',
    url = '',
    type = 'website',
    article = null,
    product = null,
    breadcrumbs = null,
    structuredData = null,
    noIndex = false
}) => {
    const siteUrl = 'https://sinetamer.com.tr';
    const siteName = 'SineTamer Türkiye';
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;
    const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

    // WebSite şeması (Sitelinks arama kutusu için)
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        description: 'Aşırı gerilim koruma ve güç kalitesi çözümleri',
        inLanguage: 'tr-TR',
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteUrl}/arama?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    };

    // Organizasyon şeması
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
            width: 200,
            height: 60
        },
        description: 'Aşırı gerilim koruma ve güç kalitesi çözümlerinde Türkiye\'nin lider markası',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'TR',
            addressLocality: 'İstanbul'
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+90-XXX-XXX-XXXX',
                contactType: 'customer service',
                areaServed: 'TR',
                availableLanguage: ['Turkish', 'English']
            },
            {
                '@type': 'ContactPoint',
                telephone: '+90-XXX-XXX-XXXX',
                contactType: 'sales',
                areaServed: 'TR',
                availableLanguage: ['Turkish', 'English']
            }
        ],
        sameAs: [
            'https://www.youtube.com/c/sinetamer',
            'https://www.linkedin.com/company/sinetamer',
            'https://twitter.com/sinetamer'
        ]
    };

    // Breadcrumb şeması
    const breadcrumbSchema = breadcrumbs ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url ? `${siteUrl}${item.url}` : undefined
        }))
    } : null;

    // Blog yazısı şeması
    const articleSchema = article ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${fullUrl}#article`,
        headline: title,
        description: description,
        image: {
            '@type': 'ImageObject',
            url: fullImage
        },
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
            '@type': 'Person',
            name: article.author || 'SineTamer'
        },
        publisher: {
            '@type': 'Organization',
            name: siteName,
            logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/logo.png`
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': fullUrl
        },
        inLanguage: 'tr-TR'
    } : null;

    // Ürün şeması
    const productSchema = product ? {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: title,
        description: description,
        image: fullImage,
        brand: {
            '@type': 'Brand',
            name: 'SineTamer'
        },
        manufacturer: {
            '@type': 'Organization',
            name: 'SineTamer'
        },
        category: product.category || 'Aşırı Gerilim Koruma Cihazları'
    } : null;

    // Tüm şemaları birleştir
    const allSchemas = [
        websiteSchema,
        organizationSchema,
        breadcrumbSchema,
        articleSchema,
        productSchema,
        structuredData
    ].filter(Boolean);

    return (
        <Helmet defer={false}>
            {/* Temel Meta Taglar */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Robots */}
            {noIndex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            )}

            {/* Dil ve Bölge */}
            <meta httpEquiv="content-language" content="tr" />
            <meta name="language" content="Turkish" />
            <meta name="geo.region" content="TR" />
            <meta name="geo.placename" content="Türkiye" />

            {/* Yazar ve Yayıncı */}
            <meta name="author" content={siteName} />
            <meta name="publisher" content={siteName} />
            <meta name="copyright" content={`© ${new Date().getFullYear()} ${siteName}`} />

            {/* Tema Rengi */}
            <meta name="theme-color" content="#1a2f6e" />
            <meta name="msapplication-TileColor" content="#1a2f6e" />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="tr_TR" />
            <meta property="og:site_name" content={siteName} />

            {/* Article etiketleri (blog yazıları için) */}
            {article && (
                <>
                    <meta property="article:published_time" content={article.datePublished} />
                    <meta property="article:modified_time" content={article.dateModified || article.datePublished} />
                    <meta property="article:author" content={article.author || siteName} />
                    <meta property="article:section" content={article.category || 'Teknoloji'} />
                </>
            )}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@sinetamer" />
            <meta name="twitter:creator" content="@sinetamer" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
            <meta name="twitter:image:alt" content={title} />

            {/* Apple/iOS */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content={siteName} />

            {/* Yapılandırılmış Veri (JSON-LD) */}
            {allSchemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;
