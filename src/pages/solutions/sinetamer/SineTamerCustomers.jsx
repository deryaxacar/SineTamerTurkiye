import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const SineTamerCustomers = () => {
    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'SineTamer Müşterileri' }
    ];

    const customers = [
        // Asya & Pasifik
        { name: 'Telekom Malaysia', region: 'Asya & Pasifik' },
        { name: 'PROTON - Malezya Ulusal Otomobili', region: 'Asya & Pasifik' },
        { name: 'Guinness Anchor Berhad', region: 'Asya & Pasifik' },
        { name: 'DOLE Filipinler', region: 'Asya & Pasifik' },
        { name: 'METEX Çelik A.Ş.', region: 'Asya & Pasifik' },
        { name: 'Toyota Otomobil Parçaları - Filipinler', region: 'Asya & Pasifik' },
        { name: 'DelMonte', region: 'Asya & Pasifik' },
        { name: 'SINOPEC Qi Lu Co., Ltd', region: 'Asya & Pasifik' },
        { name: 'Tayland Elektrik Üretim Kurumu', region: 'Asya & Pasifik' },
        { name: 'PTT Grubu Tayland', region: 'Asya & Pasifik' },
        // Afrika
        { name: 'BMW Güney Afrika', region: 'Afrika' },
        { name: 'Motor Kontrol Otomasyonu', region: 'Afrika' },
        { name: 'Anglo-Amerikan Güney Afrika', region: 'Afrika' },
        { name: '7 UP - Nijerya', region: 'Afrika' },
        { name: 'Coca Cola Güney Afrika', region: 'Afrika' },
        { name: 'SAB Miller Tanzanya', region: 'Afrika' },
        { name: 'Nijerya Bira Fabrikaları', region: 'Afrika' },
        { name: 'Pepsi Kenya', region: 'Afrika' },
        { name: 'Coca Cola Kenya', region: 'Afrika' },
        // Latin Amerika
        { name: 'Anglo-Amerikan - Şili', region: 'Latin Amerika' },
        { name: 'Escondida Madeni / BHP Billiton Şili', region: 'Latin Amerika' },
        { name: 'Collahuasi Madeni - Şili', region: 'Latin Amerika' },
        { name: 'Schlumberger - Kolombiya', region: 'Latin Amerika' },
        { name: 'Claro', region: 'Latin Amerika' },
        { name: 'Ekopetrol', region: 'Latin Amerika' },
        { name: 'Nextel', region: 'Latin Amerika' },
        { name: 'Cerveza Cristal - Şili', region: 'Latin Amerika' },
        { name: 'SAB Miller Ekvador', region: 'Latin Amerika' },
        { name: 'Thyssen-Krupp', region: 'Latin Amerika' },
        { name: 'Panama Kanalı', region: 'Latin Amerika' },
        // Brezilya
        { name: 'Metalnox Industria Metalurgica LTDA', region: 'Brezilya' },
        { name: 'WEG Brezilya / Güney Afrika', region: 'Brezilya' },
        { name: 'Beto Carrero Dünyası', region: 'Brezilya' },
        { name: 'FEMSA Coca Cola', region: 'Brezilya' },
        { name: 'USIMINAS', region: 'Brezilya' },
        { name: 'Netzch do BRASIL Indus.', region: 'Brezilya' },
        { name: 'Ordemilk LTDA', region: 'Brezilya' },
        { name: 'Santo Antonio Hastanesi LTDA', region: 'Brezilya' },
        { name: 'Primo Tedesco S/A', region: 'Brezilya' },
        { name: 'WHB FUNDIÇÃO', region: 'Brezilya' },
        { name: 'Frigorifico Rivelli', region: 'Brezilya' },
        { name: 'UNICO A.Ş.', region: 'Brezilya' },
        // Petrol & Enerji
        { name: 'Chevron - Venezuela', region: 'Petrol & Enerji' },
        { name: 'Petrobras Kolombiya/Brezilya', region: 'Petrol & Enerji' },
        { name: 'PDVSA Venezuela', region: 'Petrol & Enerji' },
        { name: 'Baker Hughes - Kolombiya/Venezuela', region: 'Petrol & Enerji' }
    ];

    const regions = ['Asya & Pasifik', 'Afrika', 'Latin Amerika', 'Brezilya', 'Petrol & Enerji'];

    const regionIcons = {
        'Asya & Pasifik': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        'Afrika': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        'Latin Amerika': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        'Brezilya': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
        'Petrol & Enerji': (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
        )
    };

    return (
        <div className="solution-category-page">
            <Hero
                title="SineTamer Müşterileri"
                description="Dünya genelinde güvenilir güç koruma çözümleri ile hizmet verdiğimiz prestijli müşterilerimiz."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            <section className="customers-section">
                <div className="customers-container">
                    <div className="customers-header">
                        <h2>Dünya Çapında Güvenilen Çözümler</h2>
                        <p>SineTamer Müşterilerimizden bazıları</p>
                    </div>

                    {regions.map((region) => (
                        <div key={region} className="region-block">
                            <div className="region-header">
                                <div className="region-icon">
                                    {regionIcons[region]}
                                </div>
                                <h3>{region}</h3>
                            </div>
                            <div className="customers-grid">
                                {customers
                                    .filter((customer) => customer.region === region)
                                    .map((customer, index) => (
                                        <div key={index} className="customer-card">
                                            <div className="customer-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                    <polyline points="9 22 9 12 15 12 15 22" />
                                                </svg>
                                            </div>
                                            <span className="customer-name">{customer.name}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SineTamerCustomers;
