import { Link } from 'react-router-dom';
import Hero from '../../../components/Hero';
import '../SolutionCategory.css';

const PowerQualityProblems = () => {
    const problems = [
        {
            description: 'Plant Services Magazine dergisi, kaybedilen üretim saatlerinin %35 inin geçici voltaj sorunlarına atfedilebileceğini bildirdi.',
        },
        {
            description: 'TRW bilgisayar hizmetleri firması, hizmet çağrılarının %40 ından fazlasının NTF, güçle ilgili sorunlar olduğunu keşfetti.',

        },
        {
            description: 'Business Week dergisi, elektrikle ilgili sorunların yıllık 26 milyar dolarlık bir sorun olduğunu belirtiyor.',

        },
        {
            description: 'Electrical Contractor dergisi, kirli güç sorunlarının %70\'inden fazlasının yakındaki paneller, konumlar veya binalardaki kablolama, topraklama ve ekipmanlarla ilgili olabileceğini belirtiyor.',

        },
        {
            description: 'Mid America Banner, kaliteli dalgalanma önleyici cihazların kullanılmasıyla fotokopi makinesi servis çağrılarının %29\'unun ortadan kaldırılabileceğini ve kaldırıldığını belirten bir araştırma yayınladı.',
        },
        {
            description: 'Elektrik hizmetleri sektörü, yıldırım olayları nedeniyle hasar gören ekipmanlar ve gelir kayıpları nedeniyle yılda 1 milyar doların üzerinde maliyetle karşı karşıya kalmaktadır.',
        },
        {
            description: 'Yıldırım kaynaklı kesintiler telekomünikasyon sektörüne yılda 100 milyon dolar zarara mal oluyor.',
        },
        {
            description: 'IBM\' in yakın zamanda yaptığı bir araştırma, tipik bir bilgisayarın ayda 120\'den fazla güç sorununa maruz kaldığını ortaya koydu.',
        },
        {
            description: 'Elektrik şirketleri, daha temiz ve daha temiz enerji sağlamaları için baskı altındadır, ancak gerçekte tüm elektrik kesintilerinin %60-80\'i tesisin içinde meydana gelmektedir.Elektrik şirketleri daha kirli enerji gönderiyor değil, tesis içindeki ekipmanlar son derece hassas hale gelmiş ve en ufak elektrik dalgalanmalarına bile maruz kalmaktadır.Bu durum, çoğu zaman veri bozulmalarına, uzun vadede biriken hasarlara ve ekipman arızalarına neden olmaktadır.',
        },
        {
            description: 'Küresel ekonomide üretkenliği ve rekabet gücünü artırmak için şirketler bilgisayarlar, otomatik üretim sistemleri, dijital telekomünikasyon ağları, LAN ve WAN\'lara yatırım yapmak zorundadır.Şirketler, bu yatırımların güvenilir performansı ve uzun ömürlülüğüne bağlıdır.Ancak, bu ekipmanlar ne sıklıkla prizin arkasında neler olup bittiğini düşünmeden doğrudan “sokak” elektriğine bağlanmaktadır?',
        },
        {
            description: 'Güç kalitesi ürünleri endüstrisinin yıllık %20\'ye yakın bir oranda büyüyor olması şaşırtıcı mı? İhtiyaç hiç bu kadar büyük olmamıştı, farkındalık sürekli artıyor ve yine de ofislerinde, fabrikalarında, laboratuvarlarında veya hastanelerinde elektriğin kar kadar temiz olduğu gibi yanlış bir varsayımla yaşayan küçük gruplar hala var.',
        },
        {
            description: 'Kanıtlar bir karar gerektiriyor, bu malzemeden tek bir mantıklı sonuç çıkarılabilir. Gerçekten de dikkate alınması gereken bir güç kalitesi sorunu var, bu sorun tüm elektrikli ve elektronik ekipmanları olumsuz etkiliyor ve bu sorunu ihmal etmek şirketinizin kârına binlerce dolarlık gereksiz masraflar ekleyebilir ve ekleyecektir.',
        },
        {
            description: 'Interpose Inc. ve Microsoft tarafından yakın zamanda hazırlanan bir çalışma, Windows tabanlı sistemlerin Toplam İşletim Maliyetini analiz etmektedir. Çalışmada, işletim maliyetleri Donanım ve Yazılım, Yönetim, Destek, Kesinti Süresi ve diğer birkaç kalem olarak ayrıştırılmıştır. Araştırmaya göre, masaüstü bilgisayarların TCM\
            \'si yıllık yaklaşık 7250 dolar civarındadır! En endişe verici rakam, TCO\'nun %20\'sinin kesinti süresine ayrılmasıdır! Bu maliyetin % 50\'sini güçle ilgili olarak tahmin edersek, ağa bağlı bir PC\'nin yıllık işletim maliyetinin yaklaşık 725 doları yetersiz güç kaynaklarına atfedilebilir.',
        },
    ];

    const breadcrumbItems = [
        { label: 'Ana Sayfa', path: '/' },
        { label: 'Çözümler' },
        { label: 'Güç Kalitesi Sorunları' }
    ];

    return (
        <div className="solution-category-page">
            <Hero
                title="Yaygın Güç Kalitesi Sorunları ve Yanlış Bilinenler"
                backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
                breadcrumbItems={breadcrumbItems}
            />

            {/* Split Info Layout */}
            <section className="split-layout-section">
                <div className="split-top">
                    <div className="split-main-text">
                        <p>
                            Modern endüstriyel ve ticari tesislerde kullanılan dijital kontrol sistemleri, robotik üniteler ve IT altyapıları, elektrik şebekesindeki en küçük anomalilere karşı bile son derece hassastır.
                        </p>
                        <p>
                            Yaygın inanışın aksine, ekipman hasarları ve duruşlarının büyük çoğunluğu tam kesintilerden değil, mikrosaniye bazlı olaylardan kaynaklanmaktadır. Bu sorunlar zamanla birikerek sistem izolasyonunu zayıflatır ve beklenmedik arızalara yol açar.
                        </p>
                    </div>
                    <div className="split-side-image">
                        <img src="https://www.ecsintl.com/wp-content/uploads/2023/12/10-05-1-1024x538.jpg" alt="Power Monitoring" />
                    </div>

                </div>


                <div className="split-bottom">
                    <h3>Aşağıdaki gerçek bilgileri, belirli bir sıraya bağlı kalmaksızın, “Temiz Elektrik Enerjisi” şehir efsanesini bir kez ve sonsuza kadar ortadan kaldırmak amacıyla sunuyoruz.</h3>
                    <div className="problem-list">
                        {problems.map((prob, idx) => (
                            <div className="problem-item" key={idx}>
                                <p>{prob.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PowerQualityProblems;
