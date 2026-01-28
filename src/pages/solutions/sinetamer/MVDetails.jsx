import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import SEO from '../../../components/SEO';
import Footer from '../../../components/Footer';
import MediumVoltageDetails from '../../../components/solutions/MediumVoltageDetails';
import '../SolutionCategory.css';

const MVDetails = () => {
    const pdfs = [
        { title: 'ST-CMV-AC', size: '134 KB', path: '/mvdetails/st-cmv-ac.pdf' },
        { title: 'ST-SILA MV-AC', size: '73,8 KB', path: '/mvdetails/st-sila-mv-ac.pdf' },
        { title: 'ST-SHLA MV-AC', size: '73,8 KB', path: '/mvdetails/st-shla-mv-ac.pdf' },
        { title: 'ST-MV-AC7200', size: '71,5 KB', path: '/mvdetails/st-mv-ac7200.pdf' },
        { title: 'ST-LSEA MV-AC', size: '75,2 KB', path: '/mvdetails/st-lsea-mv-ac.pdf' },
    ];

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler', path: '/#solutions' },
        { label: 'MV Detayları' }
    ];

    return (
        <div className="solution-category-page">
            <SEO
                title="Orta Gerilim Üniteleri Detayları"
                description="SineTamer Orta Gerilim (MV) üniteleri teknik özellikleri, PDF broşürleri ve detaylı koruma verileri."
                url="/cozumler/sinetamer/mv-detaylari"
                breadcrumbs={[
                    { name: 'Ana Sayfa', url: '/' },
                    { name: 'Çözümler', url: '/#solutions' },
                    { name: 'Orta Gerilim Üniteleri', url: '/cozumler/sinetamer/orta-gerilim-uniteleri' },
                    { name: 'MV Detayları' }
                ]}
            />
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
