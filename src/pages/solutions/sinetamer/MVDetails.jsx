import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import Footer from '../../../components/Footer';
import MediumVoltageDetails from '../../../components/solutions/MediumVoltageDetails';
import '../SolutionCategory.css';

const MVDetails = () => {
    const pdfs = [
        { title: 'ST-CMV-AC', size: '134 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/st-cmv-acrevaug2014CC88D50383FC.pdf' },
        { title: 'ST-SILA MV-AC', size: '73,8 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/ST-SILAMV-D1F.pdf' },
        { title: 'ST-SHLA MV-AC', size: '73,8 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/ST-SHLAMV-D1F.pdf' },
        { title: 'ST-MV-AC7200', size: '71,5 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/st-mv-ac7200-rev-date-09-19-2008.pdf' },
        { title: 'ST-LSEA MV-AC', size: '75,2 KB', path: 'https://www.ecsintl.com/wp-content/uploads/2017/12/ST-LSEA-MV_RevAug2014.pdf' },
    ];

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'MV Detayları' }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Orta Gerilim Üniteleri Detayları"
                description="SineTamer Orta Gerilim Üniteleri Ve Detaylı Teknik Dokümantasyonlar"
                backgroundImage="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            <MediumVoltageDetails pdfs={pdfs} />
        </div>
    );
};

export default MVDetails;
